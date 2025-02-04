import Image from "next/image";
import Link from "next/link";

type BadgeProps = {
  mode: "layout" | "navbar";
};

const Badge = ({ mode }: BadgeProps) => {
  if ((mode = "layout"))
    return (
      <Link
        href={"https://greatnonprofits.org/org/magic-marble-foundation"}
        target="_blank"
      >
        <div className="w-[90px] h-[65px] fixed z-30 top-14 hidden xl:inline-block xl:right-0 xl:left-auto">
          <Image src="/badge.png" alt="Great None Profits" fill />
        </div>
      </Link>
    );

  if ((mode = "navbar"))
    return (
      <Link
        href={"https://greatnonprofits.org/org/magic-marble-foundation"}
        target="_blank"
      >
        <div className="w-[90px] h-[65px] relative inline-block lg:hidden">
          <Image src="/badge.png" alt="" fill priority />
        </div>
      </Link>
    );
};
export default Badge;
