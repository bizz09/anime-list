import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AnimeList = ({ api }) => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 p-4 ">
      {api.data.map((anime) => {
        return (
          <Link href={`/${anime.mal_id}`} className='cursor-pointer text-primary  transition-all '>
            <div className='relative shadow-md '>
              <div className=''>
                <Image src={anime.images.webp.image_url} width={350} height={350} alt='' className='w-full max-h-64 object-cover rounded-lg' />
              </div>
              <div className='absolute justify-items-center bottom-0 w-[100%] h-[30%] bg-dark/75 rounded-lg'>
                <h3 className='font-bold md:text-md text-sm p-2'>{anime.title}</h3>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default AnimeList
