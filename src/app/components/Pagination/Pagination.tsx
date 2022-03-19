import React, { useEffect } from 'react';

const Pagination = ({
  productsPerPage,
  totalProducts,
  paginate,
  filteredCheckboxData,
}: {
  productsPerPage: number;
  totalProducts: number;
  paginate: any;
  filteredCheckboxData: number;
}) => {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    console.log(filteredCheckboxData);
  }, []);

  const hidePagination = {
    display: 'none',
    listStyle: 'none',
  };
  const showPagination = {
    display: 'flex',
    listStyle: 'none',
  };
  const basicStyleLiElement = {
    marginRight: '10px',
  };

  const paginationList = pageNumbers.map((number) => (
    <li key={number} style={basicStyleLiElement}>
      <a onClick={() => paginate(number)} href='#!'>
        {number}
      </a>
    </li>
  ));

  return (
    <nav>
      <ul style={filteredCheckboxData === 0 ? hidePagination : showPagination}>
        <li style={basicStyleLiElement}>
          <a onClick={() => paginate(1)} href='#!'>
            First
          </a>
        </li>
        {paginationList}
        <li>
          <a onClick={() => paginate(pageNumbers.length)} href='#!'>
            Last
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
