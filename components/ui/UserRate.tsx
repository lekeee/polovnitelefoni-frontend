import { Star } from "lucide-react";
import SecondaryButton from "./SecondaryButton";

export default function UserRate() {
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="w-full flex items-center gap-3">
        <div className="flex flex-col items-end gap-">
          <p className="text-[2.5rem] text-blue-dark font-bold leading-[100%]">
            4.0
          </p>
          <p className="text-[1rem] text-secondary">12 ocena</p>
          <div className="flex items-center gap-px">
            <Star className="fill-blue-dark w-4 h-4" />
            <Star className="fill-blue-dark w-4 h-4" />
            <Star className="fill-blue-dark w-4 h-4" />
            <Star className="fill-blue-dark w-4 h-4" />
            <Star className="fill-gray-400 stroke-gray-400 w-4 h-4" />
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-between">
          <div className="flex items-center gap-1">
            <p className="text-sm text-secondary">5</p>
            <div className="flex-1 h-1.5 rounded-full bg-gray">
              <div className="w-[70%] h-full rounded-full bg-blue-dark"></div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <p className="text-sm text-secondary">4</p>
            <div className="flex-1 h-1.5 rounded-full bg-gray">
              <div className="w-[90%] h-full rounded-full bg-blue-dark"></div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <p className="text-sm text-secondary">3</p>
            <div className="flex-1 h-1.5 rounded-full bg-gray">
              <div className="w-[40%] h-full rounded-full bg-blue-dark"></div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <p className="text-sm text-secondary">2</p>
            <div className="flex-1 h-1.5 rounded-full bg-gray">
              <div className="w-[10%] h-full rounded-full bg-blue-dark"></div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <p className="text-sm text-secondary">1</p>
            <div className="flex-1 h-1.5 rounded-full bg-gray">
              <div className="w-0 h-full rounded-full bg-blue-dark"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-stretch">
        <SecondaryButton href="" text="Oceni korinika" className="w-full" />
      </div>
    </div>
  );
}
