import React, { Component } from 'react';
import Card from './Card';

class Col extends Component {
  render() {
    return (
      <div className="col">
        <Card imgSrc="https://picsum.photos/320/240/?random" imgAlt="image" text="Some quick example text to build on the card title and make up the bulk of the card's content." />
      </div>
    );
  }
}

export default Col;
