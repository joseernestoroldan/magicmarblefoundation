import { GoogleDriveResponse } from "@/types/types";

// Crear un plan de suscripción
export const createPlan = async (amount: string) => {
  try {
    const response = await fetch("/api/create-plan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount,
        frequency: 1,
        interval: "MONTH",
      }),
    });

    if (!response.ok) throw new Error("Error creating plan");

    const data = await response.json();
    return data.plan?.id;
  } catch (error) {
    console.error("Subscription creation error:", error);
    throw error;
  }
};

// Crear un suscriptor
export const createSubscriber = async (
  email: string,
  planId: string,
  firstName: string,
  secondName: string,
  amount: string,
  telephone: string,
  address: string,
  country: string
) => {
  try {
    const response = await fetch("/api/create-subscription", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        planId,
        firstName,
        secondName,
        amount,
        telephone,
        country,
        address,
      }),
    });

    if (!response.ok) throw new Error("Error creating subscription");

    return await response.json();
  } catch (error) {
    console.error("Subscription creation error:", error);
    throw error;
  }
};

// Obtener todos los planes
export const getPlans = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/query-all-plans`);
  if (!res.ok) throw new Error("Failed to fetch plans");
  return res.json();
};

// Obtener un plan específico
export const getPlan = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/query-all-plans/${id}`);
  if (!res.ok) throw new Error("Failed to fetch plan");
  return res.json();
};

// Eliminar suscripción
export const deleteSubscription = async (id: string) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cancel-subscription`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    if (!response.ok) throw new Error("Error cancelling subscription");

    return { success: true, response };
  } catch (error) {
    console.error("Subscription cancellation error:", error);
    return { success: false, error };
  }
};

// Fetch de documentos en Google Drive
export const fetchFiles = async (): Promise<GoogleDriveResponse> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/documents`);
  if (!res.ok) throw new Error("Failed to fetch files");
  return res.json();
};
