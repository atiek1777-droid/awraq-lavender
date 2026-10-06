import Image from "next/image";
import { site } from "@/lib/site";
import { Instagram, Snapchat, TikTok } from "./icons";

export default function Footer() {
  const links = [
    { label: "إنستغرام", handle: site.instagram, href: `https://instagram.com/${site.instagram}`, Icon: Instagram },
    { label: "تيك توك", handle: site.tiktok, href: `https://www.tiktok.com/@${site.tiktok}`, Icon: TikTok },
    ...(site.snapchat
      ? [{ label: "سناب شات", handle: site.snapchat, href: `https://www.snapchat.com/add/${site.snapchat}`, Icon: Snapchat }]
      : []),
  ];
  return (
    <footer id="footer" className="bg-violet pb-28 pt-16 text-lilac-100 md:pb-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-5 text-center sm:px-8">
        <Image src="/images/logo-badge.webp" alt="شعار أوراق لافندر" width={96} height={96} className="size-24 rounded-full bg-white" />
        <p className="mt-5 font-display text-4xl font-bold leading-[1.6] text-white">{site.name}</p>
        <p className="text-base leading-7">
          {site.nameEn}، {site.tagline}
        </p>
        <ul className="mt-8 flex flex-wrap justify-center gap-3">
          {links.map(({ label, handle, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                className="inline-flex min-h-12 items-center gap-3 rounded-full border border-white/25 px-5 text-sm font-semibold text-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lilac"
              >
                <Icon className="size-5" />
                <span className="sr-only">{label}</span>
                <span dir="ltr">@{handle}</span>
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-sm leading-6 text-lilac">جميع الحقوق محفوظة لأوراق لافندر</p>
      </div>
    </footer>
  );
}
