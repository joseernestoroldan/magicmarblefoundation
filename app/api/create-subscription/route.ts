import { NextResponse } from "next/server";
import axios from "axios";
import { getPayPalAccessToken } from "../AccessToken";

export async function POST(request: Request) {
  try {
    const { planId, firstName, secondName, email, amount } = await request.json();

    // Validate input
    if (!planId || !email || !firstName || !secondName || !amount) {
      return NextResponse.json(
        { error: "Fields Missing" },
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
          return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success-subscription?email=${email}&first_name=${firstName}&second_name=${secondName}&plan_id=${planId}&amount_number=${amount}`,
          cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel-subscription`,
        },
        subscriber: {
          name: {
            given_name: firstName,
            surname: secondName,
          },
          email_address: email,
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
