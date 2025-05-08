import { ChevronDown, ChevronUp, Mail, MapPin, Phone, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

// ContactSection Us Section
function ContactSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-teal-900 to-emerald-800 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          {/* ContactSection Info */}
          <div className="relative z-10">
            <div className="p-8 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl border border-white border-opacity-20 shadow-xl">
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="mb-8 text-emerald-100">
                Have questions about sustainable fashion or need help with your order? We're here to help!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-500 p-3 rounded-full">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Our Location</h3>
                    <p className="text-emerald-100">123 Eco Street, Green City, 10001</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-500 p-3 rounded-full">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Phone Number</h3>
                    <p className="text-emerald-100">(123) 456-7890</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-500 p-3 rounded-full">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Email Address</h3>
                    <p className="text-emerald-100">help@recyclecloth.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 flex space-x-4">
                <a href="#" className="p-3 bg-emerald-500 rounded-full hover:bg-emerald-400 transition-colors duration-300">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 bg-emerald-500 rounded-full hover:bg-emerald-400 transition-colors duration-300">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 bg-emerald-500 rounded-full hover:bg-emerald-400 transition-colors duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 bg-emerald-500 rounded-full hover:bg-emerald-400 transition-colors duration-300">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          {/* ContactSection Form */}
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-teal-500 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-300 rounded-full opacity-20 blur-2xl"></div>
            
            <div className="relative z-10 p-8 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl border border-white border-opacity-20 shadow-xl">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 placeholder-white placeholder-opacity-60"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 placeholder-white placeholder-opacity-60"
                    placeholder="Your Email"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 placeholder-white placeholder-opacity-60"
                    placeholder="Type your message here..."
                  ></textarea>
                </div>
                
                <button 
                  className="w-full py-3 px-6 bg-emerald-500 hover:bg-emerald-400 text-white font-medium rounded-lg transition-colors duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;