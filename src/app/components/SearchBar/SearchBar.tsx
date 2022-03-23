import React from 'react';
import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg';
import '../../styles/components/SearchBar.scss';

const SearchBar = ({
  inputValue,
  setInputValue,
  setCurrentPage,
}: {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
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
