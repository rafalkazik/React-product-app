import React, { FormEventHandler } from 'react';

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
      <input
        className='form__searchbar'
        type='text'
        name='city'
        value={inputValue}
        onChange={handleChange}
        placeholder='Search'
      />
    </form>
  );
};

export default SearchBar;
