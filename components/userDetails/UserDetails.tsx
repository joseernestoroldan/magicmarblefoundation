import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import {
  MdOutlineUnsubscribe,
  MdUnsubscribe,
  MdVerifiedUser,
} from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";

type UserDetailsProps = {
  name?: string;
  firstName?: string;
  secondName?: string;
  email?: string;
  country?: string;
  address?: string;
  codeNumber?: string;
  number?: string;
  subscribed?: boolean;
  emailVerified: Date;
  role: "ADMIN" | "USER";
};

const UserDetails = ({
  name,
  firstName,
  secondName,
  email,
  country,
  address,
  codeNumber,
  number,
  subscribed,
  emailVerified,
  role,
}: UserDetailsProps) => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="bg-cyan-500 text-white py-1 px-2 rounded-full">
          Details
        </div>
      </DialogTrigger>
      <DialogContent className="bg-white w-[100%] h-[600px] rounded-[10px]">
        <DialogHeader>
          <DialogTitle className="text-gray-500 text-xl">
            User Details:
          </DialogTitle>
          <div className="w-full flex flex-col space-y-6">
            {!name && (
              <div className="text-4xl text-gray-500 font-bold flex space-x-2 uppercase">
                <p>{firstName}</p>
                <p>{secondName}</p>
              </div>
            )}
            {name && (
              <div className="text-4xl text-gray-500 font-bold flex space-x-2 uppercase">
                <p>{name}</p>
              </div>
            )}
            <div className="flex space-x-2 text-gray-500 text-xl items-center">
              <p className="font-semibold capitalize">Email:</p>
              <p className="font-medium lowercase">{email}</p>
              {name && <FcGoogle />}
            </div>

            {country && (
              <div className="flex space-x-2 text-gray-500 text-xl">
                <p className="font-semibold capitalize">Country:</p>
                <p className="font-medium capitalize">{country}</p>
              </div>
            )}

            {address && (
              <div className="flex space-x-2 text-gray-500 text-xl">
                <p className="font-semibold capitalize">Address:</p>
                <p className="font-medium capitalize">{address}</p>
              </div>
            )}

            {number && (
              <div className="flex space-x-2 text-gray-500 text-xl">
                <p className="font-semibold capitalize">Telephone:</p>
                <p className="font-medium capitalize">({codeNumber})</p>
                <p className="font-medium capitalize">{number}</p>
              </div>
            )}

            {emailVerified && (
              <div className="font-semibold capitalize text-cyan-300 text-xl flex items-center space-x-2">
                <MdVerifiedUser className="text-2xl" />
                <p>User account verified</p>
              </div>
            )}

            {role === "USER" && (
              <div className="font-semibold capitalize text-cyan-300 text-xl flex items-center space-x-2">
                <FaUser className="text-2xl" />
                <p>User Credentials</p>
              </div>
            )}

            {role === "ADMIN" && (
              <div className="font-semibold capitalize text-cyan-300 text-xl flex items-center space-x-2">
                <RiAdminFill className="text-2xl" />
                <p>Admin Credentials</p>
              </div>
            )}

            {subscribed && (
              <div className="font-semibold capitalize text-cyan-300 text-xl flex items-center space-x-2">
                <MdUnsubscribe className="text-2xl" />
                <p>Subscribed</p>
              </div>
            )}

            {!subscribed && (
              <div className="font-semibold capitalize text-cyan-300 text-xl flex items-center space-x-2">
                <MdOutlineUnsubscribe className="text-2xl" />
                <p>Subscribed</p>
              </div>
            )}
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default UserDetails;
