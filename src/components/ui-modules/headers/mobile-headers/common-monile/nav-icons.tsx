"use client";
import { ShoppingCartIcon, UserRoundIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

function NavMobileCommonIcon() {
  const router = useRouter();
  return (
    <div className="flex gap-5 items-center justify-center">
      <UserRoundIcon size={24} />
      <ShoppingCartIcon size={24} onClick={() => router.push("/cart")} />
    </div>
  );
}

export default NavMobileCommonIcon;
