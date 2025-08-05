import React, { ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 z-50 w-full bg-transparent">
        <div className="container mx-auto px-6 py-6">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white tracking-wider">BLUE OCEAN</h1>
            <div className="flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-gray-300 transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('experiences')}
                className="text-white hover:text-gray-300 transition-colors"
              >
                Experiences
              </button>
              <button 
                onClick={() => scrollToSection('faqs')}
                className="text-white hover:text-gray-300 transition-colors"
              >
                FAQs
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-gray-300 transition-colors"
              >
                Contact
              </button>
            </div>
          </nav>
        </div>
      </header>
      <main className="flex-grow">{children}</main>
    </div>
  );
};

export default Layout; 