import {
  ArchiveIcon,
  Building2Icon,
  GlobeIcon,
  HandshakeIcon,
  HeadsetIcon,
  HeartIcon,
  HomeIcon,
  ListOrderedIcon,
  ScrollTextIcon,
  ShieldCheckIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";

const SideBarForMObile = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  const router = useRouter();
  return (
    <div className="w-full max-w-[80%] h-dvh">
      {/* 1   */}
      <div className="h-[114px] bg-gray-200 flex flex-col justify-center pl-5">
        <div>
          <div>
            <Image
              src={"/Image/Avatar.png"}
              width={44}
              height={44}
              alt="avatar"
            />
          </div>
          <div className="flex gap-3 mt-4">
            <Link href={"/login"}>Login</Link> |
            <Link href={"/register"}>Register</Link>
          </div>
        </div>
      </div>
      {/* 2 */}
      <div className="p-5 text-gray-500 ">
        {sidebarMenuGroups.map((group, i) => (
          <div key={i} className="space-y-5 ">
            {group.map((item, i) => (
              <div className="flex mt-5" key={i}>
                <item.icon />
                <p
                  className="pl-4"
                  onClick={() => {
                    router.push(item.route);
                    toggleSidebar();
                  }}
                >
                  {" "}
                  {item.label}
                </p>
              </div>
            ))}
            <Separator />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBarForMObile;

export const sidebarMenuGroups = [
  // Group 1: Navigation Links
  [
    {
      label: "Home",
      icon: HomeIcon, // lucide-react icon component
      route: "/",
    },
    {
      label: "Categories",
      icon: ListOrderedIcon,
      route: "/categories",
    },
    {
      label: "Favorites",
      icon: HeartIcon,
      route: "/favorites",
    },
    {
      label: "My orders",
      icon: ArchiveIcon, // Used a box/archive icon for orders
      route: "/orders",
    },
  ],

  // Group 2: Utility Links
  [
    {
      label: "English | USD",
      icon: GlobeIcon, // Represents language/currency selection
      route: "/settings/language",
    },
    {
      label: "Contact us",
      icon: HeadsetIcon, // Represents support/contact
      route: "/contact",
    },
    {
      label: "About",
      icon: Building2Icon, // Represents the company/app
      route: "/about",
    },
  ],

  // Group 3: Policy Links (Often styled differently or simply text)
  [
    {
      label: "User agreement",
      icon: ScrollTextIcon, // Represents documentation/legal text
      route: "/legal/agreement",
    },
    {
      label: "Partnership",
      icon: HandshakeIcon, // Represents collaboration
      route: "/partnership",
    },
    {
      label: "Privacy policy",
      icon: ShieldCheckIcon, // Represents security/privacy
      route: "/legal/privacy",
    },
  ],
];
