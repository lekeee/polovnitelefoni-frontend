"use client";

import { Slider } from "@/components/ui/Slider";
import { useState } from "react";

type SliderValuesType = {
  minValue: number | "";
  maxValue: number | "";
};

export default function PriceRange() {
  const [sliderValues, setSliderValues] = useState<SliderValuesType>({
    minValue: 300,
    maxValue: 1500,
  });

  const minValue = sliderValues.minValue === "" ? 0 : sliderValues.minValue;
  const maxValue = sliderValues.maxValue === "" ? 100 : sliderValues.maxValue;

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex items-stretch justify-between gap-6">
        <div className="flex flex-col gap-2 flex-1">
          <p className="text-sm">Min</p>

          <input
            type="number"
            value={sliderValues.minValue}
            onChange={(event) => {
              const raw = event.target.value;

              setSliderValues((prev) => ({
                ...prev,
                minValue: raw === "" ? "" : Number(raw),
              }));
            }}
            className="border-2 w-full border-border rounded-lg py-3 px-4 appearance-none outline-none m-0"
          />
        </div>

        <div className="flex flex-col gap-2 flex-1">
          <p className="text-sm">Max</p>

          <input
            type="number"
            value={sliderValues.maxValue}
            onChange={(event) => {
              const raw = event.target.value;

              setSliderValues((prev) => ({
                ...prev,
                maxValue: raw === "" ? "" : Number(raw),
              }));
            }}
            className="border-2 w-full border-border rounded-lg py-3 px-4 appearance-none outline-none m-0"
          />
        </div>
      </div>

      <Slider
        min={0}
        max={2500}
        step={50}
        value={[minValue, maxValue]}
        minStepsBetweenValues={2}
        onValueChange={(newValues) => {
          const values = newValues as number[];

          setSliderValues({
            minValue: values[0],
            maxValue: values[1],
          });
        }}
      />
    </div>
  );
}
