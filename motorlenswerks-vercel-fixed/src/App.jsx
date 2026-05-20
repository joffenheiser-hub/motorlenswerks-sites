import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Camera,
  Car,
  Gauge,
  ShoppingBag,
  Menu,
  X,
  Mail,
  ArrowRight,
  MapPin,
  Trophy,
  CalendarDays,
  Sparkles,
  ChevronRight,
  Aperture,
  Flag,
  Home,
  BookOpen,
  Grid3X3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const logo = "https://lh3.googleusercontent.com/sitesv/AA5AbUCIdJtFzqH-ITEq5HomwkvyE1_gUX8FDWX5hYVimSidYsORrswJtk51W0XuTMWmy-F3shRouCeAwYz2ASPBwac5KyCW4D_QypcsQ0KtocbFp0EKDye7T64mBU9ars2nm81jzx0QQ0Rr0CZ2BhfA1HYkgNfLhmB6QFjGf8bXB9Vdy3wD3_B4YcYsufE%3Dw16383";

const images = {
  ferrariInterior:
    "https://lh3.googleusercontent.com/sitesv/AA5AbUCzrHZtGnDvuTx7dpC1S8KGCpt0Lajj21G2qm83JD-PZdg-XGruk3QfBcCkJWuuhv8rZtyezBd10hrfPrb_yUvWbwbWR-rd2qt4uIXYK7Snx2YJP7Zb0EEO8imOo6ljP1z87pdx-A2-iYzjrvYE6Qe_P2ahLFm_n_5b6gAt31W116DjUld2oqHT0aeSswmSYQWKIlcsQGow3AU4pnw8Cyg-IFQrS119TTzUe3E%3Dw1280",
  porscheRed:
    "https://lh3.googleusercontent.com/sitesv/AA5AbUAYZxo_f__1zJuY2mVeVX6gglMOVBGqpQB7DLOvECJhahdm6YSMUCoIQX4VWvgHZspw-jL0JYrAfhbIx8LjgXiXR3vWh3WcGU_o_3XXYEtTVyAK9hM4JMBzQnaL7UVMUwtdkI72doCYQ2dfHv0EDUMQ-RQ9x9Lotolb1OY74h_bJCTHsdf53QCR0qzZBqJzmH-CNtelXoc9POlcMcK3LVivUTA8e66mrCjH%3Dw1280",
  gt3Wheel:
    "https://lh3.googleusercontent.com/sitesv/AA5AbUC463L0DoCImjIsVmXwHlPG2nPyM8G2r6iWAiw3sYwJ5qx6nr4yGpNZbyUSkwaJXEFoRiI0plOpllNX3P6pIcuegOgkDwAVYvX1EOkmQsDYcbyR2LxkHTsRGrWl6LDFrCPzRpywlJTqs3x-CY9QVyMX6vXmHqNG1rW4U4eKMdl7AGYnvbhsXHjyWLcdsbRJDsTAZC4m5SIlRG9pFkwUPEiQQJTNVzWUtTnXuWg%3Dw1280",
  lotusTrack:
    "https://lh3.googleusercontent.com/sitesv/AA5AbUB0COPZPbdNvv8LoIm3aDJtqehyEOjgd7oq8Kfz7cUe5exJW_5ROSVEJKXBEEYlZUY3BXslyzZTFWlBmaXNHr0ek9JmHxmOcDTVpeeHKs27PEZI_VTHbe4A2Q-2xy8WlhawjZFPJQ2izekKjkZWVM5HB2YnVZOxRxbs8jcC3bVLmM5ds377RHq_PDQdmTXUqREqRbDzkaEi_0MHzbF_Kx0ansW0E9_H2udS%3Dw1280",
  dailyDriver:
    "https://lh3.googleusercontent.com/sitesv/AA5AbUCXe9X4L7Qynmde3HX5b_vtdSAznqG22nYs8_hrbBwCwt3KlAOmnqVpj02pQnOrfpXCmWU9GbDvvHCNpd9r7MiHHCehZRiv9AoMHPNu6oNtdtX8w-zzF-XrcXIoB2pEwZt9loaVFjZVJK_YxaH2IemeJcaG0OdlQMAg5EFSYh75RjhPtioV44DO8aPoGop5z8JWGx9yf58G2GCmmcZskExXXZ4HkSk9qSNZsvo%3Dw1280",
  supercar:
    "https://lh3.googleusercontent.com/sitesv/AA5AbUC9SoyMih90y_BLZnd-zjykyj3keFPwaz40cmICV7mnCNWgFCPw-oyzWxenCLORbz3DsNS8pkfExJRYYspRJKJLy_KvrXPORE-R5yhRJx_ZWG-QLnU7fYKfpkLIuFfH47l_f-CTgW9HRDWPDDEPveuERjw4r1iB9xOJ0CWpE7rNngIb14digork1jPiOGFInAyKXZQm3zRKlhGkHOqrKWCSDS4JZ8QbdIfS%3Dw1280",
  classic:
    "https://lh3.googleusercontent.com/sitesv/AA5AbUA3hWyM9BvPJu5orNAZ2KK_iKtn8XwkpR6adnQ9NX1seFO3kF1i50dR6Xn_fKlCeBFjr0SjhAguHo4x_JCyFit7PQl-AYtMUZLBPKHae_KkSRFr0rH0H655ryXe47Sm9FgLDFSrfYisEz0aPgW3SUxzycgWLenuNodSyjD_hqxjpxWw3yc3OHB5ECl06s_QKfB7aS2m8H_ayZIroXhht5yUHk4oRCux_CB3cnI%3Dw1280",
};

const pages = [
  { id: "home", label: "Home", icon: Home },
  { id: "gallery", label: "Gallery", icon: Grid3X3 },
  { id: "about", label: "About", icon: Aperture },
  { id: "blog", label: "Blog", icon: BookOpen },
  { id: "events", label: "Events", icon: CalendarDays },
  { id: "shop", label: "Shop", icon: ShoppingBag },
  { id: "contact", label: "Contact", icon: Mail },
];

const categories = [
  { title: "Exotics", image: images.gt3Wheel, copy: "Close-up details, rare specs, and the kind of design that makes people stop and stare." },
  { title: "Car Shows", image: images.porscheRed, copy: "Event coverage from local shows, concours weekends, cars and coffee mornings, and enthusiast gatherings." },
  { title: "Track", image: images.lotusTrack, copy: "Purpose-built machines, driver-focused setups, and the energy of performance driving." },
  { title: "Daily Drivers", image: images.dailyDriver, copy: "Real cars, daily usability, ownership stories, and the machines people actually live with." },
  { title: "Supercars", image: images.supercar, copy: "Modern performance, dramatic shapes, and the photos that make car culture feel larger than life." },
  { title: "Classics", image: images.classic, copy: "Chrome, character, and the timeless cars that built the foundation of enthusiast culture." },
];

const stories = [
  "Getting The Next Generation Interested in Car Culture",
  "Intro to F1",
  "Ferrari: An Icon",
  "The Save The Manual Transmission Initiative",
  "Why All Americans Should Drive Sports Cars",
  "Don't Get Scammed by Your Mechanic",
  "Top 5 Upcoming Super Cars",
  "The Corvette: A Basic History",
  "A Guide to Proper Car Maintenance",
];

function Header({ activePage, setActivePage }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/95 text-white backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <button onClick={() => setActivePage("home")} className="flex items-center gap-3 text-left">
          <img src={logo} alt="MotorLensWerks logo" className="h-11 w-11 rounded-full object-cover ring-1 ring-white/15" />
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em]">MotorLensWerks</p>
            <p className="text-xs text-white/50">Photography • Stories • Events • Merch</p>
          </div>
        </button>

        <nav className="hidden items-center gap-1 lg:flex">
          {pages.map((page) => (
            <button
              key={page.id}
              onClick={() => setActivePage(page.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                activePage === page.id ? "bg-red-600 text-white" : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              {page.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button variant="outline" className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10">
            <Camera size={17} className="mr-2" /> Follow
          </Button>
          <Button onClick={() => setActivePage("gallery")} className="rounded-full bg-red-600 text-white hover:bg-red-700">Explore Gallery</Button>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden" aria-label="Toggle navigation">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 px-5 py-3 lg:hidden">
          {pages.map((page) => {
            const Icon = page.icon;
            return (
              <button
                key={page.id}
                onClick={() => {
                  setActivePage(page.id);
                  setOpen(false);
                }}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-medium ${
                  activePage === page.id ? "bg-red-600 text-white" : "text-white/75 hover:bg-white/10"
                }`}
              >
                <Icon size={17} /> {page.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}

function PageShell({ eyebrow, title, subtitle, children, dark = false }) {
  return (
    <main className={dark ? "min-h-screen bg-zinc-950 text-white" : "min-h-screen bg-white text-zinc-950"}>
      <section className={dark ? "border-b border-white/10 px-5 py-16" : "border-b bg-zinc-50 px-5 py-16"}>
        <div className="mx-auto max-w-7xl">
          <p className={dark ? "text-sm font-black uppercase tracking-[0.25em] text-red-300" : "text-sm font-black uppercase tracking-[0.25em] text-red-600"}>{eyebrow}</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black uppercase leading-tight tracking-tight md:text-6xl">{title}</h1>
          {subtitle && <p className={dark ? "mt-5 max-w-3xl text-lg leading-8 text-white/65" : "mt-5 max-w-3xl text-lg leading-8 text-zinc-600"}>{subtitle}</p>}
        </div>
      </section>
      {children}
    </main>
  );
}

function HomePage({ setActivePage }) {
  return (
    <main className="bg-zinc-950 text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={images.ferrariInterior} alt="Ferrari interior photographed by MotorLensWerks" className="h-full w-full object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/75 to-zinc-950/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(220,38,38,0.35),transparent_35%)]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-32">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/85 backdrop-blur">
              <Aperture size={16} /> Automotive stories through the lens
            </div>
            <h1 className="max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-tight md:text-7xl">
              Capture the machine. Preserve the culture.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
              Welcome to MotorLensWerks, a destination for car enthusiasts who appreciate the beauty, specs, stories, and experiences behind classic and modern automobiles.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button onClick={() => setActivePage("gallery")} size="lg" className="rounded-full bg-red-600 text-white hover:bg-red-700">
                View Featured Photos <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button onClick={() => setActivePage("blog")} size="lg" variant="outline" className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10">
                Read the Blog
              </Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55, delay: 0.1 }}>
            <Card className="rounded-[2rem] border-white/10 bg-white/10 p-2 text-white shadow-2xl backdrop-blur-xl">
              <CardContent className="p-5">
                <div className="grid grid-cols-2 gap-3">
                  <img src={images.porscheRed} alt="Red Porsche Boxster Spyder at a car event" className="h-52 rounded-3xl object-cover" />
                  <img src={images.lotusTrack} alt="Red Lotus track car" className="h-52 rounded-3xl object-cover" />
                  <img src={images.supercar} alt="Maserati supercar photographed at an event" className="h-52 rounded-3xl object-cover" />
                  <img src={images.classic} alt="Classic turquoise Chevrolet" className="h-52 rounded-3xl object-cover" />
                </div>
                <div className="mt-5 flex items-center justify-between rounded-3xl bg-zinc-950/70 p-4">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wide text-white">Featured collection</p>
                    <p className="text-sm text-white/60">Exotics, track cars, classics, supercars & daily drivers</p>
                  </div>
                  <Camera className="text-red-400" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 text-zinc-950">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {[
            [Camera, "Photography", "Automotive images across shows, track days, exotics, classics, and daily drivers.", "gallery"],
            [BookOpen, "Stories", "Blog-style posts about car culture, F1, manuals, maintenance, scams, and iconic models.", "blog"],
            [ShoppingBag, "Merch", "Future shirts, hoodies, pullovers, and polos for people who love car culture.", "shop"],
          ].map(([Icon, title, copy, page]) => (
            <button key={title} onClick={() => setActivePage(page)} className="group rounded-[2rem] border bg-white p-7 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-950 text-white"><Icon size={24} /></div>
              <h2 className="text-2xl font-black uppercase tracking-tight">{title}</h2>
              <p className="mt-3 leading-7 text-zinc-600">{copy}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-red-600">Open page <ArrowRight size={16} className="transition group-hover:translate-x-1" /></span>
            </button>
          ))}
        </div>
      </section>

      <FeaturedStory />
    </main>
  );
}

function GalleryPage() {
  return (
    <PageShell
      eyebrow="Gallery"
      title="Explore the garage."
      subtitle="The original site organizes photography into Exotics, Car Shows, Track, Daily Drivers, Supercars, and Classics. This page keeps that multi-category structure while making it feel more modern and visual."
    >
      <section className="px-5 py-16">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((item, index) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.04 }}>
              <Card className="group overflow-hidden rounded-[2rem] border-0 bg-zinc-950 text-white shadow-sm">
                <CardContent className="p-0">
                  <div className="relative h-80 overflow-hidden">
                    <img src={item.image} alt={`${item.title} photography category`} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                    <div className="absolute bottom-0 p-6">
                      <h3 className="text-2xl font-black uppercase tracking-tight">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-white/70">{item.copy}</p>
                      <button className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-red-300">View album <ArrowRight size={16} /></button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

function FeaturedStory() {
  return (
    <section className="bg-zinc-950 px-5 py-24 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-center">
        <div className="relative overflow-hidden rounded-[2rem]">
          <img src={images.porscheRed} alt="2011 Porsche Boxster Spyder featured by MotorLensWerks" className="h-[520px] w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent" />
          <div className="absolute bottom-6 left-6 rounded-2xl bg-white/10 p-4 backdrop-blur-md">
            <p className="text-sm font-bold uppercase tracking-wide text-white">Featured photo story</p>
            <p className="mt-1 text-white/70">Pinehurst, NC Concours d’Elegance</p>
          </div>
        </div>
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-200">
            <Trophy size={16} /> Featured moment
          </div>
          <h2 className="text-4xl font-black uppercase leading-tight tracking-tight md:text-5xl">
            One of 30 red-spec Boxster Spyders takes class honors.
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/70">
            A red-spec 2011 Porsche Boxster Spyder clinched the top spot in its class within the water-cooled Porsche category at the Pinehurst, NC Concours d’Elegance during Sandhills Motoring Expo weekend. The weekend also included a runner-up position in the 75-mile road rally.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-bold uppercase tracking-wide text-white/50">Category</p>
              <p className="mt-2 text-xl font-bold">Water-cooled Porsche</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-bold uppercase tracking-wide text-white/50">Event</p>
              <p className="mt-2 text-xl font-bold">Sandhills Motoring Expo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <PageShell
      eyebrow="About"
      title="Up close and personal."
      subtitle="A cleaner, stronger version of the original About page with the same core identity: car photography, enthusiast stories, road-trip inspiration, and automotive culture."
    >
      <section className="bg-zinc-50 px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          <div className="rounded-[2rem] bg-zinc-950 p-8 text-white shadow-xl">
            <img src={logo} alt="MotorLensWerks logo" className="h-24 w-24 rounded-full object-cover" />
            <h2 className="mt-6 text-4xl font-black uppercase tracking-tight">MotorLensWerks</h2>
            <p className="mt-4 leading-8 text-white/65">
              Car photography, blog-style stories, event inspiration, and automotive culture for people who still love the details.
            </p>
          </div>
          <div className="space-y-5">
            {[
              "MotorLensWerks is a car enthusiast destination dedicated to showcasing the beauty and specs of classic and modern cars.",
              "The brand highlights cool things to do with your car, inspiration for the next road trip, profiles of classic cars, and insights into modern automotive culture.",
              "The site also supports future merchandise, including custom car-themed t-shirts, hoodies, pullovers, and polos for enthusiasts who want to show off their love for automobiles.",
            ].map((copy) => (
              <Card key={copy} className="rounded-3xl border-0 bg-white shadow-sm">
                <CardContent className="flex gap-4 p-6">
                  <CheckIcon />
                  <p className="leading-8 text-zinc-700">{copy}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function CheckIcon() {
  return <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600"><ChevronRight size={18} /></div>;
}

function BlogPage() {
  return (
    <PageShell
      eyebrow="Blog"
      title="Stories for people who still love driving."
      subtitle="The existing blog topics are preserved and reworked into a cleaner editorial page that can grow into articles, guides, event recaps, and opinion pieces."
    >
      <section className="px-5 py-16">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story, index) => (
            <Card key={story} className="group rounded-3xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-950 text-white">
                  {index % 3 === 0 ? <Car size={21} /> : index % 3 === 1 ? <Gauge size={21} /> : <Flag size={21} />}
                </div>
                <h3 className="text-xl font-black leading-tight text-zinc-950">{story}</h3>
                <p className="mt-3 leading-7 text-zinc-600">A cleaner card format for the existing article topic, ready to connect to a full blog post.</p>
                <button className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-red-600">
                  Read More <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

function EventsPage() {
  return (
    <PageShell
      eyebrow="Events"
      title="Cars, coffee, road trips, and places worth driving to."
      subtitle="This keeps the Cars & Coffee and driving destination concept from the linked site but turns it into a dedicated events-style tab."
      dark
    >
      <section className="px-5 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {[
            ["Cars & Coffee Morrisville", "Local meet inspiration and photo-op destination."],
            ["Cars & Coffee Raleigh", "A strong recurring event page for regional enthusiasts."],
            ["Stokesdale Cars & Coffee", "A destination-style listing for people looking for weekend drives."],
            ["Cars & Coffee Greensboro", "Great for future recap galleries and event highlights."],
          ].map(([event, copy]) => (
            <Card key={event} className="rounded-[2rem] border-white/10 bg-white/10 text-white backdrop-blur">
              <CardContent className="p-8">
                <MapPin className="text-red-400" size={32} />
                <h2 className="mt-5 text-2xl font-black uppercase tracking-tight">{event}</h2>
                <p className="mt-3 leading-7 text-white/65">{copy}</p>
                <Button className="mt-6 rounded-full bg-red-600 text-white hover:bg-red-700">View Details</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

function ShopPage() {
  return (
    <PageShell
      eyebrow="Shop"
      title="MotorLensWerks merch coming soon."
      subtitle="The original shop lists featured products coming soon, including shirts, hoodies, pullovers, and polos in the $20–$40 range. This page is set up as a launch-ready merch tab."
    >
      <section className="bg-zinc-50 px-5 py-16">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["Shirts", "$20", "Clean enthusiast graphics for everyday wear."],
            ["Hoodies", "$40", "Cold-start approved layers for car meets and garage days."],
            ["Pullovers", "$35", "Simple branded pullovers with an automotive feel."],
            ["Polos", "$30", "A cleaner option for events, shows, and concours weekends."],
          ].map(([item, price, copy]) => (
            <Card key={item} className="rounded-[2rem] border-0 bg-white shadow-sm">
              <CardContent className="p-7">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-zinc-950 text-white"><ShoppingBag size={26} /></div>
                <h2 className="text-2xl font-black uppercase tracking-tight">{item}</h2>
                <p className="mt-1 text-lg font-bold text-red-600">Coming soon • {price}</p>
                <p className="mt-3 leading-7 text-zinc-600">{copy}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-3xl rounded-[2rem] bg-zinc-950 p-8 text-center text-white">
          <Sparkles className="mx-auto text-red-400" size={34} />
          <h2 className="mt-4 text-3xl font-black uppercase tracking-tight">Notify me when merch drops</h2>
          <p className="mt-3 text-white/65">This can connect to email capture later through Shopify, Squarespace, Mailchimp, ConvertKit, or another store/email tool.</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <input className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/10 px-5 py-3 text-white outline-none placeholder:text-white/40" placeholder="Email address" />
            <Button className="rounded-full bg-red-600 px-7 text-white hover:bg-red-700">Join List</Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Have a car, event, or story worth shooting?"
      subtitle="Follow MotorLensWerks on Instagram for the latest car photos and updates, or reach out about events, photo features, collaborations, and future merch."
      dark
    >
      <section className="px-5 py-16">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-zinc-900 to-red-950 text-white shadow-2xl">
          <div className="grid gap-8 p-8 md:grid-cols-[1fr_0.8fr] md:p-12">
            <div>
              <Camera className="text-red-300" size={42} />
              <h2 className="mt-5 max-w-3xl text-4xl font-black uppercase leading-tight tracking-tight md:text-5xl">Let’s connect.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
                This page can be used for event coverage requests, car feature submissions, brand collaborations, merch questions, or general contact.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" className="rounded-full bg-red-600 text-white hover:bg-red-700">
                  <Camera className="mr-2" size={18} /> @motorlenswerks
                </Button>
                <Button size="lg" variant="outline" className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10">
                  <Mail className="mr-2" size={18} /> Email
                </Button>
              </div>
            </div>
            <Card className="rounded-[2rem] border-white/10 bg-white/10 text-white backdrop-blur-xl">
              <CardContent className="p-6">
                <p className="text-sm font-bold uppercase tracking-wide text-white/50">Quick message</p>
                <div className="mt-5 space-y-3">
                  <input className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-white/40 focus:ring-2 focus:ring-red-500" placeholder="Name" />
                  <input className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-white/40 focus:ring-2 focus:ring-red-500" placeholder="Email or Instagram" />
                  <select className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none focus:ring-2 focus:ring-red-500">
                    <option>Photo feature</option>
                    <option>Event coverage</option>
                    <option>Merch</option>
                    <option>Collaboration</option>
                  </select>
                  <textarea className="min-h-28 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-white/40 focus:ring-2 focus:ring-red-500" placeholder="Tell me what you have in mind..." />
                  <Button className="w-full rounded-2xl bg-red-600 py-6 text-white hover:bg-red-700">
                    Send Message <ArrowRight className="ml-2" size={18} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Footer({ setActivePage }) {
  return (
    <footer className="bg-zinc-950 px-5 py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
        <button onClick={() => setActivePage("home")} className="flex items-center gap-3 text-left">
          <img src={logo} alt="MotorLensWerks logo" className="h-12 w-12 rounded-full object-cover" />
          <div>
            <p className="font-black uppercase tracking-[0.2em]">MotorLensWerks</p>
            <p className="text-sm text-white/50">Car photography, blog, events, and merch.</p>
          </div>
        </button>
        <div className="flex flex-wrap gap-2">
          {pages.map((page) => (
            <button key={page.id} onClick={() => setActivePage(page.id)} className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/65 hover:bg-white/10 hover:text-white">
              {page.label}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}

function ActivePage({ activePage, setActivePage }) {
  if (activePage === "gallery") return <GalleryPage />;
  if (activePage === "about") return <AboutPage />;
  if (activePage === "blog") return <BlogPage />;
  if (activePage === "events") return <EventsPage />;
  if (activePage === "shop") return <ShopPage />;
  if (activePage === "contact") return <ContactPage />;
  return <HomePage setActivePage={setActivePage} />;
}

export default function MotorLensWerksRedesign() {
  const [activePage, setActivePage] = useState("home");

  return (
    <div className="min-h-screen bg-white font-sans text-zinc-950">
      <Header activePage={activePage} setActivePage={setActivePage} />
      <ActivePage activePage={activePage} setActivePage={setActivePage} />
      <Footer setActivePage={setActivePage} />
    </div>
  );
}
