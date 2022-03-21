import React from 'react';
import '../../styles/components/ProductsList.scss';
import classNames from 'classnames';
import { ReactComponent as Spinner } from './spinner.svg';

const ProductsList = ({
  products,
  loading,
  filteredCheckboxData,
}: {
  products: any;
  loading: boolean;
  filteredCheckboxData: number;
}) => {
  if (loading) {
    return (
      <div className='loading-spinner'>
        <Spinner className='loading-spinner__item' />
      </div>
    );
  }

  const showProductsList = products.map(
    (product: {
      id: number;
      name: string;
      description: string;
      rating: number;
      image: string;
      promo: boolean;
      active: boolean;
    }) => (
      <li
        key={product.id}
        className={classNames('product-list__list-item list-item ', {
          'product-list__list-item--promo': product.promo,
        })}
      >
        <div
          className='list-item__picture-container'
          style={
            product.active
              ? { backgroundImage: `url('${product.image}')` }
              : {
                  backgroundImage: `url('${product.image}')`,
                  filter: `grayscale(100%)`,
                  opacity: '0.5',
                }
          }
        ></div>
        <div className='list-item__content-container'>
          <h5 className='list-item__product-name'>{product.name}</h5>
          {/* <h5>id: {product.id}</h5> */}
          <p className='list-item__product-description'>
            {product.description}
          </p>
          <div>
            rating:
            {product.rating}
          </div>
          <div>{product.promo ? 'promo' : 'no-promo'}</div>
          <div>{product.active ? 'active' : 'no-active'}</div>
        </div>
      </li>
    )
  );

  return (
    <ul
      className={classNames('product-list', {
        'product-list--empty': filteredCheckboxData === 0,
      })}
    >
      {showProductsList}
    </ul>
  );
};

export default ProductsList;
