"use client"
import { FacebookLogo, GithubLogo, InstagramLogo } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='px-15 md:px-20 pt-10 pb-20 bg-white text-center md:text-start md:pt-20'>
            <div className='grid flex-cols-2 gap-4 md:flex md:justify-between mb-20'>
                <div className='grid md:flex gap-3 items-center justify-center'>
                    <Link href={`https://bizcode.netlify.app`} target='_blank'>
                        <Image src={`/biz-rounded.png`} height={50} width={50} alt='' className='mx-auto md:mx-0' /></Link>
                    <div>
                        <h1 className='text-dark font-medium text-2xl'>Zuinime</h1>
                        <p className='text-dark'>Website ini dibuat pada tahun 1997, dan dibuat oleh anak muda berdarah turkey</p>
                    </div>
                </div>
                <div className='flex text-center items-center justify-center'>
                    <div className='flex gap-4'>
                        <Link href='https://github.com/bizz09' target='_blank'>
                            <GithubLogo size={32} color='dark' />
                        </Link>
                        <Link href={'https://www.instagram.com/zufrds_/'} target='_blank'>
                            <InstagramLogo size={32} color="dark" />
                        </Link>
                        <Link href={'https://www.facebook.com/profile.php?id=100067827127050'} target='_blank'>
                            <FacebookLogo size={32} color='dark' />
                        </Link>
                    </div>
                </div>
            </div>
            <div className='grid justify-center gap-2 mt-4 md:flex md:justify-between'>
                <div className='flex items-center justify-center'>
                    <div className='flex gap-4 text-dark'>
                        <h1>&copy;2023 zufrds_</h1>
                        <h1>Terms</h1>
                        <h1>Privacy</h1>
                        <h1>Cookies</h1>
                    </div>
                </div>
                <div className='flex grid-cols-6 items-center justify-center'>
                    <div className='flex gap-4 text-dark'>
                        <h1>Anime</h1>
                        <h1>Manga</h1>
                        <h1>Top Anime</h1>
                        <h1>Top Manga</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
