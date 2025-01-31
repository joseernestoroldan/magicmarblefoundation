import { Date } from "@/utils/date";
import Dates from "../date/Date";
import Link from "next/link";
import { QueryType } from "@/types/types";

const PaddyFieldList = ({
  paddyFieldPosts,
}: {
  paddyFieldPosts: QueryType[];
}) => {
  return (
    <div className="w-1/3 flex flex-col px-4">
      <h2 className="text-2xl text-gray-500 font-semibold text-center">
        Recent Entries
      </h2>

      {paddyFieldPosts.map((item: QueryType, index: number) => {
        const dateString = item._createdAt;
        const myDate = Date(dateString);

        return (
          <div
            key={index}
            className="my-4 bg-white p-4 rounded-[10px] w-full h-32 hidden md:flex items-center bg-opacity-50"
          >
            <Link href={`paddyfield/${item._id}`}>
              <p className="text-gray-500 text-base font-semibold">
                {item.title}
              </p>
              <Dates
                hour={myDate.hour}
                day={myDate.day}
                month={myDate.month}
                year={myDate.year}
                monthName={myDate.monthName}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default PaddyFieldList;
