import Image from "next/image";
import Link from "next/link";
import UserAvatar from "../ui/UserAvatar";
import PrimaryButton from "../ui/PrimaryButton";
import { Bookmark, ChevronDown, Home, MessageCircleWarning, Newspaper, PlusCircle, ShieldQuestionMark, ShoppingBag, Store, Wifi } from "lucide-react";
import SavedAdsIndicator from "../ui/SavedAdsIndicator";
import Search from "../ui/Search";

export default function Navbar() {
    return <nav className="w-full max-w-7xl mx-auto flex flex-col items-center justify-between py-0 px-5">
        <div className="w-full flex items-stretch justify-between my-2.5">
            <div className="flex gap-6">
                <Link href="/" className="text-sm flex items-center gap-1">
                    <ShieldQuestionMark className="w-5 h-5" />
                    O nama</Link>
                <Link href="/" className="text-sm flex items-center gap-1">
                    <Store className="w-4 h-4" />Moji oglasi
                </Link>
                <Link href="/" className="text-sm flex items-center gap-1">
                    <Bookmark className="w-4 h-4" />
                    Sacuvani oglasi
                </Link>
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
        <div className="w-full flex items-stretch justify-between my-2.5">
            <div className="rounded-full bg-black px-4 py-2 text-sm w-75 h-12.5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Image src="/icons/hamburger-menu-half.svg" alt="Logo" height={30} width={30} className="text-white" />
                    <span className="text-white font-medium text-lg">Sve kategorije</span>
                </div>
                <ChevronDown className="text-white h-4 w-4" />
            </div>
            <div className="flex gap-8">
                <Link href="/" className="text-sm flex gap-2 h-full justify-center items-center border-b-2 border-primary">
                    <Home className="w-5 h-5 text-primary" />
                    <p className="font-semibold text-primary text-[1rem]">Početna</p>
                </Link>
                <Link href="/" className="text-sm flex gap-2 h-full justify-center items-center">
                    <ShoppingBag className="w-5 h-5" />
                    <p className="font-semibold text-[1rem] ">Šop</p>
                </Link>
                <Link href="/" className="text-sm flex gap-2 h-full justify-center items-center">
                    <Wifi className="w-5 h-5" />
                    <p className="font-semibold text-[1rem]">Pretplati se</p>
                </Link>
                {/* <Link href="/" className="text-sm flex gap-2 h-full justify-center items-center">
                    <Contact className="w-5 h-5" />
                    <p className="font-semibold">Kontakt</p>
                </Link> */}
                <Link href="/" className="text-sm flex gap-2 h-full justify-center items-center">
                    <Newspaper className="w-5 h-5" />
                    <p className="font-semibold text-[1rem]">Blog</p>
                </Link>
                <Link href="/" className="text-sm flex gap-2 h-full justify-center items-center">
                    <MessageCircleWarning className="w-5 h-5" />
                    <p className="font-semibold text-[1rem]">Podrška</p>
                </Link>
            </div>
            <Link href="/" className="h-12.5 flex justify-center items-center gap-2">
                <Image src="/icons/new-indicator.svg" alt="Logo" height={30} width={30} className="text-white" />
                <span className="text-[1rem] font-semibold text-black">Proceni Uređaj</span>
            </Link>
        </div>
    </nav >
}