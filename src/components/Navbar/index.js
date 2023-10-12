import Link from "next/link"
import InputSearch from "./InputSearch"

const Navbar = () => {
  return (
    <header className="bg-indigo-500">
      <div className="flex md:flex-row flex-col gap-3 md:items-center items-start justify-between p-4">
        <Link href='/' className="font-bold text-white text-2xl">
        Zuinime ✨
        </Link>
        <InputSearch/>
      </div>
    </header>
  )
}

export default Navbar
