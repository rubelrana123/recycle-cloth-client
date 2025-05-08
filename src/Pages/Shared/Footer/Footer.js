import { ChevronDown, ChevronUp, Mail, MapPin, Phone, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100">
      <div className="mx-auto max-w-6xl px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-emerald-400">Recycle Cloth</h3>
            <p className="text-gray-400 mb-6">
              Making sustainable fashion accessible and affordable for everyone. Join our mission to reduce textile waste.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white relative pb-2">
              <span className="relative">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-emerald-500"></span>
              </span>
            </h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Shop', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white relative pb-2">
              <span className="relative">
                Services
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-emerald-500"></span>
              </span>
            </h3>
            <ul className="space-y-3">
              {['Sell Your Clothes', 'Buy Recycled', 'Clothing Donation', 'Repair Services', 'Sustainable Tips'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white relative pb-2">
              <span className="relative">
                Newsletter
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-emerald-500"></span>
              </span>
            </h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for updates on sustainable fashion and exclusive offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-2 bg-gray-800 text-gray-100 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-r-lg transition-colors duration-300"
              >
                Join
              </button>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-800"></div>
        
        {/* Bottom Section */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Recycle Cloth. All rights reserved.
          </div>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
