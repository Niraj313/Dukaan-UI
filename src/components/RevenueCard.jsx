/** @format */
import WhiteCard from './WhiteCard';

const RevenueCard = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-m font-system-ui'>
      <div className='col-span-1 m-2 rounded-lg bg-blue-400 p-0 pt-3 text-white shadow-md hover:bg-blue-700 '>
        <span className='p-3 px-6 pb-0 flex gap-1 items-center'>
          Next Payment
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            class='size-5'>
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z'
            />
          </svg>
        </span>
        <div className='flex justify-between px-6 py-4 font-medium'>
          <span className='text-2xl'>₹ 2,234.90</span>
          <span className='flex justify-center cursor-pointer underline'>
            23 Orders
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              class='size-6'>
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='m8.25 4.5 7.5 7.5-7.5 7.5'
              />
            </svg>
          </span>
        </div>
        <div className='flex justify-between bg-blue-700 rounded-lg px-6 p-1 font-mediu, text-sm'>
          <span>Next Payment Date:</span>
          <span>Today, 4:00PM</span>
        </div>
      </div>
      <WhiteCard title={"Amount Pending"} amount={"92,312.20"} order={13}/>
      <WhiteCard title={"Amount Processed"} amount={"23,92,312.19"}/>
    </div>
  );
};

export default RevenueCard;
