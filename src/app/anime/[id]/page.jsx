import { getAnimeResponse } from '@/libs/api-libs'
import VideoPlayer from '@/components/Utilities/VideoPlayer'
import Image from 'next/image'
import React from 'react'

const page = async ({ params: { id } }) => {
    const anime = await getAnimeResponse(`anime/${id}`)
    return (
        <div className='m-4'>
            <div className=''>
                <h3 className='font-bold md:text-2xl'>{anime.data.title} - {anime.data.year}</h3>
            </div>
            <div className='pt-4 flex gap-4 overflow-x-auto'>
                <div className='w-36 border border-dark flex flex-col items-center rounded p-2'>
                    <h3>Peringkat </h3>
                    <p>{anime.data.rank}</p>
                </div>
                <div className='w-36 border border-dark flex flex-col items-center rounded p-2'>
                    <h3>Score </h3>
                    <p>{anime.data.score}</p>
                </div>
                <div className='w-36 border border-dark flex flex-col items-center rounded p-2'>
                    <h3>Anggota </h3>
                    <p>{anime.data.members}</p>
                </div>
                <div className='w-36 border border-dark flex flex-col items-center rounded p-2'>
                    <h3>Episode </h3>
                    <p>{anime.data.episodes}</p>
                </div>
            </div>
            <div className='gap-2 flex sm:flex-nowrap flex-wrap pt-4'>
                <Image
                    src={anime.data.images.webp.image_url}
                    alt={anime.data.images.jpg.image_url}
                    height={250}
                    width={250}
                    className='rounded-sm object-cover'
                />
                <p className='text-justify text-xl'>
                    {anime.data.synopsis}
                </p>
            </div>
            <VideoPlayer youtubeId={anime.data.trailer.youtube_id}/>
        </div>
    )
}

export default page
