import Link from "next/link"
import InputSearch from "./InputSearch"

const Navbar = () => {
  return (
    <header className="bg-accent m-3 rounded-full shadow-md">
      <div className="flex md:flex-row flex-row px-8 gap-3 md:items-center items-center justify-between p-4">
        <Link href='/' className="font-bold text-primary text-xl">
        Zuinime
        </Link>
        <InputSearch/>
      </div>
    </header>
  )
}

export default Navbar
