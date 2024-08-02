import { FaExclamationTriangle } from "react-icons/fa";

type ErrorProps = {
  message?: string;
};

export const FormError = ({ message }: ErrorProps) => {
  if (!message) {
    return null;
  }

  return (
    <div className="bg-red-300 p-3 flex items-center gap-x-2 text-sm text-red-600 rounded-[5px]">
      <FaExclamationTriangle className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};
