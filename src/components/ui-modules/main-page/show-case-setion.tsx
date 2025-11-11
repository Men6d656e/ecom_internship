import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { Badge } from "@/components/ui/badge";
type Item = {
  image: string;
  name: string;
  discount?: string;
  price?: number;
};

interface ShowcaseSectionType {
  type: "deals" | "home" | "electronics";
  titleImage?: string;
  items?: Item[];
  heading: string;
  paragraph?: string;
  button: boolean;
}

const ShowCaseSection = ({
  heading,
  paragraph,
  button,
  items,
  type,
  titleImage,
}: ShowcaseSectionType) => {
  return (
    <div
      className={`flex md:flex-row flex-col justify-between overflow-hidden md:border border-gray-200  ${
        type === "deals" ? "md:h-60" : "md:h-64"
      }`}
    >
      <div
        className={`flex flex-col  ${
          type !== "deals" ? "relative" : "p-5"
        } m-auto`}
      >
        {type !== "deals" && (
          <>
            <div className="overflow-hidden md:block hidden">
              {titleImage && (
                <Image src={titleImage} alt="home" width={280} height={260} />
              )}
              <div className="absolute top-10 left-3">
                <h2 className="font-bold text-xl">{heading}</h2>
                {button && (
                  <Button className="bg-white hover:bg-amber-100 text-neutral-900 cursor-pointer mt-10">
                    source now
                  </Button>
                )}
              </div>
            </div>
            <div className="md:hidden">
              <h2 className="font-bold text-xl">{heading}</h2>
              <div className="flex md:hidden flex-1">
                <Carousel opts={{ align: "start" }} className="w-full">
                  <CarouselContent>
                    {items?.map((item, i) => (
                      <CarouselItem
                        key={i}
                        className="basis-[70%] sm:basis-[50%] md:basis-1/5"
                      >
                        <div className="flex flex-col items-center justify-center border border-gray-200 ">
                          <Image
                            src={item.image}
                            width={120}
                            height={120}
                            alt={item.name}
                          />
                          <p className="mt-2 text-sm">{item.name}</p>
                          <Badge className="bg-red-200 text-red-600">
                            {item.discount}
                          </Badge>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
              {button && (
                <Button className="bg-white hover:bg-amber-100 text-neutral-900 cursor-pointer mt-10">
                  source now
                </Button>
              )}
            </div>
          </>
        )}

        {type === "deals" && (
          <>
            <h2 className="font-bold text-xl">{heading}</h2>

            {paragraph && <p className="text-gray-600">{paragraph}</p>}
            <div className="flex gap-2.5 text-white mt-4">
              {[4, 13, 34, 56].map((item, i) => (
                <div
                  key={i}
                  className="bg-neutral-600 flex flex-col items-center justify-center    w-[50px] h-[50px] text-xs "
                >
                  <span className="font-bold text-lg">{item}</span>
                  <span>Days</span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {type === "deals" ? (
        <>
          {/* Desktop layout */}
          <div className="hidden md:flex flex-1">
            {items?.map((item, i) => (
              <div
                className={`flex flex-col items-center justify-center w-full ${
                  i !== 0 ? "border-l border-gray-200" : ""
                }`}
                key={i}
              >
                <Image
                  src={item.image}
                  width={140}
                  height={140}
                  alt={item.name}
                />
                <p className="mt-4 mb-1.5">{item.name}</p>
                <Badge className="bg-red-200 text-red-600">
                  {item.discount}
                </Badge>
              </div>
            ))}
          </div>

          {/* 📱 Mobile carousel layout */}
          <div className="flex md:hidden flex-1">
            <Carousel opts={{ align: "start" }} className="w-full">
              <CarouselContent>
                {items?.map((item, i) => (
                  <CarouselItem
                    key={i}
                    className="basis-[70%] sm:basis-[50%] md:basis-1/5"
                  >
                    <div className="flex flex-col items-center justify-center border border-gray-200 ">
                      <Image
                        src={item.image}
                        width={120}
                        height={120}
                        alt={item.name}
                      />
                      <p className="mt-2 text-sm">{item.name}</p>
                      <Badge className="bg-red-200 text-red-600">
                        {item.discount}
                      </Badge>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </>
      ) : (
        <>
          {/* Desktop */}
          <div className="md:grid grid-cols-5 flex-1 divide-x divide-y hidden ">
            {items?.map((item, i) => (
              <div className="flex p-3  w-full justify-between" key={i}>
                <div key={i}>
                  <p className="text-sm font-bold">{item.name}</p>
                  <p className="text-xs text-gray-600">From</p>
                  <p className="text-xs text-gray-600">USD {item.price}</p>
                </div>
                <div className="relative ">
                  <Image
                    className="mt-auto"
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                  />
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ShowCaseSection;
