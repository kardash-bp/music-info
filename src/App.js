import React, { Component } from 'react'
import Axios from 'axios'
import Artist from './components/Artist'
import Tracks from './components/Tracks'
import Search from './components/Search'
export default class App extends Component {
  state = {
    artistQuery: 'coldplay',
    artist: null,
    tracks: []
  }
  updateArtistQuery = (event) => {
    this.setState({ artistQuery: event.target.value })
  }
  handleKeyPress = (e) => {
    if (e.key === 'Enter') this.searchArtist()
  }
  searchArtist = async () => {
    try {
      const result = await Axios.get(
        `https://spotify-api-wrapper.appspot.com/artist/${this.state.artistQuery}`
      )
      this.setState({ artist: result.data.artists.items[0] })
      const tracksArr = await Axios.get(
        `https://spotify-api-wrapper.appspot.com/artist/${result.data.artists.items[0].id}/top-tracks`
      )

      this.setState({ tracks: tracksArr.data.tracks })
    } catch (err) {
      console.log(err.message)
    }
  }
  componentDidMount() {
    this.searchArtist()
  }
  render() {
    // console.log(this.state)

    return (
      <div className='App'>
        <h1>Find Artist</h1>
        <Search
          updateArtistQuery={this.updateArtistQuery}
          handleKeyPress={this.handleKeyPress}
          searchArtist={this.searchArtist}
        />
        <Artist artist={this.state.artist} />
        <Tracks tracks={this.state.tracks} />
      </div>
    )
  }
}
