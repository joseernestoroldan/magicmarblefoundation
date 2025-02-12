import { NextResponse } from "next/server";
import axios from "axios";
import { getPayPalAccessToken } from "../AccessToken";

export async function POST(request: Request) {
  try {
    const { planId, firstName, secondName, email } = await request.json();

    // Validate input
    if (!planId || !email || !firstName || !secondName) {
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
          return_url: `${process.env.NEXT_PUBLIC_PAYPAL_API_URL}/success`,
          cancel_url: `${process.env.NEXT_PUBLIC_PAYPAL_API_URL}/cancel`,
        },
        subscriber: {
          name: {
            given_name: firstName,
            surname: secondName,
          },
          email_address: email,
          // shipping_address: {
          //   name: {
          //     full_name: "John Doe",
          //   },
          //   address: {
          //     address_line_1: "2211 N First Street",
          //     address_line_2: "Building 17",
          //     admin_area_2: "San Jose",
          //     admin_area_1: "CA",
          //     postal_code: "95131",
          //     country_code: "US",
          //   },
          // },
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
