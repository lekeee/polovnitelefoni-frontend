import Image from "next/image";

export default function Search() {
    return <div className="relative max-w-125 w-full h-12.5">
        <input type="text" placeholder="Pretraži oglase..." className="w-full h-full border border-border rounded-full text-sm pl-8 pr-28" />
        <button className="absolute right-1 top-1 bottom-1 bg-black text-white rounded-full flex justify-center items-center p-2 w-24">
            <Image src="/icons/search.svg" alt="Search" height={20} width={20} />
        </button>
    </div>
}