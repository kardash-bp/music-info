import React from 'react'

const Search = (props) => {
  return (
    <div>
      <input
        onChange={props.updateArtistQuery}
        onKeyPress={props.handleKeyPress}
        placeholder='Search for an Artist'
      />
      <button onClick={props.searchArtist}>Search</button>
    </div>
  )
}

export default Search
