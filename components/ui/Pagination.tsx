"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type Props = {
  slidesCount: number;
};

export default function Pagination({ slidesCount }: Props) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  return (
    <div className="mx-auto my-8">
      <div className="flex items-stretch justify-center gap-1">
        <Link
          href=""
          className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-white duration-200"
          onClick={() => {
            if (activeIndex !== 0) {
              setActiveIndex(activeIndex - 1);
            }
          }}
        >
          <ChevronLeft className="w-5 h-5" />
        </Link>
        {Array.from({ length: slidesCount }).map((_, index) => {
          const active = activeIndex === index;
          return (
            <Link
              key={index}
              href=""
              className={`w-10 h-10 rounded-full border border-border flex items-center justify-center  duration-200 ${active ? "bg-primary text-white" : "bg-transparent hover:bg-white text-black"}`}
              onClick={() => {
                setActiveIndex(index);
              }}
            >
              <p>{index + 1}</p>
            </Link>
          );
        })}
        <Link
          href=""
          className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-white duration-200"
          onClick={() => {
            if (activeIndex !== slidesCount - 1) {
              setActiveIndex(activeIndex + 1);
            }
          }}
        >
          <ChevronRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
