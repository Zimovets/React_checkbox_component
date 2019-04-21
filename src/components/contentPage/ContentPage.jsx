import React, { useState, useEffect } from 'react';

import ErrorBoundary from '../errorBoudary/ErrorBoudary';
import SearchBox from '../searchBox/SearchBox';

import GitHubService from '../../services/GithubService'

import './ContentPage';




const ContentPage = () => {
  const { getUsersByCity } = new GitHubService();
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');

  const searchOnClick = (searchValue) => {
    setSearch(searchValue);
  }

  useEffect(() => {
  getUsersByCity(search)
  .then(res => setUsers(res.items))}, [search])

  return (
    <div className='content'>
      <SearchBox onClick={searchOnClick}/>
      {users.map(item => <p>{item.login}</p> )}     
    </div>
  )
}

export default ContentPage;