"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UpdateForm from "../auth/updateForm/UpdateForm";
import Link from "next/link";
import DangerZone from "../dangerzone/DangerZone";

const SettingsTabs = (data: any) => {
  return (
    <div className="w-full max-w-5xl mx-auto h-[500px]">
      <Tabs defaultValue="account" className="sm:w-[400px] w-[300px] mx-auto">
        <TabsList>
          <TabsTrigger
            className="data-[state=active]:bg-gray-100 rounded-t-[5px]"
            value="account"
          >
            Account
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-gray-100 rounded-t-[5px]"
            value="password"
          >
            Password
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-red-100  rounded-t-[5px] data-[state=active]:text-red-600"
            value="danger"
          >
            Danger Zone
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <div className="flex flex-col space-y-8 justify-center items-center pt-8">
            <h2 className="text-xl text-gray-500 font-medium">
              Make changes to your account here.
            </h2>
            <UpdateForm data={data} />
          </div>
        </TabsContent>
        <TabsContent value="password">
          <div className="flex flex-col justify-center items-center space-y-8 pt-8">
            <h2 className="text-xl text-gray-500 font-medium">
              Change your password here.
            </h2>
            <Link
              className="border border-cyan-500 text-cyan-500 py-4 px-6 rounded-full"
              href={"/reset"}
            >
              Reset your password
            </Link>
          </div>
        </TabsContent>
        <TabsContent value="danger">
          <div className="flex flex-col justify-center items-center space-y-8 pt-8">
            <DangerZone data={data} />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SettingsTabs;
