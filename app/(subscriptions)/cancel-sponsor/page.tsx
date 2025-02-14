import FormSponsorCancel from "@/components/sponsor/FormSponsorCancel";
import { db } from "@/db";

const findSubscriptions = async (email: string) => {
  const subscriptions = await db.sponsor.findMany({ where: { email } });
  if (subscriptions.length === 0) return null;
  return subscriptions;
};

async function cancelSponsor({ email }: { email: string }) {
  "use server";

  try {
    console.log("Finding Subscriptions for:", email);
    const subscriptions = await findSubscriptions(email);
    console.log("Subscriptions:", subscriptions);

    // Example: Call an external API
    // await fetch("https://api.example.com/cancel-sponsor", {
    //   method: "POST",
    //   body: JSON.stringify({ email }),
    // });

    return { success: true, message: `Subscriptions found ${email}`, subscriptions:subscriptions };
  } catch (error) {
    console.error("Error finding subscriptions:", error);
    return { success: false, message: "Failed to fetch subscriptions", subscriptions:null };
  }
}

const CancelSponsorPage = async () => {
  return (
    <div className="flex flex-col items-center py-4 ">
      <FormSponsorCancel cancelSponsor={cancelSponsor} />
    </div>
  );
};
export default CancelSponsorPage;
