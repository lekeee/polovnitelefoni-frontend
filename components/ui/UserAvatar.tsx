import { useMemo } from "react";

type Props = {
  name?: string;
  lastname?: string;
  className?: string;
  textSize?: string;
};

const AVATAR_COLORS = [
  { bg: "bg-[#ed6969]/10", text: "text-[#ed6969]" },
  { bg: "bg-[#041E42]/10", text: "text-[#041E42]" },

  { bg: "bg-slate-100", text: "text-slate-700" },
  { bg: "bg-indigo-50", text: "text-indigo-900" },
  { bg: "bg-sky-100", text: "text-sky-800" },
  { bg: "bg-emerald-100", text: "text-emerald-800" },
  { bg: "bg-amber-100", text: "text-amber-800" },
  { bg: "bg-violet-100", text: "text-violet-800" },
  { bg: "bg-rose-100", text: "text-rose-800" },
  { bg: "bg-teal-100", text: "text-teal-800" },
];

function getHashOfString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash);
}

export default function UserAvatar({
  name,
  lastname,
  className = "",
  textSize = "text-xl",
}: Props) {
  const firstInitial = name?.trim().charAt(0).toUpperCase() || "";
  const lastInitial = lastname?.trim().charAt(0).toUpperCase() || "";
  const initials = `${firstInitial}${lastInitial}` || "U";

  const colorClass = useMemo(() => {
    const identifier = `${name || ""}-${lastname || ""}`.trim().toLowerCase();
    if (identifier === "-") {
      return { bg: "bg-[#ed6969]/10", text: "text-[#ed6969]" };
    }

    const hash = getHashOfString(identifier);
    const index = hash % AVATAR_COLORS.length;
    return AVATAR_COLORS[index];
  }, [name, lastname]);

  return (
    <div
      className={`w-10 h-10 rounded-full flex items-center justify-center select-none transition-colors ${colorClass.bg} ${colorClass.text} ${className}`}
    >
      <span className={`select-none font-semibold ${textSize}`}>
        {initials}
      </span>
    </div>
  );
}
