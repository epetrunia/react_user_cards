import React from 'react';
import styles from './UserCard.module.scss';

function UserCard(props) {
  const { name, id, email, website } = props.user;
  return (
    <div className={styles.cardContainer}>
      <div className={styles.flexContainer}>
        <div className={styles.imageWrapper}>
          <img
            src={`https://robohash.org/${id}?set=set5`}
            alt='user profile pic'
          />
        </div>
        <h1 className={styles.userName}>{name}</h1>
        <h2 className={styles.userEmail}>{email}</h2>
        <a className={styles.userLink} href={website}>
          {website}
        </a>
      </div>
    </div>
  );
}

export default UserCard;
