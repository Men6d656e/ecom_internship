import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const data = [
  {
    image: "/Image/flags/AE@2x.png",
    name: "Arabic Emirates",
    domain: "shopname.ae",
    price: 67,
    desc: "this is the product",
    qty: 1,
  },
  {
    image: "/Image/flags/AU.png",
    name: "Australia",
    domain: "shopname.ae",
    price: 67,
    qty: 1,
    desc: "this is the product",
  },
  {
    image: "/Image/flags/CN.png",
    name: "China",
    domain: "shopname.ae",
    price: 67,
    qty: 1,
    desc: "this is the product",
  },
];

const CartCard = () => {
  return (
    <div className="flex flex-col m-auto">
      {data.map((item, i) => (
        <div key={i}>
          <div className="flex items-start gap-5 m-5 flex-col md:flex-row">
            {/* image */}
            {/* div1 */}
            <div className="relative ">
              <Image src={item.image} alt={item.name} width={80} height={80} />
            </div>
            {/* text */}
            {/* div2 */}
            <div className="space-y-1">
              <h2 className="capitalize">{item.name}</h2>
              <p className="text-sm text-gray-600 capitalize"> {item.desc}</p>
              {/* button */}
              <div className=" gap-3 hidden md:flex">
                <Button
                  size={"sm"}
                  variant={"outline"}
                  className="text-red-600 hover:text-red-800"
                >
                  Remove
                </Button>
                <Button
                  size={"sm"}
                  variant={"outline"}
                  className="text-blue-600 hover:text-blue-800"
                >
                  Sve for later
                </Button>
              </div>
            </div>
            {/* div 3 */}
            <div className="md:ml-auto  space-y-1 ">
              <p className="font-bold">Price: ${item.price}</p>
              <p className="text-gray-600 text-sm"> Quantity: {item.qty}</p>
              <div className=" gap-3  md:hidden flex w-full mt-5">
                <Button
                  variant={"outline"}
                  className="text-red-600 hover:text-red-800"
                >
                  Remove
                </Button>
                <Button
                  variant={"outline"}
                  className="text-blue-600 hover:text-blue-800"
                >
                  Sve for later
                </Button>
              </div>
            </div>
          </div>
          <Separator />
        </div>
      ))}
      <div className="flex justify-between my-5">
        <Button className="bg-blue-600 text-white">
          <ArrowLeftIcon />
          Back to shop
        </Button>
        <Button className="text-blue-600" variant={"outline"}>
          Remove All
        </Button>
      </div>
    </div>
  );
};

export default CartCard;
