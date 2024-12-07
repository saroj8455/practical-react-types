import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css'; // flex

import { useCallback, useEffect, useRef, useState } from 'react';
import Welcome from './components/Welcome';
import { greet, nameShort } from './common/index-string';
import Card from './components/Card';
import { InputText } from 'primereact/inputtext';

import Container from './components/Container';
import { DUMMY_PRODUCTS_API } from './common';
import { ApiResponse, Product } from './common/dummy-api-types';
import { useDebounce } from 'primereact/hooks';
function App() {
  const [inputValue, debouncedValue, setInputValue] = useDebounce('', 1000);
  const [products, setProducts] = useState<Product[]>([]);

  const firstRender = useRef(true);

  const fetchProducts = useCallback(async () => {
    const searchQuery = debouncedValue || 'phone';
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
    <>
      <Welcome />
      <Card />
      <Container>
        <div className='card flex justify-content-center'>
          <InputText
            className='w-30rem'
            placeholder='Search in dummy json api'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>

        <div className='card flex flex-column gap-2  mt-5'>
          {products.length > 0 ? (
            products.map((p, index) => {
              return (
                <div className='flex align-items-center gap-1' key={index}>
                  <img
                    src={p.thumbnail}
                    className='border-round'
                    alt='avatar-f-1'
                    height={100}
                    width={100}
                  />
                  <div className='mr-0 md:mr-8'>
                    <span className='block text-900 font-medium mb-1'>
                      {p.title}
                    </span>
                    <div className='text-600'>$ {p.price}</div>
                  </div>
                </div>
              );
            })
          ) : (
            <p className='text-2xl text-500'>Products not available!</p>
          )}
        </div>
      </Container>
    </>
  );
}

export default App;
