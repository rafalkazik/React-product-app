import React, { useEffect } from 'react';

const Pagination = ({
  productsPerPage,
  totalProducts,
  paginate,
}: {
  productsPerPage: number;
  totalProducts: number;
  paginate: any;
}) => {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    console.log(pageNumbers);
  }, []);

  return (
    <nav>
      <ul className='pagination'>
        <li>
          <a onClick={() => paginate(1)} href='#!'>
            First
          </a>
        </li>
        {pageNumbers.map((number) => (
          <li key={number}>
            <a onClick={() => paginate(number)} href='#!'>
              {number}
            </a>
          </li>
        ))}
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
