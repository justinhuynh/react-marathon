import React, { Component } from 'react';

class Song extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return(
      <li className={this.props.className} onClick={this.props.handleSongSelect}>
        {this.props.name} - {this.props.artist}
      </li>
    )
  }
}

export default Song;
