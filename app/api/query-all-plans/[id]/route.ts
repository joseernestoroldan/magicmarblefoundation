import axios from "axios";
import { NextResponse, NextRequest } from "next/server";
import { getPayPalAccessToken } from "../../AccessToken";

export async function GET(request: NextRequest, { params }: { params: { id: string }}) {

  const accessToken = await getPayPalAccessToken();

  const {id} = params
  
  console.log("id:", id);
 

  try {
    const response = await axios.get(
      `${process.env.PAYPAL_API_BASE}/v1/billing/plans/${id}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.error();
  }
}
