import React, { Component } from 'react';

export default function connect (OriginalComponent, store) {
  return class ConnectedComponent extends Component {

    constructor (props) {
      super(props)

      this.state = store.getState()
    }

    componentWillMount () {
      this._unsubscribe = store.subscribe(state =>
        this.setState(state));
    }

    componentWillUnmount () {
      this._unsubscribe();
    }

    render () {
      return <OriginalComponent { ...this.state } />
    }

  }
}
