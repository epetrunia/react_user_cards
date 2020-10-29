import React from 'react';
import styles from './UserCard.module.scss';

function UserCard(props) {
  const { name, id, email, website } = props.user;
  return (
    <section className={styles.cardContainer}>
      <div className={styles.flexContainer}>
        <div className={styles.imageWrapper}>
          <img
            src={`https://robohash.org/${id}?set=set5`}
            alt='user profile pic'
          />
        </div>
        <h2 className={styles.userName}>{name}</h2>
        <h3 className={styles.userEmail}>{email}</h3>
        <a className={styles.userLink} href={website}>
          {website}
        </a>
      </div>
    </section>
  );
}

export default UserCard;
