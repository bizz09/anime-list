"use client"

import React, { useEffect, useState } from 'react'
import HeaderMenu from '@/components/Utilities/HeaderMenu'
import Pagination from '@/components/Utilities/Pagination'
import AnimeList from '@/components/AnimeList'

const page = () => {
  
  const [page, setPage] = useState(1)
  const [topAnime, setTopAnime] = useState([])

  const fetchData = async() => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`)
    const data = await response.json()
    setTopAnime(data)
  }

  useEffect(() => {
    fetchData()
  }, [page])

  
  return (
    <>
      <HeaderMenu title={`Anime terpopuler #${page}`}/>
      <AnimeList api={topAnime}/>
      <Pagination page={page} lastPage={topAnime.pagination?.last_visible_page ? topAnime.pagination.last_visible_page : 0} setPage={setPage}/>
    </>
  )
}

export default page