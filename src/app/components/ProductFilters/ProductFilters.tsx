import React from 'react';
import '../../styles/ProductFilters.scss';
import { ReactComponent as CheckIcon } from './check-icon.svg';

const ProductFilters = ({
  activeFilter,
  setActiveFilter,
  promoFilter,
  setPromoFilter,
  currentPage,
  setCurrentPage,
}: {
  activeFilter: boolean;
  setActiveFilter: any;
  promoFilter: boolean;
  setPromoFilter: any;
  currentPage: number;
  setCurrentPage: any;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === 'active') {
      setCurrentPage(1);
      setActiveFilter(!activeFilter);
    }
    if (e.target.value === 'promo') {
      setCurrentPage(1);
      setPromoFilter(!promoFilter);
    }
  };

  return (
    <div className='header__filters filters'>
      <label className='filters__label filters__label-active'>
        <div className='filters__checkbox-container'>
          <input
            className='filters__checkbox filters__checkbox-active'
            type='checkbox'
            name='active'
            onChange={handleChange}
            value='active'
          />
          <CheckIcon className='filters__checkbox-icon' />
        </div>
        Active
      </label>
      <label className='filters__label filters__label-promo'>
        <div className='filters__checkbox-container'>
          <input
            className='filters__checkbox filters__checkbox-promo'
            type='checkbox'
            name='promo'
            onChange={handleChange}
            value='promo'
          />
          <CheckIcon className='filters__checkbox-icon' />
        </div>
        Promo
      </label>
    </div>
  );
};

export default ProductFilters;
