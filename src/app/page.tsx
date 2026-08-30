import Image from "next/image";
import {
  Stethoscope,
  Syringe,
  Baby,
  HeartPulse,
  Clock,
  MapPin,
  Phone,
  Star,
  ShieldCheck,
  Sparkles,
  Users,
  MessageCircle,
  Car,
} from "lucide-react";
import { FadeUp, Stagger, StaggerItem } from "@/components/motion";

const PHONE = "(0355) 329380";
const PHONE_HREF = "tel:+62355329380";
const ADDRESS =
  "Jl. KH Agus Salim No.5, Kenayan, Kec. Tulungagung, Kabupaten Tulungagung, Jawa Timur 66212";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Klinik+Nikita+Farla+Tulungagung";
const MAPS_EMBED =
  "https://www.google.com/maps?q=Klinik%20Nikita%20Farla%20Tulungagung&output=embed";

const layanan = [
  {
    icon: Stethoscope,
    title: "Pemeriksaan Umum",
    desc: "Pemeriksaan kesehatan menyeluruh oleh dokter berpengalaman yang sabar dan peduli dengan kondisi pasien.",
  },
  {
    icon: Baby,
    title: "Kesehatan Ibu & Kehamilan",
    desc: "Pendampingan kesehatan ibu hamil dan anak dengan pelayanan yang hangat serta mudah diajak konsultasi.",
  },
  {
    icon: Syringe,
    title: "Suntik & Booster",
    desc: "Layanan suntik vitamin dan booster dengan proses cepat — bahkan masih dilayani di luar jam sibuk.",
  },
  {
    icon: HeartPulse,
    title: "Tindakan Medis Dasar",
    desc: "Penanganan medis akurat oleh tenaga kesehatan profesional dengan standar pelayanan klinik utama.",
  },
];

const keunggulan = [
  {
    icon: Clock,
    title: "Pelayanan Cepat & Akurat",
    desc: "Proses pendaftaran hingga penanganan berjalan sigap, tanpa menunggu lama.",
  },
  {
    icon: Users,
    title: "Dokter & Perawat Ramah",
    desc: "Dokter sabar dan berpengalaman, perawat ramah — nyaman untuk bertanya apa pun.",
  },
  {
    icon: MessageCircle,
    title: "Respons WhatsApp Kilat",
    desc: "Tanya jadwal atau konsultasi awal lewat WhatsApp, dibalas dengan cepat.",
  },
  {
    icon: Sparkles,
    title: "Bersih & Nyaman",
    desc: "Ruang tunggu nyaman dan fasilitas yang selalu terjaga kebersihannya.",
  },
  {
    icon: Car,
    title: "Parkir Luas",
    desc: "Area parkir lega sehingga kunjungan Anda bebas repot sejak tiba.",
  },
  {
    icon: ShieldCheck,
    title: "Dipercaya 265+ Ulasan",
    desc: "Rating 4,9 dari 265 ulasan Google — bukti kepercayaan keluarga Tulungagung.",
  },
];

const testimoni = [
  {
    nama: "Fitrotun Nisa",
    waktu: "3 bulan lalu",
    teks: "Badan capek, ngide ke Nikita Farla buat suntik booster. Berangkat jam 19.30 eh masih bisa. Perawatnya ramah banget. Kesehatan harus dijaga.",
  },
  {
    nama: "Rumman Amina",
    waktu: "3 bulan lalu",
    teks: "Ruang tunggu nyaman, pelayanan cepat dan nduluri banget jadi nggak canggung buat tanya-tanya. Pelayanan lewat WA pun dibalas kilat.",
  },
  {
    nama: "Zyyan Ibra",
    waktu: "2 bulan lalu",
    teks: "Pelayanan sangat baik, mbak-mbak perawat ramah sekali, tempat nyaman, dokter sabar dan sangat berpengalaman. Best!",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-gold" aria-label="Rating 5 dari 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-navy-foreground/10 bg-navy-deep/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#beranda" className="flex items-center gap-3">
            <Image
              src="/logo-klinik.jpg"
              alt="Logo Klinik Nikita Farla"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover ring-1 ring-gold/60"
            />
            <div className="leading-tight">
              <p className="text-sm font-extrabold tracking-wide text-navy-foreground">
                NIKITA FARLA
              </p>
              <p className="text-[11px] font-semibold tracking-[0.2em] text-gold">
                KLINIK UTAMA
              </p>
            </div>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-navy-foreground/80 md:flex">
            <a href="#tentang" className="transition-colors hover:text-gold">
              Tentang
            </a>
            <a href="#layanan" className="transition-colors hover:text-gold">
              Layanan
            </a>
            <a href="#testimoni" className="transition-colors hover:text-gold">
              Testimoni
            </a>
            <a href="#lokasi" className="transition-colors hover:text-gold">
              Lokasi
            </a>
          </nav>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-bold text-gold-foreground shadow-lg shadow-gold/25 transition-transform hover:scale-[1.03]"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">Hubungi Kami</span>
            <span className="sm:hidden">Telepon</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="beranda" className="relative overflow-hidden bg-navy-deep">
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 85% 20%, oklch(0.72 0.13 85 / 0.5), transparent 45%), radial-gradient(circle at 10% 90%, oklch(0.45 0.18 275 / 0.6), transparent 50%)",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:items-center md:py-24">
          <Stagger>
            <StaggerItem>
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold text-gold">
                <Star className="h-3.5 w-3.5 fill-current" />
                4,9 dari 265 ulasan Google
              </div>
            </StaggerItem>
            <StaggerItem>
              <h1 className="mt-5 text-balance text-4xl font-extrabold leading-tight tracking-tight text-navy-foreground sm:text-5xl">
                Klinik Utama <span className="text-gold">Nikita Farla</span>
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-navy-foreground/75">
                Klinik spesialis keluarga di Tulungagung — pelayanan cepat dan
                akurat, dokter yang peduli, serta tenaga medis yang ramah untuk
                kesehatan Anda dan keluarga.
              </p>
            </StaggerItem>
            <StaggerItem>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold text-gold-foreground shadow-xl shadow-gold/25 transition-transform hover:scale-[1.03]"
                >
                  <Phone className="h-4 w-4" />
                  {PHONE}
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-navy-foreground/25 px-6 py-3 text-sm font-semibold text-navy-foreground transition-colors hover:border-gold hover:text-gold"
                >
                  <MapPin className="h-4 w-4" />
                  Lihat Rute
                </a>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-navy-foreground/70">
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gold" /> Buka setiap hari · Tutup
                  17.00
                </span>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gold" /> Tulungagung, Jawa Timur
                </span>
              </div>
            </StaggerItem>
          </Stagger>
          <FadeUp delay={0.15} className="relative">
            <div className="overflow-hidden rounded-3xl border border-navy-foreground/10 shadow-2xl shadow-black/30">
              <Image
                src="/clinic-interior.jpg"
                alt="Ruang tunggu Klinik Nikita Farla yang bersih dan nyaman"
                width={1600}
                height={900}
                priority
                className="h-full w-full object-cover"
              />
            </div>
            <FadeUp delay={0.5} className="absolute -bottom-5 -left-4 rounded-2xl border border-border bg-card p-4 shadow-xl sm:-left-8">
              <div className="flex items-center gap-3">
                <Stars />
              </div>
              <p className="mt-1 text-sm font-bold">4,9 / 5</p>
              <p className="text-xs text-muted-foreground">265 ulasan pasien</p>
            </FadeUp>
          </FadeUp>
        </div>
      </section>

      {/* Tentang */}
      <section id="tentang" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <FadeUp className="order-2 md:order-1">
            <div className="overflow-hidden rounded-3xl border border-border shadow-xl shadow-navy/10">
              <Image
                src="/doctor-consult.jpg"
                alt="Dokter Klinik Nikita Farla yang ramah dan berpengalaman"
                width={1200}
                height={900}
                loading="eager"
                className="h-full w-full object-cover"
              />
            </div>
          </FadeUp>
          <FadeUp className="order-1 md:order-2" delay={0.1}>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">
              Tentang Kami
            </p>
            <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
              Perawatan yang tulus, dari keluarga untuk keluarga
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Klinik Utama Nikita Farla adalah klinik spesialis yang berlokasi
              di jantung Tulungagung. Kami percaya pelayanan kesehatan terbaik
              lahir dari ketulusan — dokter yang sabar mendengarkan, perawat
              yang ramah, dan proses yang cepat tanpa mengorbankan ketelitian.
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Kepercayaan masyarakat tercermin dari rating 4,9 dari 265 ulasan
              di Google, dengan pujian atas kebersihan tempat, keluasan parkir,
              dan profesionalisme tenaga medis kami.
            </p>
            <Stagger className="mt-8 grid grid-cols-3 gap-4" delay={0.08}>
              <StaggerItem className="rounded-2xl border border-border bg-card p-4 text-center">
                <p className="text-2xl font-extrabold text-primary">4,9</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Rating Google
                </p>
              </StaggerItem>
              <StaggerItem className="rounded-2xl border border-border bg-card p-4 text-center">
                <p className="text-2xl font-extrabold text-primary">265+</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Ulasan Pasien
                </p>
              </StaggerItem>
              <StaggerItem className="rounded-2xl border border-border bg-card p-4 text-center">
                <p className="text-2xl font-extrabold text-primary">7 Hari</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Buka Setiap Hari
                </p>
              </StaggerItem>
            </Stagger>
          </FadeUp>
        </div>
      </section>

      {/* Layanan */}
      <section id="layanan" className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <FadeUp className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">
              Layanan Kami
            </p>
            <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
              Perawatan lengkap untuk seluruh keluarga
            </h2>
          </FadeUp>
          <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" delay={0.08}>
            {layanan.map((item) => (
              <StaggerItem
                key={item.title}
                className="group rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground transition-colors group-hover:bg-gold group-hover:text-gold-foreground">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Keunggulan */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <FadeUp className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">
            Kenapa Kami
          </p>
          <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            Alasan pasien kembali lagi
          </h2>
        </FadeUp>
        <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" delay={0.07}>
          {keunggulan.map((item) => (
            <StaggerItem
              key={item.title}
              className="flex gap-4 rounded-3xl border border-border bg-card p-6"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Testimoni */}
      <section id="testimoni" className="bg-navy-deep py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <FadeUp className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">
                Testimoni
              </p>
              <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-navy-foreground sm:text-4xl">
                Kata mereka yang sudah berkunjung
              </h2>
            </FadeUp>
            <FadeUp delay={0.15} className="rounded-2xl border border-navy-foreground/10 bg-navy px-5 py-3 text-sm text-navy-foreground/80">
              <Stars />
              <p className="mt-1 font-semibold">4,9 dari 265 ulasan Google</p>
            </FadeUp>
          </div>
          <Stagger className="mt-10 grid gap-5 md:grid-cols-3" delay={0.1}>
            {testimoni.map((t) => (
              <StaggerItem
                key={t.nama}
                className="flex flex-col rounded-3xl border border-navy-foreground/10 bg-navy p-6"
              >
                <Stars />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-navy-foreground/85">
                  “{t.teks}”
                </blockquote>
                <figcaption className="mt-5 border-t border-navy-foreground/10 pt-4">
                  <p className="text-sm font-bold text-navy-foreground">
                    {t.nama}
                  </p>
                  <p className="text-xs text-navy-foreground/60">{t.waktu}</p>
                </figcaption>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Lokasi & Jam */}
      <section id="lokasi" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-5">
          <FadeUp className="lg:col-span-2">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">
              Kunjungi Kami
            </p>
            <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
              Mudah dijangkau di pusat Tulungagung
            </h2>
            <Stagger className="mt-6 space-y-4">
              <StaggerItem className="flex gap-3 rounded-2xl border border-border bg-card p-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <p className="text-sm font-bold">Alamat</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {ADDRESS}
                  </p>
                </div>
              </StaggerItem>
              <StaggerItem className="flex gap-3 rounded-2xl border border-border bg-card p-4">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <p className="text-sm font-bold">Jam Buka</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    Buka setiap hari · Tutup pukul 17.00
                  </p>
                </div>
              </StaggerItem>
              <StaggerItem className="flex gap-3 rounded-2xl border border-border bg-card p-4">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <p className="text-sm font-bold">Telepon</p>
                  <a
                    href={PHONE_HREF}
                    className="mt-0.5 block text-sm font-semibold text-primary hover:underline"
                  >
                    {PHONE}
                  </a>
                </div>
              </StaggerItem>
            </Stagger>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg transition-transform hover:scale-[1.03]"
            >
              <MapPin className="h-4 w-4" />
              Buka di Google Maps
            </a>
          </FadeUp>
          <FadeUp delay={0.15} className="overflow-hidden rounded-3xl border border-border shadow-xl shadow-navy/10 lg:col-span-3">
            <iframe
              title="Peta lokasi Klinik Nikita Farla"
              src={MAPS_EMBED}
              className="h-full min-h-[400px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-20 sm:px-6">
        <FadeUp className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-navy-deep px-6 py-14 text-center sm:px-12">
          <div
            className="pointer-events-none absolute inset-0 opacity-25"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 0%, oklch(0.72 0.13 85 / 0.55), transparent 40%), radial-gradient(circle at 90% 100%, oklch(0.5 0.16 275 / 0.6), transparent 45%)",
            }}
          />
          <div className="relative">
            <Image
              src="/logo-klinik.jpg"
              alt=""
              aria-hidden
              width={64}
              height={64}
              loading="lazy"
              className="mx-auto h-16 w-16 rounded-2xl object-cover ring-2 ring-gold/50"
            />
            <h2 className="mx-auto mt-6 max-w-2xl text-balance text-3xl font-extrabold tracking-tight text-navy-foreground sm:text-4xl">
              Jaga kesehatan keluarga Anda mulai hari ini
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-navy-foreground/75">
              Hubungi kami untuk konsultasi atau langsung datang — tim kami siap
              melayani dengan ramah dan cepat.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3 text-sm font-bold text-gold-foreground shadow-xl shadow-gold/25 transition-transform hover:scale-[1.03]"
              >
                <Phone className="h-4 w-4" />
                Telepon {PHONE}
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-navy-foreground/25 px-7 py-3 text-sm font-semibold text-navy-foreground transition-colors hover:border-gold hover:text-gold"
              >
                <MapPin className="h-4 w-4" />
                Petunjuk Arah
              </a>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* Footer */}
      <FadeUp className="border-t border-navy-foreground/10 bg-navy-deep py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center sm:px-6 md:flex-row md:justify-between md:text-left">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-klinik.jpg"
              alt="Logo Klinik Nikita Farla"
              width={40}
              height={40}
              loading="lazy"
              className="h-10 w-10 rounded-full object-cover ring-1 ring-gold/60"
            />
            <div className="leading-tight">
              <p className="text-sm font-extrabold tracking-wide text-navy-foreground">
                NIKITA FARLA
              </p>
              <p className="text-[11px] font-semibold tracking-[0.2em] text-gold">
                KLINIK UTAMA
              </p>
            </div>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-navy-foreground/60">
            {ADDRESS} · {PHONE}
          </p>
          <p className="text-xs text-navy-foreground/50">
            © {new Date().getFullYear()} Klinik Utama Nikita Farla
          </p>
        </div>
      </FadeUp>
    </div>
  );
}
