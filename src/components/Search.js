import React from 'react'
import './search.css'
const Search = (props) => {
  return (
    <div className='search'>
      <input
        className='searchTerm'
        onChange={props.updateArtistQuery}
        onKeyPress={props.handleKeyPress}
        placeholder='Search for an Artist'
      />
      <button className='searchButton' onClick={props.searchArtist}>
        Search
      </button>
    </div>
  )
}

export default Search
