import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { Button } from "@/app/components/ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#F5A623]/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <div className="text-2xl font-bold text-black">
              MADHVI<span className="text-[#F5A623]">'s</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center gap-8"
          >
            <button
              onClick={() => scrollToSection("home")}
              className="text-black hover:text-[#F5A623] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-black hover:text-[#F5A623] transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-black hover:text-[#F5A623] transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-black hover:text-[#F5A623] transition-colors"
            >
              Contact
            </button>
          </motion.nav>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:block"
          >
            <Button
              onClick={() => scrollToSection("booking")}
              className="bg-[#F5A623] hover:bg-[#F5A623]/90 text-white px-6 py-2 rounded-full"
            >
              Book Now
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-black"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <nav className="flex flex-col gap-4 py-6">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-black hover:text-[#F5A623] transition-colors text-left"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-black hover:text-[#F5A623] transition-colors text-left"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-black hover:text-[#F5A623] transition-colors text-left"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-black hover:text-[#F5A623] transition-colors text-left"
                >
                  Contact
                </button>
                <Button
                  onClick={() => scrollToSection("booking")}
                  className="bg-[#F5A623] hover:bg-[#F5A623]/90 text-white px-6 py-2 rounded-full w-full"
                >
                  Book Now
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
