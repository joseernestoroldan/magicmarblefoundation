import { CreditCard as CC } from "lucide-react";

const CreditCard = () => {
  return (
    <button className="w-52 h-12 bg-cyan-500 hover:bg-cyan-600 text-white font-ibold py-4 px-4 shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-3 group rounded-xl">
      <CC className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
      <span className="text-sm">Pay with Credit Card</span>
    </button>
  );
};
export default CreditCard;
