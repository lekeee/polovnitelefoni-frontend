import FeaturedAds from "@/components/FeaturedAds";
import Filters from "@/components/Filters";
import MainAdsHeader from "@/components/MainAdsHeader";
import MainInfos from "@/components/MainInfos";
import AdWidget from "@/components/common/AdWidget";
import Navbar from "@/components/common/Navbar";
import { ChevronRight, HomeIcon, X } from "lucide-react";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <FeaturedAds />
        <MainInfos />
        <section className="w-full max-w-7xl mx-auto px-5 mt-6 flex items-center gap-2">
          <HomeIcon className="w-4 h-4 text-secondary" />
          <span className="text-sm text-secondary">Početna</span>
          <ChevronRight className="w-4 h-4 text-secondary" />
          <span className="text-sm text-secondary">Sve kategorije</span>
        </section>
        <section className="w-full max-w-7xl mx-auto px-5 mt-12">
          <MainAdsHeader />
          <div className="w-full mt-6 flex gap-8">
            <div className="w-full max-w-1/4">
              <Filters />
            </div>
            <div className="flex-1 flex flex-col items-start gap-6">
              <div className="px-4 py-2 border border-border rounded-full flex items-center gap-3">
                <div className="flex items-center gap-1 cursor-pointer hover:text-primary duration-200">
                  <X className="w-3 h-3" />
                  <p className="text-sm leading-4">Obrisi filtere</p>
                </div>
                <div className="flex items-center gap-1 cursor-pointer hover:text-primary duration-200">
                  <X className="w-3 h-3" />
                  <p className="text-sm leading-4">€50 - €450</p>
                </div>
              </div>
              <div className="w-full grid  grid-cols-3 gap-3">
                <AdWidget />
                <AdWidget />
                <AdWidget />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
