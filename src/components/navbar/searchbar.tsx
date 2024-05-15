import React from "react";
import { Input } from "../ui/input";
import { IoIosSearch } from "react-icons/io";

const Searchbar = () => {
  return (
    <div className="hidden w-[300px] items-center sm:inline-flex">
      <IoIosSearch size={20} className="absolute mx-2" />
      <Input
        type="search"
        placeholder="Search..."
        className="rounded-full pl-10"
      />
    </div>
  );
};

export default Searchbar;
