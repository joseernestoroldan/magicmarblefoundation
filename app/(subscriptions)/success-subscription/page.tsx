// File: app/success-subscription/page.js
interface SearchParams {
  subscription_id?: string;
}

export default function SuccessSubscriptionPage({ searchParams }: { searchParams: SearchParams }) {
    // Extract the subscription_id from searchParams
    const subscriptionId = searchParams.subscription_id || null;
  
    return (
      <div>
        <h1>Subscription ID:</h1>
        <p>{subscriptionId || "No subscription ID found"}</p>
      </div>
    );
  }