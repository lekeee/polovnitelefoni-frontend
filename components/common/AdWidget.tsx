import { Camera, ChevronRight, Eye, Heart, MapPin, MemoryStick, Phone, ShieldCheck, Smartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import UserAvatar from "../ui/UserAvatar";

export default function AdWidget() {
    return <div className="w-full bg-white shadow-soft rounded-2xl flex flex-col overflow-hidden">
        <div className="p-1 w-full">
            <div className="relative w-full h-52 rounded-[15px] overflow-hidden">
                <Image src='/iphone-15-pro-max.avif' fill alt="Iphone 15 Pro Max" className="object-cover" />
                <div className="absolute bottom-3 left-3 flex items-center gap-1 rounded-full bg-black/60 px-3 py-1.5">
                    <Camera className="w-4 h-4 text-white" />
                    <p className="text-white text-[12px] leading-3">1 / 5</p>
                </div>
                <Link href="" className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-white">
                    <Heart className="w-5 h-5" />
                </Link>
                <Link href="" className="absolute top-3 left-3 px-3 py-1 flex items-center justify-center rounded-full bg-green-light">
                    <p className="text-[12px] font-semibold">Novo</p>
                </Link>
                <div className="absolute bottom-3 left-1/2 transform -translate-1/2 flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <div className="w-2 h-2 rounded-full bg-white/50"></div>
                    <div className="w-2 h-2 rounded-full bg-white/50"></div>
                    <div className="w-2 h-2 rounded-full bg-white/50"></div>
                    <div className="w-2 h-2 rounded-full bg-white/50"></div>
                </div>
            </div>
        </div>
        <div className="p-4 flex flex-col gap-3">
            <div>
                <p className="text-sm text-secondary">APPLE</p>
                <p className="text-xl font-semibold line-clamp-2 overflow-hidden text-ellipsis">iPhone 15 Pro Max 512GB</p>
            </div>
            <div className="flex items-center justify-between gap-1">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gray">
                    <Smartphone className="w-4 h-4 text-black opacity-60" />
                    <p className="text-[12px] text-secondary">6.4&quot;</p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gray">
                    <MemoryStick className="w-4 h-4 text-black opacity-60" />
                    <p className="text-[12px] text-secondary">8GB</p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gray">
                    <Camera className="w-4 h-4 text-black opacity-60" />
                    <p className="text-[12px] text-secondary">triple</p>
                </div>
            </div>
            <div className="w-full border-t border-b border-border/60 py-3 mt-2 flex items-center justify-between">
                <p className="text-2xl font-semibold text-primary">€1240</p>
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4 text-secondary" /><p className="text-sm text-secondary">234</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4 text-secondary" /><p className="text-sm text-secondary">0</p>
                    </div>
                </div>
            </div>
            <div className="w-full flex items-center justify-between">
                <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 mt-px" />
                    <div>
                        <p className="text-sm font-medium">Vlasotince</p>
                        <p className="text-[12px] text-secondary">Pre 1 nedelju</p>
                    </div>
                </div>
                <Link href="#" className="w-10 h-10 rounded-md bg-green-light/10 flex items-center justify-center" >
                    <Phone className="w-5 h-5 text-green-light" />
                </Link>
            </div>
            <div className="w-full mt-2 flex items-center justify-between px-2 py-2 bg-gray/60 rounded-xl">
                <div className="flex items-start gap-2">
                    <UserAvatar name="Milan" lastname="Stankovic" />
                    <div>
                        <p className="text-sm font-medium">milanca_69</p>
                        <div className="flex items-center gap-px">
                            <ShieldCheck className="h-4 w-4 text-white fill-green-light" />
                            <p className="text-[10px] leading-3 text-secondary">Provereni prodavac</p>

                        </div>
                    </div>
                </div>
                <ChevronRight className="w-5 h-5 text-secondary" />
            </div>
        </div>
    </div>
}