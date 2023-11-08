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
        <div className="relative">
            <input placeholder="Cari anime.." onKeyDown={handleKeyDown} className="p-2 border-2 border-black rounded-md min-w-[288px] text-dark" ref={searchRef} />
            <button className="absolute top-2 end-3 " onClick={handleSearch}><MagnifyingGlass size={25} className="text-dark" /></button>
            
        </div>
    )
}
