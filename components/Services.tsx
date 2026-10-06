import Image from "next/image";
import { services } from "@/lib/site";

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="scroll-mt-4 bg-mist py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 id="services-title" className="font-display text-4xl font-bold leading-[1.6] text-ink sm:text-5xl">
          خدماتنا
        </h2>
        <p className="mt-3 max-w-xl text-base leading-7">
          من باقة ورد صغيرة إلى تنسيق حفل كامل، نجهّز التفاصيل ونسلّمها جاهزة.
        </p>

        <ul className="mt-10 grid gap-x-16 md:grid-cols-2">
          {services.map((s) => (
            <li
              key={s.title}
              className="grid grid-cols-[6.5rem_1fr] items-center gap-5 border-t border-brand/20 py-6 sm:grid-cols-[8rem_1fr] sm:gap-7"
            >
              <div className="relative aspect-[3/3.9] overflow-hidden rounded-t-full bg-lilac/40">
                <Image
                  src={`/images/${s.img}.webp`}
                  alt={s.alt}
                  fill
                  sizes="128px"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-display text-3xl font-bold leading-[1.6] text-ink">{s.title}</h3>
                <p className="text-base leading-7">{s.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
