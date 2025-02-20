import Link from "next/link"

{/* <div className="h-[20vh] w-full md:flex flex-col md:flex-row hidden  justify-center items-center space-x-0 md:space-x-4 space-y-4 md:space-y-0">
<Link
  className="bg-yellow-500 text-white rounded-full py-2 w-full max-w-[170px] text-center"
  href={"/stagesponsor"}
>
  Sponsor
</Link>
</div> */}

{/* <div className="h-[20vh] w-[60%] md:flex hidden md:flex-row justify-center items-center space-x-0 md:space-x-4 space-y-4 md:space-y-0">
              <button className="bg-red-500 text-white rounded-full py-2 w-full max-w-[1700px]">
                Sponsor
              </button>
            </div> */}

{/* <div className="h-[20vh] w-full flex flex-col md:hidden justify-center items-center space-x-0 md:space-x-4 space-y-4 md:space-y-0">
        <Link
          className="bg-green-500 text-white rounded-full py-2 w-full max-w-[170px]"
          href={"/stagesponsor"}
        >
          Sponsor
        </Link>
      </div> */}

      export const SponsorButton = () => {
        return(
            <Link href={"/stagesponsor"} className="bg-cyan-500 text-white flex justify-center items-center absolute z-10 top-4 left-4 rounded-full w-[128px] h-[48px]">
                Sponsor
            </Link>
        )
      }