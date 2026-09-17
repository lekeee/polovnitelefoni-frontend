import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import UserAvatar from "@/components/ui/UserAvatar";
import Image from "next/image";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="py-24 flex gap-8 w-full max-w-7xl mx-auto px-5">
        <div className="w-75 bg-white shadow-smooth rounded-xl overflow-hidden">
          <div className="w-full">
            <div className="w-full h-32.5 relative">
              <Image
                src="/banner.png"
                alt="User Baner"
                fill
                objectFit="cover"
              />
            </div>
            <div className="relative -top-10 flex justify-center">
              <UserAvatar
                className="w-20 h-20"
                textSize="text-3xl"
                name="Djordje"
                lastname="Ivanovic"
              />
            </div>
          </div>
        </div>
      </main>
      {children}
      <Footer />
    </>
  );
}
