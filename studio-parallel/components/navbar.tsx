// components/navbar.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import GetInTouch from "./get-in-touch";
import NavItem from "./navitem";
import RevealOnScroll from "./reveal-on-scroll";
import Button from "./button";
import { motion } from "framer-motion";
import Link from "next/link";

import { useMenu } from "./menu-context";

import Menu from "./menu";

type NavTheme = "dark" | "light";

export default function Navbar() {
  const [navTheme, setNavTheme] = useState<NavTheme>("dark");
  const [atHeroTop, setAtHeroTop] = useState(true);
  const [pastHero, setPastHero] = useState(false);

  const navRef = useRef<HTMLElement | null>(null);
  const heroBottomRef = useRef<number | null>(null);

  const { menuOpen, setMenuOpen } = useMenu();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const computeHeroBottom = () => {
      const hero =
        document.querySelector<HTMLElement>("[data-hero='hero']") ||
        document.querySelector<HTMLElement>("#hero");

      if (hero) {
        const rect = hero.getBoundingClientRect();
        const scrollTop = window.scrollY || window.pageYOffset;
        // absolute y-position of the hero bottom
        heroBottomRef.current = scrollTop + rect.top + rect.height;
      }
    };

    const updateThemeFromBackground = () => {
      const nav = navRef.current;
      if (!nav) return;

      const rect = nav.getBoundingClientRect();
      const sampleX = window.innerWidth / 2;
      const sampleY = rect.top + rect.height / 2;

      const elements = document.elementsFromPoint(
        sampleX,
        sampleY
      ) as HTMLElement[];

      const belowNav = elements.filter(
        (el) => nav && el !== nav && !nav.contains(el)
      );

      let sectionTheme: NavTheme | null = null;

      for (const el of belowNav) {
        const section = el.closest<HTMLElement>("[data-nav-theme]");
        if (section) {
          const themeAttr = section.dataset.navTheme;
          if (themeAttr === "dark" || themeAttr === "light") {
            sectionTheme = themeAttr;
            break;
          }
        }
      }

      if (sectionTheme && sectionTheme !== navTheme) {
        setNavTheme(sectionTheme);
      }
    };

    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;

      // Top of hero – tweak 40px threshold if you want a bit more “top zone”
      const isAtHeroTop = scrollY < 40;
      setAtHeroTop(isAtHeroTop);

      // Past hero – once bottom of hero moves above the navbar
      if (heroBottomRef.current != null) {
        const navHeight = navRef.current?.offsetHeight ?? 0;
        const threshold = heroBottomRef.current - navHeight;
        setPastHero(scrollY > threshold);
      } else {
        setPastHero(false);
      }

      updateThemeFromBackground();
    };

    const handleResize = () => {
      computeHeroBottom();
      updateThemeFromBackground();
    };

    // Initial setup
    computeHeroBottom();
    updateThemeFromBackground();
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [navTheme]);

  const textColorClass =
    navTheme === "dark" ? "text-white" : "text-black";

  // Inside hero but not at top and not yet past the bottom
  const inHeroBody = !atHeroTop && !pastHero;

  // Hero navbar content (SP + links + hero GetInTouch) should exist across the hero
  // (so it can slide out), but not once we're past the hero.
  const showHeroNavContent = !pastHero;

  return (
    <>
    <nav
      ref={navRef}
      className={`
        w-full h-16 lg:h-24 fixed top-0 z-50
        flex items-center px-2 lg:px-16
        bg-transparent justify-between 
        transition-transform duration-300 ease-out
        ${inHeroBody ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      {/* LEFT: logo (part of hero navbar) */}
      {showHeroNavContent ? (
        <RevealOnScroll delay={0}>
          <Link href="/" className={`flex-1 text-2xl ${textColorClass}`}>SP</Link>
        </RevealOnScroll>
      ) : (
        <div className="flex-1" />
      )}

      {/* CENTER: links (part of hero navbar) */}
      {showHeroNavContent && (
        <ul
          className={`
            grow justify-center gap-6 hidden md:flex
            ${textColorClass}
          `}
        >
          <RevealOnScroll delay={0.1}>
            <li>
              <NavItem text="Services," href="/services" />
            </li>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <li>
              <NavItem text="Process," href="/process" />
            </li>
          </RevealOnScroll>
          <RevealOnScroll delay={0.3}>
            <li>
              <NavItem text="Works" href="/works" />
            </li>
          </RevealOnScroll>
        </ul>
      )}

      {/* RIGHT: hero GetInTouch (part of hero navbar) */}
      {showHeroNavContent && (
        <RevealOnScroll delay={0.4} className="justify-self-end">
          <div className="flex-1 flex justify-end items-center">
            {/* HERO VERSION */}
            <GetInTouch />
          </div>
        </RevealOnScroll>
      )}

      {/* RIGHT: compact CTA + menu – always mounted,
          but animated in/out based on `pastHero` */}
        <div className="pointer-events-none absolute right-7 top-5 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 24 }} // start slightly above / off-screen
            animate={
              pastHero
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: -24 }       // go back up/out the same way
            }
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="pointer-events-auto flex items-center gap-3"
          >
            {/* SCROLLED VERSION of GetInTouch */}
            <GetInTouch />
          
            {/* Menu button */}
            
            <Button
              text="Menu"
              background="bg-[#D6D3D1]"
              textcolor="#000"
              onClick={() => setMenuOpen(true)}
            />

          </motion.div>
        </div>
    </nav>

    <Menu 
      open={menuOpen}
      setOpen={setMenuOpen}
    />
    </>
  );
}
