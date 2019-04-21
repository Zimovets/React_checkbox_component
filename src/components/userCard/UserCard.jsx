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
      <div className='user_card_text'>test</div>
    </div>
  )
}

UserCard.propTypes = {
  userID: PropTypes.number.isRequired,
}

export default UserCard;