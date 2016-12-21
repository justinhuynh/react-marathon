import React from 'react';
import PlaylistCollection from './PlaylistCollection';
import SongCollection from './SongCollection';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSongId: this.props.data.selectedSongId,
      selectedPlaylistId: this.props.data.selectedPlaylistId
    }
    this.handleSongSelect = this.handleSongSelect.bind(this);
    this.handlePlaylistSelect = this.handlePlaylistSelect.bind(this);
  }

  handleSongSelect(id) {
    let newId = id;
    this.setState({ selectedSongId: newId });
  }

  handlePlaylistSelect(id){
    let newId = id;
    let songId = this.props.data.playlists[newId - 1].songs[0]
    this.setState({
      selectedPlaylistId: newId,
      selectedSongId: songId
     });
  }

  render() {
    let data = this.props.data

    let selectedPlaylistSongIds = data.playlists[this.state.selectedPlaylistId-1].songs;

    let filterById = (obj) => {
      return selectedPlaylistSongIds.includes(obj.id);
    }

    let selectedPlaylistSongs = data.songs.filter(filterById);

    return (
      <div className="App row">
        <div className="columns small-6">
          <h1>{"The Guinea Pigs' Playlist"}</h1>
          <PlaylistCollection
            playlists = {data.playlists}
            selectedPlaylistId ={this.state.selectedPlaylistId}
            handlePlaylistSelect ={this.handlePlaylistSelect}
          />
        </div>
        <div className="columns small-6">
          <h1>{"Guinea Pig Wheeks"}</h1>
          <SongCollection
            songs = {selectedPlaylistSongs}
            selectedSongId = {this.state.selectedSongId}
            handleSongSelect = {this.handleSongSelect}
          />
        </div>
      </div>
    );
  }
};

export default App;
