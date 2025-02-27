import Image from "next/image";
import Link from "next/link";

type BadgeProps = {
  mode: "layout" | "navbar" | "infobar";
};

const Badge = ({ mode }: BadgeProps) => {
  if ((mode === "layout")) {
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
  } else if ((mode === "navbar")) {
    return (
      <Link
        href={"https://greatnonprofits.org/org/magic-marble-foundation"}
        target="_blank"
      >
        <div className="w-[60px] h-[46px] sm:w-[90px] sm:h-[65px] relative inline-block lg:hidden">
          <Image src="/badge.png" alt="" fill priority />
        </div>
      </Link>
    );
  } else if ((mode === "infobar")) {
    return (
      <Link
        href={"https://greatnonprofits.org/org/magic-marble-foundation"}
        target="_blank"
      >
        <div className="w-[90px] h-[65px] relative hidden lg:inline-block xl:hidden">
          <Image src="/badge.png" alt="" fill priority />
        </div>
      </Link>
    );
  }
};
export default Badge;
