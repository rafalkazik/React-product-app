import React from 'react';
import classNames from 'classnames';
import '../../styles/NoProducts.scss';
import { ReactComponent as ListPlainIcon } from './task-list-plain.svg';

const NoProducts = ({
  filteredCheckboxData,
}: {
  filteredCheckboxData: number;
}) => {
  return (
    <section
      className={classNames('no-product__section', {
        'no-product__section-active': filteredCheckboxData === 0,
      })}
    >
      <ListPlainIcon />
      <h5 className='no-product__title'>Ooops... It's empty here</h5>
      <p className='no-product__subtitle'>There are no products on the list</p>
    </section>
  );
};

export default NoProducts;
