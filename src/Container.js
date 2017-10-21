import React, { Component } from 'react';
import Jumbotron from './Jumbotron';
import Row from './Row';

class Container extends Component {
  render() {
    return (
      <main role="main" className="container">
        <Jumbotron title="React 16 &times; Bootstrap 4" lead="Something..." />

        <Row />
      </main>
    );
  }
}

export default Container;
