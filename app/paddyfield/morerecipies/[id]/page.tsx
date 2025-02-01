import { getOne } from "@/client";
import Parrafos from "@/components/parrafos/Parrafos";
import { QueryType } from "@/types/types";
import Image from "next/image";

const RecipiePage = async ({
  params: { id: _Id },
}: {
  params: { id: string };
}) => {
  
  const query: QueryType[] | null = await getOne(_Id);

  if (!query) return null;
  const [data] = query;
  const {ingredients} = data;

  return (
    <div className="w-full h-screen bg-gradient-to-b from-white via-green-300 to-white flex flex-col items-center justify-center space-y-8">
      {ingredients && <Parrafos contenido={ingredients}/>}s
    </div>
  );
};

export default RecipiePage;
