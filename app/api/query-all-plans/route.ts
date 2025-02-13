import axios from "axios";
import { NextResponse, NextRequest } from "next/server";
import { getPayPalAccessToken } from "../AccessToken";

export async function GET() {
  const accessToken = await getPayPalAccessToken();

  try {
    const plans = await axios.get(
      `${process.env.PAYPAL_API_BASE}/v1/billing/plans`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
          Accept: "application/json",
          Prefer: "return=representation",
        },
      }
    );

    


   return NextResponse.json(plans.data)
  } catch (error) {
    console.log(error)
    return NextResponse.json("Something went wrong!!")

  }
}
