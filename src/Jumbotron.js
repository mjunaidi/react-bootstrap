import React, { Component } from 'react';

class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>{this.props.title}</h1>
        <p className="lead">{this.props.lead}</p>
        <a className="btn btn-lg btn-primary" href="../../components/navbar/" role="button">View navbar docs &raquo;</a>
      </div>
    );
  }
}

export default Jumbotron;
