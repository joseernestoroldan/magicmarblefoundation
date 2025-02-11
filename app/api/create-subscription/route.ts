import { NextResponse } from "next/server";
import axios from "axios";
import { getPayPalAccessToken } from "../AccessToken";

export async function POST(request: Request) {
  try {
    const { planId } = await request.json();

    // Validate input
    if (!planId) {
      return NextResponse.json(
        { error: "Plan ID is required" },
        { status: 400 }
      );
    }
    const accessToken = await getPayPalAccessToken();

    const subscriptionResponse = await axios.post(
      `${process.env.PAYPAL_API_BASE}/v1/billing/subscriptions`,
      {
        plan_id: planId,
        application_context: {
          brand_name: "Magic Marble Foundation",
          locale: "en-US",
          shipping_preference: "NO_SHIPPING",
          user_action: "SUBSCRIBE_NOW",
          return_url: `${process.env.NEXT_PUBLIC_PAYPAL_API_URL}/success`,
          cancel_url: `${process.env.NEXT_PUBLIC_PAYPAL_API_URL}/cancel`,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    return NextResponse.json(
      {
        success: true,
        subscription: subscriptionResponse.data,
        message: "Subscription completed",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("PayPal API error:", error);
    return NextResponse.json(
      { message: "Failed to create subscription", success: false },
      { status: 500 }
    );
  }
}
