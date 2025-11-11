import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const categories = [
  {
    name: "Automobiles",
  },
  {
    name: "Clothes and wear",
  },
  {
    name: "Home interiors",
  },
  {
    name: "Computer and tech",
  },
  {
    name: "Tools, equipments",
  },
  {
    name: "Sports and outdoor",
  },
  {
    name: "Animal and pets",
  },
  {
    name: "Machinery tools",
  },
  {
    name: "More category",
  },
];

function CategorySelecte() {
  return (
    <div className="border-l-2 border-blue-600">
      <Select>
        <SelectTrigger className="w-full maz-w-[145px] border-none">
          <SelectValue placeholder="All category" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((item, i) => (
            <SelectItem key={i} value={item.name}>
              {item.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default CategorySelecte;
