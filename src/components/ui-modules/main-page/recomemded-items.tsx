import { recomemdedItem } from "@/app/const/staticData";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const RecomemdedItems = () => {
  return (
    <div className="px-5 overflow-x-hidden">
      <h1 className="text-xl font-bold my-5">Recomended Items</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-5 ">
        {recomemdedItem.map((item, i) => (
          <Card key={i} className="rounded-none">
            <CardHeader>
              <div className="relative inset-0 flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.name}
                  height={100}
                  width={100}
                />
              </div>
            </CardHeader>
            <CardContent>
              <p className="font-bold text-xl">${item.price}</p>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-gray-500">{item.name}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RecomemdedItems;
