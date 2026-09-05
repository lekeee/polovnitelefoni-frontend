import Link from "next/link";
import { LucideIcon } from "lucide-react";

type Props = {
    href: string;
    text: string;
    icon?: LucideIcon;
};

export default function PrimaryButton({ href, text, icon }: Props) {
    const IconComponent = icon;
    return <Link href={href ?? "#"} className="p-3 text-sm flex gap-1 font-bold text-white bg-primary rounded-full hover:bg-[#DA5A5A] duration-300">
        {IconComponent ? <IconComponent className="text-primary fill-white w-5 h-5" /> : null}
        {text}
    </Link>
}