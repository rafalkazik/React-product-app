import React from 'react';

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
        <input
          className='filters__checkbox filters__checkbox-active'
          type='checkbox'
          name='active'
          onChange={handleChange}
          value='active'
        />
        Active
      </label>
      <label className='filters__label filters__label-promo'>
        <input
          className='filters__checkbox filters__checkbox-promo'
          type='checkbox'
          name='promo'
          onChange={handleChange}
          value='promo'
        />
        Promo
      </label>
    </div>
  );
};

export default ProductFilters;
