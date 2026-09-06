import { ChevronDown, Grid2X2, List } from "lucide-react";
import Link from "next/link";

export default function MainAdsHeader() {
    return <div className="w-full flex items-center justify-between">
        <p className="text-lg font-semibold">Pronađeno je 295 rezultata</p>
        <div className="flex items-stretch gap-4">
            <div className="flex items-center px-4 py-2 gap-1 rounded-full border border-border">
                <p className="text-sm text-secondary">Sortiraj po: </p>
                <select className="bg-transparent outline-none text-sm appearance-none font-medium">
                    <option value="1">Prvo najnoviji</option>
                    <option value="2">Prvo najstariji</option>
                    <option value="3">Prvo najskuplje</option>
                    <option value="4">Prvo najjeftinije</option>
                </select>
                <ChevronDown className="w-4 h-4 text-primary" />
            </div>
            <div className="flex items-center px-4 py-2 gap-1 rounded-full border border-border">
                <p className="text-sm text-secondary">Prikazuj: </p>
                <select className="bg-transparent outline-none text-sm appearance-none font-medium">
                    <option value="1">8 oglasa</option>
                    <option value="2">16 oglasa</option>
                    <option value="3">32 oglasa</option>
                    <option value="4">64 oglasa</option>
                </select>
                <ChevronDown className="w-4 h-4 text-primary" />
            </div>
            <div className="flex items-center px-4 py-2 gap-4 rounded-full border border-border">
                <Link href="#">
                    <Grid2X2 className="w-4 h-4 text-primary" />
                </Link>
                <Link href="#">
                    <List className="w-4 h-4 text-secondary" />
                </Link>
            </div>

        </div>
    </div>
}