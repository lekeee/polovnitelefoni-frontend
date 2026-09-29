import Image from "next/image";

export default function AdWidgetLike() {
  return (
    <div className="w-full bg-white shadow-soft p-6 rounded-xl flex gap-4">
      <div className="w-32 h-40 relative">
        <Image
          src="https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a50-sm-a505f-ds.jpg"
          fill
          objectFit="contain"
          alt="Mobile Phone"
        />
      </div>
    </div>
  );
}
