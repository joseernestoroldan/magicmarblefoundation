
import FormSponsorCancel from "@/components/sponsorsComponents/FormSponsorCancel";
import { db } from "@/db";
import { deleteSubscription } from "@/lib/apiCalls";


const findSubscriptions = async (email: string) => {
  const subscriptions = await db.sponsor.findMany({ where: { email } });
  return subscriptions;
};

async function findSubscription({ email }: { email: string }) {
  "use server";
  try {
    const subscriptions = await findSubscriptions(email);
    return {
      success: true,
      message: `Subscriptions found ${email}`,
      subscriptions: subscriptions,
    };
  } catch (error) {
    console.error("Error finding subscriptions:", error);
    return {
      success: false,
      message: "Failed to fetch subscriptions",
      subscriptions: null,
    };
  }
}

async function cancelSubscription(idSub: string) {
  "use server";
  try {
    const register = await db.sponsor.findFirst({ where: { idSub: idSub } });
    if (!register) throw new Error("Subscription not found!!");
    const id = register.id;
    const response = await deleteSubscription(idSub);
    if (!response.success) return {success: false, message: "Failed to cancel subscription"}
    await db.sponsor.delete({ where: { id } });
    

    return { success: true, message: `Subscription cancelled ${id}` };
  } catch (error) {
    console.error("Error cancelling subscription:", error);
    return { success: false, message: "something went wrong with the cancel subscription" };
  }
}

const CancelSponsorPage = async () => {
  return (
    <div className="flex flex-col items-center py-4 ">
      <FormSponsorCancel
        findSubscription={findSubscription}
        cancelSubscription={cancelSubscription}
      />
    </div>
  );
};
export default CancelSponsorPage;
