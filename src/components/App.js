import React, { Component } from 'react';
import Menu from './Menu';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Menu />
        { this.props.children }
        <footer>copyright</footer>
      </div>
    );
  }
}

export default App;
