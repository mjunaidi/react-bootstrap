import React, { Component } from 'react';
import Col from './Col';

class Row extends Component {
  render() {
    return (
      <div className="row">
        <Col />
        <Col />
        <Col />
      </div>
    );
  }
}

export default Row;
