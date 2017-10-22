import React, { Component } from 'react';
import Card from './Card';

class Col extends Component {
  constructor(props) {
    super(props);
    this.state = {
      components: props.components,
      elements: []
    };
  }
  componentDidMount() {
    const elements = []
    this.state.components.map((component,index)=>{
      if (!component) return elements
      if (component.type === 'Card') {
        const element = <Card key={index} imgSrc={component.imgSrc} imgAlt={component.imgSrc} text={component.text}/>
        elements.push(element)
      }
      return elements
    })
    this.setState({elements:elements})
  }
  render() {
    return (
      <div className="col">
        {
          this.state.elements.map((element,index)=>(element))
        }
      </div>
    );
  }
}

export default Col;
