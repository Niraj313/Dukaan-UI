/** @format */

const WhiteCard = ({title, amount, order, active}) => {
  return (
    <div className='col-span-1 m-2 rounded-lg shadow-md bg-white p-0 h-fit font-system-ui'>
      <span className='p-3 pb-0 flex gap-1 items-center px-6 text-gray-700'>
        {title}
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
            d='M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z'
          />
        </svg>
      </span>
      <div className='flex justify-between px-6 py-4'>
        <span className='text-2xl font-medium'>{`₹ ${amount}`}</span>
        {order?<span className='flex justify-center cursor-pointer underline text-blue-400 pt-1 text-sm font-medium'>
            {`${order} Orders`}
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
        </span>:""}
      </div>
    </div>
  );
};

export default WhiteCard;
