import Link from "next/link";
import { PlusCircle } from "lucide-react";

type Props = {
    href: string;
    text: string;
};

export default function PrimaryButton({ href, text }: Props) {
    return <Link href={href ?? "#"} className="p-3 text-sm flex gap-1 font-bold text-white bg-primary rounded-sm hover:bg-[#DA5A5A] duration-300">
        <PlusCircle className="text-primary fill-white w-5 h-5" />
        {text}
    </Link>
}