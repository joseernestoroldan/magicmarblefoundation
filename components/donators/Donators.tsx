"use client";
import React, { use, useState } from "react";
import Search from "../search/Search";
import { useSearchParams } from "next/navigation";
import { useEffect, useCallback } from "react";
import PaginationUtil from "../paginationUtil/PaginationUtil";
import { BeatLoader } from "react-spinners";
import { countDonators, searchDonators } from "@/actions/searchQueryDonators";

const ShowUsersList = () => {
  const searchParams = useSearchParams();
  const q = searchParams.get("query") || "";
  const page = searchParams.get("page") || "1";
  const pageNumber = parseInt(page);
  const [users, setUsers] = useState<Array<any> | undefined>([]);
  const [count, setCount] = useState<number>(1);

  const onSearch = useCallback(() => {
    searchDonators(q, pageNumber)
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        console.log(err);
      });
    countDonators(q)
      .then((count) => {
        setCount(count);
      })
      .catch((err) => console.log(err));
  }, [q, pageNumber]);

  useEffect(() => {
    onSearch();
  }, [onSearch]);

  if (!users) return null;

  return (
    <div className="w-full max-w-5xl mx-auto border border-gray-200 p-4 rounded-[5px]">
      <div>
        <Search />
      </div>

      {users.length === 0 && count !== 0 && (
        <p className="text-gray-500 text-lg w-full text-center">
          <BeatLoader color="#a8a4a4" />
        </p>
      )}
      {users.length === 0 && count === 0 && (
        <p className="text-center text-gray-500 text-lg">
          No register matches the query
        </p>
      )}
      {users.length !== 0 && (
        <div className="flex w-full overflow-x-scroll md:overflow-auto">
          <table className="w-full border border-gray-200 my-4 text-gray-500">
            <thead className="font-semibold text-center">
              <tr>
                <td className="p-3 text-center">First Name</td>
                <td className="p-3 text-center">Second Name</td>
                <td className="p-3 text-center">Amount</td>
                <td className="p-3 text-center">Email</td>
                <td className="p-3 text-center">Country</td>
                <td className="p-3 text-center">Address</td>
                <td className="p-3 text-center">Telephone</td>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return (
                  <tr key={user.id}>
                    <td className="p-3 text-center capitalize">
                      {user.firstName}
                    </td>
                    <td className="p-3 text-center lowercase">
                      {user.secondName}
                    </td>
                    <td className="p-3 text-center capitalize">
                      {user.amount}
                    </td>
                    <td className="p-3 text-center">
                      {user.email}
                    </td>
                    <td className="p-3 text-center">
                      {user.country}
                    </td>
                    <td className="p-3 text-center">
                      {user.address}
                    </td>
                    <td className="p-3 text-center">
                      {user.telephone}
                    </td>
                    
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      <PaginationUtil count={count} />
    </div>
  );
};

export default ShowUsersList;
