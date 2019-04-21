import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ErrorBoundary from '../errorBoudary/ErrorBoudary';
import SearchBox from '../searchBox/SearchBox';

import GitHubService from '../../services/GithubService'

import './ContentPage';




const ContentPage = () => {
  const [users, setUsers] = useState([]);
  const [city, setCity] = useState('');

  const searchOnClick = (e) => {
    console.log(e);
    getUsersByCity(e.target.value).then(res => setUsers(res.items));
    e.preventDefault();
    console.log(users);
  }

  const { getUsersByCity } = new GitHubService();

  return (
    <div className='content'>
      <SearchBox onClick={searchOnClick}/>      
    </div>
  )
}

ContentPage.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
}

export default ContentPage;