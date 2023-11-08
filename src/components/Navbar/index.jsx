"use client"

import { IconButton, Navbar, Typography } from "@material-tailwind/react";
import InputSearch from "./InputSearch"
import UserActionButton from "./UserActionButton";
import Link from "next/link";
import { BellIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";
import { SignOut, UserGear } from "@phosphor-icons/react";


const Page = () => {
  // return (
  //     <header className="bg-accent m-3 rounded-full shadow-md">
  //       <div className="flex md:flex-row grid-col-2 px-8 gap-3 md:items-center items-center justify-between p-4">
  //         <Link href='/' className="font-bold text-primary text-xl">
  //         Zuinime
  //         </Link>
  //         <InputSearch/>
  //         <UserActionButton/>
  //       </div>
  //     </header>
  //   )


  return (
    <Navbar
      variant="gradient"
      color="white"
      className="mx-auto from-blue-gray-900 to-blue-gray-800 px-4 py-3 my-3"
    >
      <div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
        <Typography
          as="a"
          href="/"
          variant="h6"
          className="mr-4 ml-2 cursor-pointer py-1.5 text-dark"
        >
          Zuinime
        </Typography>
        <div className="ml-auto flex gap-1 md:mr-4">
          <IconButton variant="text" color="gray">
          <UserGear size={20} weight="bold" />
          </IconButton>
          <IconButton variant="text" color="gray">
          <SignOut size={20} weight="bold" />
          </IconButton>
        </div>
        <div className="relative justify-center  flex w-full gap-2 md:w-max">
          <InputSearch />
          {/* <UserActionButton/> */}
          {/* <Input
                
  type="search"
  color="gray"
  label="Type here..."
  className="pr-20"
  containerProps={{
  className: "min-w-[288px]",
  }}
  />
  <Button
  size="sm"
  color="gray"
  className="!absolute right-1 top-1 rounded"
  >
                Search
  </Button> */}
        </div>
      </div>
      {/* <UserActionButton/> */}
    </Navbar>
  );
}

export default Page
