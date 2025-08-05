import React, { ReactNode, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed md:absolute top-0 md:top-8 left-0 md:left-16 right-0 md:right-16 z-50 p-3 md:p-0">
        {/* Mobile Navigation */}
        <div className="md:hidden bg-gray-800/90 backdrop-blur-md rounded-2xl px-5 py-5 mx-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-lg font-bold text-white tracking-wider">BLUE OCEAN</h1>
            
            {/* Mobile Menu Button */}
            <button 
              className="text-white p-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </nav>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-between items-center px-6 py-6">
          <h1 className="text-2xl font-bold text-white tracking-wider">BLUE OCEAN</h1>
          
          <div className="flex items-center space-x-12">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white font-medium hover:text-gray-300 transition-colors text-base"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('experiences')}
              className="text-white font-medium hover:text-gray-300 transition-colors text-base"
            >
              Experiences
            </button>
            <button 
              onClick={() => scrollToSection('faqs')}
              className="text-white font-medium hover:text-gray-300 transition-colors text-base"
            >
              FAQs
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white font-medium hover:text-gray-300 transition-colors text-base"
            >
              Contact
            </button>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-md">
            {/* Header with logo and close button */}
            <div className="flex justify-between items-center px-6 py-8">
              <h1 className="text-2xl font-bold text-white tracking-wider">BLUE OCEAN</h1>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-gray-300 transition-colors p-2"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            {/* Menu items */}
            <div className="flex flex-col items-start justify-start px-6 space-y-8 mt-12">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white text-3xl font-medium hover:text-gray-300 transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('experiences')}
                className="text-white text-3xl font-medium hover:text-gray-300 transition-colors"
              >
                Experiences
              </button>
              <button 
                onClick={() => scrollToSection('faqs')}
                className="text-white text-3xl font-medium hover:text-gray-300 transition-colors"
              >
                FAQs
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white text-3xl font-medium hover:text-gray-300 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">{children}</main>
    </div>
  );
};

export default Layout; 