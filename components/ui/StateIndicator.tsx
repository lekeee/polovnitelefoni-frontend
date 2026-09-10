type Props = {
  isNew: boolean;
  stateScore?: number;
};

export default function StateIndicator({ isNew, stateScore }: Props) {
  let style = "";

  const score = stateScore ?? 0;
  if (isNew) {
    style = "bg-green-light text-black";
  } else {
    if (score >= 9) {
      style = "bg-green-500 text-white";
    } else if (score >= 7) {
      style = "bg-lime-500 text-gray-900";
    } else if (score >= 5) {
      style = "bg-amber-400 text-gray-900";
    } else if (score >= 3) {
      style = "bg-orange-500 text-white";
    } else {
      style = "bg-red-600 text-white";
    }
  }

  return (
    <div className={`${style} px-4 py-1 rounded-sm`}>
      <span className="text-sm font-semibold leading-3">
        {isNew ? "Novo" : "Polovno " + stateScore?.toString() + " / 10"}
      </span>
    </div>
  );
}
