import React from 'react';

const SearchBox = (props) => {
  const { placeholder, handleSearchChange } = props;
  return (
    <input
      type='search'
      placeholder={placeholder}
      onChange={handleSearchChange}
    />
  );
};

export default SearchBox;
