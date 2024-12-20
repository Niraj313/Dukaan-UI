/** @format */

import React from 'react';
import Topbar from './Topbar';
import SecondaryBtns from './SecondaryBtns';
import RevenueCard from './RevenueCard';
import OrderHistory from './OrderHistory';

const Dashboard = () => {
  return (
    <div className='bg-[#fafafa]'>
      <Topbar />
      <div className='p-4'>
        <div className='flex justify-between px-1'>
          <h1 className='p-2 font-medium text-xl'>Overview</h1>
          <SecondaryBtns
            prop={
              <>
                {'This Month'}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  class='size-4'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='m19.5 8.25-7.5 7.5-7.5-7.5'
                  />
                </svg>
              </>
            }
          />
        </div>
        <RevenueCard />
        <h1 className='p-2 font-meduim text-xl'>Transactions | This Month</h1>
        <div className='flex gap-2 py-2'>
          <button className='bg-gray-200 py-2 px-3 text-gray-600 rounded-2xl text-xxl'>
            Payouts (22)
          </button>
          <button className='bg-blue-400 py-2 px-3 text-gray-100 rounded-2xl text-xxl/[8px]'>
            Refunds (6)
          </button>
        </div>
        <OrderHistory />
      </div>
      <div className='flex flex-col justify-center items-center text-gray-400 md:text-sm text-xs p-2'>
        <p>
          Made By{' '}
          <a
            href=''
            target='_blank'
            className='text-blue-400'>
            Niraj Gupta
          </a>
          , inspired by{' '}
          <a
            href='https://x.com/subhashchy/status/1744308069751025894'
            target='_blank'
            className='text-blue-400'>
            Dukaan App UI
          </a>
        </p>
        <a href='https://github.com/Niraj313/Dukaan-UI'>
          Get the source code
        </a>
      </div>
    </div>
  );
};

export default Dashboard;
