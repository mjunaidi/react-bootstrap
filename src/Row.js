import React, { Component } from 'react';
import Col from './Col';

class Row extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          imgSrc: 'https://picsum.photos/320/240/?random',
          imgAlt: '',
          text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
        },
        {
          imgSrc: 'https://picsum.photos/320/240/?random',
          imgAlt: '',
          text: 'Lorem ipsum'
        },
        {
          imgSrc: 'https://picsum.photos/320/240/?random',
          imgAlt: '',
          text: 'dolor sit amet'
        }
      ]
    };
  }
  render() {
    return (
      <div className="row">
        {
          this.state.cards.map((card,i)=>(
            <Col key={i} component={{type:'Card',value:card}} />
          ))
        }
      </div>
    );
  }
}

export default Row;
