import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

type SuccessProps = {
  message?: string;
};

export const FormSuccess= ({ message }: SuccessProps) => {
  if (!message) {
    return null;
  }

  return (
    <div className="flex flex-col justify-center items-center text-sm space-y-8">
      <FaCheckCircle className="h-12 w-12 text-cyan-300" />
      <p className="text-gray-500 text-lg font-medium text-center">{message}</p>
      {/* <Link className="text-emerald-900 underline font-medium text-lg" href={"/login"}>Please Login</Link> */}
    </div>
  );
};
