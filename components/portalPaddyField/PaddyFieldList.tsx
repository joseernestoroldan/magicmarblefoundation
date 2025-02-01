import { Date } from "@/utils/date";
import Dates from "../date/Date";
import Link from "next/link";
import { QueryType } from "@/types/types";

const PaddyFieldList = ({
  paddyFieldPosts,
}: {
  paddyFieldPosts: QueryType[];
}) => {
  const lengthPosts: number = paddyFieldPosts.length;

  const getPosts = (lengthPosts: number) => {
    if (lengthPosts <= 9) return paddyFieldPosts;
    const firstPosts = paddyFieldPosts.slice(0, 5);
    return firstPosts;
  };

  const posts = getPosts(lengthPosts);

  return (
    <div className="w-1/3 flex flex-col space-y-6 px-4 h-auto">
      <h2 className="text-2xl text-gray-500 font-semibold text-center">
        Recent Entries
      </h2>

      {posts.map((item: QueryType, index: number) => {
        const dateString = item._createdAt;
        const myDate = Date(dateString);

        return (
          <Link key={index} href={`paddyfield/${item._id}`}>
            <div className="bg-white p-4 rounded-[10px] w-full h-[118px] hidden md:flex items-center bg-opacity-50">
              <div>
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
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default PaddyFieldList;
