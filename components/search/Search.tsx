"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { MdSearch } from "react-icons/md";
import { useDebouncedCallback } from "use-debounce";

const Search = () => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const params = new URLSearchParams(searchParams);
      params.set("page", "1")
      if (e.target.value) {
        e.target.value.length > 2 && params.set("query", e.target.value);
      } else {
        params.delete("query");
      }
      replace(`${pathName}?${params}`);
    },
    200
  );

  return (
    <div className="flex items-center bg-transparent p-2 w-max border border-gray-200 rounded-[5px]">
      <MdSearch className="text-gray-400 w-6 h-6" />
      <input
        type="text"
        placeholder="Search for user..."
        className="bg-transparent border-none text-gray-500 outline-none"
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
