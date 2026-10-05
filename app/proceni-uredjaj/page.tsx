import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import AICard from "@/components/ui/AICard";
import PrimaryButton from "@/components/ui/PrimaryButton";
import {
  BadgeDollarSign,
  ChartNoAxesCombined,
  Check,
  HatGlasses,
  Smartphone,
} from "lucide-react";
import Image from "next/image";

const SecondSectionCards = [
  <AICard
    title="Podaci sa tržišta"
    description="Metodologija zasnovana na stvarnim podacima tržišta."
    icon={<ChartNoAxesCombined className="text-primary w-4.5 h-4.5" />}
  />,
  <AICard
    title="Stanje telefona"
    description="Uzimamo u obzir bateriju, stanje, memoriju i garanciju."
    icon={<Smartphone className="text-primary w-4.5 h-4.5" />}
  />,
  <AICard
    title="Realan raspon"
    description="Dobijaš preporuku za bržu ili maksimalnu prodaju."
    icon={<BadgeDollarSign className="text-primary w-4.5 h-4.5" />}
  />,
  <AICard
    title="Transparentno"
    description="Vidiš koji faktori utiču na cenu i koliko svaki vredi."
    icon={<HatGlasses className="text-primary w-4.5 h-4.5" />}
  />,
];

export default function ProceniUredjajPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="w-full max-w-7xl mx-auto px-5 py-24">
          <div className="flex items-stretch justify-between gap-10">
            <div className="flex-1 flex flex-col">
              <div className="flex-1 gap-4 flex flex-col justify-center ">
                <h1>Koliko vredi tvoj telefon?</h1>
                <p className="text-lg opacity-60 max-w-md leading-[auto]">
                  Saznaj realnu tržišnu cenu polovnog telefona za manje od 60
                  sekundi.
                </p>
                <div className="mt-2">
                  <PrimaryButton
                    href=""
                    className="px-6 py-4 text-lg"
                    text="Proceni uređaj"
                  />
                </div>
              </div>
              <div className="flex items-center gap-5 flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="w-4.5 h-4.5 bg-primary rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm font-medium">Besplatno</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4.5 h-4.5 bg-primary rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm font-medium">Bez registracije</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4.5 h-4.5 bg-primary rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm font-medium">Brzo</span>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-2xl overflow-hidden h-113 relative">
              <Image
                src="/koliko-vredi-tvoj-telefon.png"
                alt="Koliko vredi tvoj telefon?"
                fill
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
        <section className="w-full max-w-7xl mx-auto px-5 py-24">
          <div className="flex flex-col items-center justify-center gap-12">
            <div className="w-full max-w-121 flex flex-col items-center gap-3">
              <h2 className="text-center">Zašto verovati našoj proceni?</h2>
              <p className="text-lg opacity-60 max-w-md leading-[auto] text-center">
                Metodologija zasnovana na stvarnim podacima tržišta.
              </p>
            </div>
            <div className="w-full grid grid-cols-4 gap-4 items-stretch">
              {SecondSectionCards.map((card, index) => (
                <div key={index}>{card}</div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full max-w-7xl mx-auto px-5 py-24">
          <div className="flex items-start justify-between gap-12">
            <div className="flex-1 flex flex-col gap-3">
              <h2>Kako se određuje cena polovnog telefona?</h2>
              <p className="text-lg opacity-60 leading-[auto]">
                Cena polovnog telefona zavisi od više faktora: modela i
                generacije uređaja, kapaciteta memorije, fizičkog stanja
                telefona i ekrana, stanja baterije, preostale garancije,
                dostupnosti računa i originalne opreme i aktuelne potražnje na
                tržištu. Naš algoritam analizira sve ove faktore i poredi ih sa
                stvarnim cenama aktivnih oglasa.
              </p>
            </div>
            <div className="flex-1"></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
