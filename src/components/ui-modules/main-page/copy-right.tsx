import { flagsData } from "@/app/const/staticData";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

const CopyRight = () => {
  return (
    <div className="bg-gray-200 text-gray-600 flex justify-between px-10 items-center h-[68px]">
      <div>
        <p>(c) 2023 Ecommerece.</p>
      </div>
      <div>
        <Select>
          <SelectTrigger className="maz-w-[145px] border-none right-0 focus-visible:ring-0 shadow-none">
            <SelectValue placeholder={flagsData[0].name} />
          </SelectTrigger>
          <SelectContent>
            {flagsData.map((item, i) => (
              <SelectItem key={i} value={item.name}>
                <Image src={item.image} width="20" height="20" alt="flag" />
                {item.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default CopyRight;
