import PrimaryButton from "@/components/ui/PrimaryButton";
import { ArrowRightCircle, Eye, LockKeyhole, Mail, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  onToggle: () => void;
};

export default function RegisterForm({ onToggle }: Props) {
  return (
    <div className="w-full max-w-lg bg-white shadow-soft p-8 mx-auto rounded-2xl flex flex-col gap-4 relative">
      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#bcd9f7]">
        <User className="w-6 h-6 text-[#678ebe]" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-3xl font-semibold">Registracija</p>
        <p className="text-sm text-secondary max-w-[80%]">
          Kreirajte nalog i postanite deo nase zajednice.
        </p>
      </div>
      <div className="mt-2 flex flex-col gap-2">
        <label className="text-sm" htmlFor="email">
          Email adresa *
        </label>
        <div className="w-full rounded-lg border border-border px-4 flex items-center justify-between gap-3">
          <Mail className="w-6 h-6 text-secondary" />
          <input
            type="email"
            id="email"
            placeholder="Unesite korisnicko ime ili email"
            className="h-12 flex-1 outline-none placeholder:text-sm placeholder:text-secondary"
          />
        </div>
      </div>
      <div className="mt-2 flex flex-col gap-2">
        <label className="text-sm" htmlFor="username">
          Korisnicko ime *
        </label>
        <div className="w-full rounded-lg border border-border px-4 flex items-center justify-between gap-3">
          <User className="w-6 h-6 text-secondary" />
          <input
            type="text"
            id="username"
            placeholder="Unesite korisnicko ime ili email"
            className="h-12 flex-1 outline-none placeholder:text-sm placeholder:text-secondary"
          />
        </div>
      </div>
      <div className="mt-2 flex flex-col gap-2">
        <label className="text-sm" htmlFor="password">
          Lozinka *
        </label>
        <div className="w-full rounded-lg border border-border px-4 flex items-center justify-between gap-3">
          <LockKeyhole className="w-6 h-6 text-secondary" />
          <input
            type="password"
            id="password"
            placeholder="Unesite lozinku"
            className="h-12 flex-1 outline-none placeholder:text-sm placeholder:text-secondary"
          />
          <Eye className="w-4 h-4 text-secondary" />
        </div>
      </div>
      <div className="mt-2 flex flex-col gap-2">
        <label className="text-sm" htmlFor="repeated-password">
          Potvrdite lozinku *
        </label>
        <div className="w-full rounded-lg border border-border px-4 flex items-center justify-between gap-3">
          <LockKeyhole className="w-6 h-6 text-secondary" />
          <input
            type="password"
            id="repeated-password"
            placeholder="Unesite lozinku"
            className="h-12 flex-1 outline-none placeholder:text-sm placeholder:text-secondary"
          />
          <Eye className="w-4 h-4 text-secondary" />
        </div>
      </div>
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-start gap-2">
          <input type="checkbox" id="terms" className="w-4 h-4 mt-1" />
          <label htmlFor="terms" className="text-sm text-secondary ">
            Vasi licni podaci ce se koristiti radi poboljsanja vaseg iskustva na
            ovoj veb stranici, upravljanja pristupom vasem nalogu i u skladu s
            nasom <span className="text-primary">politikom privatnosti.</span>
          </label>
        </div>
      </div>
      <div className="w-30 h-30 rounded-bl-full bg-[#ebf4fd] absolute top-0 right-0 flex items-center justify-center">
        <Image
          src="/icons/phone-blue.svg"
          width={44}
          height={44}
          alt="Phone"
          className="translate-x-4 -translate-y-3 opacity-30 rotate-z-180"
        />
      </div>
      <div className="mt-2">
        <PrimaryButton
          text="Registruj se"
          href=""
          tailingIcon={ArrowRightCircle}
          className="w-full"
        />
      </div>
      <div className="mt-2 flex items-center gap-1">
        <p className="text-sm text-secondary">Vec imate nalog?</p>
        <Link href="#" className="flex items-center gap-1" onClick={onToggle}>
          <p className="text-sm text-primary">Prijavite se se</p>
          <ArrowRightCircle className="w-4 h-4 text-primary" />
        </Link>
      </div>
    </div>
  );
}
