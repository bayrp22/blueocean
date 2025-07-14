import React, { ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 bg-navy text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-serif font-bold">Cabo Marine Adventures</h1>
          <Button className="bg-gold text-navy hover:bg-gold/90" asChild>
            <a href="#pricing">Book</a>
          </Button>
        </div>
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="bg-navy text-white py-8 text-center">
        <p>&copy; 2023 Cabo Marine Adventures. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout; 