import { Component } from 'react';
import './App.css';
import CardList from './components/CardList/index';
import SearchBox from './components/SearchBox';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ users: users }));
  }

  handleSearchChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { users, searchField } = this.state;
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>
        <h1>User Cards</h1>
        <SearchBox
          placeholder='search user'
          handleSearchChange={this.handleSearchChange}
        />
        <CardList users={filteredUsers} />
      </div>
    );
  }
}

export default App;
