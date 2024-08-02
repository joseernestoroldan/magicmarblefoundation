import { auth } from "@/auth";
import SettingsTabs from "@/components/settingsTabs/SettingsTabs";
import { db } from "@/db";
import Link from "next/link";



const SettingsPage = async () => {
  const session = await auth();
  const userId = session?.user.id;

  const data = await db.user.findFirst({ where: { id: userId } });
  

  return (
    <div className="w-full max-w-5xl mx-auto border borde-gray-200 h-[80vh] flex flex-col items-center justify-center">
      {/* <p>{JSON.stringify(session)}</p> */}
      <SettingsTabs data={data}/>
      <Link href={"/profile"} className="text-cyan-500 underline">Back to Profile</Link>
      
    </div>
  );
};

export default SettingsPage;
