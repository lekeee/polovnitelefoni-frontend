import { Database, ShieldCogCornerIcon } from "lucide-react";
import Image from "next/image";
import PriceRange from "./ui/PriceRange";
import SecondaryButton from "./ui/SecondaryButton";
import PrimaryButton from "./ui/PrimaryButton";

const brands = [
  {
    name: "Apple",
    value: 424,
  },
  {
    name: "Samsung",
    value: 23,
  },
  {
    name: "Xiaomi",
    value: 213,
  },
  {
    name: "LG",
    value: 21,
  },
  {
    name: "Nokia",
    value: 12,
  },
  {
    name: "Realmi",
    value: 65,
  },
  {
    name: "Nothing",
    value: 12,
  },
];

const states = ["Polovan uredjaj", "Novi uredjaj", "Ostecen uredjaj"];

export default function Filters() {
  return (
    <div className="flex flex-col w-full gap-4">
      <div className="bg-white shadow-soft p-6 rounded-2xl flex flex-col gap-4 relative overflow-hidden">
        <div className="flex items-center gap-2">
          <Image src="/icons/mobile.svg" alt="Mobile" width={24} height={24} />
          <p className="text-lg font-medium">Brend telefona</p>
        </div>
        <div className="flex flex-col gap-2 items-stretch ml-1 w-full">
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col gap-2 w-full">
              {brands.map((element, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center w-full justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <input
                        id={index.toString()}
                        type="checkbox"
                        className="appearance-none w-4 h-4 border-2 border-gray-300 rounded checked:bg-primary checked:border-primary cursor-pointer transition-colors bg-center bg-no-repeat checked:bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22white%22%20stroke-width%3D%223.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%2220%206%209%2017%204%2012%22%2F%3E%3C%2Fsvg%3E')]"
                      />
                      <label
                        htmlFor={index.toString()}
                        className="text-sm font-medium"
                      >
                        {element.name}
                      </label>
                    </div>
                    <p className="text-sm text-secondary">{element.value}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-soft p-6 rounded-2xl flex flex-col gap-4 relative overflow-hidden">
        <div className="flex items-center gap-2">
          <Image
            src="/icons/location.svg"
            alt="Mobile"
            width={24}
            height={24}
          />
          <p className="text-lg font-medium">Grad</p>
        </div>
        <div className="flex flex-col gap-2 items-stretch ml-1 w-full">
          <div className="rounded-xl border-2 border-border">
            <select className="p-3 text-sm w-full font-medium  outline-none border-r-10 border-transparent">
              <option>Svi gradovi</option>
              <option>Leskovac</option>
              <option>Leskovac</option>
              <option>Leskovac</option>
              <option>Leskovac</option>
            </select>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-soft p-6 rounded-2xl flex flex-col gap-4 relative overflow-hidden">
        <div className="flex items-center gap-2">
          <Database className="w-5 h-5 text-primary stroke-[1.5px]" />
          <p className="text-lg font-medium">Cenovni raspon</p>
        </div>
        <div className="flex flex-col gap-6 items-stretch ml-1 w-full">
          <PriceRange />
          <div className="flex items-center gap-2">
            <input
              id="deal"
              type="checkbox"
              className="appearance-none w-4 h-4 border-2 border-gray-300 rounded checked:bg-primary checked:border-primary cursor-pointer transition-colors bg-center bg-no-repeat checked:bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22white%22%20stroke-width%3D%223.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%2220%206%209%2017%204%2012%22%2F%3E%3C%2Fsvg%3E')]"
            />
            <label htmlFor="deal" className="text-sm font-medium">
              Dogovor
            </label>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-soft p-6 rounded-2xl flex flex-col gap-4 relative overflow-hidden">
        <div className="flex items-center gap-2">
          <ShieldCogCornerIcon className="w-5 h-5 text-primary stroke-[1.5px]" />
          <p className="text-lg font-medium">Stanje uredjaja</p>
        </div>
        <div className="flex flex-col gap-3 items-stretch ml-1 w-full">
          {states.map((element, index) => {
            return (
              <div key={index} className="flex items-center gap-2">
                <input
                  id={element}
                  type="checkbox"
                  className="appearance-none w-4 h-4 border-2 border-gray-300 rounded checked:bg-primary checked:border-primary cursor-pointer transition-colors bg-center bg-no-repeat checked:bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22white%22%20stroke-width%3D%223.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%2220%206%209%2017%204%2012%22%2F%3E%3C%2Fsvg%3E')]"
                />
                <label htmlFor={element} className="text-sm font-medium">
                  {element}
                </label>
              </div>
            );
          })}
        </div>
        <div className="w-full flex items-stretch justify-between gap-2 mt-3">
          <SecondaryButton href="" text="Resetuj filtere" className="flex-1" />
          <PrimaryButton href="" text="Primeni filtere" className="flex-1" />
        </div>
      </div>
    </div>
  );
}
