import React, { Component } from 'react';
import styles from './CardList.module.scss';
import UserCard from './../UserCard';

class CardList extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ users: users }));
  }

  render() {
    const { users } = this.state;
    return (
      <div className={styles.cardList}>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

export default CardList;
