import React, { Component } from 'react';
import Card from './Card';

class Col extends Component {
  constructor(props) {
    super(props);
    this.state = {
      components: props.components,
      elements: [],
      col: props.col||1
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
      <div className={'col-'+(12/this.state.col)}>
        {
          this.state.elements.map((element,index)=>(element))
        }
      </div>
    );
  }
}

export default Col;
