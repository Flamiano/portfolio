{
  /* eslint-disable react/no-unescaped-entities */
}

import {
  Code2,
  Database,
  Server,
  Code,
  Coffee,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { Navbar } from "./components/Navbar";
import ParticlesBg from "./ParticlesBg";
import { Footer } from "./components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen font-sans overflow-hidden">
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
        <section className="max-w-[90%] mx-auto px-6 py-20 md:py-10">
          <div className="flex flex-col md:items-start items-center text-center md:text-left">
            {/* Top row: Name + Button */}
            <div className="flex items-center gap-4">
              <h1 className="text-[4rem] md:text-[90px] lg:text-[10rem] font-extrabold text-[#5e17eb] leading-tight drop-shadow-[2px_2px_2px_rgba(0,0,0,0.25)]">
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

            {/* Right Side: Tech Stack */}
            <div className="text-[#5e17eb] text-[12px] md:text-[14px]">
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
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="mx-auto px-6 py-20 flex flex-col gap-10">
          {/* Heading with line */}
          <div className="flex items-center gap-4">
            <h3 className="text-2xl md:text-3xl font-bold text-[#5e17eba3] whitespace-nowrap">
              ABOUT ME
            </h3>
            <div className="h-[2px] bg-[#5e17eb] flex-1" />
          </div>

          {/* Content */}
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Left - Text */}
            <div className="w-full lg:w-1/2 space-y-4 text-gray-700 text-base leading-relaxed">
              <p>
                I'm <strong>John Roel R. Flamiano</strong>, a passionate
                full-stack developer with experience in both frontend and
                backend technologies. I specialize in building responsive and
                high-performance web applications using modern tools such as{" "}
                <strong>React</strong>, <strong>Next.js</strong>,{" "}
                <strong>PHP</strong>, and <strong>MySQL</strong>.
              </p>

              <p>
                I enjoy crafting digital experiences that are not only visually
                appealing but also intuitive and accessible. Exploring emerging
                technologies like <strong>Supabase</strong>,{" "}
                <strong>TypeScript</strong>, and <strong>TailwindCSS</strong>{" "}
                helps me stay up-to-date and evolve as a developer.
              </p>

              <div>
                <p className="font-semibold mb-1 flex items-center gap-2">
                  <Sparkles size={18} className="text-purple-600" /> My Hobbies:
                </p>
                <ul className="space-y-2 mt-2">
                  <li className="flex items-center gap-2">
                    <span className="text-purple-600 font-bold">➤</span>
                    Playing Basketball
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-600 font-bold">➤</span>
                    Working Out / Gym
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-600 font-bold">➤</span>
                    Coding Projects
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-600 font-bold">➤</span>
                    Watching Tech & Life Content
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-600 font-bold">➤</span>
                    Playing Digital Games
                  </li>
                </ul>
              </div>

              <p>
                My biggest motivation is my dream of becoming a skilled and
                respected <strong>Software Engineer</strong>. I come from a
                humble background, and I work hard every day to improve myself
                and uplift my family. I believe in the power of consistency,
                grit, and continuous learning.
              </p>

              <p className="italic text-purple-700 font-medium">
                "Walang imposible para sa taong may pangarap at determinasyon."
              </p>

              <p>
                I aspire to contribute to innovative tech teams, build impactful
                solutions, and eventually lead my own projects that make a
                difference in the world.
              </p>
            </div>

            {/* Right - Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <Image
                src="/mypic2.png"
                alt="About Me"
                width={300}
                height={300}
                className="rounded-xl shadow-lg object-cover"
              />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
