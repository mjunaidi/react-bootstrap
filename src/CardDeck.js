import React, { Component } from 'react';
import Card from './Card';

class CardDeck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      components: props.components||[],
      elements: [],
      begin: props.begin||0,
      size: props.size||3
    };
  }
  componentDidMount() {
    const elements = []
    this.state.components.map((c,i)=>{
      if (!c) return elements
      if (c.type === 'Card') {
        const el = (
          <Card
            key={i}
            imgSrc={c.imgSrc}
            imgAlt={c.imgSrc}
            title={c.title}
            text={c.text}
            updated={c.updated}
          />
        )
        elements.push(el)
      }
      return elements
    })
    this.setState({elements:elements})
  }
  render() {
    return (
      <div className="card-deck">
        {
          this.state.elements.map((element,index)=>(element))
        }
      </div>
    );
  }
}

export default CardDeck;
