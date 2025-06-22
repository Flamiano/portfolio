"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Home,
  GraduationCap,
  Folder,
  Wrench,
  MapPin,
  Menu,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export const Navbar = () => {
  const [stage, setStage] = useState<"closed" | "logo" | "nav">("closed");

  const openMenu = () => {
    setStage("logo");
    setTimeout(() => {
      setStage("nav");
    }, 1200);
  };

  const closeMenu = () => setStage("closed");

  return (
    <header className="relative w-full bg-white shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
        </Link>

        {/* Hamburger */}
        <div className="md:hidden z-50">
          {stage === "closed" ? (
            <button onClick={openMenu} className="text-[#5e17eb]">
              <Menu size={24} />
            </button>
          ) : (
            <button onClick={closeMenu} className="text-[#5e17eb]">
              <X size={24} />
            </button>
          )}
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex bg-[#5e17eb] rounded-full px-6 py-2 items-center justify-center gap-5 shadow-md">
          <NavLinks />
        </nav>
      </div>

      {/* Stage 1: Full white screen with big logo */}
      <AnimatePresence>
        {stage === "logo" && (
          <motion.div
            key="logo-stage"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-white flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <Image
                src="/logo.png"
                alt="Centered Logo"
                width={180}
                height={180}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stage 2: White nav screen sliding in */}
      <AnimatePresence>
        {stage === "nav" && (
          <motion.div
            key="nav-stage"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="fixed inset-0 z-30 bg-white px-6 pt-10 flex flex-col items-center"
          >
            {/* Logo at top */}
            <Image
              src="/logo.png"
              alt="Top Logo"
              width={60}
              height={60}
              className="mb-10"
            />

            {/* Nav Links */}
            <div className="flex flex-col gap-6 items-center text-lg font-semibold text-[#5e17eb]">
              <Link href="#home" onClick={closeMenu}>
                Home
              </Link>
              <Link href="#education" onClick={closeMenu}>
                Education
              </Link>
              <Link href="#projects" onClick={closeMenu}>
                Projects
              </Link>
              <Link href="#techstack" onClick={closeMenu}>
                Tech Stack
              </Link>
              <Link href="#contact" onClick={closeMenu}>
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const NavLinks = () => (
  <>
    <Link href="#home" className="text-white hover:text-gray-200">
      <Home size={20} />
    </Link>
    <Link href="#education" className="text-white hover:text-gray-200">
      <GraduationCap size={20} />
    </Link>
    <Link href="#projects" className="text-white hover:text-gray-200">
      <Folder size={20} />
    </Link>
    <Link href="#techstack" className="text-white hover:text-gray-200">
      <Wrench size={20} />
    </Link>
    <Link href="#contact" className="text-white hover:text-gray-200">
      <MapPin size={20} />
    </Link>
  </>
);
