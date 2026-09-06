import FeaturedAds from "@/components/FeaturedAds";
import MainAdsHeader from "@/components/MainAdsHeader";
import MainInfos from "@/components/MainInfos";
import Navbar from "@/components/common/Navbar";
import { ChevronRight, HomeIcon } from "lucide-react";

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
        <section className="w-full max-w-7xl mx-auto px-5 mt-12 flex items-center gap-2">
          <MainAdsHeader />
        </section>
      </main>
    </>
  );
}
