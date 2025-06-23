"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

export interface ChromaItem {
  image: string;
  title: string;
  subtitle: string;
  handle?: string;
  borderColor?: string;
  gradient?: string;
  url?: string;
}

export interface ChromaGridProps {
  items: ChromaItem[]; // required
  className?: string;
  radius?: number;
  damping?: number;
  fadeOut?: number;
  ease?: string;
}

type SetterFn = (v: number | string) => void;

const ChromaGrid: React.FC<ChromaGridProps> = ({
  items,
  className = "",
  radius = 300,
  damping = 0.45,
  fadeOut = 0.6,
  ease = "power3.out",
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const fadeRef = useRef<HTMLDivElement>(null);
  const setX = useRef<SetterFn | null>(null);
  const setY = useRef<SetterFn | null>(null);
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    // Use requestAnimationFrame to ensure DOM is painted
    requestAnimationFrame(() => {
      setX.current = gsap.quickSetter(el, "--x", "px") as SetterFn;
      setY.current = gsap.quickSetter(el, "--y", "px") as SetterFn;

      const { width, height } = el.getBoundingClientRect();
      pos.current = { x: width / 2, y: height / 2 };

      if (setX.current && setY.current) {
        setX.current(pos.current.x);
        setY.current(pos.current.y);
      }
    });
  }, []);

  const moveTo = (x: number, y: number) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        if (setX.current && setY.current) {
          setX.current(pos.current.x);
          setY.current(pos.current.y);
        }
      },
      overwrite: true,
    });
  };

  const handleMove = (e: React.PointerEvent) => {
    const r = rootRef.current?.getBoundingClientRect();
    if (!r) return;
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true,
    });
  };

  const handleCardClick = (url?: string) => {
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleCardMove: React.MouseEventHandler<HTMLElement> = (e) => {
    const c = e.currentTarget as HTMLElement;
    const rect = c.getBoundingClientRect();
    c.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    c.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  const item = items[0]; // using only the first item

  return (
    <div
      ref={rootRef}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={`relative w-full h-auto flex justify-center ${className}`}
      style={
        {
          "--r": `${radius}px`,
          "--x": "50%",
          "--y": "50%",
        } as React.CSSProperties
      }
    >
      <article
        onMouseMove={handleCardMove}
        onClick={() => handleCardClick(item.url)}
        className="group relative flex flex-col rounded-[16px] overflow-hidden border-2 border-purple-500 shadow-xl transition-transform duration-300 cursor-pointer hover:scale-[1.015] min-w-[260px] max-w-sm w-full"
        style={{ background: item.gradient }}
      >
        {/* Hover Spotlight */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-20 opacity-0 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.2), transparent 70%)",
          }}
        />

        <div className="relative z-10 p-5">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-[400px] object-cover rounded-[10px]"
          />
        </div>

        <footer className="relative z-10 px-4 pb-4 text-white font-sans">
          <h3 className="text-base font-semibold">{item.title}</h3>
          <p className="text-sm opacity-85">{item.subtitle}</p>
          {item.handle && (
            <p className="text-xs text-right opacity-70">{item.handle}</p>
          )}
        </footer>
      </article>

      {/* Spotlight Layer */}
      <div
        className="absolute inset-0 pointer-events-none z-30 max-w-5xl mx-auto left-0 right-0"
        style={{
          background: "transparent",
          maskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)",
          WebkitMaskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)",
        }}
      />

      {/* Fade Layer */}
      <div
        ref={fadeRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-[250ms] z-40"
        style={{
          background: "transparent",
          maskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)",
          opacity: 1,
        }}
      />
    </div>
  );
};

export default ChromaGrid;
