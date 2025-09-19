'use client'

import { useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import SearchIcon from "@mui/icons-material/Search";

export function SearchBar() {
  const [query, setQuery] = useState("");

  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams)
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch() {
    if (query) {
      params.set('search', query);
    } else {
      params.delete('search');
    }
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <form onSubmit={handleSearch} className="relative bg-white w-120 h-10 rounded-full flex justify-around z-[1000]">
      <input
        type="text"
        placeholder="Search..."
        className="flex bg-transparent outline-none w-7/8 h-full text-center z-[1000]"
        onChange={(e) => setQuery(e.target.value)}
      />
      <span className="w-0.5 h-full bg-black"></span>
      <button type="submit" className="cursor-pointer w-1/8 h-full rounded-r-full bg-gray-200">
        <SearchIcon/>
      </button>
    </form>
  )
};