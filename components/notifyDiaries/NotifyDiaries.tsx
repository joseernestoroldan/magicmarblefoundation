"use client";
import Image from "next/image";
import React from "react";
import { MdMarkEmailRead } from "react-icons/md";
import { notifyDiary } from "@/actions/sentDiaries";

const NotifyDiaries = ({ diaries }: any) => {
  console.log(diaries);
 

  const handleNotify = (
    id: string,
    image: string,
    title: string,
    description: string,
    numberNotifications: number
  ) => {
    notifyDiary(id, image, title, description, numberNotifications);
  };

  return (
    <div className="w-full max-w-5xl mx-auto border border-gray-200 p-4 rounded-[5px] space-y-8">
      <h2 className="text-2xl text-gray-400 font-semibold">
        Diaries Notifications
      </h2>
      <div className="w-full flex justify-center overflow-x-scroll md:overflow-auto">
      <div className="w-full flex flex-col space-y-4 ">
        {diaries.map((item: any) => { 

            const numberNotifications = item.notificationsSent || 0
            console.log(item.notificationsSent)
            
            return(
          <div key={item._id} className="flex flex-row items-center space-x-4">
            <div className="w-16 h-14 min-w-16 relative rounded-[5px] overflow-hidden">
              <Image
                src={item.mainImage}
                alt="magic diaries"
                fill
                className="object-cover object-center"
              />
            </div>
            <p className="text-gray-500 w-full max-w-72 min-w-48">{item.title}</p>

            <div className="w-full max-w-32 flex items-center justify-center">
              <button
                onClick={() =>
                  handleNotify(
                    item._id,
                    item.title,
                    item.mainImage,
                    item.description,
                    numberNotifications 
                  )
                }
                className="py-1 px-2 rounded-full bg-cyan-500 text-white hover:bg-cyan-400"
              >
                {item.notificationSent ? "Notify Again" : "Notify"}
              </button>
            </div>

            <div className="flex flex-row items-center space-x-2 w-full min-w-40 max-w-44">
              <MdMarkEmailRead
                className={`text-xl ${item.notificationSent ? "text-emerald-500" : "text-gray-500"}`}
              />
              <p className="text-gray-500">
                {item.notificationSent ? "Notified" : "Not Notified Yet"}
              </p>
            </div>

            <div>
              <p className={`${numberNotifications === 0? "text-red-500" : "text-emerald-500"}`}>{numberNotifications === 0? "":`${numberNotifications} Notifications Sent`}</p>
            </div>
          </div>
)})}
      </div>
      </div>

    </div>
  );
};

export default NotifyDiaries;
