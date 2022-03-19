import React, { FormEventHandler } from 'react';

const SearchBar = ({
  inputValue,
  setInputValue,
}: {
  inputValue: string;
  setInputValue: any;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const productToFind = e.target.value;
    setInputValue((prevValue: any) => {
      return productToFind;
    });
  };

  const findByProduct = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    let updatedInputValue = setInputValue(inputValue);
    return updatedInputValue;
  };

  return (
    <form onSubmit={findByProduct}>
      <input
        type='text'
        name='city'
        value={inputValue}
        onChange={handleChange}
        placeholder='find'
      />
    </form>
  );
};

export default SearchBar;
