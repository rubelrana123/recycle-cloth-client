import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from '@heroicons/react/24/solid';
  // You'll need to create SVG components or use social media logos as inline SVGs or components

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand/Intro */}
        <div>
          <h2 className="text-3xl font-extrabold text-primary mb-4">Recycle Cloth</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Sustainable fashion starts here. Discover pre-loved clothes with a purpose.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Get in Touch</h3>
          <ul className="text-gray-300 text-sm space-y-2">
            <li className="flex items-center gap-2">
              <MapPinIcon className="h-5 w-5 text-primary" />
              Fake Address, 9999 City
            </li>
            <li className="flex items-center gap-2">
              <PhoneIcon className="h-5 w-5 text-primary" />
              017123456789
            </li>
            <li className="flex items-center gap-2">
              <EnvelopeIcon className="h-5 w-5 text-primary" />
              rubelrana@gmail.com
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Services</h3>
          <ul className="text-gray-300 text-sm space-y-2">
            <li><a href="#" className="hover:text-primary">Buy & Shop</a></li>
            <li><a href="#" className="hover:text-primary">Design</a></li>
            <li><a href="#" className="hover:text-primary">Marketing</a></li>
            <li><a href="#" className="hover:text-primary">Advertisement</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            {/* Replace these with your Heroicons-based or custom social icons */}
            <a href="#" className="hover:text-blue-500" aria-label="Facebook">
              {/* <FacebookIcon className="w-6 h-6" /> */}
            </a>
            <a href="#" className="hover:text-sky-400" aria-label="Twitter">
              {/* <TwitterIcon className="w-6 h-6" /> */}
            </a>
            <a href="#" className="hover:text-red-600" aria-label="YouTube">
              {/* <YoutubeIcon className="w-6 h-6" /> */}
            </a>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="text-center mt-10 text-sm text-gray-500 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Recycle Cloth. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
