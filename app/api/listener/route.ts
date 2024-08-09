import { SIGNATURE_HEADER_NAME, isValidSignature } from '@sanity/webhook';

const handler = async (req, res) => {

//authenticating the webhook
  try {
    //getting payload
    const { _id } = req.body;
    console.log(_id)
    
    res.status(200).json({ msg: 'Product pages revalidated.' });
  } catch (error) {
    res.status(500).json({ err: 'Something went Wrong!' });
  }
};

export default handler;