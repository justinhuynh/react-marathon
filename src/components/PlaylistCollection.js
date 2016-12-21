import React, {Component} from 'react';
import Playlist from './Playlist';

class PlaylistCollection extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    let playlists = this.props.playlists.map(playlist =>{
      let className="";
      if(this.props.selectedPlaylistId === playlist.id){
        className="selected";
      }
      let handlePlaylistSelect =() =>{
        this.props.handlePlaylistSelect(playlist.id);
      }
      return(
        <Playlist
          key={playlist.id}
          name={playlist.name}
          songs={playlist.songs}
          className={className}
          handlePlaylistSelect={handlePlaylistSelect}
        />
      )
    })
    return(
      <ul>
        {playlists}
      </ul>
    )
  }
}

export default PlaylistCollection;
