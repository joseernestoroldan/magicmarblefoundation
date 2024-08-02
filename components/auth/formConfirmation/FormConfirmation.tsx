import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

type ConfirmationProps = {
  message?: string;
};

export const FormConfirmation = ({ message }: ConfirmationProps) => {
  if (!message) {
    return null;
  }

  return (
    <div className="bg-cyan-200 p-3 flex items-center gap-x-2 text-sm text-cyan-600 rounded-[5px]">
      <FaCheckCircle className="h-4 w-4" />
      <p>{message}</p>
      {/* <Link className="text-emerald-900 underline font-medium text-lg" href={"/login"}>Please Login</Link> */}
    </div>
  );
};
