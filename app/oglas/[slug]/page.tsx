import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Navigator from "@/components/common/Navigator";
import LightBox from "@/components/ui/LightBox";
import Image from "next/image";

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
          <div className="w-full flex gap-12">
            <div className="relative w-150 h-168.75 rounded-lg overflow-hidden">
              <Image
                src="/iphone-15-pro-max.avif"
                fill
                alt="iPhone 15 Pro Max"
                className="object-cover"
              />
            </div>
            <LightBox />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
