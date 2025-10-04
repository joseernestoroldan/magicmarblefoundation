// import SponsorForm from "@/components/donationForm/SponsorForm";
import SponsorFormb from "@/components/donationForm/SponsorFormBeta";
import { getUserById } from "@/data/user";
import { getSessionId } from "@/app/lib/sessions";
import React from "react";

const StagePaymentPage = async () => {

  // const userId = await getSessionId();

  // const getUser = async () => {
  //   if (!userId) {
  //     return null;
  //   }
  //   try {
  //     const user = await getUserById(userId);
  //     return user;
  //   } catch (error) {
  //     return null;
  //   }
  // };

  // const getSessionUser = async () => {
  //   const user = await getUser();
  //   if (user) {
  //     const {
  //       email,
  //       firstName,
  //       secondName,
  //       country,
  //       codeNumber,
  //       number,
  //       address,
  //       name,
  //     } = user;
  //     return {
  //       email: email,
  //       firstName: firstName,
  //       secondName: secondName,
  //       country: country,
  //       codeNumber: codeNumber,
  //       number: number,
  //       address: address,
  //       name: name,
  //     };
  //   }
  //   return {
  //     email: null,
  //     firstName: null,
  //     secondName: null,
  //     country: null,
  //     codeNumber: null,
  //     number: null,
  //     address: null,
  //     name: null,
  //   };
  // };

  // const sessionUser = await getSessionUser();

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* <SponsorForm sessionUser={sessionUser} /> */}
      <SponsorFormb />
    </div>
  );
};

export default StagePaymentPage;
