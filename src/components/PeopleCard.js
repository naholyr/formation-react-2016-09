import React, { Component, PropTypes as T } from 'react';


class PeopleCard extends Component {

  render() {
    return (
      <div className="PeopleCard">
        User #{ this.props.params.id }
      </div>
    );
  }
}

PeopleCard.propTypes = {
  params: T.shape({
    id: T.string.isRequired
  }).isRequired
};

export default PeopleCard;
