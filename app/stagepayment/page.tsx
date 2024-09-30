import { auth } from '@/auth';
import DonationForm from '@/components/donationForm/DonationForm'
import { getUserById } from '@/data/user';
import React from 'react'

const StagePaymentPage = async () => {
    const session = await auth();
    const userId = session?.user.id;

    const getUser = async () => {
        if (!userId) {
          return null;
        }
        try {
          const user = await getUserById(userId);
          return user;
        } catch (error) {
          return null;
        }
      };
    
      const user = await getUser();

  
  return (
    <div className='w-full max-w-5xl mx-auto'>
        <DonationForm
        email={user?.email}
        firstName={user?.firstName}
        secondName={user?.secondName}
        country={user?.country}
        codeNumber={user?.codeNumber}
        number={user?.number}
        address={user?.address}
        />
    </div>
  )
}

export default StagePaymentPage