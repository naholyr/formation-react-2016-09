import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import './Menu.css';


class Menu extends Component {

  render() {
    return (
      <ul className="Menu">
        <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
        <li><Link to="/todos" activeClassName="active">Todos</Link></li>
        <li><Link to="/people" activeClassName="active">People</Link></li>
      </ul>
    );
  }
}

export default Menu;
