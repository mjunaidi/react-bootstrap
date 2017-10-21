import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Container extends Component {
  render() {
    return (
      <main role="main" className="container">
        <div className="jumbotron">
          <h1>Navbar example</h1>
          <p className="lead">This example is a quick exercise to illustrate how fixed to top navbar works. As you scroll, it will remain fixed to the top of your browsers viewport.</p>
          <a className="btn btn-lg btn-primary" href="../../components/navbar/" role="button">View navbar docs &raquo;</a>
        </div>
      </main>
    );
  }
}

export default Container;
