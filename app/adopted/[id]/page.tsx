import React from "react";
import { auth } from "@/auth";
import { getOne } from "@/client";
import Image from "next/image";
import SessionAdoptionForm from "@/components/adoptions/sessionAdoptionForm/SessionAdoptionForm";
import { getUserById } from "@/data/user";

const AdoptedPage = async ({
  params: { id: _Id },
}: {
  params: { id: string };
}) => {
  const session = await auth();
  const userId = session?.user.id;

  const [candidate] = await getOne(_Id);
  //console.log(candidate)

  const left = candidate.crop ? Math.trunc(candidate.crop?.left * 100) : 50;
  const top = candidate.crop ? Math.trunc(candidate.crop?.top * 100) : 50;

  const getUser = async () => {
    if (!userId) {
      return null;
    }
    try {
      const user = await getUserById(userId);
      return user;
    } catch (error) {
      return null;
    }
  };

  const user = await getUser();
  //console.log(user);

  return (
    <div className="w-full max-w-5xl flex flex-col items-center mx-auto space-y-16">
    
      <div className="w-[100px] aspect-square rounded-[50%] bg-gray-500 relative overflow-hidden">
        <Image
          src={candidate.mainImage ?? "/no-profile.webp"}
          alt=""
          fill
          className={`object-cover
                     ${left < 20 && top < 20 && "object-[0%_0%]"} ${left > 20 && left < 40 && top < 20 && "object-[20%_0%]"} ${left > 40 && left < 60 && top < 20 && "object-top"} ${left > 60 && left < 80 && top < 20 && "object-[60%_0%]"} ${left > 80 && left < 100 && top < 20 && "object-[80%_0%]"}
                     ${left < 20 && top > 20 && top < 40 && "object-[0%_20%]"} ${left > 20 && left < 40 && top > 20 && top < 40 && "object-[20%_20%]"} ${left > 40 && left < 60 && top > 20 && top < 40 && "object-[40%_20%]"} ${left > 60 && left < 80 && top > 20 && top < 40 && "object-[60%_20%]"} ${left > 80 && left < 100 && top > 20 && top < 40 && "object-[80%_20%]"}
                     ${left < 20 && top > 40 && top < 60 && "object-[0%_40%]"} ${left > 20 && left < 40 && top > 40 && top < 60 && "object-[20%_40%]"} ${left > 40 && left < 60 && top > 40 && top < 60 && "object-[40%_40%]"} ${left > 60 && left < 80 && top > 40 && top < 60 && "object-[60%_40%]"} ${left > 80 && left < 100 && top > 40 && top < 60 && "object-[80%_40%]"}
                     ${left < 20 && top > 60 && top < 80 && "object-[0%_60%]"} ${left > 20 && left < 40 && top > 60 && top < 80 && "object-[20%_60%]"} ${left > 40 && left < 60 && top > 60 && top < 80 && "object-[40%_60%]"} ${left > 60 && left < 80 && top > 60 && top < 80 && "object-[60%_60%]"} ${left > 80 && left < 100 && top > 60 && top < 80 && "object-[80%_60%]"}
                     ${left < 20 && top > 80 && top < 100 && "object-[0%_80%]"} ${left > 20 && left < 40 && top > 80 && top < 100 && "object-[20%_80%]"} ${left > 40 && left < 60 && top > 80 && top < 100 && "object-[40%_80%]"} ${left > 60 && left < 80 && top > 80 && top < 100 && "object-[60%_80%]"} ${left > 80 && left < 100 && top > 80 && top < 100 && "object-[80%_80%]"}`}
        />
      </div>
      <h1 className="text-cyan-500 text-4xl">Adopt {candidate.title}</h1>
      <div className="w-full flex justify-center max-w-lg">
        
          <SessionAdoptionForm
            email={user?.email}
            firstName={user?.firstName}
            secondName={user?.secondName}
            country={user?.country}
            codeNumber={user?.codeNumber}
            number={user?.number}
            address={user?.address}
            animalName={candidate.title}
            animalId={_Id}
            animalImage={candidate.mainImage ?? "/no-profile.webp"}
          />
       
      </div>
      {/* <p>Adopted {_Id}</p>
      <p>User {userId}</p> */}
    </div>
  );
};

export default AdoptedPage;
