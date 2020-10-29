import React from 'react';
import styles from './UserCard.module.scss';

function UserCard(props) {
  const { name, email, id, website } = props.user;
  return (
    <div className={styles.cardContainer}>
      <img src={`https://robohash.org/${id}?set=set5`} alt='user profile pic' />
      <h1>{name}</h1>
      <h2>{email}</h2>
      <a href={website}>{website}</a>
    </div>
  );
}

export default UserCard;
