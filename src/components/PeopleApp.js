import React, { Component } from 'react';
import { Link } from 'react-router';

class PeopleApp extends Component {

  render() {
    return (
      <div className="PeopleApp">
        <h1>PeopleApp</h1>
        <ul>
          <li><Link to="/people/1" activeClassName="active">User 1</Link></li>
          <li><Link to="/people/2" activeClassName="active">User 2</Link></li>
          <li><Link to="/people/3" activeClassName="active">User 3</Link></li>
        </ul>
        { this.props.children
          ? this.props.children
          : <p>Select user to see his card</p>
        }
      </div>
    );
  }
}

export default PeopleApp;
