import React, { Component } from 'react';
import PeopleCard from './PeopleCard';

class PeopleApp extends Component {

  render() {
    return (
      <div className="PeopleApp">
        <h1>PeopleApp</h1>
        <ul>
          <li><a href="???">User 1</a></li>
          <li><a href="???">User 2</a></li>
          <li><a href="???">User 3</a></li>
        </ul>
        { selectedUser
          ? <PeopleCard id="???" />
          : <p>Select user to see his card</p>
        }
      </div>
    );
  }
}

export default PeopleApp;
