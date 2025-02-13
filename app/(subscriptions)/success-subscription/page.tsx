//  sponsorCompleted(
//   formData.email,
//   formData.amount,
//   formData.firstName,
//   formData.secondName,
//   formData.country,
//   formData.address,
//   formData.telephone
// );

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getPlan } from "@/lib/apiCalls";
import { PlanType } from "@/types/types";
import Image from "next/image";

type SearchParams = {
  subscription_id?: string;
  first_name?: string;
  second_name?: string;
  plan_id?: string;
  email?: string;
  amount_number?: string;
};

export default async function SuccessSubscriptionPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  // Extract the subscription_id from searchParams
  const {
    subscription_id,
    first_name,
    second_name,
    plan_id,
    email,
    amount_number,
  } = searchParams;


  const subscriptionId = subscription_id || null;
  const firstName = first_name || null;
  const secondName = second_name || null;
  const planId = plan_id || null;
  const emailUser = email || null;
  const amount = amount_number;

  

  const planDetails: PlanType = planId ? await getPlan(planId) : null

  console.log(planDetails)
 

const {create_time, description, status, name, id } = planDetails


  return (
<div className="h-auto text-cyan-500 w-full max-w-5xl mx-auto flex justify-center items-center flex-col">
      {/* Logo */}
      <div className="mb-8">
        <Image
          src="/logo.jpg" // Replace with your logo path
          alt="Magic Marble Foundation Logo"
          width={150}
          height={150}
          className="rounded-full"
        />
      </div>

      {/* Success Message */}
      <h1 className="text-2xl md:text-4xl font-bold mb-8">Subscription Successful!</h1>

      {/* Thank You Message */}
      <p className="text-xl md:text-2xl text-center font-bold mb-4">
        Thank you{" "}
        <span className="text-gray-500 font-extrabold underline">
          {firstName} {secondName}
        </span>{" "}
        for sponsoring at Magic Marble Foundation.
      </p>

      {/* Subscription Details */}
      <div className="text-gray-500 text-xl mb-8">
        <p className="text-center">
          A subscription has been created under the ID:
          <span className="font-extrabold text-2xl"> {subscriptionId}</span> for the
          amount: $
          <span className="font-extrabold text-2xl">{amount}</span> {" "} Monthly
        </p>
      </div>

      <Card className="rounded-2xl mb-4">
        <CardHeader className="text-2xl">Plan Details</CardHeader>
        <CardContent>
          <p>Plan Name: <span className="text-gray-400">{name}</span></p>
          <p>Description: <span className="text-gray-400">{description}</span></p>
          <p>Status: <span className="text-gray-400">{status}</span></p>
          <p>Plan Id: <span className="text-gray-400">{id}</span></p>
        </CardContent>
      </Card>

      {/* Go Home Button */}
      <a
        href="/"
        className="bg-cyan-500 rounded-full text-white px-6 py-3 font-bold text-lg hover:bg-cyan-600 transition duration-300"
      >
        Go Home
      </a>

      {/* Cancel Subscription Message */}
      <div className="mt-8 text-gray-500 text-base px-4">
        <p>
          If you wish to cancel your subscription now, please visit the{" "}
          <a
            href="/cancel-sponsor"
            className="text-cyan-500 font-bold underline hover:text-cyan-600 transition duration-300"
          >
            unsubscribe page
          </a>
          . Or unsubscribe whenever you want in Sponsor Section.
        </p>
      </div>
    </div>
  );
}
