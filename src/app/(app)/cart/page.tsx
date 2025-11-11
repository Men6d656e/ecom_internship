import CartCard from "@/components/ui-modules/cartPage/cartPage";
import Header from "@/components/ui-modules/headers/Header";
import MobileHeader from "@/components/ui-modules/headers/mobile-headers/main-page-header";
import CopyRight from "@/components/ui-modules/main-page/copy-right";
import Footer from "@/components/ui-modules/main-page/footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@radix-ui/react-separator";
import { Lock, LockIcon, MessageSquareIcon, TruckIcon } from "lucide-react";
import Image from "next/image";

const CartPage = () => {
  return (
    <>
      <Header />
      <MobileHeader page="cart" arrowShow={true} heading="Shopping cart" />
      <div className="px-5 w-full">
        {/*  */}
        <h1 className="text-xl font-bold my-5">My Cart (3)</h1>
        <div className="flex flex-col md:flex-row gap-5 w-full">
          <div className="md:w-2/3">
            <Card className="rounded-sm">
              <CardContent>
                <CartCard />
              </CardContent>
            </Card>
          </div>
          <div className="space-y-3 md:w-1/3">
            <Card className="rounded-sm">
              <CardHeader>
                <CardTitle>Have a coupon?</CardTitle>
              </CardHeader>
              <CardContent className="flex divide-x divide-y">
                <Input className="rounded-r-none focus-visible:ring-0" />
                <Button
                  variant={"outline"}
                  className="text-blue-600 rounded-l-none hover:text-blue-800"
                >
                  Apply
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="w-full text-gray-600">
                <p className="flex justify-between ">
                  <span>Subtotal:</span>
                  <span>$1440</span>
                </p>
                <p className="flex justify-between">
                  <span>Discount:</span>
                  <span className="text-red-500">$1440</span>
                </p>
                <p className="flex justify-between ">
                  <span>Tax:</span>
                  <span className="text-green-500">$1440</span>
                </p>
                <br />
                <div className="border-t my-3" />
                <p className="flex justify-between text-black font-bold mb-3">
                  <span>Total:</span>
                  <span>$1440</span>
                </p>

                <Button className="bg-green-600 text-white hover:bg-green-800 w-full">
                  Checkout
                </Button>
              </CardContent>
              <CardFooter className="flex justify-evenly">
                {["p1", "p2", "p3", "p4", "p5"].map((img, i) => (
                  <Image
                    src={`/Image/payment/${img}.png`}
                    width={34}
                    height={22}
                    alt={img}
                  />
                ))}
              </CardFooter>
            </Card>
          </div>
        </div>
        {/*  */}
        <br />
        <div className="flex flex-col md:flex-row my-10 gap-10">
          {[
            {
              iconName: LockIcon,
              title: "Secure payment",
              description: "Have you ever finally just",
            },
            {
              iconName: MessageSquareIcon,
              title: "Customer support",
              description: "Have you ever finally just",
            },
            {
              iconName: TruckIcon,
              title: "Free delivery",
              description: "Have you ever finally just",
            },
          ].map((item, i) => (
            <div className="flex gap-5 border p-5 rounded-sm" key={i}>
              <div className="rounded-full bg-gray-500 flex size-10 items-center justify-center text-white ">
                <item.iconName size={20} />
              </div>
              <div>
                <p>{item.title}</p>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <br />
        <br />
        <Footer />
        <br />
        <br />
      </div>
      <CopyRight />
    </>
  );
};

export default CartPage;
