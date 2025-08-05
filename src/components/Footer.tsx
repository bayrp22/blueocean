const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-8 bg-gray-900 text-white border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo section */}
          <div>
            <h2 className="text-4xl font-bold">BLUE OCEAN</h2>
          </div>

          {/* Made by credit */}
          <div>
            <p className="text-base text-gray-400">
              Made by{' '}
              <a 
                href="https://searchloscabos.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-bold text-white hover:text-gray-300 transition-colors"
              >
                Search Web Services
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 