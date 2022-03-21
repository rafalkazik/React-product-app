import React, { useEffect } from 'react';

const Pagination = ({
  productsPerPage,
  totalProducts,
  paginate,
  filteredCheckboxData,
  currentPage,
  setCurrentPage,
}: {
  productsPerPage: number;
  totalProducts: number;
  paginate: any;
  filteredCheckboxData: number;
  currentPage: number;
  setCurrentPage: any;
}) => {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    console.log(filteredCheckboxData);
  }, []);

  useEffect(() => {
    console.log(currentPage);
  });

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

  const dotsStyleNone = {
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
        {pageNumbers.length > 6 ? (
          <>
            <li style={basicStyleLiElement}>
              <a
                onClick={() =>
                  paginate(
                    currentPage === 1
                      ? 1
                      : currentPage === pageNumbers.length - 4 ||
                        currentPage === pageNumbers.length - 3 ||
                        currentPage === pageNumbers.length - 2 ||
                        currentPage === pageNumbers.length - 1 ||
                        currentPage === pageNumbers.length
                      ? pageNumbers.length - 5
                      : currentPage - 1
                  )
                }
                href='#!'
              >
                {currentPage === 1
                  ? 1
                  : currentPage === pageNumbers.length - 4 ||
                    currentPage === pageNumbers.length - 3 ||
                    currentPage === pageNumbers.length - 2 ||
                    currentPage === pageNumbers.length - 1 ||
                    currentPage === pageNumbers.length
                  ? pageNumbers.length - 5
                  : currentPage - 1}
              </a>
            </li>
            <li style={basicStyleLiElement}>
              <a
                onClick={() =>
                  paginate(
                    currentPage === 1
                      ? 2
                      : currentPage === pageNumbers.length - 4 ||
                        currentPage === pageNumbers.length - 3 ||
                        currentPage === pageNumbers.length - 2 ||
                        currentPage === pageNumbers.length - 1 ||
                        currentPage === pageNumbers.length
                      ? pageNumbers.length - 4
                      : currentPage
                  )
                }
                href='#!'
              >
                {currentPage === 1
                  ? 2
                  : currentPage === pageNumbers.length - 4 ||
                    currentPage === pageNumbers.length - 3 ||
                    currentPage === pageNumbers.length - 2 ||
                    currentPage === pageNumbers.length - 1 ||
                    currentPage === pageNumbers.length
                  ? pageNumbers.length - 4
                  : currentPage}
              </a>
            </li>
            <li style={basicStyleLiElement}>
              <a
                onClick={() =>
                  paginate(
                    currentPage === 1
                      ? 3
                      : currentPage === pageNumbers.length - 4 ||
                        currentPage === pageNumbers.length - 3 ||
                        currentPage === pageNumbers.length - 2 ||
                        currentPage === pageNumbers.length - 1 ||
                        currentPage === pageNumbers.length
                      ? pageNumbers.length - 3
                      : currentPage + 1
                  )
                }
                href='#!'
              >
                {currentPage === 1
                  ? 3
                  : currentPage === pageNumbers.length - 4 ||
                    currentPage === pageNumbers.length - 3 ||
                    currentPage === pageNumbers.length - 2 ||
                    currentPage === pageNumbers.length - 1 ||
                    currentPage === pageNumbers.length
                  ? pageNumbers.length - 3
                  : currentPage + 1}
              </a>
            </li>
            <li style={dotsStyleNone}>...</li>
            <li style={basicStyleLiElement}>
              <a onClick={() => paginate(pageNumbers.length - 2)} href='#!'>
                {pageNumbers.length - 2}
              </a>
            </li>
            <li style={basicStyleLiElement}>
              <a onClick={() => paginate(pageNumbers.length - 1)} href='#!'>
                {pageNumbers.length - 1}
              </a>
            </li>
            <li style={basicStyleLiElement}>
              <a onClick={() => paginate(pageNumbers.length)} href='#!'>
                {pageNumbers.length}
              </a>
            </li>
          </>
        ) : (
          paginationList
        )}
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
