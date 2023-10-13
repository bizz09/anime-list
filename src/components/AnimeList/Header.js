import Link from 'next/link'
import React from 'react'

export default function Header({ title, linkHref, linkTitle }) {
    return (
        <div className="p-4 flex justify-between">
            <h1 className="md:text-2xl text-md font-bold text-primary">{title}</h1>
            {
                linkHref && linkTitle ?
                    <Link href={linkHref} className="md:text-2xl text-md font-medium underline hover:text-accent text-primary transition-all">{linkTitle}</Link> : null
            }
        </div>
    )
}
