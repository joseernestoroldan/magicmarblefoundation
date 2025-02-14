import { PlanType } from "@/types/types";

export const createPlan = async (amount: string) => {
  try {
    const response = await fetch("/api/create-plan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: amount,
        frequency: 1,
        interval: "MONTH",
      }),
    });
    const data = await response.json();
    console.log(data);
    const planId = data.plan.id;
    return planId;
  } catch (error) {
    console.error("Subscription creation error:", error);
  }
};

export const createSubscriber = async (
  email: string,
  planId: string,
  firstName: string,
  secondName: string,
  amount: string,
  telephone: string,
  address: string,
  country: string,
) => {
  try {
    const response = await fetch("/api/create-subscription", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        planId: planId,
        firstName: firstName,
        secondName: secondName,
        amount: amount,
        telephone: telephone,
        country: country,
        address: address,
      }),
    });

    if (response.ok) return response;

    throw new Error("Something went wrong");
  } catch (error) {
    console.error("Subscription creation error:", error);
    throw new Error("Something went very wrong!");
  }
};

export const getPlans = async () => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/query-all-plans`
  );
  const plans = await data.json();
  return plans;
};

export const getPlan = async (id: string) => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/query-all-plans/${id}`
  );
  const plan = await data.json();
  return plan;
};
