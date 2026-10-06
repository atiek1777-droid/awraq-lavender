import { branches, waLink } from "@/lib/site";
import { Chevron, WhatsApp } from "./icons";

const areas = Array.from(new Set(branches.map((b) => b.area)));

export default function Branches() {
  return (
    <section id="branches" aria-labelledby="branches-title" className="scroll-mt-4 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 id="branches-title" className="font-display text-4xl font-bold leading-[1.6] text-ink sm:text-5xl">
          أقرب فرع إليك
        </h2>
        <p className="mt-3 max-w-xl text-base leading-7">
          اختر الفرع المناسب لك وستفتح محادثة واتساب مباشرة مع الفرع.
        </p>

        <div className="mt-10 grid gap-x-12 gap-y-10 lg:grid-cols-2">
          {areas.map((area) => {
            const list = branches.filter((b) => b.area === area);
            return (
              <div key={area}>
                <h3 className="flex items-baseline gap-3 font-display text-3xl font-bold leading-[1.6] text-ink">
                  {area}
                  <span className="font-sans text-sm font-normal text-slate-600">
                    {list.length === 1 ? "فرع واحد" : `${list.length.toLocaleString("ar-EG")} فروع`}
                  </span>
                </h3>
                <ul className="mt-2 divide-y divide-brand/15 border-y border-brand/15">
                  {list.map((b) => (
                    <li key={b.street + b.landmark}>
                      <a
                        href={waLink(b.phone, `السلام عليكم، أرغب بالاستفسار عن خدماتكم (فرع ${b.area} - ${b.landmark})`)}
                        className="group flex min-h-[4.5rem] items-center gap-4 py-3 hover:bg-mist focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand"
                      >
                        <span className="grid size-11 shrink-0 place-items-center rounded-full bg-wa text-white">
                          <WhatsApp className="size-6" />
                        </span>
                        <span className="flex-1">
                          <span className="block text-base font-semibold leading-7 text-ink">{b.landmark}</span>
                          <span className="block text-sm leading-6 text-slate-600">{b.street}</span>
                        </span>
                        <Chevron className="size-5 shrink-0 text-brand transition-transform group-hover:-translate-x-1 motion-reduce:transition-none" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
