import { ArrowRight, Mail, MailBadge } from "lucide-react";
import PrimaryButton from "../ui/PrimaryButton";
import Image from "next/image";

export default function Newsletter() {
  return (
    <section className="w-full max-w-7xl mx-auto my-36 bg-[#fdf7f8] rounded-2xl px-12 py-6 flex items-center justify-between relative overflow-hidden">
      <div className="flex items-center gap-8 z-2 max-w-1/2">
        <div className="min-w-32 min-h-32 flex-nowrap bg-[#fcecf0] rounded-full flex items-center justify-center">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
            <MailBadge className="w-8 h-8 text-white" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-2xl font-semibold">
            Pretplati se i budi obavesten
          </p>
          <p className="text-sm text-secondary">
            Primaj najnovije oglase, akcije i korisne savete direktno u svoj
            inbox. Ne propusti nista!
          </p>
        </div>
      </div>
      <div className="flex items-stretch gap-2 z-2">
        <div className="px-5 flex items-center rounded-full border border-border bg-white gap-2">
          <Mail className="w-5 h-5 text-secondary" />
          <input
            type="email"
            placeholder="Vasa email adresa"
            className="w-56 h-full outline-none placeholder:text-sm placeholder:leading-3"
          />
        </div>
        <PrimaryButton
          text="Pretplati se"
          href="#"
          tailingIcon={ArrowRight}
          className="font-medium text-white px-6 py-4"
        />
      </div>
      <div className="w-125 h-96 bg-[#fcecf0] rounded-full absolute -right-32 -top-4"></div>
      <Image
        src="/icons/plane.svg"
        width={64}
        height={64}
        alt="Plane"
        className="absolute z-2 right-2 top-2"
      />
    </section>
  );
}
