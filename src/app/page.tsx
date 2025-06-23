"use client";

{
  /* eslint-disable react/no-unescaped-entities */
}

import {
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import { Navbar } from "./components/Navbar";
import ParticlesBg from "./ParticlesBg";
import { Footer } from "./components/Footer";
import AboutMeSection from "./about/page";
import TrueFocus from "./components/truefocustext/page";

export default function Home() {
  return (
    <div className="relative min-h-screen font-poppins overflow-hidden">
      {/* Background Particles */}
      <ParticlesBg />

      {/* Foreground Content */}
      <div className="bg-transparent relative z-10">
        <Navbar />

        {/* Floating Chat Button */}
        <Link
          href="#contact" // Or replace with your preferred action
          className="fixed bottom-6 right-6 z-50 bg-[#5e17eb] hover:bg-purple-800 text-white p-4 rounded-full shadow-lg transition-all duration-300"
          title="Message me"
        >
          <MessageCircle size={24} />
        </Link>

        {/* Hero Section */}
        <section className="max-w-[90%] mx-auto px-6 py-25 md:py-16">
          <div className="flex flex-col md:items-start items-center text-center md:text-left">
            {/* Top row: Name + Button */}
            <div className="flex items-center gap-4">
              <h1 className="text-[4rem] md:text-[90px] lg:text-[13rem] font-extrabold text-[#5e17eb] leading-tight drop-shadow-[2px_2px_2px_rgba(0,0,0,0.25)]">
                Flamiano
              </h1>
              <div className="hidden md:flex flex-col items-center mb-[-1rem] lg:mb-[-3.7rem]">
                <Link
                  href="/cv.pdf"
                  target="_blank"
                  download
                  className="bg-[#5e17eb] hover:bg-purple-800 text-white px-6 py-2 rounded-full shadow-md transition text-sm md:text-base"
                >
                  Download CV
                </Link>
                <p className="text-gray-400 text-xs mt-2">
                  Aspiring Software Engineer
                </p>
              </div>
            </div>
          </div>

          {/* Surname */}
          <h2 className="text-[2.6rem] md:text-[90px] lg:text-[10rem] font-extrabold text-gray-800 text-center md:text-left drop-shadow-[1px_1px_1px_rgba(0,0,0,0.2)] lg:mt-[-2rem]">
            John Roel R.
          </h2>

          {/* Tech Stack + Description Section */}
          <div className="mt-4 max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center gap-10 px-4 text-center md:text-left">
            {/* Left Side: Description */}
            <p className="text-gray-600 text-[13px] md:text-[16px] max-w-md">
              A passionate developer focused on full-stack web technologies and
              building modern, scalable web applications.
            </p>

            {/* Divider */}
            <div className="hidden md:block text-gray-400 text-3xl">|</div>
            
            <TrueFocus
              sentence="Web Developer|Software Engineer|Web Designer"
              manualMode={false}
              blurAmount={5}
              borderColor="#5e17eb"
              glowColor="rgba(94, 23, 235, 0.6)"
              animationDuration={1.2}
              pauseBetweenAnimations={1}
            />

            {/* Right Side: Tech Stack 
            <div className="mt-[-20px] md:mt-0 text-[#5e17eb] text-[12px] md:text-[14px]">
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
                <div className="flex items-center gap-2">
                  <Code2 size={18} />
                  <span>PHP</span>
                </div>
                <div className="flex items-center gap-2">
                  <Coffee size={18} />
                  <span>Java</span>
                </div>
                <div className="flex items-center gap-2">
                  <Code size={18} />
                  <span>ReactJS</span>
                </div>
                <div className="flex items-center gap-2">
                  <Code size={18} />
                  <span>NextJS</span>
                </div>
                <div className="flex items-center gap-2">
                  <Database size={18} />
                  <span>MySQL</span>
                </div>
                <div className="flex items-center gap-2">
                  <Server size={18} />
                  <span>Supabase</span>
                </div>
              </div>
            </div>

            */}
          </div>

          {/* Mobile Only: Button + Subtitle */}
          <div className="md:hidden flex flex-col items-center mt-8">
            <Link
              href="/cv.pdf"
              target="_blank"
              download
              className="bg-[#5e17eb] hover:bg-purple-800 text-white px-6 py-2 rounded-full shadow-md transition text-sm"
            >
              Download CV
            </Link>
            <p className="text-gray-400 text-xs mt-2">
              Aspiring Software Engineer
            </p>
          </div>
        </section>

        {/* About Me Section */}
        <AboutMeSection />
      </div>
      <Footer />
    </div>
  );
}
