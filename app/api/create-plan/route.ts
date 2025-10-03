import axios from "axios";
import { NextResponse, NextRequest } from "next/server";
import { getPayPalAccessToken } from "../AccessToken";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { amount, frequency, interval } = body;
    if (!amount || !frequency || !interval) {
      return NextResponse.json(
        { error: "Missing required fields", amount, frequency, interval },
        { status: 400 }
      );
    }
    const accessToken = await getPayPalAccessToken();

    const product = await axios.post(
      `${process.env.PAYPAL_API_BASE}/v1/catalogs/products`,
      {
        name: "MMF Sponsorship",
        description: "Sponsorship At MMF",
        type: "SERVICE",
        category: "SOFTWARE",
        image_url: "https://example.com/streaming.jpg",
        home_url: "https://example.com/home",
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
          Accept: "application/json",
          "PayPal-Request-Id": "PRODUCT-22334455",
          Prefer: "return=representation",
        },
      }
    );

    const planResponse = await axios.post(
      `${process.env.PAYPAL_API_BASE}/v1/billing/plans`,
      {
        product_id: "PROD-0CS017538K0865625",
        name: `Monthly Sponsorship for $${amount}`,
        description: "A subscription plan with monthly billing.",
        billing_cycles: [
          {
            frequency: {
              interval_unit: "MONTH",
              interval_count: 1,
            },
            tenure_type: "REGULAR",
            sequence: 1,
            total_cycles: 0,
            pricing_scheme: {
              fixed_price: {
                value: amount,
                currency_code: "USD",
              },
            },
          },
        ],
        payment_preferences: {
          auto_bill_outstanding: true,
          setup_fee: {
            value: "0",
            currency_code: "USD",
          },
          setup_fee_failure_action: "CONTINUE",
          payment_failure_threshold: 3,
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
        product: product.data,
        plan: planResponse.data,
        message: "Paypal plan created successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to create PayPal plan" },
      { status: 500 }
    );
  }
}
