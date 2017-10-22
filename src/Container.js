import React, { Component } from 'react';
import Jumbotron from './Jumbotron';
import Row from './Row';
import {randomWord,randomSentence} from './util';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      components: {
        type: 'Card',
        values: [
          {
            imgSrc: 'https://picsum.photos/320/240/?random',
            imgAlt: '',
            text: randomSentence()
          },
          {
            imgSrc: 'https://picsum.photos/320/240/?random',
            imgAlt: '',
            text: randomSentence()
          },
          {
            imgSrc: 'https://picsum.photos/320/240/?random',
            imgAlt: '',
            text: randomSentence()
          }
        ]
      }
    };
  }
  render() {
    return (
      <main role="main" className="container">
        <Jumbotron title="React 16 &times; Bootstrap 4" lead="Something..." />

        <Row components={this.state.components} />
      </main>
    );
  }
}

export default Container;
