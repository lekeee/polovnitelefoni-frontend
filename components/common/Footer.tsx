import { aboutUs } from "@/constants/about-us";
import { latestAds } from "@/constants/latest-ads";
import { latestBlogs } from "@/constants/latest-blogs";
import { popularBrands } from "@/constants/popular-brands";
import { MessageCircle, Shield, User2, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import GradientSeparator from "../ui/GradientSeparator";

export default function Footer() {
  return (
    <footer className="w-full bg-white shadow-softer mt-10 relative">
      <div className="w-full max-w-7xl px-5 mx-auto py-15 ">
        <div className="w-full flex items-top justify-between gap-32 pb-15">
          <div className="flex flex-col gap-8 max-w-84">
            <div className="flex flex-col gap-2">
              <Image
                src="/polovnitelefoni-logo.svg"
                alt="Logo"
                height={50}
                width={143.75}
              />
              <p className="text-sm text-secondary">
                Najveci izbog polovnih i novih telefona na jednom mestu. Kupuj i
                prodaj sigurno, brzo i jednostavno.
              </p>
            </div>
            <div className="flex justify-between gap-4 w-full">
              <div className="flex flex-col gap-2 items-center">
                <div className="w-12 h-12 bg-pink-light rounded-xl flex items-center justify-center">
                  <Shield className="text-primary" />
                </div>
                <p className="text-[12px] leading-3 text-center font-semibold">
                  Provereni oglasi
                </p>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <div className="w-12 h-12 bg-pink-light rounded-xl flex items-center justify-center">
                  <User2 className="text-primary" />
                </div>
                <p className="text-[12px] leading-3 text-center font-semibold">
                  Sigurna kupovina
                </p>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <div className="w-12 h-12 bg-pink-light rounded-xl flex items-center justify-center">
                  <MessageCircle className="text-primary" />
                </div>
                <p className="text-[12px] leading-3 text-center font-semibold">
                  Direktan kontakt
                </p>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <div className="w-12 h-12 bg-pink-light rounded-xl flex items-center justify-center">
                  <Zap className="text-primary" />
                </div>
                <p className="text-[12px] leading-3 text-center font-semibold">
                  Jednostavna prodaja
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-between gap-12">
            <div className="flex flex-col gap-6">
              <p className="text-sm font-bold">Najpopularniji brendovi</p>
              <div className="flex flex-col gap-3 ">
                {popularBrands.map((element, index) => {
                  return (
                    <Link
                      key={index}
                      href={element.link}
                      className="text-sm text-secondary font-medium"
                    >
                      {element.name}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-sm font-bold">Najnovije na sajtu</p>
              <div className="flex flex-col gap-3">
                {latestAds.map((element, index) => {
                  return (
                    <Link
                      key={index}
                      href={element.link}
                      className="text-sm text-secondary font-medium"
                    >
                      {element.name}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col gap-6 max-w-52">
              <p className="text-sm font-bold">Dozvolite da vam pomognemo</p>
              <div className="flex flex-col gap-3">
                {latestBlogs.map((element, index) => {
                  return (
                    <Link
                      key={index}
                      href={element.link}
                      className="text-sm text-secondary font-medium line-clamp-1 text-ellipsis overflow-hidden"
                    >
                      {element.name}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-sm font-bold">O nama</p>
              <div className="flex flex-col gap-3">
                {aboutUs.map((element, index) => {
                  return (
                    <Link
                      key={index}
                      href={element.link}
                      className="text-sm text-secondary font-medium"
                    >
                      {element.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <GradientSeparator />
        <div className="w-full flex justify-between pt-8 gap-24">
          <div className="flex justify-between max-w-50 gap-2">
            <Link
              href="#"
              className="min-w-8 h-8 bg-pink-light rounded-lg flex items-center justify-center"
            >
              <Image
                src="/icons/instagram.svg"
                width={20}
                height={20}
                alt="Instagram"
              />
            </Link>
            <Link
              href="#"
              className="min-w-8 h-8 bg-pink-light rounded-lg flex items-center justify-center"
            >
              <Image
                src="/icons/tiktok.svg"
                width={20}
                height={20}
                alt="Instagram"
              />
            </Link>
            <Link
              href="#"
              className="min-w-8 h-8 bg-pink-light rounded-lg flex items-center justify-center"
            >
              <Image
                src="/icons/linkedin.svg"
                width={20}
                height={20}
                alt="Instagram"
              />
            </Link>
            <Link
              href="#"
              className="min-w-8 h-8 bg-gray rounded-lg flex items-center justify-center"
            >
              <Image
                src="/icons/facebook.svg"
                width={20}
                height={20}
                alt="Instagram"
              />
            </Link>
            <Link
              href="#"
              className="min-w-8 h-8 bg-gray rounded-lg flex items-center justify-center"
            >
              <Image
                src="/icons/youtube.svg"
                width={20}
                height={20}
                alt="Instagram"
              />
            </Link>
          </div>
          <div className="flex-1 flex justify-between items-stretch gap-12">
            <div className="flex gap-1 flex-wrap ">
              {Array.from({ length: 5 }).map((_, loopIndex) =>
                latestAds.map((element, index) => {
                  const uniqueKey = `${loopIndex}-${index}`;

                  return (
                    <div key={uniqueKey} className="flex items-center gap-1">
                      <Link
                        href={element.link}
                        className="text-[12px] text-secondary"
                      >
                        {element.name}
                      </Link>
                      <p className="text-[12px] text-secondary">|</p>
                    </div>
                  );
                }),
              )}
            </div>
            <div className="min-w-px bg-[linear-gradient(to_bottom,#00000000_0%,#e5e7eb_10%,#e5e7eb_90%,#00000000_100%)]"></div>
            <div className="flex flex-col items-start justify-center gap-1">
              <p className="text-[12px] text-secondary text-nowrap">
                © 2026 Polovni Telefoni
              </p>
              <p className="text-[12px] text-secondary text-nowrap">
                Napravljeno od strane{" "}
                <Link href="remenex.com" className="font-semibold underline">
                  Remenex
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-56 h-56 bg-[#f9f0f4] absolute bottom-0 left-0 rounded-tr-full flex items-center justify-center z-0" />
      <div className="w-32 h-32 bg-[#ebf4fd] absolute top-0 right-0 rounded-bl-full flex items-center justify-center z-0" />
    </footer>
  );
}
