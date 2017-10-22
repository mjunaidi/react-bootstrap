import React, { Component } from 'react';

/*
<div className="card-footer">
  <small className="text-muted">{this.props.updated}</small>
</div>
*/
class Card extends Component {
  render() {
    return (
      <div className="card">
        <img className="card-img-top" src={this.props.imgSrc} alt={this.props.imgAlt} />
        <div className="card-body">
          <h4 className="card-title">{this.props.title}</h4>
          <p className="card-text"><small className="text-muted">{this.props.updated}</small></p>
          <p className="card-text">{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default Card;
