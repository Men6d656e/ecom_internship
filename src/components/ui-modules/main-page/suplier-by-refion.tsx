import { flagsData } from "@/app/const/staticData";
import Image from "next/image";
import React from "react";

const SuplaierByRegions = () => {
  return (
    <div className="space-y-4 px-5">
      <h1 className="text-xl font-bold">Suppliers by region</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3.5">
        {flagsData.map((country, i) => (
          <div className="flex items-center gap-2" key={i}>
            <div className="relative h-8 w-10">
              <Image
                src={country.image}
                alt={country.name}
                fill
                className="w-full h-full"
              />
            </div>
            <div>
              <p className="text-xs font-bold">{country.name}</p>
              <p className="text-gray-500 text-xs">{country.domain}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuplaierByRegions;
