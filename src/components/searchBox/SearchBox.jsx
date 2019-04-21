import React, { useState } from 'react';
import PropTypes from 'prop-types';


import './SearchBox';

const SearchBox = ({onClick}) => {
  const [search, setSearch] = useState('');
  
  const searchOnChange = (e) => {
    setSearch(e.target.value);
  }

  const buttonOnClick = (e) => {
    onClick(search);
  }

  return (
  <div className='content'>
    <form>
      <input type="text" onChange={searchOnChange}/>
      <input type="button" value='Click' onClick={buttonOnClick}/>
    </form>
  </div>
  )
}

SearchBox.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default SearchBox;