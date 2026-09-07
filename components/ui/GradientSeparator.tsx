type Props = {
  className?: string;
};

export default function GradientSeparator({ className = "" }: Props) {
  return (
    <div
      className={`w-full h-px bg-[linear-gradient(to_right,#00000000_0%,#e5e7eb_10%,#e5e7eb_90%,#00000000_100%)] ${className}`}
    ></div>
  );
}
