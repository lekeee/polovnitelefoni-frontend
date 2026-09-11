import {
  ListSortDescending,
  MapPin,
  MessageCircle,
  MessageCircleWarning,
  Phone,
} from "lucide-react";
import TrustIndex from "./TrustIndex";
import UserAvatar from "./UserAvatar";
import Link from "next/link";
import UserRate from "./UserRate";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

export default function SellerShortInfos() {
  return (
    <div className="w-full flex flex-col gap-6 bg-white rounded-2xl shadow-soft p-5">
      <div className="flex items-stretch justify-between gap-14">
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
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            <p className="text-[1rem]">Beograd</p>
          </div>
          <Link href="" className="flex items-center gap-2">
            <ListSortDescending className="w-5 h-5 rotate-y-180" />
            <p className="text-[1rem]">Svi oglasi</p>
          </Link>
        </div>
        <div className="flex flex-1 flex-col justify-between items-end">
          <Link href="" className="flex items-center gap-2">
            <MessageCircleWarning className="text-red-500 w-5 h-5" />
            <p className="text-red-500">Prijavi</p>
          </Link>
          <UserRate />
        </div>
      </div>
      <div className="w-full flex items-stretch justify-between gap-4">
        <SecondaryButton
          href=""
          text="Posalji poruku"
          className="flex-1"
          leadingIcon={MessageCircle}
        />
        <PrimaryButton
          href=""
          text="Pozovi prodavca"
          className="flex-1"
          bgColor="bg-green-light hover:bg-green"
          leadingIcon={Phone}
        />
      </div>
    </div>
  );
}
