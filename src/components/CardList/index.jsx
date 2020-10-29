import React from 'react';
import styles from './CardList.module.scss';
import UserCard from './../UserCard';

const CardList = (props) => {
  const { users } = props;
  return (
    <>
      <div className={styles.cardList}>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </>
  );
};

export default CardList;
