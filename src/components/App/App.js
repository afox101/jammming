import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'
import Spotify from '../../util/Spotify' 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.setState = {
      searchResults: [
        name: 'Your Song',
        artist: 'Elton John',
        album: 'Madman Across The Water',
        id: 'Tiny Dancer',
        playlistName: 'Foxys Playlist',
        playlistTracks: ['Stronger', 'Britney Spears', 'Whoopsies...me do it again', 'Bspear']
      ]
    }

    this.addTrack = this.addTrack.bind(this)
    this.removeTrack = this.removeTrack.bind(this)
    this.updatePlayListName = this.updatePlayListName.bind(this)
    this.savePlaylist = this.savePlaylist.bind(this)
    this.search = this.search.bind(this)
  
  
  }
  

  addTrack(track) {
    if(this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    } else {
      this.setState({
        playlistTracks: this.state.playlistTracks.push(track)
      })
    }}

  removeTrack(track) {
    if(this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    } else {
      this.setState({
        playlistTracks: this.state.playlistTracks.pull(track)
      })
    }
  }

  updatePlayListName(name) {
    this.setState(name)
  }

  savePlaylist() {
    const trackUris = this.state.playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackUris).then (() => {
      this.setState({
        playlistName: 'New Playlist',
        playlistTracks: []
      })
    })
  }
  

  search(term) {
    console.log(term)
  }


  render() {
    return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
      <SearchBar searchBar= {this.props.searchBar}/>
      <div className="App-playlist">
      <SearchResults searchResults= {this.state.search}/>
      <Playlist playlistName= {this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
    </div>
  </div>
</div>
    )
  }
}

export default App;
