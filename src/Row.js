import React, { Component } from 'react';
import Col from './Col';

class Row extends Component {
  constructor(props) {
    super(props);
    this.state = {components: props.components};
  }
  render() {
    return (
      <div className="row">
        {
          this.state.components.map((component,i)=>(
            <Col key={i} components={[component]} />
          ))
        }
      </div>
    );
  }
}

export default Row;
