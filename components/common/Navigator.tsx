import { ChevronRight, HomeIcon } from "lucide-react";
import Link from "next/link";

type Props = {
  links: {
    title: string;
    url: string;
  }[];
};

export default function Navigator({ links }: Props) {
  return (
    <section className="w-full max-w-7xl mx-auto px-5 mt-6 flex items-center gap-2">
      <div className="flex items-center gap-2 text-secondary hover:text-primary duration-200">
        <HomeIcon className="w-4 h-4" />
        <Link href="/" className="text-sm">
          Početna
        </Link>
        <ChevronRight className="w-4 h-4" />
      </div>
      {links.map((element, index) => {
        return (
          <div
            key={index}
            className="flex items-center gap-2 text-secondary hover:text-primary duration-200"
          >
            <Link href={element.url} className="text-sm">
              {element.title}
            </Link>
            <ChevronRight className="w-4 h-4 " />
          </div>
        );
      })}
    </section>
  );
}
