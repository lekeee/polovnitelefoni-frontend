import Image from "next/image";
import Link from "next/link";
import UserAvatar from "../ui/UserAvatar";

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
        {/* <PrimaryButton href="/login" text="List Your Item" /> */}
        <div className="flex justify-between items-center py-2.5 w-full">
            <div className="w-72">
                <Link href="/" className="w-36 h-12">
                    <Image src="/polovnitelefoni-logo.svg" alt="Logo" height={50} width={150} />
                </Link>
            </div>
            <div>
                <input type="text" placeholder="Search..." className="border border-gray-300 rounded-md px-4 py-2 w-64" />
            </div>
            <Link href="/login" className="flex">
                <div className="flex items-center gap-3">
                    <UserAvatar />
                    <div className="flex flex-col items-start">
                        <span className="text-sm text-secondary leading-tight">Prijavi se na</span>
                        <span className="text-lg font-bold leading-tight">Profil</span>
                    </div>
                </div>
            </Link>
        </div>
    </nav >
}