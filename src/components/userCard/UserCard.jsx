import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import GitHubService from '../../services/GithubService';

import './UserCard.css';

const UserCard = ({userID}) => {
  const { getUserbyId } = new GitHubService();
  const [user, setUser] = useState({});

  useEffect(() => {
    getUserbyId(userID)
    .then(res => setUser(res))}, [])

  return (
    <div className='user_card_content'>
      <div className='user_card_avatar'>
        <img src={user.avatar_url} alt="image"/>
      </div>
      <div className='user_card_text'>
        <div className='user_card_text_header'>
          <p><a href={user.html_url} target="_blank" rel="noopener noreferrer">{user.login}</a></p>
          <p>{user.name}</p>
        </div>
        <div><p>{user.bio}</p></div>
        <div>
          <p><i className="fas fa-map-marker-alt"></i>{user.location}</p>  
        </div>
      </div>
    </div>
  )
}

UserCard.propTypes = {
  userID: PropTypes.number.isRequired,
}

export default UserCard;