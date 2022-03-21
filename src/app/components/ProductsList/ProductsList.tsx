import React, { useEffect } from 'react';

const ProductsList = ({
  products,
  loading,
}: {
  products: any;
  loading: boolean;
}) => {
  if (loading) {
    return <h3>Loading...</h3>;
  }

  useEffect(() => {
    console.log(products);
  });

  const testStyle = {
    width: '100px',
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
      <li key={product.id}>
        <div>
          <picture>
            <img src={product.image} style={testStyle} />
          </picture>
          <h5>{product.name}</h5>
          <h5>id: {product.id}</h5>
          <p>{product.description}</p>
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

  return <ul>{showProductsList}</ul>;
};

export default ProductsList;
