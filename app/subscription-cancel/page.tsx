import Link from "next/link";

export default function SubscriptionCancel() {
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-red-100 rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-red-600">Subscription Cancelled</h1>
        <p className="text-red-600">Your subscription process was cancelled. If this was a mistake, please <Link className="text-cyan-500" href={"/stagesponsor"}>try again.</Link> </p>
      </div>
    )
  }