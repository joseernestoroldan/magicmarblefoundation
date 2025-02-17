import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { getPayPalAccessToken } from "../AccessToken";

export async function POST(request: NextRequest) {
  try {
    // Extract the subscription ID from the request body
    const { id } = await request.json();
    if (!id) {
      return NextResponse.json({ error: "Fields Missing" }, { status: 400 });
    }

    // Get the PayPal access token
    const accessToken = await getPayPalAccessToken();

    // Cancel the subscription using the PayPal API
    const cancelResponse = await axios.post(
      `${process.env.PAYPAL_API_BASE}/v1/billing/subscriptions/${id}/suspend`,
      {
        reason: "Not satisfied with the service", // Optional field
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    // Log the full response for debugging purposes
    console.log("PayPal API Response:", cancelResponse.data);
    console.log("Paypal response status:", cancelResponse.status);

    // Return only the relevant data in the response
    return NextResponse.json({
      message: "Subscription cancelled",
      subscriptionId: id,
      details: cancelResponse.data, // Include only the response payload
    });
  } catch (error) {
    // Log the error for debugging
    console.error("Error cancelling subscription:", error);

    // Handle Axios errors specifically
    if (axios.isAxiosError(error)) {
      console.error("PayPal API Error Response:", error.response?.data);
      return NextResponse.json(
        { error: "Failed to cancel subscription", details: error.response?.data },
        { status: error.response?.status || 500 }
      );
    }

    // Generic error response
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}