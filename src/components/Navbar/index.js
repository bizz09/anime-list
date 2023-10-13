import Link from "next/link"
import InputSearch from "./InputSearch"

const Navbar = () => {
  return (
    <header className="bg-accent">
      <div className="flex md:flex-row flex-col gap-3 md:items-center items-start justify-between p-4">
        <Link href='/' className="font-bold text-primary text-2xl">
        Zuinime ✨
        </Link>
        <InputSearch/>
      </div>
    </header>
  )
}

export default Navbar
