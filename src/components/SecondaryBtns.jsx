import React from 'react'

const SecondaryBtns = ({prop}) => {
  return (
    <div>
        <button className=' border px-3 py-2 gap-1 h-fit flex items-center rounded-md text-white'>{prop}</button>
    </div>
  )
}

export default SecondaryBtns