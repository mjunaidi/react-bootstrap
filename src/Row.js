import React, { Component } from 'react';
import Col from './Col';

class Row extends Component {
  constructor(props) {
    super(props);
    this.state = {
      components: props.components,
      col: props.col||1
    };
  }
  render() {
    return (
      <div className="row">
        {
          this.state.components.map((component,i)=>(
            <Col key={i} components={[component]} col={this.state.col} />
          ))
        }
      </div>
    );
  }
}

export default Row;
