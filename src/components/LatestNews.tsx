import { useMemo } from 'react';
import Container from './Container';
import { Button } from 'primereact/button';
import News from './News';

import useFetchNews from '../hooks/useFetchNews';

export interface INews {
  id: string;
  title: string;
  text: string;
}

export default function LatestNews() {
  const { news, loading, error } = useFetchNews();

  // Prevent the re-renders on empty news array
  const memoizeNews = useMemo(() => news, [news]);

  return (
    <Container>
      <div className='surface-card shadow-2 border-round lg:px-8'>
        <div className=' p-4'>
          <div className='text-xl text-900 font-medium mb-5'>
            <div className='mr-3'>Latest News</div>
            {loading && <span className='text-gray-500'>loading....</span>}
            {error && (
              <span className='text-orange-500'>
                Something went wrong. Please try again.
              </span>
            )}
            {!loading && !error && news.length == 0 && (
              <p className='text-gray-500'>No latest news found.</p>
            )}
          </div>
          <ul className='list-none p-0 m-0'>
            <News latestNews={memoizeNews} />
          </ul>
          <div className='flex gap-4 justify-content-between pt-3'>
            <Button
              label='Clear All'
              className='w-6'
              outlined
              severity='secondary'
            />
            <Button label='New Entry' className='w-6' outlined />
          </div>
        </div>
      </div>
    </Container>
  );
}
