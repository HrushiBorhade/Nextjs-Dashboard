import AcmeLogo from "@/app/ui/logo";
import Image from "next/image";
import { LayoutDashboard, LogIn } from "lucide-react";
import Link from "next/link";
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-[#E4FE77] p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-3 rounded-lg bg-white px-4 py-10 md:w-[50%] md:px-20">
          <p
            className={`text-2xl text-[#1B2612] md:text-4xl md:leading-tight font-semibold `}
          >
            Data-Driven Insights
            <br /> for Android Apps
          </p>
          <p className="text-sm mb-2 text-[#c4c4c6] md:text-base md:leading-tight ">
            Discover Android apps that are dominating the market with our
            interactive dashboard.
          </p>
          <Link
            href="/dashboard"
            className="flex items-center justify-center gap-2 self-start rounded-lg bg-orange-500 px-5 hover:px-6  py-3 text-sm font-medium text-white transition-all hover:bg-orange-400 md:text-sm"
          >
            {/* <LayoutDashboard className="w-5 h-5" /> */}
            <LogIn className="w-4 h-4" />
            <span>Get Started</span>
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            alt="hero image for larger screen size"
            className="hidden md:block"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            alt="hero image for smaller screen size"
            className="block md:hidden"
          />
        </div>
      </div>
    </main>
  );
}
