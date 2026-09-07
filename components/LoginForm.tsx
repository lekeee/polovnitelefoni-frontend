import PrimaryButton from "@/components/ui/PrimaryButton";
import { ArrowRightCircle, Eye, LockKeyhole, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  onToggle: () => void;
};

export default function LoginForm({ onToggle }: Props) {
  return (
    <div className="w-full max-w-lg bg-white shadow-soft p-8 mx-auto rounded-2xl flex flex-col gap-4 relative">
      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary">
        <User className="w-6 h-6 text-white" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-3xl font-semibold">Prijava</p>
        <p className="text-sm text-secondary max-w-[80%]">
          Dobro dosli nazad! Prijavite se na svoj nalog i nastavite sa
          pregledanjem oglasa
        </p>
      </div>
      <div className="mt-2 flex flex-col gap-2">
        <label className="text-sm" htmlFor="username-email">
          Korisnicko ime ili email adresa *
        </label>
        <div className="w-full rounded-lg border border-border px-4 flex items-center justify-between gap-3">
          <User className="w-6 h-6 text-secondary" />
          <input
            type="text"
            id="username-email"
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
            type="text"
            id="password"
            placeholder="Unesite lozinku"
            className="h-12 flex-1 outline-none placeholder:text-sm placeholder:text-secondary"
          />
          <Eye className="w-4 h-4 text-secondary" />
        </div>
      </div>
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center gap-2">
          <input type="checkbox" id="remember-me" className="w-4 h-4" />
          <label
            htmlFor="remember-me"
            className="text-sm text-secondary leading-3"
          >
            Zapamti me
          </label>
        </div>
        <Link href="#" className="text-sm text-primary font-medium">
          Zaboravili ste lozinku?
        </Link>
      </div>
      <div className="w-30 h-30 rounded-bl-full bg-[#f9f0f4] absolute top-0 right-0 flex items-center justify-center">
        <Image
          src="/icons/phone.svg"
          width={44}
          height={44}
          alt="Phone"
          className="translate-x-4 -translate-y-3 opacity-30"
        />
      </div>
      <div className="mt-2">
        <PrimaryButton
          text="Prijavi se"
          href=""
          tailingIcon={ArrowRightCircle}
          className="w-full"
        />
      </div>
      <div className="w-full mt-2 flex items-center justify-between gap-2">
        <div className="flex-1 h-px bg-gray"></div>
        <p className="text-sm text-secondary">ili</p>
        <div className="flex-1 h-px bg-gray"></div>
      </div>
      <div className="mt-2">
        <Link
          href={"#"}
          className={`w-full px-5 py-3 text-sm inline-flex items-center justify-start gap-4 font-medium text-gray-800 bg-white border border-gray-300 rounded-full hover:bg-gray-100 hover:border-gray-400 transition-colors duration-300 `}
        >
          <Image src="/icons/google.svg" width={24} height={24} alt="Google" />
          <span>Prijavite se preko Google naloga</span>
        </Link>
      </div>
      <div className="mt-2 flex items-center gap-1">
        <p className="text-sm text-secondary">Nemate nalog?</p>
        <Link href="#" className="flex items-center gap-1" onClick={onToggle}>
          <p className="text-sm text-primary">Registrujte se</p>
          <ArrowRightCircle className="w-4 h-4 text-primary" />
        </Link>
      </div>
    </div>
  );
}
