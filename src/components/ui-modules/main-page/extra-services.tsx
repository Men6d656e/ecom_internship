import { extraServices } from "@/app/const/staticData";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

export default function ExtraServicesSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-8 md:mb-10">
          Our extra services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {extraServices.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              Icon={service.icon}
              image={service.image}
              alt={service.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export interface Service {
  title: string;
  Icon: LucideIcon;
  image: string;
  alt: string;
}

export function ServiceCard({ title, Icon, image, alt }: Service) {
  return (
    <div className="relative  overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl h-full">
      <div className="relative w-full aspect-7/3 ">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          style={{ objectFit: "cover" }}
          className="transition-transform duration-500 "
        />
      </div>

      <div className="absolute bottom-14 right-4 bg-blue-200 backdrop-blur-sm p-3 rounded-full border ">
        <Icon className="w-6 h-6 text-gray-800" />
      </div>

      <CardContent className="p-4 bg-white min-h-20 flex items-center">
        <p className="text-sm font-medium text-gray-700 leading-snug">
          {title}
        </p>
      </CardContent>
    </div>
  );
}
