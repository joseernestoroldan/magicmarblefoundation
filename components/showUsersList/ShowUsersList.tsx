"use client";
import React, { use, useState } from "react";
import Search from "../search/Search";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useCallback } from "react";
import { countUsers, searchUser } from "@/actions/searchQuery";
import PaginationUtil from "../paginationUtil/PaginationUtil";
import FormUserAdmin from "../formUserAdmin/FormUserAdmin";
import { BeatLoader } from "react-spinners";
import UserDetails from "../userDetails/UserDetails";

const ShowUsersList = () => {
  const searchParams = useSearchParams();
  const q = searchParams.get("query") || "";
  const page = searchParams.get("page") || "1";
  const pageNumber = parseInt(page);
  const [users, setUsers] = useState<Array<any> | undefined>([]);
  const [count, setCount] = useState<number>(1);

  const onSearch = useCallback(() => {
    searchUser(q, pageNumber)
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        console.log(err);
      });
    countUsers(q)
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
    <div className="w-full max-w-5xl mx-auto">
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
        <table className="w-full border border-gray-200 my-4 text-gray-500">
          <thead className="font-semibold text-center">
            <tr>
              <td className="p-3 text-center">Name</td>
              <td className="p-3 text-center">Email</td>
              <td className="p-3 text-center">Country</td>
              <td className="p-3 text-center">Number</td>
              <td className="p-3 text-center">Is suscribed</td>
              <td className="p-3 text-center">Role</td>
              <td className="p-3 text-center">Details</td>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user.id}>
                  <td className="p-3 text-center capitalize">
                    {user.name
                      ? user.name
                      : user.firstName + " " + user.secondName}
                  </td>
                  <td className="p-3 text-center lowercase">{user.email}</td>
                  <td className="p-3 text-center capitalize">{user.country}</td>
                  <td className="p-3 text-center">
                    ({user.codeNumber}) {" " + user.number}
                  </td>
                  <td className="p-3 flex justify-center ">
                    {user.subscribed ? <FaCheck /> : ""}
                  </td>
                  <td className="p-3 text-center ">
                    <FormUserAdmin role={user.role} id={user.id} />
                  </td>

                  <td className="p-3 text-center flex justify-center">
                    <UserDetails
                      name={user.name}
                      firstName={user.firstName}
                      secondName={user.secondName}
                      email={user.email}
                      country={user.country}
                      codeNumber={user.codeNumber}
                      number={user.number}
                      subscribed={user.subscribed}
                      address={user.address}
                      emailVerified={user.emailVerified}
                      role={user.role}
                    />
                    {/* <Link href={`/details/${user.id}`}>
                      <button className="bg-cyan-500 text-white py-1 px-2 rounded-[5px]">
                        Details
                      </button>
                    </Link> */}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      <PaginationUtil count={count} />
    </div>
  );
};

export default ShowUsersList;
