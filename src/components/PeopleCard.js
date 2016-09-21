import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';


// -- component

class PeopleCard extends Component {

  render() {
    return (
      <div className="PeopleCard">
        User #{ this.props.id }
      </div>
    );
  }
}

PeopleCard.propTypes = {
  id: T.string.isRequired
};

// -- container

const mapStateToProps = (state, ownProps) => ({
  id: ownProps.params.id
})

export default connect(mapStateToProps)(PeopleCard);
