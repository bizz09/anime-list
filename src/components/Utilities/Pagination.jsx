import { CaretDoubleLeft, CaretDoubleRight, CaretLeft, CaretRight } from '@phosphor-icons/react'
import React from 'react'

export default function Pagination({ page, lastPage, setPage }) {

  const scrollTop = () => {
    scrollTo({
      behavior: 'smooth',
      top: 0
    })
  }

  const handleNextPage = () => {
    setPage((setPrev) => setPrev + 1)
    scrollTop()
  }
  const handlePrevPage = () => {
    setPage((setPrev) => setPrev - 1)
    scrollTop()
  }
  return (
    <div className='flex justify-center items-center py-4 px-2 gap-4'>
      {page <= 1 ? null : (
        <button onClick={handlePrevPage} className='transition-all hover:text-accent'><CaretLeft size={28} /></button>
      )}
      <p className='font-medium'>{page} dari {lastPage}</p>
      {page >= lastPage ? null : (
        <button onClick={handleNextPage} className='transition-all hover:text-accent'><CaretRight size={28} /></button>
      )}
    </div>
  )
}
