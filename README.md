Frontent platforme polovni-telefoni.rs

moj-projekat/
├── app/                    # Next.js App Router (stranice i rute)
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx
│   │   └── register/
│   │       └── page.tsx
│   ├── (dashboard)/
│   │   └── dashboard/
│   │       └── page.tsx
│   ├── api/                # API rute
│   │   └── health/
│   │       └── route.ts
│   ├── layout.tsx          # Root Layout
│   ├── page.tsx            # Početna stranica
│   └── globals.css         # Tailwind importi
│
├── components/             # UI komponente
│   ├── ui/                 # Osnovne komponente (Button, Input, Card)
│   └── common/             # Kompleksniji UI (Navbar, Footer, Sidebar)
│
├── features/               # Moduli po funkcijama (Feature-First)
│   ├── auth/               # Sve vezano za autentifikaciju
│   │   ├── api/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── types/
│   │   └── utils/
│   └── products/           # Drugi modul (npr. proizvodi)
│       ├── api/
│       ├── components/
│       └── types/
│
├── lib/                    # Helperi i eksterni klijenti (utils.ts, db.ts)
├── hooks/                  # Globalni React hook-ovi
├── types/                  # Globalni TS tipovi
├── constants/              # Globalne konstante
├── public/                 # Slike i statički fajlovi
├── tsconfig.json           # TS konfiguracija
└── tailwind.config.ts      # Tailwind konfiguracija (ako koristite v3)