"use client"
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function InputSearch() {
    const searchRef = useRef();
    const router = useRouter()
    const handleSearch = (event) => {
        event.preventDefault()
        const keyword = searchRef.current.value.trim();
        if (keyword) {
            router.push(`/search/${keyword}`)
        } else {
            
        }

        if(!keyword || keyword.trim() == "" ) return
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch(event);
        }
    };
    return (
        <div className="relative ml-10 -mr-6">
            <input placeholder="Cari anime.." onKeyDown={handleKeyDown} className="p-2 border-2 border-black rounded-full w-[92%]" ref={searchRef} />
            <button className="absolute top-2 end-[15%] " onClick={handleSearch}><MagnifyingGlass size={25} className="" /></button>
        </div>
    )
}
