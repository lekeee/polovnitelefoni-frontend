"use client";
import { Button } from "@base-ui/react";
import { useState } from "react";

const addons = ["Punjac", "Originalna kutija", "SIM Free", "Zastitna maska"];
const damages = ["Osteceno staklo", "Neispravan zvucnik"];

export default function AdditionAdInfos() {
  const [addonsSelected, isAddonsSelected] = useState<boolean>(false);
  return (
    <div className="w-full flex-col rounded-xl bg-white shadow-soft overflow-hidden">
      <div className="w-full flex items-stretch">
        <Button
          className={`flex-1 flex items-center justify-center py-1 px-3 cursor-pointer ${addonsSelected ? "bg-gray-200 text-black" : "bg-transparent"}`}
          onClick={() => {
            isAddonsSelected(true);
          }}
        >
          <p className="text-sm font-semibold">Dodatna oprema</p>
        </Button>
        <Button
          className={`flex-1 flex items-center justify-center py-1 px-3 cursor-pointer ${!addonsSelected ? "bg-gray-200 text-black" : "bg-transparent"}`}
          onClick={() => {
            isAddonsSelected(false);
          }}
        >
          <p className="text-sm font-semibold">Ostecenja</p>
        </Button>
      </div>
      <div className="w-full p-3 flex flex-wrap border-t border-border gap-2">
        {addonsSelected
          ? addons.map((element, index) => {
              return (
                <div
                  key={index}
                  className="px-4 py-1.5 text-sm bg-blue-dark text-white leading-3 rounded-full"
                >
                  {element}
                </div>
              );
            })
          : damages.map((element, index) => {
              return (
                <div
                  key={index}
                  className="px-4 py-1.5 text-sm bg-primary text-white leading-3 rounded-full"
                >
                  {element}
                </div>
              );
            })}
      </div>
    </div>
  );
}
