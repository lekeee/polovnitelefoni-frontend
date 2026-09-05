import FeaturedAds from "@/components/common/FeaturedAds";
import MainInfos from "@/components/common/MainInfos";
import Navbar from "@/components/common/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <FeaturedAds />
        <MainInfos />
      </main>
    </>
  );
}
