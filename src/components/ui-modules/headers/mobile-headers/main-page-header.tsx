"use client";
import { ArrowLeftIcon, MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavMobileCommonIcon from "./common-monile/nav-icons";
import { useRouter } from "next/navigation";
import SideBarForMObile from "./side-bar";

interface MobileHeader {
  page?: "main" | "listing" | "detail" | "cart";
  heading?: string;
  arrowShow?: boolean;
}

const MobileHeader = ({ page = "main", heading, arrowShow }: MobileHeader) => {
  const [SideBarForMObileOpen, setSideBarForMObileOpen] = useState(false);

  const toggleSidebar = () => {
    setSideBarForMObileOpen(!SideBarForMObileOpen);
  };

  if (heading !== undefined) {
    arrowShow = true;
  }
  const router = useRouter();
  return (
    <>
      {SideBarForMObileOpen ? (
        <SideBarForMObile toggleSidebar={toggleSidebar} />
      ) : (
        <div className="flex h-14 items-center justify-between px-4 md:hidden">
          <div className="flex justify-center items-center gap-4">
            {!arrowShow && (
              <>
                <div>
                  <MenuIcon
                    onClick={toggleSidebar}
                    className="cursor-pointer"
                  />
                </div>
                <div>
                  <Link href={"/"}>
                    <Image
                      src="/logo/logo-colored.svg"
                      alt="logo"
                      width={116}
                      height={36}
                    />
                  </Link>
                </div>
              </>
            )}
            {arrowShow && (
              <div className="flex items-center justify-center gap-5 ">
                <div>
                  <ArrowLeftIcon
                    onClick={() => {
                      router.push("/home");
                    }}
                  />
                </div>
                {heading && (
                  <div>
                    <h1 className="text-xl fontbo">{heading}</h1>
                  </div>
                )}
              </div>
            )}
          </div>
          <div>{page !== "cart" && <NavMobileCommonIcon />}</div>
        </div>
      )}
    </>
  );
};

export default MobileHeader;
