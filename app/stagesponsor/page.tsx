// import { auth } from '@/auth';


import SponsorForm from "@/components/donationForm/SponsorForm";
import { getUserById } from "@/data/user";
import { getSessionId } from "@/lib/sessions";
import React from "react";

const StagePaymentPage = async () => {
  const userId = await getSessionId();
  // const session = await auth();
  // const userId = session?.user.id;

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

  const getSessionUser = async () => {
    const user = await getUser();
    if (user) {
      const {
        email,
        firstName,
        secondName,
        country,
        codeNumber,
        number,
        address,
        name,
      } = user;
      return {
        email: email,
        firstName: firstName,
        secondName: secondName,
        country: country,
        codeNumber: codeNumber,
        number: number,
        address: address,
        name: name,
      };
    }
    return {
      email:null,
      firstName: null,
      secondName: null,
      country: null,
      codeNumber: null,
      number: null,
      address: null,
      name: null,
    };
  };

  const sessionUser = await  getSessionUser();

  return (
    <div className="w-full max-w-5xl mx-auto">
      <SponsorForm sessionUser={sessionUser} />
    </div>
  );
};

export default StagePaymentPage;
