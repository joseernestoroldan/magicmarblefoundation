import { db } from "@/db";
import { FaCheck } from "react-icons/fa";

const DetailsPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const user = await db.user.findUnique({ where: { id } });
  console.log(user);
  return (
    <div className="w-full max-w-5xl mx-auto h-[80vh] flex flex-col justify-center items-center">
      <div className="w-full max-w-5xl mx-auto h-[50vh] border border-gray-200 p-16 rounded-[10px] flex flex-col justify-center space-y-4">
        <div className="flex flex-col items-start">
          <div className="flex justify-start items-center">
            {user?.name && (
              <h2 className="text-gray-500 text-4xl font-bold">{user.name}</h2>
            )}
            {!user?.name && user?.firstName && (
              <h2 className="text-gray-500 text-4xl">
                {user?.firstName} {user?.secondName}
              </h2>
            )}
          </div>
          <div className="flex justify-start items-center">
            <p className="text-gray-500 text-xl font-medium">{user?.email}</p>
          </div>
        </div>

        <div className="flex flex-col items-start capitalize">
          <div className="flex justify-start items-center gap-x-2 text-gray-500 text-xl">
            <span className="font-medium">Country: </span>
            <p>{user?.country}</p>
          </div>

          <div className="flex justify-start items-center gap-x-2 text-gray-500 text-xl">
            <span className="font-medium">Shipping Address:</span>
            <p>{user?.address}</p>
          </div>
        </div>

        <div className="flex justify-start gap-x-2 text-gray-500 text-xl">
          <span className="font-medium">Telephone Number: </span>
          <p>
            ({user?.codeNumber}) {user?.number}
          </p>
        </div>

        <div className="flex justify-start items-center gap-x-16 text-gray-500 text-xl capitalize ">
          {user?.subscribed ? (
            <div className="flex items-center gap-x-2">
              <FaCheck /> <p>User Suscribed to the newsletter</p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
