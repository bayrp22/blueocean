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
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left side - Contact info */}
          <div>
            <h2 className="text-sm font-medium mb-4 text-gray-400">Contact</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8">Get in touch</h3>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              For any inquiries or to explore your vision further, we invite 
              you to contact our professional team using the details 
              provided below.
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-medium mb-2">Office</h4>
                <p className="text-gray-300">Cabo San Lucas Marina</p>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-2">Email</h4>
                <p className="text-gray-300">info@wildcabotours.com</p>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-2">Telephone</h4>
                <p className="text-gray-300">+52 800 953 1463</p>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-4">Follow us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-gray-300 transition-colors">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="#" className="hover:text-gray-300 transition-colors">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                    </svg>
                  </a>
                  <a href="#" className="hover:text-gray-300 transition-colors">
                    <Twitter className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Contact form */}
          <div className="bg-white rounded-xl p-8 text-gray-900">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name*
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Smith"
                  required
                  className="w-full bg-gray-50 border-gray-200"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email*
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="johnsmith@gmail.com"
                  required
                  className="w-full bg-gray-50 border-gray-200"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+447891234567"
                  className="w-full bg-gray-50 border-gray-200"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message*
                </label>
                <Textarea
                  id="message"
                  placeholder="Hello, I'd like to enquire about..."
                  required
                  rows={4}
                  className="w-full bg-gray-50 border-gray-200 resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gray-900 text-white hover:bg-gray-800 py-6 text-lg font-medium"
              >
                Send message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 