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

export const createSubscriber = async (email: string, planId: string) => {
  try {
    const response = await fetch("/api/create-subscription", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, planId: planId }),
    });
    
    if(response.ok) return response
    throw new Error("Something went wrong")
  } catch (error) {
    console.error("Subscription creation error:", error);
    throw new Error("Something went very wrong!")
  }
};
