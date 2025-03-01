import axios from "axios";

export async function getPayPalAccessToken() {
    const auth = Buffer.from(
      `${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_APP_SECRET}`
    ).toString('base64');
  
    const response = await axios.post(
      `${process.env.PAYPAL_API_BASE}/v1/oauth2/token`,
      'grant_type=client_credentials',
      {
        headers: {
          Authorization: `Basic ${auth}`,
        },
      }
    );
  
    return response.data.access_token;
  }