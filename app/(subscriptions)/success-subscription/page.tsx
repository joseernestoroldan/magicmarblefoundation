//  sponsorCompleted(
//   formData.email,
//   formData.amount,
//   formData.firstName,
//   formData.secondName,
//   formData.country,
//   formData.address,
//   formData.telephone
// );

import Image from "next/image";

type SearchParams = {
  subscription_id?: string;
  first_name?: string;
  second_name?: string;
  plan_id?: string;
  email?: string;
  amount_number?: string;
};

export default function SuccessSubscriptionPage({
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
  console.log(searchParams);

  const subscriptionId = subscription_id || null;
  const firstName = first_name || null;
  const secondName = second_name || null;
  const planId = plan_id || null;
  const emailUser = email || null;
  const amount = amount_number;

  return (
<div className="h-[calc(100vh-180px)] text-cyan-500 w-full max-w-5xl mx-auto flex justify-center items-center flex-col">
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
      <h1 className="text-4xl font-bold mb-8">Subscription Successful!</h1>

      {/* Thank You Message */}
      <p className="text-2xl font-bold mb-4">
        Thank you{" "}
        <span className="text-gray-500 font-extrabold underline">
          {firstName} {secondName}
        </span>{" "}
        for sponsoring at Magic Marble Foundation.
      </p>

      {/* Subscription Details */}
      <div className="text-gray-500 text-xl mb-8">
        <p>
          A subscription has been created under the ID:
          <span className="font-extrabold"> {subscriptionId}</span> for the
          amount: $
          <span className="font-extrabold">{amount}</span>
        </p>
      </div>

      {/* Go Home Button */}
      <a
        href="/"
        className="bg-cyan-500 rounded-full text-white px-6 py-3 font-bold text-lg hover:bg-cyan-600 transition duration-300"
      >
        Go Home
      </a>

      {/* Cancel Subscription Message */}
      <div className="mt-8 text-gray-500 text-lg">
        <p>
          If you wish to cancel your subscription, please visit the{" "}
          <a
            href="/unsubscribe"
            className="text-cyan-500 font-bold underline hover:text-cyan-600 transition duration-300"
          >
            unsubscribe page
          </a>
          .
        </p>
      </div>
    </div>
  );
}
