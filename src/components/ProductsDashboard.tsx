import React, { useCallback, useEffect, useRef, useState } from 'react';
import Container from './Container';
import { ApiResponse, Product } from '../common/dummy-api-types';
import { useDebounce } from 'primereact/hooks';
import { InputText } from 'primereact/inputtext';
import { DUMMY_PRODUCTS_API } from '../common';
import Products from './Products';

export default function ProductsDashboard() {
  const [inputValue, debouncedValue, setInputValue] = useDebounce('', 1000);
  const [products, setProducts] = useState<Product[]>([]);

  const firstRender = useRef(true);

  const fetchProducts = useCallback(async () => {
    const searchQuery = debouncedValue || '';
    console.log(searchQuery);
    const response = await fetch(`${DUMMY_PRODUCTS_API}=${searchQuery}`);
    const data = (await response.json()) as ApiResponse;
    setProducts(data.products);
  }, [debouncedValue]);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    fetchProducts();
  }, [debouncedValue]);

  return (
    <Container>
      <h1 className='mb-3'>Products Dashboard</h1>
      <div className='card flex justify-content-center'>
        <InputText
          className='w-30rem'
          placeholder='Search in dummy json api'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <Products products={products} />
    </Container>
  );
}
