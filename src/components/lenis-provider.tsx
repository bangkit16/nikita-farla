"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export default function LenisProvider() {
  const pathname = usePathname();

  // Init Lenis once
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  // Scroll-to-top on every route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}