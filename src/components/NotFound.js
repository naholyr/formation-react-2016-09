import React, { Component } from 'react';

class NotFound extends Component {

  render() {
    return (
      <div>
        <p>{ this.props.location.pathname } not found</p>
        <pre>{ JSON.stringify(this.props.location, null, '   ') }</pre>
      </div>
    );
  }
}

export default NotFound;
