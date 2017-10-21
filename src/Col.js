import React, { Component } from 'react';
import Card from './Card';

class Col extends Component {
  render() {
    let el = null
    const component = this.props.component
    if (component && component.type === 'Card') {
      const value = component.value
      el = <Card imgSrc={value.imgSrc} imgAlt={value.imgSrc} text={value.text}/>
    }
    return (
      <div className="col">
        {el}
      </div>
    );
  }
}

export default Col;
