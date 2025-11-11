import { ShoppingCartIcon, UserRoundIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

function NavMobileCommonIcon() {
  return (
    <div className="flex gap-5 items-center justify-center">
      <UserRoundIcon size={24} />
      <ShoppingCartIcon size={24} />
    </div>
  );
}

export default NavMobileCommonIcon;
