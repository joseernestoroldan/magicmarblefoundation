"use client";
import { DeleteAccount } from "@/actions/delete";
import { logout } from "@/actions/logout";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogClose,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useRouter } from "next/navigation";

const DangerZone = ({ data }: any) => {
  const router = useRouter();


  const handleDelete = () => {
    console.log("client id:", data.data.id);
    DeleteAccount(data.data.id).then((data) => {
        if(data.success){
            logout()
        }
    })
  };

  return (
    <div className="border border-red-500 bg-red-100 w-full h-[300px] flex flex-col justify-center items-center rounded-[5px]">
      <Dialog>
        <DialogTrigger asChild>
          <button className="bg-red-200 text-red-600 text-lg py-2 px-4 border-red-600 rounded-[5px] border">
            Delete Account
          </button>
        </DialogTrigger>
        <DialogContent className="bg-red-100 text-red-600">
          <DialogHeader>
            <DialogTitle className="text-xl text center flex justify-center">
              Are you absolutely sure?
            </DialogTitle>

            <div className="w-full flex justify-center gap-x-10 py-8">
              <button
                onClick={handleDelete}
                className="bg-red-200 text-red-600 text-lg py-2 px-6 border-red-600 rounded-[5px] border hover:bg-opacity-70"
              >
                Delete
              </button>
              <DialogClose asChild>
                <button className="bg-gray-200 text-gray-600 text-lg py-2 px-6 border-gray-600 rounded-[5px] border hover:bg-opacity-70">
                  Cancel
                </button>
              </DialogClose>
            </div>
            <DialogDescription className="text-base text-center">
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DangerZone;
