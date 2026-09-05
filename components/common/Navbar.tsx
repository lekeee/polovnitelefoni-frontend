import Image from "next/image";
import Link from "next/link";
import UserAvatar from "../ui/UserAvatar";
import PrimaryButton from "../ui/PrimaryButton";
import { Contact, Home, MessageCircleWarning, Newspaper, PlusCircle, ShoppingBag, Wifi } from "lucide-react";
import SavedAdsIndicator from "../ui/SavedAdsIndicator";
import Search from "../ui/Search";

export default function Navbar() {
    return <nav className="w-full max-w-7xl mx-auto flex flex-col items-center justify-between py-0 px-5">
        <div className="w-full flex items-stretch justify-between my-2.5">
            <div className="flex gap-8">
                <Link href="/" className="text-sm">O nama</Link>
                <Link href="/" className="text-sm">Moj nalog</Link>
                <Link href="/" className="text-sm">Moji oglasi</Link>
                <Link href="/" className="text-sm">Sacuvani oglasi</Link>
            </div>
            <div className="flex gap-8">
                <Link href="/" className="text-sm">Srpski</Link>
                <Link href="/" className="text-sm">EUR</Link>
            </div>
        </div>
        <div className="flex justify-between items-center py-2.5 w-full">
            <div className="w-72">
                <Link href="/" className="w-36 h-12">
                    <Image src="/polovnitelefoni-logo.svg" alt="Logo" height={50} width={143.75} />
                </Link>
            </div>
            <Search />
            <div className="flex items-center gap-8">
                <Link href="/login" className="flex items-center gap-4">
                    <div className="flex items-center gap-3">
                        <UserAvatar name="John" lastname="Doe" />
                        <div className="flex flex-col items-start">
                            <span className="text-sm text-secondary leading-tight">Prijavi se na</span>
                            <span className="text-lg font-bold leading-tight">Profil</span>
                        </div>
                    </div>
                </Link>
                <div>
                    <PrimaryButton href="/login" text="Dodaj oglas" icon={PlusCircle} />
                </div>
                <SavedAdsIndicator />
            </div>
        </div>
        <div className="w-full flex items-center justify-between my-2.5">
            <select className="border border-gray-300 rounded-md px-4 py-2 text-sm w-75 h-16">
                <option>Sve kategorije</option>
            </select>
            <div className="flex gap-8">
                <Link href="/" className="text-sm flex gap-2">
                    <Home className="w-5 h-5" />
                    <p className="font-semibold">Početna</p>
                </Link>
                <Link href="/" className="text-sm flex gap-2">
                    <ShoppingBag className="w-5 h-5" />
                    <p className="font-semibold">Šop</p>
                </Link>
                <Link href="/" className="text-sm flex gap-2">
                    <Wifi className="w-5 h-5" />
                    <p className="font-semibold">Pretplati se</p>
                </Link>
                <Link href="/" className="text-sm flex gap-2">
                    <Contact className="w-5 h-5" />
                    <p className="font-semibold">Kontakt</p>
                </Link>
                <Link href="/" className="text-sm flex gap-2">
                    <Newspaper className="w-5 h-5" />
                    <p className="font-semibold">Blog</p>
                </Link>
                <Link href="/" className="text-sm flex gap-2">
                    <MessageCircleWarning className="w-5 h-5" />
                    <p className="font-semibold">Podrška</p>
                </Link>
            </div>
            <Link href="/" className="text-sm">Kontakt</Link>
        </div>
    </nav >
}