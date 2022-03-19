import React from 'react';

const ProductFilters = ({
  activeFilter,
  setActiveFilter,
  promoFilter,
  setPromoFilter,
}: {
  activeFilter: boolean;
  setActiveFilter: any;
  promoFilter: boolean;
  setPromoFilter: any;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === 'active') {
      setActiveFilter(!activeFilter);
    }
    if (e.target.value === 'promo') {
      setPromoFilter(!promoFilter);
    }
  };

  return (
    <div>
      <label>
        <input
          type='checkbox'
          name='active'
          onChange={handleChange}
          value='active'
        />
        Active
      </label>
      <label>
        <input
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
