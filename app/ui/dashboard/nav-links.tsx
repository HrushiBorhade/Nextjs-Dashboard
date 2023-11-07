"use client";
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  {
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: DocumentDuplicateIcon,
  },
  { name: "Customers", href: "/dashboard/customers", icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              { " text-[#1B2612] bg-[#E4FE77]": pathname === link.href },
              `flex h-[48px] ${
                pathname === link.href ? "text-[#1B2612]" : "text-white"
              } grow items-center justify-center gap-2 rounded-md p-3 text-sm  hover:bg-[#E4FE77] md:flex-none hover:text-[#1B2612] md:justify-start md:p-2 md:px-3`
            )}
          >
            <LinkIcon className="w-5 font-medium" />
            <p className="mt-1 hidden md:block font-medium">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
