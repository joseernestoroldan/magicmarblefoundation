import { AlertCircle } from "lucide-react";
import { resendVerification } from "@/actions/resendVerification";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { FormError } from "../formError/FormError";
import { FormSuccess } from "../formSuccess/FormSuccess";

type ExpiredProps = {
  message?: string;
};

export const FormExpired = ({ message }: ExpiredProps) => {
  const[error, setError] = useState<string | undefined>()
  const[success, setSuccess] = useState<string | undefined>()
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const handleClick = () => {
    resendVerification(token)
    .then((data) => {
        setError(data.error)
        setSuccess(data.success)
    })
  }

  if (!message) {
    return null;
  }

  return (
    <div className="bg-cyan-200 p-3 flex flex-col justify-center items-center gap-x-2 text-base text-cyan-600 rounded-[5px]">
      <AlertCircle className="h-6 w-6" />
      <p className="text-lg font-medium">{message}</p>
      <p>Click on the link bellow and we will send you another one.</p>

      <button
        className="text-lg underline"
        onClick={() => handleClick()}
      >
        Get a confirmation Email
      </button>
      <FormError message={error}/>
      <FormSuccess message={success}/>

      {/* <Link className="text-emerald-900 underline font-medium text-lg" href={"/login"}>Please Login</Link> */}
    </div>
  );
};
