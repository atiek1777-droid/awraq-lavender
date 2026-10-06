const WHATSAPP_URL = "https://wa.me/966500000000"; // TODO: real number

const channels = [
  { label: "حسابنا على إنستغرام", hint: "شاهد أحدث منتجاتنا", href: "https://instagram.com/" },
  { label: "حسابنا على سناب", hint: "أحدث التصاميم والهوية", href: "https://snapchat.com/" },
  { label: "حسابنا على تيك توك", hint: "أحدث التصاميم والهوية", href: "https://tiktok.com/" },
  { label: "الموقع الإلكتروني", hint: "تواصل معنا في دقائق", href: "https://example.com/" },
];

const services = [
  { icon: "🎁", label: "هدايا وباقات" },
  { icon: "💐", label: "باقات الزهور" },
  { icon: "💍", label: "تنسيق حفلات الزفاف والملكة" },
  { icon: "🎓", label: "تنسيق حفلات التخرج" },
  { icon: "👶", label: "مواليد" },
];

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

function Chevron() {
  // Points to the inline-end side in RTL (left)
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="size-5 shrink-0 text-brand transition-transform group-hover:-translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.5 4.5 7 10l5.5 5.5" />
    </svg>
  );
}

function Sprig({ className = "" }: { className?: string }) {
  // Decorative lavender stem
  const buds = [
    [60, 40], [60, 68], [60, 96], [60, 124], [60, 152], [60, 180],
  ];
  return (
    <svg aria-hidden="true" viewBox="0 0 120 420" className={className} fill="none">
      <path d="M60 420V30" stroke="#8a6bb8" strokeWidth="3" strokeLinecap="round" />
      {buds.map(([x, y], i) => (
        <g key={i} fill={i % 2 ? "#b79ddd" : "#9c7fcb"}>
          <ellipse cx={x - 16} cy={y} rx="13" ry="8" transform={`rotate(-28 ${x - 16} ${y})`} />
          <ellipse cx={x + 16} cy={y + 12} rx="13" ry="8" transform={`rotate(28 ${x + 16} ${y + 12})`} />
        </g>
      ))}
      <ellipse cx="60" cy="22" rx="8" ry="14" fill="#9c7fcb" />
      <path d="M60 330c-22-14-34-34-36-58M60 360c24-12 38-30 42-54" stroke="#8a6bb8" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export default function LandingSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-lavender-50"
    >
      <Sprig className="pointer-events-none absolute -bottom-6 start-[-1.5rem] -z-10 h-[22rem] opacity-30 md:start-8 md:h-[34rem] md:opacity-60" />

      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:py-28">
        {/* Copy */}
        <div className="flex flex-col items-start">
          <p className="text-base font-semibold leading-7 text-brand">
            أوراق لافندر <span className="font-normal text-slate-600">· Awraq Lavender</span>
          </p>

          <h1
            id="hero-title"
            className="mt-4 text-3xl font-bold leading-[1.4] tracking-normal text-ink md:text-5xl md:leading-[1.35]"
          >
            هدايا ومناسبات
            <br />
            بلمسة عطرية فاخرة
          </h1>

          <p className="mt-6 max-w-[34rem] text-base font-normal leading-7 tracking-normal text-slate-600">
            نقدم لك كل ما تحتاجه من هدايا ومناسبات، بأيدٍ خبيرة وحبكة عطرية
            فاخرة تصلك أينما كنت.
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-5">
            <a
              href={WHATSAPP_URL}
              className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand px-8 py-3 text-base font-semibold leading-7 text-white shadow-sm transition-colors hover:bg-brand-dark ${focusRing}`}
            >
              تواصل معنا عبر واتساب
            </a>
            <span className="text-sm leading-6 text-slate-600">
              استشارة سريعة، والرد خلال دقائق
            </span>
          </div>

          <h2 className="sr-only">خدماتنا</h2>
          <ul className="mt-12 flex flex-wrap gap-2.5" aria-label="خدماتنا">
            {services.map((s) => (
              <li
                key={s.label}
                className="inline-flex items-center gap-2 rounded-full border border-lavender-200 bg-white px-4 py-2 text-sm font-normal leading-6 text-ink"
              >
                <span aria-hidden="true">{s.icon}</span>
                {s.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Channels */}
        <nav aria-label="قنوات التواصل" className="self-center">
          <h2 className="text-lg font-semibold leading-7 text-ink">تابعنا وتواصل معنا</h2>
          <ul className="mt-4 divide-y divide-lavender-200 rounded-2xl border border-lavender-200 bg-white">
            {channels.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  className={`group flex items-center justify-between gap-4 px-5 py-4 first:rounded-t-2xl last:rounded-b-2xl hover:bg-lavender-50 ${focusRing} focus-visible:-outline-offset-2`}
                >
                  <span>
                    <span className="block text-base font-semibold leading-7 text-ink">
                      {c.label}
                    </span>
                    <span className="block text-sm font-normal leading-6 text-slate-600">
                      {c.hint}
                    </span>
                  </span>
                  <Chevron />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
