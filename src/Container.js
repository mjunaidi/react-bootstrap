import React, { Component } from 'react';
import Jumbotron from './Jumbotron';
import CardDeck from './CardDeck';
import { randomSentence,timeAgo,randomDate } from './util';
import './style.css';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      components: [
        {
          type: 'Card',
          imgSrc: 'https://picsum.photos/320/240/?random',
          imgAlt: '',
          title: randomSentence(3,5,false),
          text: randomSentence(),
          updated: timeAgo(randomDate(2017,2018))
        },
        {
          type: 'Card',
          imgSrc: 'https://picsum.photos/320/240/?random',
          imgAlt: '',
          title: randomSentence(3,5,false),
          text: randomSentence(),
          updated: timeAgo(randomDate(2017,2018))
        },
        {
          type: 'Card',
          imgSrc: 'https://picsum.photos/320/240/?random',
          imgAlt: '',
          title: randomSentence(3,5,false),
          text: randomSentence(),
          updated: timeAgo(randomDate(2017,2018))
        },
        {
          type: 'Card',
          imgSrc: 'https://picsum.photos/320/240/?random',
          imgAlt: '',
          title: randomSentence(3,5,false),
          text: randomSentence(),
          updated: timeAgo(randomDate(2017,2018))
        },
        {
          type: 'Card',
          imgSrc: 'https://picsum.photos/320/240/?random',
          imgAlt: '',
          title: randomSentence(3,5,false),
          text: randomSentence(),
          updated: timeAgo(randomDate(2017,2018))
        }
      ]
    };
  }
  /*
  <Row col={3} components={this.state.components} />
  */
  render() {
    return (
      <main role="main" className="container">
        <Jumbotron title="React 16 &times; Bootstrap 4" lead={randomSentence()} />
        <CardDeck components={this.state.components} />
        <CardDeck components={this.state.components} begin="3" size="3" />
      </main>
    );
  }
}

export default Container;
