"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePathname, useSearchParams } from "next/navigation";

type PaginationUtilProps = {
  count: number;
};

const PaginationUtil = ({ count }: PaginationUtilProps) => {
  const searchParams = useSearchParams();

  const page = searchParams.get("page") || "1";
  const pageNumber = parseInt(page);
  const ITEMS_PER_PAGE = 10;
  const numberOfPages = count / ITEMS_PER_PAGE;

  const rows = [];
  for (let i = 0; i < numberOfPages; i++) {
    rows.push(i + 1);
  }

  const hasPrev = ITEMS_PER_PAGE * (pageNumber - 1) > 0;
  const hasNext = ITEMS_PER_PAGE * (pageNumber - 1) + ITEMS_PER_PAGE < count;

  return (
    <div>
      <Pagination>
        <PaginationContent className="text-gray-500">
          <PaginationItem>
            <PaginationPrevious
              href={`/profile?page=${pageNumber - 1}`}
              className={`${!hasPrev && "pointer-events-none opacity-60"}`}
            />
          </PaginationItem>

          {rows.map((row, index) => (
            <PaginationItem key={index}>
              <PaginationLink className={`${row === pageNumber && "font-semibold text-gray-700"}`} href={`/profile?page=${row}`}>
                {row}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href={`/profile?page=${pageNumber + 1}`}
              className={`${!hasNext && "pointer-events-none opacity-60"}`}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PaginationUtil;
