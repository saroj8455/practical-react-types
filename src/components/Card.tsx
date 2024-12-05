import React from 'react';

import Technolgies, { TechnolgiesProps } from './Technolgies';

export interface CardProps {
  tags?: TechnolgiesProps[];
}

export default function Card() {
  const tags: TechnolgiesProps[] = [
    { severity: 'success', technology: 'Success' },
    { severity: 'info', technology: 'Info' },
    { severity: 'warning', technology: 'Warning' },
    { severity: 'danger', technology: 'Danger' },
    { severity: 'secondary', technology: 'Secondary' },
    { severity: 'contrast', technology: 'Contrast' },
  ];

  return (
    <div className='container py-5'>
      <div className='surface-card p-4 shadow-2 border-round'>
        <div className='text-800 mb-2'>What is a closure in JavaScript?</div>
        <ul className='list-none p-0 m-0 border-top-1 border-300'>
          <li className='flex align-items-center pt-3  flex-wrap'>
            <div className='text-500 w-full md:w-2 font-medium'>Name</div>
            <div className='text-900 w-full md:w-10'>Lorem ipsum</div>
          </li>
          <li className='flex align-items-center pt-3  flex-wrap'>
            <div className='text-500 w-full md:w-2 font-medium'>Bio</div>
            <div className='text-900 w-full md:w-10 line-height-3'>
              Lorem ipsum dolor sit amet.
            </div>
          </li>
          <li className='flex align-items-center pt-3  flex-wrap'>
            <div className='text-500 w-full md:w-2 font-medium'>Tags</div>
            <div className='text-900 w-full md:w-10'>
              <div className='card flex flex-wrap  gap-2'>
                {tags.map((tag, index) => (
                  <Technolgies
                    key={index}
                    severity={tag.severity}
                    technology={tag.technology}
                  />
                ))}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
