"use client";

import FallingText from "../components/fallingtext/FallingText";
import ChromaGrid from "../components/chromagrid/ChromaGrid";
import RotatingText from "../components/rotatingtext/RotatingText";

const items = [
  {
    image: "/1.jpg",
    title: "John Roel Flamiano",
    subtitle: "Aspiring Software Engineer",
    handle: "@Roel Devv",
    borderColor: "#5e17eb",
    gradient: "linear-gradient(145deg, #5e17eb, #000)",
    url: "https://github.com/Flamiano",
  },
];

const AboutMeSection = () => {
  return (
    <section className="w-full px-4 md:px-10 py-20 max-w-6xl mx-auto space-y-16">
      {/* Section Heading */}
      <div className="flex items-center gap-4 text-purple-700 font-semibold text-sm uppercase tracking-wider">
        <span>About Me</span>
        <div className="flex-1 border-t border-purple-300" />
      </div>

      {/* Main 2-column layout */}
      <div className="flex flex-col md:flex-row gap-10 items-stretch w-full">
        {/* Left Column: FallingText + TrueFocus */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 justify-between">
          {/* FallingText Box */}
          <div className="w-full border-2 border-purple-500 rounded-3xl p-6 bg-white/90 relative overflow-hidden shadow-xl transition hover:shadow-2xl">
            <FallingText
              text={`I’m deeply passionate about developing software that makes a difference. Whether it’s enhancing user experience or solving real-world problems through code, I strive to grow every day. I believe in clean architecture, performance, and accessibility and I build with intention. I'm constantly exploring new tools, frameworks, and design systems to stay ahead in an ever-evolving tech landscape. Collaboration, empathy, and a user-first mindset are at the core of how I work. Every line of code I write aims to bring clarity, efficiency, and a bit of joy to users and developers alike.`}
              highlightWords={[
                "passionate",
                "developing",
                "software",
                "real-world",
                "grow",
                "clean",
                "performance",
                "accessibility",
                "exploring",
                "collaboration",
                "empathy",
                "user-first",
                "clarity",
                "efficiency",
                "joy",
              ]}
              highlightClass="text-purple-700 font-bold"
              backgroundColor="transparent"
              wireframes={false}
              gravity={0.8}
              fontSize="1rem"
              mouseConstraintStiffness={0.9}
            />
          </div>

          {/* Rotating Title */}
          <div className="text-center mt-2">
            <h2 className="font-poppins font-extrabold text-[2rem] md:text-[1.6rem] lg:text-[2.5rem] text-[#5e17eb] leading-tight">
              Creative{" "}
              <span className="relative inline-block align-middle">
                <RotatingText
                  texts={["Coding", "Thinking", "Components"]}
                  mainClassName="px-3 bg-[#5e17eb] text-white font-bold text-[2rem] md:text-[1.6rem] lg:text-[2.5rem] overflow-hidden justify-center rounded-lg"
                  staggerFrom="last"
                  animate={{ y: 0 }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
              </span>
            </h2>
          </div>
        </div>

        {/* Right Column: ChromaGrid */}
        <div className="w-full md:w-1/2">
          <div className="h-full min-h-[400px] relative">
            <ChromaGrid items={items} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
