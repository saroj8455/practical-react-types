import React from 'react';
import { INews } from './LatestNews';

interface NewsProps {
  latestNews: INews[];
}

function News({ latestNews }: NewsProps) {
  console.log(latestNews);
  return (
    <>
      {latestNews.map((news, index) => (
        <li key={index} className='pb-3 border-bottom-1 surface-border'>
          <div className='font-medium text-900 mb-2'>{news.title}</div>
          <div className='line-height-3 text-600'>{news.text}</div>
        </li>
      ))}
    </>
  );
}
export default React.memo(News);
