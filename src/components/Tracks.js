import React, { Component } from 'react'

export default class Tracks extends Component {
  state = { currPlaying: false, audio: null }
  trackIcon = (track) =>
    !this.state.currPlaying ? '<span>&#9654</span>' : '<span>&#9654</span>'

  handleClick = (url) => {
    if (url === null) return
    if (url === this.state.currPlaying) {
      this.pauseAudio()
      this.setState({ currPlaying: false, audio: null })
    } else {
      this.setState({ currPlaying: url, audio: new Audio(url) })
    }
  }

  playAudio = () => {
    this.state.audio.play()
  }
  pauseAudio = () => {
    if (this.state.audio !== null) this.state.audio.pause()
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.currPlaying) {
      if (prevState.audio !== null) prevState.audio.pause()
      this.playAudio()
    }
  }
  render() {
    console.log(this.state)
    return (
      <div>
        {this.props.tracks.map((track) => {
          const { id, name, album, preview_url } = track
          return (
            <div
              key={id}
              onClick={() => this.handleClick(preview_url)}
              className='track'
            >
              <img
                src={album.images[0].url}
                alt='track-image'
                className='track-image'
              />
              <p className='track-text'>{name}</p>
              <p className='track-icon'>
                {preview_url === this.state.currPlaying ? (
                  <span>||</span>
                ) : !preview_url ? (
                  <span>N/A</span>
                ) : (
                  <span>&#9654;</span>
                )}
              </p>
            </div>
          )
        })}
      </div>
    )
  }
}
