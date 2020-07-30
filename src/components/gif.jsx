import React, { Component } from "react";

class Gif extends Component {
  handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  };

  render() {
    const src = `https://media1.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <div>
        <img src={src} className="gif" onClick={this.handleClick} />
      </div>
    );
  }
}

export default Gif;
