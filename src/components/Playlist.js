import React from 'react';

const Playlist = props => {
  return(
    <li className={this.props.className} onClick={this.props.handlePlaylistSelect}>
      {this.props.name}
    </li>
  )
}

export default Playlist;
