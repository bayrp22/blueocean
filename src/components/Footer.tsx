const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-24 bg-gray-900 text-white border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-7xl mx-auto">
          {/* Logo section */}
          <div>
            <h2 className="text-4xl font-bold mb-6">BLUE OCEAN</h2>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xl font-medium mb-6">Quick links</h3>
            <ul className="space-y-4">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-lg text-gray-400 hover:text-white transition-colors"
                >
                  About us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('experiences')}
                  className="text-lg text-gray-400 hover:text-white transition-colors"
                >
                  Our work
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('faqs')}
                  className="text-lg text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
            </ul>
          </div>

          {/* Additional links */}
          <div>
            <ul className="space-y-4 mt-12 md:mt-0">
              <li>
                <a 
                  href="#testimonials"
                  className="text-lg text-gray-400 hover:text-white transition-colors"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('faqs')}
                  className="text-lg text-gray-400 hover:text-white transition-colors"
                >
                  FAQs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-lg text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 