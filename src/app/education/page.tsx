"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import PixelTransition from "../components/card-education-transition/PixelTransition";

const educationData = [
  {
    year: "2023 - Present",
    level: "College",
    school: "Bestlink College of the Philippines",
    logo: "/education/Bestlink.png",
    awards: [
      "🎖️ Dean&apos;s Lister (1st Year)",
      "🏅 President&apos;s Lister (2nd Year)",
    ],
    isPresent: true,
  },
  {
    year: "2021 - 2023",
    level: "Senior High School",
    school: "Gardner College, Diliman Q.C.",
    logo: "/education/Gardner.png",
    awards: ["With High Honors", "🥇 Top 1 in Class", "Best in Programming"],
  },
  {
    year: "2017 - 2021",
    level: "Junior High School",
    school: "Masambong High School",
    logo: "/education/Masambong.png",
    awards: ["🎖️ With Honor"],
  },
  {
    year: "2011 - 2017",
    level: "Elementary School",
    school: "Apolonio Samson Elementary School",
    logo: "/education/Apolonio.png",
    awards: [],
  },
];

export default function EducationSection() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isTouch =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia("(pointer: coarse)").matches;
      setIsTouchDevice(isTouch);
    }
  }, []);

  return (
    <section
      className="w-full px-4 md:px-10 py-20 max-w-7xl mx-auto space-y-16"
      id="education"
    >
      {/* Section Heading */}
      <div className="mb-10">
        <div className="flex items-center gap-4 text-purple-700 font-semibold text-sm uppercase tracking-wider mb-4">
          <span>Education</span>
          <div className="flex-1 border-t border-purple-300" />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-[#5e17eb] text-center">
          My Academic Journey
        </h1>
      </div>

      {/* Education Cards */}
      <div className="flex flex-col md:flex-row md:flex-wrap gap-6 justify-center max-w-[700px] mx-auto">
        {educationData.map((item, index) => {
          const isActive = isTouchDevice ? activeIndex === index : undefined;

          return (
            <div key={index} className="flex justify-center w-full md:w-auto">
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                {/* Present Badge */}
                {item.isPresent && (
                  <div className="absolute top-2 left-2 bg-[#5e17eb] text-white text-xs px-2 py-1 rounded z-20 font-semibold shadow-md">
                    Present
                  </div>
                )}

                {/* Hover Me Label (Desktop only) */}
                {!isTouchDevice && (
                  <div className="absolute top-2 right-2 text-xs text-gray-500 font-semibold z-20">
                    Hover Me
                  </div>
                )}

                {/* Card with Touch Support */}
                <div
                  onClick={() => {
                    if (isTouchDevice) {
                      setActiveIndex(index === activeIndex ? null : index);
                    }
                  }}
                  className={`${isTouchDevice ? "cursor-pointer" : ""}`}
                >
                  <PixelTransition
                    firstContent={
                      <div className="bg-white w-[300px] h-[300px] flex items-center justify-center p-4 rounded-lg border-l-4 border-[#5e17eb]">
                        <Image
                          src={item.logo}
                          alt={`${item.school} Logo`}
                          width={180}
                          height={180}
                          className="object-contain h-[180px] w-auto"
                        />
                      </div>
                    }
                    secondContent={
                      <div className="w-[300px] h-[300px] flex flex-col justify-center items-center bg-[#5e17eb] text-white p-4 rounded-lg text-center overflow-y-auto">
                        <p className="text-lg font-bold text-[13px]">
                          {item.school}
                        </p>
                        <p className="text-sm">{item.year}</p>
                        {item.awards.length > 0 && (
                          <ul className="text-sm mt-2 space-y-1 list-disc list-inside">
                            {item.awards.map((award, i) => (
                              <li
                                key={i}
                                dangerouslySetInnerHTML={{ __html: award }}
                              />
                            ))}
                          </ul>
                        )}
                      </div>
                    }
                    gridSize={12}
                    pixelColor="#ffffff"
                    animationStepDuration={0.4}
                    className="rounded-lg overflow-hidden shadow-xl border border-[#5e17eb] hover:border-white transition-all duration-300"
                  />
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Essay Section */}
      <div className="max-w-4xl mx-auto mt-16 px-4 text-center text-gray-700">
        <h2 className="text-2xl font-bold text-[#5e17eb] mb-4">My Story</h2>
        <p className="mb-4">
          From my early years at Apolonio Samson Elementary School to my current
          college life at Bestlink College of the Philippines, every step of my
          educational journey has shaped me into the programmer I am becoming. I
          started as a curious student who enjoyed exploring computers and
          electronics.
        </p>
        <p className="mb-4">
          In junior and senior high school, my passion for programming grew
          stronger. I gained experience in languages like Visual Basic, Java,
          and PHP, and I loved every moment of solving logical problems and
          building mini-projects. Achieving honors and awards was just a bonus
          to the joy of learning and discovering.
        </p>
        <p>
          Today, as an IT college student, I&apos;m diving deep into software
          development, web design, and database systems. Each project, lesson,
          and challenge is preparing me for the real world. My goal is not just
          to become a skilled developer but also to create solutions that
          improve lives and make an impact through technology.
        </p>
      </div>
    </section>
  );
}
