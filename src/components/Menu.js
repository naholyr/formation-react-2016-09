import React, { Component } from 'react';
import { Link } from 'react-router';


class Menu extends Component {

  render() {
    return (
      <ul className="Menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/todos">Todos</Link></li>
        <li><Link to="/people">People</Link></li>
      </ul>
    );
  }
}

export default Menu;
