import { NextResponse } from 'next/server'
import axios from 'axios'

const PAYPAL_API_BASE = process.env.PAYPAL_API_BASE || 'https://api-m.sandbox.paypal.com'
const CLIENT_ID = process.env.PAYPAL_CLIENT_ID
const APP_SECRET = process.env.PAYPAL_APP_SECRET

export async function POST(req: Request) {
  try {
    const { amount } = await req.json()

    // Get access token
    const tokenResponse = await axios.post(`${PAYPAL_API_BASE}/v1/oauth2/token`, 'grant_type=client_credentials', {
      auth: {
        username: CLIENT_ID!,
        password: APP_SECRET!,
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })

    const accessToken = tokenResponse.data.access_token

    // Create subscription
    const subscriptionResponse = await axios.post(
      `${PAYPAL_API_BASE}/v1/billing/subscriptions`,
      {
        plan_id: 'P-0CP0656676651310XM36HM4Y', // Replace with your base plan ID
        application_context: {
          return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/subscription-success`,
          cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/subscription-cancel`,
        },
        plan: {
          billing_cycles: [
            {
              frequency: {
                interval_unit: 'MONTH',
                interval_count: 1,
              },
              tenure_type: 'REGULAR',
              sequence: 1,
              total_cycles: 0,
              pricing_scheme: {
                fixed_price: {
                  value: amount - 10,
                  currency_code: 'USD',
                },
              },
            },
          ],
        },
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    )

    const approvalUrl = subscriptionResponse.data.links.find(
      (link: { rel: string }) => link.rel === 'approve'
    ).href

    return NextResponse.json({ approvalUrl })
  } catch (error) {
    console.error('PayPal API error:', error)
    return NextResponse.json(
      { message: 'Failed to create subscription' },
      { status: 500 }
    )
  }
}