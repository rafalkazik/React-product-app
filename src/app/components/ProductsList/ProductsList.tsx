import React, { useEffect } from 'react';

const ProductsList = ({ products, loading }: any) => {
  if (loading) {
    return <h3>Loading...</h3>;
  }

  // if (activeFilter === true) {
  //   products.filter((item: { [x: string]: boolean }) => {
  //     return item.active === true;
  //   });
  // }

  useEffect(() => {
    console.log(products);
  }, []);

  // const filterData = data.filter((value: { name: string }) => {
  //   const productsName = value.name
  //     .toLowerCase()
  //     .includes(inputValue.toLowerCase());

  //   return productsName;
  // });

  const testStyleUl = {
    display: 'flex',
    width: '100%',
    listStyle: 'none',
  };
  const testStyle = {
    width: '50px',
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

  return <ul style={testStyleUl}>{showProductsList}</ul>;
};

export default ProductsList;
