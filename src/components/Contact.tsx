import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Twitter } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="min-h-screen flex items-center bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Left side - Contact info */}
          <div className="flex flex-col justify-center">
            <h2 className="text-sm font-medium mb-6 text-gray-400 uppercase tracking-wider">Contact</h2>
            <h3 className="text-5xl lg:text-6xl font-bold mb-10">Get in touch</h3>
            <p className="text-xl lg:text-2xl text-gray-300 mb-16 leading-relaxed">
              For any inquiries or to explore your vision further, we invite 
              you to contact our professional team using the details 
              provided below.
            </p>

            <div className="space-y-10">
              <div>
                <h4 className="text-xl font-medium mb-3">Office</h4>
                <p className="text-lg text-gray-300">Cabo San Lucas Marina</p>
              </div>

              <div>
                <h4 className="text-xl font-medium mb-3">Email</h4>
                <p className="text-lg text-gray-300">info@wildcabotours.com</p>
              </div>

              <div>
                <h4 className="text-xl font-medium mb-3">Telephone</h4>
                <p className="text-lg text-gray-300">+52 800 953 1463</p>
              </div>

              <div>
                <h4 className="text-xl font-medium mb-6">Follow us</h4>
                <div className="flex space-x-6">
                  <a href="#" className="hover:text-gray-300 transition-colors">
                    <Instagram className="w-8 h-8" />
                  </a>
                  <a href="#" className="hover:text-gray-300 transition-colors">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                    </svg>
                  </a>
                  <a href="#" className="hover:text-gray-300 transition-colors">
                    <Twitter className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Contact form */}
          <div className="bg-white rounded-2xl p-10 text-gray-900 flex items-center">
            <form onSubmit={handleSubmit} className="w-full space-y-8">
              <div>
                <label htmlFor="name" className="block text-base font-medium mb-3">
                  Name*
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Smith"
                  required
                  className="w-full bg-gray-50 border-gray-200 h-12 text-base"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-base font-medium mb-3">
                  Email*
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="johnsmith@gmail.com"
                  required
                  className="w-full bg-gray-50 border-gray-200 h-12 text-base"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-base font-medium mb-3">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+447891234567"
                  className="w-full bg-gray-50 border-gray-200 h-12 text-base"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-base font-medium mb-3">
                  Message*
                </label>
                <Textarea
                  id="message"
                  placeholder="Hello, I'd like to enquire about..."
                  required
                  rows={5}
                  className="w-full bg-gray-50 border-gray-200 resize-none text-base"
                />
              </div>

              <div className="relative group cursor-pointer w-full" onClick={handleSubmit}>
                <div className="w-full bg-gray-800 text-white rounded-full px-6 py-4 text-lg font-medium flex items-center justify-center gap-3 relative overflow-hidden transition-all duration-500 group-hover:text-gray-800">
                  <span className="relative z-20">Send message</span>
                  <div className="relative flex items-center justify-center">
                    {/* Expanding white circle - scales from arrow position */}
                    <div className="absolute w-6 h-6 bg-white rounded-full transition-all duration-500 ease-in-out group-hover:scale-[24] transform-origin-center z-10"></div>
                    {/* Arrow circle - becomes dark on hover */}
                    <div className="relative z-20 w-6 h-6 bg-white rounded-full flex items-center justify-center transition-all duration-500 group-hover:bg-gray-800">
                      <svg className="w-3 h-3 text-gray-800 group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 