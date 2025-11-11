import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import CategorySelecte from "./cetegory-selecet";

const iconsList = [
  {
    label: "Profile",
    icon: "/icons/user.png",
    h: 20,
    w: 21,
  },
  {
    label: "Messages",
    icon: "/icons/messages.png",
    h: 21,
    w: 21,
  },
  {
    label: "Order",
    icon: "/icons/like.png",
    h: 19,
    w: 21,
  },
  {
    label: "My cart",
    icon: "/icons/cart.png",
    h: 22,
    w: 21,
  },
];

function Header() {
  return (
    <div className="md:flex justify-between h-[86px] items-center border-b px-4 md:px-8 hidden">
      <div>
        <Link href={"/"}>
          <Image
            src="/logo/logo-colored.svg"
            alt="logo"
            width={150}
            height={46}
          />
        </Link>
      </div>
      <div className="md:flex max-w-[665px] w-full h-10 border-2 border-blue-600 rounded-lg overflow-hidden hidden ">
        <Input
          placeholder="Search"
          className="focus-visible:ring-0 focus-visible:border-0 shadow-none border-none h-full w-full flex-1"
          type="search"
        />
        <div className="flex ">
          <CategorySelecte />
          <Button className="bg-blue-600 text-white w-[100px] border-2 border-blue-600 rounded-none hover:bg-blue-500">
            Search
          </Button>
        </div>
      </div>
      <div className="md:flex text-gray-500 hidden">
        {iconsList.map((icon, i) => (
          <div
            className="mx-5 flex flex-col gap-2 items-center justify-center"
            key={i}
          >
            <Image
              src={icon.icon}
              alt={icon.label}
              width={icon.w}
              height={icon.h}
            />
            <p className="text-xs">{icon.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;
