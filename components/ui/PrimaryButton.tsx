import Link from "next/link";
import { LucideIcon } from "lucide-react";

type Props = {
    href: string;
    text: string;
    leadingIcon?: LucideIcon;
    tailingIcon?: LucideIcon;
    className?: string; // Dodat opcioni prop
};

export default function PrimaryButton({
    href,
    text,
    leadingIcon: LeadingIcon,
    tailingIcon: TailingIcon,
    className = "" // Podrazumevana vrednost je prazan string
}: Props) {
    return (
        <Link
            href={href ?? "#"}
            className={`p-3 text-sm inline-flex items-center justify-center gap-2 font-bold text-white bg-primary rounded-full hover:bg-[#DA5A5A] transition-colors duration-300 ${className}`}
        >
            {LeadingIcon && <LeadingIcon className="w-5 h-5 text-primary fill-white" />}
            <span>{text}</span>
            {TailingIcon && <TailingIcon className="w-5 h-5 text-primary fill-white" />}
        </Link>
    );
}