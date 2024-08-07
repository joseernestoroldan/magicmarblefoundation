import React from "react";
import { auth, signOut } from "@/auth";
import { db } from "@/db";
import { MdVerifiedUser } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { IoMdSettings } from "react-icons/io";
import ShowUsersList from "@/components/showUsersList/ShowUsersList";
import Link from "next/link";

const ProfilePage = async () => {
  const session = await auth();
  const userId = session?.user.id;
  const role = session?.user.role === "ADMIN";
  const data = await db.user.findFirst({ where: { id: userId } });

  return (
    <div className="w-full flex flex-col items-start justify-center space-y-4 max-w-5xl mx-auto p-8  rounded-[10px] border border-gray-300">
      <div className="w-full flex justify-between">
        <h1 className="text-2xl text-gray-400 font-semibold">Profile</h1>
        <Link
          className="text-cyan-500 underline text-lg flex justify-center gap-2 items-center"
          href={"/settings"}
        >
          <IoMdSettings /> Settings
        </Link>
      </div>

      {!data?.name && (
        <div className="sm:text-4xl text-2xl text-gray-500 font-bold flex space-x-2 uppercase ">
          <p>{data?.firstName}</p>
          <p>{data?.secondName}</p>
        </div>
      )}

      {data?.name && (
        <div className="sm:text-4xl text-2xl text-gray-500 font-bold flex space-x-2 uppercase">
          <p>{data?.name}</p>
        </div>
      )}

      <div className="flex space-x-2 text-gray-500 text-xl sm:items-center sm:flex-row flex-col items-start ">
        <p className="font-semibold capitalize">Email:</p>
        <p className="font-medium lowercase">{data?.email}</p>
        {data?.name && <FcGoogle />}
      </div>

      {data?.country && (
        <div className="flex space-x-2 text-gray-500 text-xl sm:items-center sm:flex-row flex-col items-start">
          <p className="font-semibold capitalize">Country:</p>
          <p className="font-medium capitalize">{data?.country}</p>
        </div>
      )}

      {data?.address && (
        <div className="flex space-x-2 text-gray-500 text-xl sm:items-center sm:flex-row flex-col items-start">
          <p className="font-semibold capitalize">Address:</p>
          <p className="font-medium capitalize">{data?.address}</p>
        </div>
      )}

      {data?.number && (
        <div className="flex space-x-2 text-gray-500 text-xl">
          <p className="font-semibold capitalize">Telephone:</p>
          <p className="font-medium capitalize">({data?.codeNumber})</p>
          <p className="font-medium capitalize">{data?.number}</p>
        </div>
      )}

      {data?.emailVerified && (
        <div className="font-semibold capitalize text-cyan-300 text-xl flex items-center space-x-2">
          <MdVerifiedUser className="text-2xl" />
          <p>User account verified</p>
        </div>
      )}

      {data?.role === "USER" && (
        <div className="font-semibold capitalize text-cyan-300 text-xl flex items-center space-x-2">
          <FaUser className="text-2xl" />
          <p>User Credentials</p>
        </div>
      )}

      {data?.role === "ADMIN" && (
        <div className="font-semibold capitalize text-cyan-300 text-xl flex items-center space-x-2">
          <RiAdminFill className="text-2xl" />
          <p>Admin Credentials</p>
        </div>
      )}

      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button
          className="bg-cyan-500 hover:bg-opacity-80 text-white rounded-full py-2 px-6"
          type="submit"
        >
          Sign Out
        </button>
      </form>
      {role && <ShowUsersList />}
    </div>
  );
};

export default ProfilePage;
