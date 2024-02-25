import React, {useState} from 'react'
import './searchbar.css'

import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';

function SearchBar({ settings }) {
  const [ searchValue, setSearchValue ] = useState()
  const updateValue = ()=>{
    setSearchValue(e.target.value)
  }
  return (
    <div className='searchbar'>
      <SearchIcon style={{color:'white', height:'10px', width:'10px'}} />
      <input type="text" name="recherche" id="" value={searchValue} onChange={(e)=>{updateValue(e)}} placeholder='Search'/>
      {
        settings ? <TuneIcon style={{color:'white', height:'15px', width:'15px'}} /> : null
      }
    </div>
  )
}

export default SearchBar