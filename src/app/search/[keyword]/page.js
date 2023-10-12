import React from 'react'
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

export default async function Search({ params }) {
  const { keyword } = params
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`)
  const searchAnime = await response.json()
  // console.log(params)
  return (
    <>
      <section>
        <Header title={`Pencarian untuk ${keyword}`}/>
        <AnimeList api={searchAnime} />
      </section>
    </>
  )
}
