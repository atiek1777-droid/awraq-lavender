import Image from "next/image";
import { site, works } from "@/lib/site";
import { Chevron } from "./icons";

const widths = ["w-44", "w-52", "w-44", "w-56"];

export default function Works() {
  return (
    <section id="works" aria-labelledby="works-title" className="scroll-mt-4 bg-ink py-20 text-lilac-100 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 id="works-title" className="font-display text-4xl font-bold leading-[1.6] text-white sm:text-5xl">
            من أعمالنا
          </h2>
          <a
            href={`https://instagram.com/${site.instagram}`}
            className="group inline-flex min-h-11 items-center gap-2 text-base font-semibold text-lilac underline decoration-lilac/40 underline-offset-8 hover:decoration-lilac focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lilac"
          >
            المزيد على إنستغرام
            <Chevron className="size-5 transition-transform group-hover:-translate-x-1 motion-reduce:transition-none" />
          </a>
        </div>
      </div>

      <div
        role="region"
        aria-label="معرض أعمالنا، مرّر للمزيد"
        tabIndex={0}
        className="no-scrollbar mx-auto mt-10 flex max-w-[90rem] snap-x snap-mandatory scroll-px-5 sm:scroll-px-8 items-end gap-4 overflow-x-auto px-5 pb-2 sm:gap-5 sm:px-8 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-lilac"
      >
        {works.map((w, i) => (
          <figure key={w.img} className={`${widths[i % widths.length]} shrink-0 snap-start sm:w-60 lg:w-64`}>
            <div className={`relative overflow-hidden rounded-t-full bg-brand/30 ${w.h}`}>
              <Image
                src={`/images/${w.img}.webp`}
                alt={w.alt}
                fill
                sizes="256px"
                loading="lazy"
                className="object-cover"
              />
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}
