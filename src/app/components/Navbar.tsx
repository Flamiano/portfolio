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
  const [stage, setStage] = useState<"closed" | "logo" | "color" | "nav">(
    "closed"
  );

  const openMenu = () => {
    setStage("logo");
    setTimeout(() => {
      setStage("color");
      setTimeout(() => {
        setStage("nav");
      }, 600);
    }, 800);
  };

  const closeMenu = () => setStage("closed");

  return (
    <header className="relative w-full bg-white font-poppins">
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
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
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

      {/* Stage 2: Color slide */}
      <AnimatePresence>
        {stage === "color" && (
          <motion.div
            key="color-slide"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-30 bg-[#5e17eb]"
          />
        )}
      </AnimatePresence>

      {/* Stage 3: White nav screen with logo at top and centered nav links */}
      <AnimatePresence>
        {stage === "nav" && (
          <motion.div
            key="nav-stage"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-30 bg-white px-6 flex flex-col items-center pt-6"
          >
            {/* Logo at top */}
            <Image
              src="/logo.png"
              alt="Top Logo"
              width={100}
              height={100}
              className="mb-[-4.5rem]"
            />

            {/* Nav Links container - center on screen vertically below logo */}
            <div className="flex-1 flex flex-col justify-center items-center w-full">
              <div className="flex flex-col gap-5 items-center text-lg font-semibold text-[#5e17eb] w-full max-w-[280px]">
                <MobileLink
                  href="#home"
                  icon={<Home size={20} />}
                  label="Home"
                  onClick={closeMenu}
                />
                <MobileLink
                  href="#education"
                  icon={<GraduationCap size={20} />}
                  label="Education"
                  onClick={closeMenu}
                />
                <MobileLink
                  href="#projects"
                  icon={<Folder size={20} />}
                  label="Projects"
                  onClick={closeMenu}
                />
                <MobileLink
                  href="#techstack"
                  icon={<Wrench size={20} />}
                  label="Tech Stack"
                  onClick={closeMenu}
                />
                <MobileLink
                  href="#contact"
                  icon={<MapPin size={20} />}
                  label="Contact"
                  onClick={closeMenu}
                />
              </div>
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

type MobileLinkProps = {
  href: string;
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
};

const MobileLink = ({ href, icon, label, onClick }: MobileLinkProps) => (
  <Link
    href={href}
    onClick={onClick}
    className="w-full flex items-center gap-3 px-4 py-4 border border-[#5e17eb] rounded-lg hover:bg-[#f3ebff] transition"
  >
    {icon}
    {label}
  </Link>
);
