'use strict'

/*

Routes:

* GET /:ns
* GET /:ns/:id
* POST /:ns
* PUT /:ns/:id
* DELETE /:ns/:id

Socket.io events:

* To server:
  * subscribe(ns) → you will now receive events for this namespace
  * unsubscribe(ns)
* From server (if subscribed):
  * added(ns, item)
  * deleted(ns, id)
  * replaced(ns, id, item)

Environment variables:

* DATA_FILE
* NO_SOCKET
* PORT

*/

const express = require('express')
const { createServer } = require('http')
const { readFile, writeFile } = require('fs')
const bodyParser = require('body-parser')
const sio = require('socket.io')
const path = require('path')
const uuid = require('uuid')


let io;

const DATA_FILE = process.env.DATA_FILE || path.join(__dirname, 'data.json')

const app = express()

app.use(bodyParser.json())


app.get('/:ns', (req, res, next) => {
  readData(req.params.ns)
  .then(data => res.send(data))
  .catch(next)
})

app.get('/:ns/:id', (req, res, next) => {
  readData(req.params.ns)
  .then(data => data.find(({ id }) => String(id) === req.params.id))
  .then(found => found ? res.send(found) : res.status(404).end())
  .catch(next)
})

app.post('/:ns', (req, res, next) => {
  const item = Object.assign({ id: uuid() }, req.body)
  console.log({ item })

  readData(req.params.ns)
  .then(data => {
    const index = data.findIndex(({ id }) => String(id) === req.params.id)
    return index >= 0
      ? { added: false }
      : { added: true, data: data.concat([item]) }
  })
  .then(({ added, data }) => {
    return added
      ? writeData(req.params.ns)(data).then(() => {
        if (io) {
          io.to(req.params.ns).emit('added', req.params.ns, item)
        }
        res.status(201).send(item)
      })
      : res.status(409).end()
  })
  .catch(next)
})

app.delete('/:ns/:id', (req, res, next) => {
  readData(req.params.ns)
  .then(data => ({
    before: data,
    after: data.filter(({ id }) => String(id) !== req.params.id)
  }))
  .then(({ before, after }) => before.length > after.length
    ? writeData(req.params.ns)(after).then(() => {
      if (io) {
        io.to(req.params.ns).emit('deleted', req.params.ns, req.params.id)
      }
      res.status(204).end()
    })
    : res.status(404).end()
  )
  .catch(next)
})

app.put('/:ns/:id', (req, res, next) => {
  const item = Object.assign({ id: req.params.id }, req.body)
  readData(req.params.ns)
  .then(data => {
    const index = data.findIndex(({ id }) => String(id) === req.params.id)
    return index >= 0
      ? Object.assign(data, { [index]: item })
      : data.concat([item])
  })
  .then(writeData(req.params.ns))
  .then(() => {
    if (io) {
      io.to(req.params.ns).emit('replaced', req.params.ns, req.params.id, item)
    }
    res.status(204)
  })
  .catch(next)
})


const server = createServer(app)

server.listen(process.env.PORT || 3001)

server.on('listening', () => console.log('Server ready: http://localhost:%s', server.address().port))


if (!process.env.NO_SOCKET_IO) {
  io = sio(server)
  io.on('connection', socket => {
    socket.on('subscribe', ns => socket.join(ns))
    socket.on('unsubscribe', ns => socket.leave(ns))
  })
}




function _readDataFile () {
  return new Promise((resolve, reject) => {
    readFile(DATA_FILE, (err, content) => {
      if (err) {
        reject(err)
      } else {
        try {
          resolve(JSON.parse(content))
        } catch (e) {
          reject(e)
        }
      }
    })
  })
}

function _writeDataFile (data) {
  return new Promise((resolve, reject) => {
    writeFile(DATA_FILE, JSON.stringify(data), err => err ? reject(err) : resolve(true))
  })
}

function readData (ns) {
  return _readDataFile().then(data => data[ns] || [])
}

function writeData (ns) {
  return data => _readDataFile().then(full => Object.assign(full, { [ns]: data })).then(_writeDataFile)
}

_readDataFile().catch(e => {
  // Could not read data file, try to initialize it
  return _writeDataFile({})
}).catch(e => {
  // Really failed to intialize data
  console.error('Could not write data file "%s", exiting', DATA_FILE)
  process.exit(1)
})
