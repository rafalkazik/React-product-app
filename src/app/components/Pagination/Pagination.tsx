import React from 'react';
import classNames from 'classnames';
import '../../styles/components/Pagination.scss';

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

  const paginationList = pageNumbers.map((number) => (
    <li key={number}>
      <a onClick={() => paginate(number)} href='#!'>
        {number}
      </a>
    </li>
  ));

  return (
    <nav className='pagination'>
      <ul
        className={classNames('pagination__list-pagination list-pagination', {
          'pagination__list-pagination--hide': filteredCheckboxData === 0,
        })}
      >
        <li className='list-pagination__pagination-item pagination-item'>
          <a
            className={classNames(
              'pagination-item__link pagination-item__link--first',
              {
                'pagination-item__link--disable': currentPage === 1,
              }
            )}
            onClick={() => paginate(1)}
            href='#!'
          >
            First
          </a>
        </li>
        {pageNumbers.length > 6 ? (
          <>
            <li className='list-pagination__pagination-item pagination-item'>
              <a
                className='pagination-item__link'
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
            <li className='list-pagination__pagination-item pagination-item'>
              <a
                className='pagination-item__link'
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
            <li className='list-pagination__pagination-item pagination-item'>
              <a
                className='pagination-item__link'
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
            <li
              className={classNames(
                'list-pagination__pagination-item pagination-item',
                {
                  'list-pagination__pagination-item--hide':
                    currentPage === pageNumbers.length - 4 ||
                    currentPage === pageNumbers.length - 3 ||
                    currentPage === pageNumbers.length - 2 ||
                    currentPage === pageNumbers.length - 1 ||
                    currentPage === pageNumbers.length,
                }
              )}
            >
              ...
            </li>
            <li className='list-pagination__pagination-item pagination-item'>
              <a
                className='pagination-item__link'
                onClick={() => paginate(pageNumbers.length - 2)}
                href='#!'
              >
                {pageNumbers.length - 2}
              </a>
            </li>
            <li className='list-pagination__pagination-item pagination-item'>
              <a
                className='pagination-item__link'
                onClick={() => paginate(pageNumbers.length - 1)}
                href='#!'
              >
                {pageNumbers.length - 1}
              </a>
            </li>
            <li className='list-pagination__pagination-item pagination-item'>
              <a
                className='pagination-item__link'
                onClick={() => paginate(pageNumbers.length)}
                href='#!'
              >
                {pageNumbers.length}
              </a>
            </li>
          </>
        ) : (
          paginationList
        )}
        <li className='list-pagination__pagination-item pagination-item'>
          <a
            className={classNames(
              'pagination-item__link pagination-item__link--last',
              {
                'pagination-item__link--disable':
                  currentPage === pageNumbers.length,
              }
            )}
            onClick={() => paginate(pageNumbers.length)}
            href='#!'
          >
            Last
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
