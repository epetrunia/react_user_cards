import React from 'react';
import styles from './SearchBox.module.scss';

const SearchBox = (props) => {
  const { placeholder, handleSearchChange } = props;
  return (
    <div className={styles.searchBox}>
      <input
        type='search'
        placeholder={placeholder}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchBox;
