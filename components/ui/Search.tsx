"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

const SPRING = {
  type: "spring",
  stiffness: 380,
  damping: 36,
  mass: 0.9,
} as const;
const STORAGE_KEY = "recent-phone-searches";
const BASE = "/telefoni";

const BRANDS = [
  { label: "Apple", slug: "apple" },
  { label: "Samsung", slug: "samsung" },
  { label: "Xiaomi", slug: "xiaomi" },
  { label: "Huawei", slug: "huawei" },
  { label: "Google Pixel", slug: "google" },
  { label: "OnePlus", slug: "oneplus" },
  { label: "Motorola", slug: "motorola" },
  { label: "Honor", slug: "honor" },
];

const MODELS = [
  { name: "iPhone 16 Pro", brand: "Apple" },
  { name: "iPhone 15 Pro Max", brand: "Apple" },
  { name: "iPhone 15", brand: "Apple" },
  { name: "iPhone 14 Pro", brand: "Apple" },
  { name: "iPhone 14", brand: "Apple" },
  { name: "iPhone 13", brand: "Apple" },
  { name: "iPhone 12", brand: "Apple" },
  { name: "iPhone 11", brand: "Apple" },
  { name: "iPhone SE", brand: "Apple" },
  { name: "Galaxy S25 Ultra", brand: "Samsung" },
  { name: "Galaxy S24", brand: "Samsung" },
  { name: "Galaxy S23", brand: "Samsung" },
  { name: "Galaxy S22", brand: "Samsung" },
  { name: "Galaxy A54", brand: "Samsung" },
  { name: "Galaxy A34", brand: "Samsung" },
  { name: "Redmi Note 13", brand: "Xiaomi" },
  { name: "Redmi Note 12", brand: "Xiaomi" },
  { name: "Xiaomi 13T", brand: "Xiaomi" },
  { name: "Huawei P30 Pro", brand: "Huawei" },
  { name: "Pixel 8", brand: "Google Pixel" },
  { name: "Pixel 7", brand: "Google Pixel" },
  { name: "OnePlus 11", brand: "OnePlus" },
];

const POPULAR = [
  "iPhone 13",
  "iPhone 14 Pro",
  "Galaxy S23",
  "Redmi Note 12",
  "Pixel 7",
];

const FILTERS = [
  { label: "Kao nov", icon: "✨", href: `${BASE}?stanje=kao-nov` },
  { label: "Do 20.000 din", icon: "💸", href: `${BASE}?maxCena=20000` },
  { label: "Do 40.000 din", icon: "💰", href: `${BASE}?maxCena=40000` },
  { label: "Sa garancijom", icon: "🛡️", href: `${BASE}?garancija=1` },
  { label: "Sa kutijom i punjačem", icon: "📦", href: `${BASE}?komplet=1` },
];

type Item = {
  id: string;
  label: string;
  icon: string;
  image?: string;
  hint?: string;
  href: string;
  saveAs?: string;
};

type Section = {
  title: string;
  action?: "clear";
  layout?: "chips";
  items: Item[];
};
type Box = { x: number; y: number; w: number };

function Highlight({ text, query }: { text: string; query: string }) {
  const i = query ? text.toLowerCase().indexOf(query.toLowerCase()) : -1;
  if (i === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, i)}
      <mark className="bg-transparent font-semibold text-black">
        {text.slice(i, i + query.length)}
      </mark>
      {text.slice(i + query.length)}
    </>
  );
}

export default function Search() {
  const router = useRouter();
  const triggerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const keyboardNav = useRef(false);

  const [open, setOpen] = useState(false);
  const [triggerHidden, setTriggerHidden] = useState(false);
  const [from, setFrom] = useState<Box>({ x: 0, y: 0, w: 500 });
  const [to, setTo] = useState<Box>({ x: 0, y: 0, w: 600 });
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [recent, setRecent] = useState<string[]>([]);

  const q = query.trim();

  useEffect(() => {
    try {
      setRecent(JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"));
    } catch {}
  }, []);

  const saveRecent = (value: string) => {
    const next = [value, ...recent.filter((r) => r !== value)].slice(0, 6);
    setRecent(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {}
  };

  const clearRecent = () => {
    setRecent([]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
  };

  const openSearch = () => {
    const el = triggerRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const w = Math.min(600, window.innerWidth - 32);
    setFrom({ x: r.left, y: r.top, w: r.width });
    setTo({ x: (window.innerWidth - w) / 2, y: window.innerHeight * 0.15, w });
    setTriggerHidden(true);
    setOpen(true);
  };

  const close = () => {
    setOpen(false);
    setQuery("");
    setActive(0);
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        openSearch();
      }
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const sections = useMemo(() => {
    const lower = q.toLowerCase();

    const searchItem = (
      prefix: string,
      label: string,
      icon: string,
      hint?: string,
    ): Item => ({
      id: `${prefix}-${label}`,
      label,
      icon,
      hint,
      href: `${BASE}?q=${encodeURIComponent(label)}`,
      saveAs: label,
    });
    const brandItem = (b: (typeof BRANDS)[number]): Item => ({
      id: `brand-${b.slug}`,
      label: b.label,
      icon: b.label[0],
      image: `/icons/brands/${b.slug}.svg`,
      hint: "Brend",
      href: `${BASE}?brend=${b.slug}`,
    });
    const filterItem = (f: (typeof FILTERS)[number]): Item => ({
      id: `filter-${f.label}`,
      label: f.label,
      icon: f.icon,
      href: f.href,
    });

    const raw: Section[] = [];

    if (q) {
      raw.push({
        title: "Pretraga",
        items: [searchItem("go", q, "🔍", "Pretraži sve telefone")],
      });
      raw.push({
        title: "Modeli",
        items: MODELS.filter(
          (m) =>
            m.name.toLowerCase().includes(lower) &&
            m.name.toLowerCase() !== lower,
        )
          .slice(0, 5)
          .map((m) => searchItem("model", m.name, "📱", m.brand)),
      });
      raw.push({
        title: "Brendovi",
        layout: "chips",
        items: BRANDS.filter((b) => b.label.toLowerCase().includes(lower)).map(
          brandItem,
        ),
      });
    } else {
      raw.push({
        title: "Nedavne pretrage",
        action: "clear",
        items: recent.slice(0, 4).map((r) => searchItem("rec", r, "🕘")),
      });
      raw.push({
        title: "Brendovi",
        layout: "chips",
        items: BRANDS.map(brandItem),
      });
      raw.push({
        title: "Popularni modeli",
        items: POPULAR.map((p) => searchItem("pop", p, "🔥")),
      });
      raw.push({ title: "Brzi filteri", items: FILTERS.map(filterItem) });
    }

    let i = 0;
    return raw
      .filter((s) => s.items.length)
      .map((s) => ({
        ...s,
        items: s.items.map((it) => ({ ...it, index: i++ })),
      }));
  }, [q, recent]);

  const flat = sections.flatMap((s) => s.items);

  useEffect(() => {
    setActive(0);
    if (listRef.current) listRef.current.scrollTop = 0;
  }, [q]);

  useEffect(() => {
    if (!keyboardNav.current) return;
    const list = listRef.current;
    const id = flat[active]?.id;
    if (!list || !id) return;
    const el = list.querySelector<HTMLElement>(`[data-id="${CSS.escape(id)}"]`);
    if (!el) return;
    const lr = list.getBoundingClientRect();
    const er = el.getBoundingClientRect();
    if (er.top < lr.top) list.scrollTop -= lr.top - er.top + 8;
    else if (er.bottom > lr.bottom) list.scrollTop += er.bottom - lr.bottom + 8;
  }, [active, flat]);

  const go = (item: Item) => {
    if (item.saveAs) saveRecent(item.saveAs);
    close();
    router.push(item.href);
  };

  const onInputKeyDown = (e: React.KeyboardEvent) => {
    if (!flat.length) return;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      keyboardNav.current = true;
      setActive((a) => (a + 1) % flat.length);
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      keyboardNav.current = true;
      setActive((a) => (a - 1 + flat.length) % flat.length);
    } else if (e.key === "Enter" && flat[active]) {
      go(flat[active]);
    }
  };

  const onHover = (index: number) => {
    keyboardNav.current = false;
    if (index !== active) setActive(index);
  };

  return (
    <>
      <div
        ref={triggerRef}
        onClick={openSearch}
        style={{ opacity: triggerHidden ? 0 : 1 }}
        className="relative max-w-125 w-full h-12.5 cursor-pointer"
      >
        <input
          readOnly
          tabIndex={-1}
          placeholder="Pretraži telefone..."
          style={{ borderRadius: 25 }}
          className="w-full h-full bg-white border border-border text-sm pl-8 pr-28 cursor-pointer outline-none"
        />
        <kbd className="absolute right-28 top-1/2 -translate-y-1/2 hidden md:block text-[11px] text-gray-400 border border-border rounded-md px-1.5 py-0.5">
          Ctrl K
        </kbd>
        <div className="absolute right-1 top-1 bottom-1 bg-black text-white rounded-full flex justify-center items-center w-24">
          <Image
            src="/icons/search.svg"
            alt="Pretraga"
            height={20}
            width={20}
          />
        </div>
      </div>

      <div
        className={`fixed inset-0 z-50 overflow-hidden ${open ? "" : "pointer-events-none"}`}
      >
        <AnimatePresence onExitComplete={() => setTriggerHidden(false)}>
          {open && (
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={close}
            />
          )}
          {open && (
            <motion.div
              key="panel"
              initial={{ x: from.x, y: from.y, width: from.w }}
              animate={{ x: to.x, y: to.y, width: to.w }}
              exit={{
                x: from.x,
                y: from.y,
                width: from.w,
                transition: { ...SPRING, stiffness: 460 },
              }}
              transition={SPRING}
              style={{ borderRadius: 25 }}
              className="fixed top-0 left-0 max-w-full overflow-hidden bg-white border border-border shadow-2xl"
            >
              <motion.div
                initial={{ height: 50 }}
                animate={{ height: 56 }}
                exit={{ height: 50 }}
                transition={SPRING}
                className="relative"
              >
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={onInputKeyDown}
                  placeholder="Pretraži telefone..."
                  className="w-full h-full bg-transparent text-base pl-8 pr-28 outline-none"
                />
                <button
                  onClick={() => flat[active] && go(flat[active])}
                  className="absolute right-1 top-1 bottom-1 bg-black text-white rounded-full flex justify-center items-center w-24"
                >
                  <Image
                    src="/icons/search.svg"
                    alt="Pretraga"
                    height={20}
                    width={20}
                  />
                </button>
              </motion.div>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: "auto",
                  opacity: 1,
                  transition: {
                    height: SPRING,
                    opacity: { delay: 0.1, duration: 0.2 },
                  },
                }}
                exit={{ height: 0, opacity: 0, transition: { duration: 0.15 } }}
                className="overflow-hidden border-t border-border"
              >
                <div
                  ref={listRef}
                  className="max-h-[50vh] overflow-y-auto overflow-x-clip overscroll-contain p-2"
                >
                  {sections.map((section, si) => (
                    <motion.div
                      key={section.title}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 + si * 0.05, duration: 0.25 }}
                      className="mb-1"
                    >
                      <div className="flex items-center justify-between px-3 pt-2 pb-1">
                        <span className="text-[11px] font-medium uppercase tracking-wider text-gray-400">
                          {section.title}
                        </span>
                        {section.action === "clear" && (
                          <button
                            onClick={clearRecent}
                            className="text-[11px] text-gray-400 hover:text-black"
                          >
                            Obriši
                          </button>
                        )}
                      </div>

                      {section.layout === "chips" ? (
                        <div className="flex flex-wrap gap-1.5 px-2 pb-1">
                          {section.items.map((item) => (
                            <button
                              key={item.id}
                              data-id={item.id}
                              onMouseMove={() => onHover(item.index)}
                              onClick={() => go(item)}
                              className={`flex items-center gap-2 rounded-xl border border-border px-3 py-2 text-sm transition-colors duration-100 ${
                                active === item.index
                                  ? "bg-gray-100"
                                  : "bg-white"
                              }`}
                            >
                              <span className="flex h-5 items-center justify-center">
                                {item.image ? (
                                  <Image
                                    src={item.image}
                                    alt=""
                                    width={20}
                                    height={20}
                                    className="h-5 w-auto object-contain"
                                  />
                                ) : (
                                  item.icon
                                )}
                              </span>
                              <span>
                                <Highlight text={item.label} query={q} />
                              </span>
                            </button>
                          ))}
                        </div>
                      ) : (
                        section.items.map((item) => (
                          <button
                            key={item.id}
                            data-id={item.id}
                            onMouseMove={() => onHover(item.index)}
                            onClick={() => go(item)}
                            className={`w-full flex items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors duration-100 ${
                              active === item.index ? "bg-gray-100" : ""
                            }`}
                          >
                            <span className="w-6 text-center text-lg">
                              {item.icon}
                            </span>
                            <span className="min-w-0 flex-1 truncate">
                              <Highlight text={item.label} query={q} />
                            </span>
                            {item.hint && (
                              <span className="text-xs text-gray-400">
                                {item.hint}
                              </span>
                            )}
                            {active === item.index && (
                              <span className="text-xs text-gray-400">↵</span>
                            )}
                          </button>
                        ))
                      )}
                    </motion.div>
                  ))}
                </div>

                <div className="flex items-center gap-4 border-t border-border px-4 py-2.5 text-[11px] text-gray-400">
                  <span>
                    <kbd className="font-sans">↑↓</kbd> navigacija
                  </span>
                  <span>
                    <kbd className="font-sans">↵</kbd> izaberi
                  </span>
                  <span className="ml-auto">
                    <kbd className="font-sans">Esc</kbd> zatvori
                  </span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
