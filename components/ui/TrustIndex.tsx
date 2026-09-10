import { BadgeCheck } from "lucide-react";

type Props = {
  score: number;
  className?: string;
};

export default function TrustIndex({ score, className = "" }: Props) {
  const normalizedScore = Math.min(Math.max(score, 0), 100);

  const getStyle = (val: number) => {
    if (val >= 90) {
      return "bg-[#eaf8f0] text-[#2db863] border-[#2db863]";
    } else if (val >= 75) {
      return "bg-[#f2faef] text-[#82c974] border-[#82c974]";
    } else if (val >= 60) {
      return "bg-[#fefce8] text-[#d9b227] border-[#d9b227]";
    } else if (val >= 40) {
      return "bg-[#fef6ed] text-[#e08937] border-[#e08937]";
    } else {
      return "bg-[#fdf2f2] text-[#e05252] border-[#e05252]";
    }
  };

  return (
    <div
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border text-sm font-semibold transition-all ${getStyle(
        normalizedScore,
      )} ${className}`}
    >
      <BadgeCheck className="w-5 h-5 shrink-0" />
      <span>{normalizedScore}/100 indeks poverenja</span>
    </div>
  );
}
