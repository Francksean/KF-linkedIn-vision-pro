import React, {useState} from 'react'

function SearchBar() {
  const [ searchValue, setSearchValue ] = useState()
  return (
    <div className='searchbar'>
      <input type="text" name="recherche" id="">

      </input>
    </div>
  )
}

export default SearchBar