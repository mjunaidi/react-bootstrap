import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <img className="card-img-top" src={this.props.imgSrc} alt={this.props.imgAlt} />
        <div className="card-body">
          <p className="card-text">{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default Card;
