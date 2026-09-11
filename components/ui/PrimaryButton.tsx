import Link from "next/link";
import { LucideIcon } from "lucide-react";

type Props = {
  href: string;
  text: string;
  leadingIcon?: LucideIcon;
  tailingIcon?: LucideIcon;
  className?: string;
  bgColor?: string;
};

export default function PrimaryButton({
  href,
  text,
  leadingIcon: LeadingIcon,
  tailingIcon: TailingIcon,
  className = "",
  bgColor = "bg-primary hover:bg-[#DA5A5A]",
}: Props) {
  return (
    <Link
      href={href ?? "#"}
      className={`p-3 text-sm inline-flex items-center justify-center gap-2 font-bold text-white rounded-full transition-colors duration-300 ${className} ${bgColor}`}
    >
      {LeadingIcon && <LeadingIcon className="w-5 h-5" />}
      <span>{text}</span>
      {TailingIcon && <TailingIcon className="w-5 h-5  " />}
    </Link>
  );
}
