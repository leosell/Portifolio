import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="w-full max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
      <nav className="flex gap-6 items-center text-sm text-gray-300">
        <a href="#home" className="hover:underline cursor-pointer">Home</a>
        <a href="#sobre" className="hover:underline cursor-pointer">About</a>
        <a href="#projects" className="hover:underline cursor-pointer">Projects</a>
        <a href="#contact" className="hover:underline cursor-pointer">Contact</a>
      </nav>
      <div className="text-sm text-gray-400">Backend Developer</div>
    </header>
  )
}