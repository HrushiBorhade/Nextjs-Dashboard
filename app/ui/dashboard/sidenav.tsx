import Link from "next/link";
import NavLinks from "@/app/ui/dashboard/nav-links";
import AcmeLogo from "@/app/ui/logo";
import { GlobeAltIcon, PowerIcon } from "@heroicons/react/24/outline";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:py-4 md:px-2 bg-[#30312B]">
      <Link
        className=" flex  h-16 md:h-20 items-end justify-start rounded-md p-4"
        href="/"
      >
        <div className="w-32  md:w-36 flex items-center justify-center">
          <GlobeAltIcon className="h-6 w-6 text-[#E4FE77] rotate-[15deg] font-medium" />
          <p className="text-[24px] font-medium text-[#E4FE77]">Appwise</p>
        </div>
      </Link>
      <hr className="h-[2px] mb-6 mx-6 bg-[#3d3f34] border-0 "></hr>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md  md:block"></div>
        <form>
          <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md  p-3 text-sm font-medium text-white hover:text-[#E4FE77] md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-5" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
