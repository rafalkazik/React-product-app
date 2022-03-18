import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductsList from '../ProductsList/ProductsList';
import Pagination from '../Pagination/Pagination';

import { AppRoute } from 'routing/AppRoute.enum';

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);
  const productsUrl = 'https://join-tsh-api-staging.herokuapp.com/products';

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const resp = await fetch(productsUrl);
        const json = await resp.json();
        setProducts(json.items);
        setLoading(false);
      } catch (error) {
        console.log('error', error);
      }
    };

    getProducts();
  }, []);

  console.log(products);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber: React.SetStateAction<number>) =>
    setCurrentPage(pageNumber);

  return (
    <>
      <h2>Products page</h2>
      <Link to={AppRoute.Login}> Login </Link>
      <ProductsList products={currentProducts} loading={loading} />
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        paginate={paginate}
      />
    </>
  );
};
