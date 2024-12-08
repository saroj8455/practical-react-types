import React from 'react';
import Container from './Container';
import { Product } from '../common/dummy-api-types';

export interface ProductsProps {
  products: Product[];
}

export default function Products({ products }: ProductsProps) {
  return (
    <Container>
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
  );
}
