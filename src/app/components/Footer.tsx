import React from "react";
import { Facebook, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-[#5e17eb] text-white py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Text */}
        <div className="text-center md:text-left">
          <p className="text-sm">
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-semibold">John Roel R. Flamiano</span>. All
            rights&nbsp;reserved.
          </p>
        </div>

        {/* Right: Social Icons */}
        <div className="flex items-center gap-6 text-white">
          <Link
            href="mailto:johnroel@example.com"
            target="_blank"
            className="hover:text-gray-200 transition"
            title="Email"
          >
            <Mail size={20} />
          </Link>
          <Link
            href="https://github.com/yourusername"
            target="_blank"
            className="hover:text-gray-200 transition"
            title="GitHub"
          >
            <Github size={20} />
          </Link>
          <Link
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            className="hover:text-gray-200 transition"
            title="LinkedIn"
          >
            <Linkedin size={20} />
          </Link>
          <Link
            href="https://facebook.com/yourprofile"
            target="_blank"
            className="hover:text-gray-200 transition"
            title="Facebook"
          >
            <Facebook size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
};
