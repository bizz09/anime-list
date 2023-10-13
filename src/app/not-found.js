"use client"
import { FileSearch } from '@phosphor-icons/react'
import Link from 'next/link'
import React from 'react'

export default function NotFound() {
    return (
        <div className='min-h-screen max-w-xl mx-auto flex flex-col justify-center items-center'>
            <div className='flex justify-center items-center gap-2 pb-4'>
                <FileSearch size={32} className='text-accent'/>
                <h1 className='text-accent font-bold text-2xl'>| NOT FOUND</h1>
            </div>
                <Link href='/' className='p-2 rounded-md bg-primary text-dark hover:bg-accent hover:text-primary'>
                Kembali
                </Link>
        </div>
    )
}
