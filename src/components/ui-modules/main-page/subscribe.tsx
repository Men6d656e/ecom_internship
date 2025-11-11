import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const Subscribe = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[210px] bg-gray-200 text-center px-5 ">
      <h1 className="text-xl font-bold">Subscribe on our newsletter</h1>
      <p className="text-gray-600">
        Get daily news on upcoming offers from many suppliers all over world
      </p>
      <div className="flex w-full max-w-sm items-center gap-2 flex-col md:flex-row space-y-2">
        <Input type="email" placeholder="Email" className="bg-white" />
        <Button type="submit" className="bg-blue-600 hover:bg-blue-500">
          Subscribe
        </Button>
      </div>
    </div>
  );
};

export default Subscribe;
