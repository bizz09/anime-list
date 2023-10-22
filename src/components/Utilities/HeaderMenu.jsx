import React from 'react'

export default function HeaderMenu({title}) {
  return (
    <div>
      <div className='p-4'>
        <h3 className='text-center font-medium'>{title}</h3>
      </div>
    </div>
  )
}
