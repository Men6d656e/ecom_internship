import { FacebookIcon, TwitterIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 px-5">
      {/* 1 */}
      <div className="m-auto text-center mt-5 md:mt-0">
        <div className="flex justify-center items-center md:justify-start md:items-start">
          <Link href={"/"}>
            <Image
              src="/logo/logo-colored.svg"
              alt="logo"
              width={150}
              height={46}
            />
          </Link>
        </div>
        <p className="text-gray-600 mt-3">
          Best information about the company gies here but now lorem ipsume
        </p>
        <div className="flex mt-2 gap-2 justify-center items-center md:justify-start md:items-start">
          {[
            "facebook3.png",
            "instagram3.png",
            "linkedin3.png",
            "twitter3.png",
            "youtube3.png",
          ].map((icon, i) => (
            <div className="relative " key={i}>
              <Image src={`/logo/${icon}`} alt={icon} width={32} height={32} />
            </div>
          ))}
        </div>
      </div>
      {/* 2 */}
      <div className="m-auto text-center mt-5 md:mt-0">
        <h2 className="mb-2">About</h2>
        {["About Us", "Find store", "Categories", "Blogs"].map((item, i) => (
          <p className="text-gray-600 my-3" key={i}>
            {" "}
            {item}
          </p>
        ))}
      </div>
      {/* 3 */}
      <div className="m-auto text-center mt-5 md:mt-0">
        <h2 className="mb-2">Partnership</h2>
        {["About Us", "Find store", "Categories", "Blogs"].map((item, i) => (
          <p className="text-gray-600 my-3" key={i}>
            {" "}
            {item}
          </p>
        ))}
      </div>
      {/* 4 */}
      <div className="m-auto text-center mt-5 md:mt-0">
        <h2 className="mb-2">Information</h2>
        {["Help center", "Money refund", "Shipping", "Contact us"].map(
          (item, i) => (
            <p className="text-gray-600 my-3" key={i}>
              {" "}
              {item}
            </p>
          )
        )}
      </div>

      {/* 5*/}
      <div className="m-auto text-center mt-5 md:mt-0">
        <h2 className="mb-2">For users</h2>
        {["login", "Register", "Settings", "My Order"].map((item, i) => (
          <p className="text-gray-600 my-3" key={i}>
            {" "}
            {item}
          </p>
        ))}
      </div>
      {/* 6*/}
      <div className="m-auto text-center mt-5 md:mt-0">
        <h2 className="mb-2">Get app</h2>
        {["/app.png", "/google.png"].map((item, i) => (
          <div className="relative my-2" key={i}>
            <Image src={item} width={124} height={42} alt={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
