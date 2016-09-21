import React, { Component } from 'react';


class PeopleCard extends Component {

  render() {
    return (
      <div className="PeopleCard">
        User #{ this.props.id }
      </div>
    );
  }
}

export default PeopleCard;
