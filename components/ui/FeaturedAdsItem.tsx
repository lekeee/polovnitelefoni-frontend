import { ChevronRight, ShieldCheck } from "lucide-react";
import Image from "next/image";

type Props = {
    type: 1 | 2 | 3;
    title: string;
    ownerFullName: string;
    price: string;
    imageUrl: string;
}

export default function FeaturedAdsItem({
    type,
    title,
    ownerFullName,
    price,
    imageUrl
}: Props) {
    return <div className="bg-white shadow-[0_0px_10px_0px_rgba(0,0,0,0.08)] p-6 rounded-2xl flex gap-6 relative overflow-hidden">
        <div className={`absolute aspect-square h-[150%] bottom-0 right-0 rounded-full ${type === 1 ? 'bg-[#FFF1F2]' : type === 2 ? 'bg-[#E0F7FA]' : 'bg-[#F0FDF4]'} transform translate-2/5`}></div>
        <div className={`absolute aspect-square h-full bottom-0 right-0 rounded-full ${type === 1 ? 'bg-[#fde6e8]' : type === 2 ? 'bg-[#c4f8ff]' : 'bg-[#dcffe7]'} transform translate-2/5`}></div>
        <div className="flex w-8 h-8 rounded-full items-center justify-center absolute bottom-4 right-4 z-10 bg-white">
            <ChevronRight className="w-4 h-4 text-black" />
        </div>
        <div className="flex flex-col gap-4 flex-1">
            <div className={`flex gap-1 px-3 py-1 ${type === 1 ? 'bg-[#FFF1F2]' : type === 2 ? 'bg-[#E0F7FA]' : 'bg-[#F0FDF4]'} rounded-full w-fit items-center`}>
                {
                    type === 1 ? <Image src="/icons/fire.svg" alt="Logo" height={16} width={16} /> : type === 2 ? <Image src="/icons/save.svg" alt="Logo" height={16} width={16} /> : <Image src="/icons/new.svg" alt="Logo" height={16} width={16} />
                }
                <span className={`${type === 1 ? 'text-primary' : type === 2 ? 'text-[#0077B6]' : 'text-[#65B84F]'} font-medium text-[12px] leading-3`}>
                    {type === 1 ? 'Najposećeniji oglas' : type === 2 ? 'Najsačuvaniji oglas' : 'Najnoviji oglas'}
                </span>
            </div>
            <p className=" text-lg leading-6 line-clamp-2 overflow-hidden text-ellipsis font-medium">{title}</p>
            <div className="flex gap-2 items-center">
                <p className="text-sm my-1 opacity-75 m-0">{ownerFullName}</p>
                <ShieldCheck className="text-secondary w-4.5 h-4.5" />
            </div>
            <p className="text-2xl font-bold text-primary">{price}</p>
        </div>
        <div className="flex flex-col gap-2 items-end relative w-2/5">
            <Image src={imageUrl} alt="Logo" fill className="rounded-lg object-contain" />
        </div>
    </div>


}