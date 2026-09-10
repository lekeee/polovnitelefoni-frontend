import TrustIndex from "./TrustIndex";
import UserAvatar from "./UserAvatar";

export default function SellerShortInfos() {
  return (
    <div className="w-full flex flex-col gap-4 bg-white rounded-md shadow-soft p-3">
      <div className="flex flex-col gap-2 items-center">
        <UserAvatar
          name="Djordje"
          lastname="Ivanovic"
          className="w-20 h-20"
          textSize="text-2xl"
        />
        <p className="text-xl font-semibold">Djordje Ivanovic</p>
        <p className="text-[12px] text-secondary">Clan od 20.03.2025.</p>
        <TrustIndex score={97} />
      </div>
    </div>
  );
}
