"use client";

import { useState } from 'react';

const HamburgerMenu = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`relative ${className}`}>
      <button
        className="block md:hidden focus:outline-none z-50"
        onClick={toggleMenu}
      >
        <div className={`hamburger ${isOpen ? "open" : ""}`}>
          <span className="block w-8 h-0.5 bg-black mb-1.5 transition-all duration-300 transform" />
          <span className="block w-8 h-0.5 bg-black mb-1.5 transition-all duration-300 transform" />
          <span className="block w-8 h-0.5 bg-black transition-all duration-300 transform" />
        </div>
      </button>

      <nav
        className={`fixed top-0 left-0 w-full h-full bg-white  z-40 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out md:static md:w-auto md:h-auto md:bg-transparent md:transform-none`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 md:flex-row md:space-y-0 md:space-x-6">
          <button
            className="absolute text-5xl top-2 right-6 md:hidden text-black-30"
            onClick={toggleMenu}
          >
            ×
          </button>
          <div>
            <a href="/" className="text-xl text-black-30 hover:text-gray-300">
              ホーム
            </a>
          </div>
          <div>
            <a href="/about" className="text-xl text-black-30 hover:text-gray-300">
              私たちについて
            </a>
          </div>
          <div>
            <a href="/ourService" className="text-xl text-black-30 hover:text-gray-300">
              事業内容
            </a>
          </div>
          <div>
            <a href="/contact" className="text-xl text-black-30 hover:text-gray-300">
              お問い合わせ
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
