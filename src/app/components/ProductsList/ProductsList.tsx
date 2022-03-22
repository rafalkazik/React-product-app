import React, { useState } from 'react';
import '../../styles/components/ProductsList.scss';
import classNames from 'classnames';
import Modal from '../Modal/Modal';
import { ReactComponent as Spinner } from './spinner.svg';
import { ReactComponent as Star } from './star.svg';
import { ReactComponent as StarGold } from './star-gold.svg';

const ProductsList = ({
  products,
  loading,
  filteredCheckboxData,
}: {
  products: any;
  loading: boolean;
  filteredCheckboxData: number;
}) => {
  const [modal, setModal] = useState(false);
  const [tempdata, setTempdata] = useState<any>([]);

  if (loading) {
    return (
      <div className='loading-spinner'>
        <Spinner className='loading-spinner__item' />
      </div>
    );
  }

  const showDetails = (
    productImg: string,
    productName: string,
    productDescription: string
  ) => {
    let tempData = [productImg, productName, productDescription];
    setTempdata((item: any) => [1, ...tempData]);
    return setModal(true);
  };

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
          <div className='list-item__text-content-container'>
            <h5 className='list-item__product-name'>{product.name}</h5>
            <p className='list-item__product-description'>
              {product.description}
            </p>
          </div>
          <div className='list-item__details-content-container'>
            <div className='list-item__rating'>
              {[...Array(5)].map((star, i) => {
                const ratingValue = i++;
                return (
                  <div key={i} className='list-item__rating-stars'>
                    {ratingValue > product.rating - 1 ? <Star /> : <StarGold />}
                  </div>
                );
              })}
            </div>
            <button
              className={classNames(
                'product-list__button product-list__button--available',
                {
                  'product-list__button product-list__button--unavailable':
                    !product.active,
                }
              )}
              disabled={product.active ? false : true}
              onClick={() =>
                showDetails(product.image, product.name, product.description)
              }
            >
              {product.active ? 'Show details' : 'Unavailable'}
            </button>
          </div>
        </div>
      </li>
    )
  );

  return (
    <>
      <ul
        className={classNames('product-list', {
          'product-list--empty': filteredCheckboxData === 0,
        })}
      >
        {showProductsList}
      </ul>
      {modal === true ? (
        <Modal
          productImg={tempdata[1]}
          productName={tempdata[2]}
          productDescription={tempdata[3]}
        />
      ) : (
        ''
      )}
    </>
  );
};

export default ProductsList;
