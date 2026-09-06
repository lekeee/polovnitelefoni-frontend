import { BadgePercent, Headphones, ShieldCheck, UserCheck } from "lucide-react";

export default function MainInfos() {
    return <section className="w-full max-w-7xl mx-auto flex flex-col items-center justify-between py-0 px-5">
        <div className="bg-white w-full shadow-soft p-6 rounded-2xl flex gap-6 relative overflow-hidden grid-cols-4">
            <div className="flex gap-4 flex-1 item-center">
                <div className="w-10 h-10 bg-[#fde6e8] rounded-full flex items-center justify-center">
                    <BadgePercent className="text-primary w-6 h-6" />
                </div>
                <div>
                    <p className="text-sm font-medium m-0">Provereni oglasi</p>
                    <p className="text-[12px] m-0 text-secondary">Svi oglasi su pazljivo provereni</p>
                </div>
            </div>
            <div className="flex gap-4 flex-1 item-center">
                <div className="w-10 h-10 bg-[#fde6e8] rounded-full flex items-center justify-center">
                    <UserCheck className="text-primary w-6 h-6" />
                </div>
                <div>
                    <p className="text-sm font-medium m-0">Provereni korisnici</p>
                    <p className="text-[12px] m-0 text-secondary">Kupujte od pravih prodavaca</p>
                </div>
            </div>
            <div className="flex gap-4 flex-1 item-center">
                <div className="w-10 h-10 bg-[#fde6e8] rounded-full flex items-center justify-center">
                    <ShieldCheck className="text-primary w-6 h-6" />
                </div>
                <div>
                    <p className="text-sm font-medium m-0">Sigurna kupovina</p>
                    <p className="text-[12px] m-0 text-secondary">Bezbedne kupovine i zastita kupaca</p>
                </div>
            </div> <div className="flex gap-4 flex-1 item-center">
                <div className="w-10 h-10 bg-[#fde6e8] rounded-full flex items-center justify-center">
                    <Headphones className="text-primary w-6 h-6" />
                </div>
                <div>
                    <p className="text-sm font-medium m-0">Podrška 24/7</p>
                    <p className="text-[12px] font-medium m-0 text-secondary">Tu smo za sva vaša pitanja</p>
                </div>
            </div>
        </div>
    </section>
}