"use client";
import { Button } from "@base-ui/react";
import { useState } from "react";

export default function AdDescription() {
  const [descriptionSelected, isDescriptionSelected] = useState<boolean>(true);
  return (
    <div className="relative w-150 flex flex-col gap-3">
      <div className="w-full flex items-stretch justify-between p-2 bg-white shadow-soft rounded-3xl">
        <Button
          onClick={() => {
            isDescriptionSelected(true);
          }}
          className={`p-4 flex-1 ${descriptionSelected ? "bg-primary text-white" : "bg-transparent text-black"} font-semibold rounded-2xl cursor-pointer`}
        >
          Opis Oglasa
        </Button>
        <Button
          onClick={() => {
            isDescriptionSelected(false);
          }}
          className={`p-4 flex-1 ${!descriptionSelected ? "bg-primary text-white" : "bg-transparent text-black"} font-semibold rounded-2xl cursor-pointer`}
        >
          Specifikacije
        </Button>
      </div>
      <div className="w-full rounded-2xl bg-white shadow-soft p-6">
        <div>
          <p>
            NEKORISCENO / DUOS - sim free / EU Global Xiaomi Redmi Note 13 EU
            8+4/256GB BLACK 17 700 di Garancija 2god A1 sa FISKALNIM RACUNOM
            FULL original kutija + Turbo punjac ⚡33W POKLON zastitno staklo +
            silikonska maska + auto punjac + bezicne slusalice NEKORISCENO -
            pokazni model u radnji =================================== POKLON
            KUPON 1000 din - kupon mozete iskoristiti, kao
          </p>
        </div>
      </div>
    </div>
  );
}
