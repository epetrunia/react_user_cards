import React, { Component } from 'react';
import styles from './CardList.module.scss';

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
          <h1 key={user.id}>{user.name}</h1>
        ))}
      </div>
    );
  }
}

export default CardList;
