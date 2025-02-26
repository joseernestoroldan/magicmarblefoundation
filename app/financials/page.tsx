import ChartsComponent from "@/components/chartsComponent/ChartsComponent";
import Documents from "@/components/financialsComponents/documents/Documents";

const FinancialsPage = async () => {
  return (
    <div className="w-full flex flex-col items-center">
      <ChartsComponent/>
      <Documents />
    </div>
  );
};
export default FinancialsPage;
