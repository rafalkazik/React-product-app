import React, { Children, useEffect, useState } from 'react';

import ProductsList from '../ProductsList/ProductsList';
import Pagination from '../Pagination/Pagination';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import ProductFilters from '../ProductFilters/ProductFilters';
import NoProducts from '../NoProducts/NoProducts';
import Logo from '../Logo/Logo';
import LoginButton from '../LoginButton/LoginButton';

import '../../styles/components/Header.scss';

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);
  const [inputValue, setInputValue] = useState('');
  const [activeFilter, setActiveFilter] = useState(false);
  const [promoFilter, setPromoFilter] = useState(false);
  const [logIn, setLogIn] = useState<boolean>(false);

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

  const filterData = products.filter((value: { name: string }) => {
    const productsName = value.name
      .toLowerCase()
      .includes(inputValue.toLowerCase());

    return productsName;
  });

  const filteredCheckboxData = filterData.filter(
    (item: { active: boolean; promo: boolean }) => {
      if (activeFilter === true && promoFilter === true) {
        return item.active === true && item.promo === true;
      }
      if (activeFilter === true) {
        return item.active === true;
      }
      if (promoFilter === true) {
        return item.promo === true;
      } else {
        return filterData;
      }
    }
  );

  const indexOfLastProduct = currentPage * productsPerPage;

  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProducts = filteredCheckboxData.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber: React.SetStateAction<number>) =>
    setCurrentPage(pageNumber);

  return (
    <div className='wrapper'>
      <Header>
        <Logo />
        <SearchBar
          inputValue={inputValue}
          setInputValue={setInputValue}
          setCurrentPage={setCurrentPage}
        />
        <ProductFilters
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          promoFilter={promoFilter}
          setPromoFilter={setPromoFilter}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <LoginButton />
      </Header>
      <ProductsList
        products={currentProducts}
        loading={loading}
        filteredCheckboxData={filteredCheckboxData.length}
      />
      <NoProducts
        filteredCheckboxData={filteredCheckboxData.length}
        loading={loading}
      />
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={filteredCheckboxData.length}
        paginate={paginate}
        filteredCheckboxData={filteredCheckboxData.length}
        currentPage={currentPage}
      />
    </div>
  );
};
