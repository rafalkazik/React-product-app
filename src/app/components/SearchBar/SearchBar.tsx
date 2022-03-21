import React from 'react';
import { ReactComponent as SearchIcon } from './search-icon.svg';
import '../../styles/SearchBar.scss';

const SearchBar = ({
  inputValue,
  setInputValue,
  setCurrentPage,
}: {
  inputValue: string;
  setInputValue: any;
  setCurrentPage: any;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const productToFind = e.target.value;
    setCurrentPage(1);
    setInputValue(() => {
      return productToFind;
    });
  };

  const findByProduct = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    let updatedInputValue = setInputValue(inputValue);
    return updatedInputValue;
  };

  return (
    <form className='header__form form' onSubmit={findByProduct}>
      <div className='form__searchbar-container'>
        <input
          className='form__searchbar'
          type='text'
          name='city'
          value={inputValue}
          onChange={handleChange}
          placeholder='Search'
        />
        <SearchIcon className='form__searchbar-icon' />
      </div>
    </form>
  );
};

export default SearchBar;
