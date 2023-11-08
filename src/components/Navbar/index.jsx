"use client"

import InputSearch from "./InputSearch"
import {
  Navbar,
  Typography,
  IconButton,
  Button,
  Input,
} from "@material-tailwind/react";
import { BellIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";
import UserActionButton from "./UserActionButton";
 

const Page = () => {
  // return (
  //   <header className="bg-accent m-3 rounded-full shadow-md">
  //     <div className="flex md:flex-row grid-col-2 px-8 gap-3 md:items-center items-center justify-between p-4">
  //       <Link href='/' className="font-bold text-primary text-xl">
  //       Zuinime
  //       </Link>
  //       <InputSearch/>
  //       <UserActionButton/>
  //     </div>
  //   </header>
  // )


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
            <Cog6ToothIcon className="h-4 w-4" />
          </IconButton>
          <IconButton variant="text" color="gray">
            <BellIcon className="h-4 w-4" />
          </IconButton>
        </div>
        <div className="relative flex w-full gap-2 md:w-max">
          <InputSearch/>
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
