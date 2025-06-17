import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import logo from "../img/logo.png";
import "../App.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "backdrop-blur-lg bg-white/10 shadow-lg py-1 border-b border-white/20"
          : "bg-transparent py-2 border-b-0 shadow-none"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#hero" className="flex items-center relative group">
          {/* Glowing logo background */}
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 bg-cyan-400 opacity-30 blur-2xl transition-all z-0" />
          <img
            src={logo}
            alt="Logo"
            className="relative h-10 w-10 md:h-12 md:w-12 object-cover shadow-2xl z-10 transition-all duration-300"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "nav-link with-underline text-white/80 font-medium px-3 py-1 relative transition-all duration-200 hover:text-cyan-300"
              )}
            >
              {item.name}
            </a>
          ))}
          {/* <a
            href="/blogs"
            className="ml-2 px-4 py-2 rounded bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold shadow-lg hover:from-blue-500 hover:to-cyan-400 transition-all duration-200"
          >
            Blogs
          </a> */}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-cyan-300 hover:text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/10 backdrop-blur-lg border-b border-white/20 px-4 py-5 mt-1 rounded-b-xl shadow-lg">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/80 hover:text-cyan-400 font-medium px-3 py-2 rounded transition-all duration-200 hover:bg-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            {/* <a
              href="/blogs"
              className="px-4 py-2 rounded bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold shadow-lg hover:from-blue-500 hover:to-cyan-400 transition-all duration-200 text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blogs
            </a> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
