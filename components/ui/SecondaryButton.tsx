import Link from "next/link";
import { LucideIcon } from "lucide-react";

type Props = {
    href: string;
    text: string;
    leadingIcon?: LucideIcon;
    tailingIcon?: LucideIcon;
    className?: string;
};

export default function SecondaryButton({
    href,
    text,
    leadingIcon: LeadingIcon,
    tailingIcon: TailingIcon,
    className = ""
}: Props) {
    return (
        <Link
            href={href ?? "#"}
            className={`p-3 text-sm inline-flex items-center justify-center gap-2 font-bold text-gray-800 bg-white border border-gray-300 rounded-full hover:bg-gray-100 hover:border-gray-400 transition-colors duration-300 ${className}`}
        >
            {LeadingIcon && <LeadingIcon className="w-5 h-5 text-gray-600" />}
            <span>{text}</span>
            {TailingIcon && <TailingIcon className="w-5 h-5 text-gray-600" />}
        </Link>
    );
}