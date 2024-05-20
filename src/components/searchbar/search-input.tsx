"use client";

import React, { useState } from "react";
import { Input } from "../ui/input";
import { IoIosSearch } from "react-icons/io";
import { useRouter, useSearchParams } from "next/navigation";

//searchbar component
const Searchbar = () => {
  //useSearchParams hook
  const search = useSearchParams();
  //useState hook to store search query
  const [searchQuery, setSearchQuery] = useState<string | null>(
    search ? search.get("q") : null,
  );
  const router = useRouter();

  //onSearch function , if searchQuery is not a string return nothing
  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (typeof searchQuery !== "string") {
      return;
    }
    // if searchQuery is a string , encode the searchQuery and push the search query to the router
    const encodedSearchQuery = encodeURIComponent(searchQuery);
    router.push(`/search?q=${encodedSearchQuery}`);
  };
  return (
    <form onSubmit={onSearch} className=" w-full items-center sm:inline-flex">
      <IoIosSearch size={20} className="absolute mx-2" />
      <Input
        type="search"
        placeholder="Search..."
        className="rounded-full pl-10"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </form>
  );
};

export default Searchbar;
