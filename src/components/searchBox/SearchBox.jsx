import React, { useState } from 'react';
import PropTypes from 'prop-types';


import './SearchBox';

const SearchBox = ({onClick}) => (
    <div className='content'>
      <form onSubmit={onClick}>
        <input type="text"/>
        <input type="submit" data-in value='Click'/>
      </form>
    </div>
)

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default SearchBox;