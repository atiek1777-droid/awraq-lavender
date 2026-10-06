"use client";
import { useEffect, useState } from "react";
import { heroCta } from "@/lib/site";
import { WhatsApp } from "./icons";

export default function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const ids = ["top", "branches", "footer"];
    const seen = new Map<string, boolean>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => seen.set(e.target.id, e.isIntersecting));
        setVisible(![...seen.values()].some(Boolean));
      },
      { threshold: 0.12 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-4 bottom-4 z-40 transition duration-300 md:hidden motion-reduce:transition-none ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={heroCta}
        tabIndex={visible ? 0 : -1}
        className="flex min-h-14 items-center justify-center gap-3 rounded-full bg-ink text-base font-semibold text-white shadow-[0_12px_30px_-8px_rgba(30,11,51,0.6)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
      >
        <WhatsApp className="size-6 text-[#4ee08c]" />
        تواصل عبر واتساب
      </a>
    </div>
  );
}
