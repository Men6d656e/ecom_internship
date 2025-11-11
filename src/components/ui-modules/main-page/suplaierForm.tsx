"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import React, { useState } from "react";

const SuplaierForm = () => {
  const handleInquiry = () => {
    console.log("Inquiry Sent!");
  };

  return (
    <div className="relative h-[420px]  max-w-[1180px] mx-auto w-full overflow-hidden shadow-2xl">
      <Image
        src={"/Image/form.png"}
        alt="background-supplier-form"
        fill
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 flex p-8 md:p-12 items-center flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-4 md:pl-0 text-white z-10 flex flex-col space-y-2">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
            An easy way to send requests to all suppliers
          </h2>
          <p className="mt-4 text-gray-100 text-base font-light max-w-sm hidden md:block">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <Button
            className="bg-blue-600 hover:bg-blue-500 w-[100px] md:hidden"
            onClick={handleInquiry}
          >
            Send Inquiry
          </Button>
        </div>

        <div className="w-full md:w-1/2 md:flex justify-end z-10 hidden">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl max-w-md w-full">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">
              Send quote to suppliers
            </h3>

            <div className="space-y-4">
              <Input placeholder="What item you need?" />
              <Textarea
                placeholder="Type more details"
                className="resize-none"
              />

              <div className="flex space-x-3">
                <div className="w-2/3">
                  <Input placeholder="Quantity" />
                </div>
                <div className="w-1/3">
                  <Select>
                    <SelectTrigger className="w-[110px] rounded-sm">
                      <SelectValue placeholder="Pcs" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="kg">Kg</SelectItem>
                        <SelectItem value="Pcs">Pcs</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button
                className="bg-blue-600 hover:bg-blue-500"
                onClick={handleInquiry}
              >
                Send Inquiry
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuplaierForm;
