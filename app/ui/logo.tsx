import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { sora } from "@/app/ui/fonts";

export default function AcmeLogo() {
  return (
    <div
      className={`${sora.className} flex flex-row items-center leading-none text-[#1B2612]`}
    >
      <GlobeAltIcon className="h-10 w-10 rotate-[15deg] font-medium" />
      <p className="text-[32px] font-medium">Appwise</p>
    </div>
  );
}
