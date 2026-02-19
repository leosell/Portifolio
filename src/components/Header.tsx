"use client";
import React from "react";
import Link from "next/link";

export const Header: React.FC = () => {
  const uniqueHash = "#charevelacao123";
  const currentHash = typeof window !== "undefined" ? window.location.hash : "";

  return (
    <header className="w-full max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
      <nav className="flex gap-6 items-center text-sm text-gray-300">
        <Link href="/#home" className="hover:underline cursor-pointer">Home</Link>
        <Link href="/#sobre" className="hover:underline cursor-pointer">About</Link>
        <Link href="/#projects" className="hover:underline cursor-pointer">Projects</Link>
        <Link href="/#contact" className="hover:underline cursor-pointer">Contact</Link>
        {currentHash === uniqueHash && (
          <Link href="/convite-cha-revelacao" className="hover:underline cursor-pointer">
            Convite Chá Revelação
          </Link>
        )}
      </nav>
      <div className="text-sm text-gray-400">Backend Developer</div>
    </header>
  );
};
