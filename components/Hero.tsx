import Image from "next/image";
import { site, heroCta } from "@/lib/site";
import { WhatsApp } from "./icons";

const focus =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lilac";

function Arch({
  src, alt, ratio, delay, priority,
}: { src: string; alt: string; ratio: string; delay: number; priority?: boolean }) {
  return (
    <div
      className="animate-rise rounded-t-full border border-lilac/45 p-1.5 sm:p-2"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`relative overflow-hidden rounded-t-full bg-brand/40 ${ratio}`}>
        <Image
          src={`/images/${src}.webp`}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width:1024px) 190px, 34vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <header id="top" className="relative isolate overflow-hidden bg-violet text-white">

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <nav aria-label="التنقل الرئيسي" className="flex items-center justify-between py-5">
          <a href="#top" className={`flex items-center gap-3 ${focus}`}>
            <Image
              src="/images/logo-badge.webp"
              alt=""
              width={44}
              height={44}
              className="size-11 rounded-full bg-white"
            />
            <span className="font-display text-2xl font-bold leading-none">{site.name}</span>
          </a>
          <ul className="flex items-center gap-5 text-sm font-semibold sm:gap-8">
            <li className="hidden sm:block"><a href="#services" className={`hover:text-lilac ${focus}`}>خدماتنا</a></li>
            <li className="hidden sm:block"><a href="#works" className={`hover:text-lilac ${focus}`}>أعمالنا</a></li>
            <li><a href="#branches" className={`rounded-full border border-white/30 px-4 py-2 hover:bg-white/10 ${focus}`}>الفروع</a></li>
          </ul>
        </nav>

        <div className="grid items-center gap-12 pb-16 pt-8 sm:pt-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:pb-24 lg:pt-16">
          <div>
            <h1 className="font-display text-[2.6rem] font-bold leading-[1.6] tracking-normal sm:text-6xl sm:leading-[1.55] lg:text-[4.2rem]">
              ورد وهدايا ومناسبات تُنسَّق بأيدٍ خبيرة
            </h1>
            <p className="mt-5 max-w-lg text-base leading-7 text-lilac-100/90 sm:text-lg sm:leading-8">
              باقات زهور، وتغليف هدايا، وتنسيق حفلات الخطوبة والزفاف والتخرج والمواليد.
              اختر أقرب فرع إليك وراسلنا مباشرة على واتساب.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              <a
                href={heroCta}
                className={`inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-white px-8 text-base font-semibold text-ink shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] transition hover:bg-lilac-100 ${focus}`}
              >
                <WhatsApp className="size-6 text-wa" />
                تواصل عبر واتساب
              </a>
              <a
                href="#works"
                className={`inline-flex min-h-12 items-center justify-center text-base font-semibold underline decoration-lilac/60 underline-offset-8 hover:decoration-white ${focus}`}
              >
                شاهد أعمالنا
              </a>
            </div>

            <p className="mt-8 text-sm leading-6 text-lilac">
              يتابعنا {site.followers} على إنستغرام، ولنا ٨ فروع.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-md sm:max-w-lg lg:max-w-none">
            {/* concentric arches echoing the arched backdrops they build */}
            <div aria-hidden className="pointer-events-none absolute -inset-x-6 -bottom-8 -top-10 -z-10 rounded-t-full border border-white/10 p-5 sm:-inset-x-10 sm:p-7">
              <div className="h-full rounded-t-full border border-white/10 p-5 sm:p-7">
                <div className="h-full rounded-t-full border border-white/10" />
              </div>
            </div>
            <div className="grid grid-cols-[1fr_1.18fr_1fr] items-end gap-2.5 sm:gap-4">
            <Arch src="hero-pink" alt="باقة ورد وردية بتغليف أنيق" ratio="aspect-[3/3.7]" delay={250} priority />
            <Arch src="hero-baby" alt="قوس بالونات زرقاء وبيضاء مع لوحة استقبال مولود" ratio="aspect-[3/4.6]" delay={80} priority />
            <Arch src="hero-grad" alt="باقة ورد أحمر بتغليف تخرج مطبوع" ratio="aspect-[3/4.1]" delay={420} priority />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
