import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Navigator from "@/components/common/Navigator";
import AdditionAdInfos from "@/components/ui/AdditionAdInfos";
import AdOptions from "@/components/ui/AdOptions";
import SellerShortInfos from "@/components/ui/SellerShortInfos";
import StateIndicator from "@/components/ui/StateIndicator";
import { Eye, Heart, RotateCcw, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const links = [
    {
      title: "Apple",
      url: "/?brand=Apple",
    },
    {
      title: "iPhone 15 Pro Max",
      url: "/?model=iPhone 15 Pro Max",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="py-10">
        <Navigator links={links} />
        <section className="w-full max-w-7xl mx-auto px-5 mt-5">
          <div className="w-full flex gap-12 items-stretch">
            <div className="relative w-150 h-168.75 rounded-lg overflow-hidden">
              <Image
                src="/iphone-15-pro-max.avif"
                fill
                alt="iPhone 15 Pro Max"
                className="object-cover"
              />
            </div>
            <div className="flex-1 flex flex-col gap-3 justify-between">
              <div className="flex items-center justify-between">
                <StateIndicator isNew={false} stateScore={3} />
                <div className="flex items-center gap-3">
                  <Link href="#">
                    <Heart className="w-7 h-7" />
                  </Link>
                  <Link
                    href="#"
                    className="w-7 h-7 rounded-full bg-gray-300 flex items-center justify-center"
                  >
                    <Share2 className="w-4 h-4" />
                  </Link>
                  <AdOptions />
                </div>
              </div>
              <p className="text-3xl font-bold line-clamp-2 overflow-hidden text-ellipsis">
                iPhone 15 128gb 10/10 Garancija!
              </p>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-px">
                  <Eye className="w-4 h-5 font-light opacity-70" />
                  <p className="text-sm font-light opacity-70">534</p>
                </div>
                <div className="flex items-center gap-px">
                  <Heart className="w-4 h-5 font-light opacity-70" />
                  <p className="text-sm font-light opacity-70">23</p>
                </div>
                <div className="flex items-center gap-px">
                  <RotateCcw className="w-4 h-5 font-light text-primary" />
                  <p className="text-sm font-light opacity-70">pre 5 dana</p>
                </div>
              </div>
              <div className="py-4 text-5xl font-bold text-primary">
                <p>520€</p>
              </div>
              <AdditionAdInfos />
              <SellerShortInfos />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
