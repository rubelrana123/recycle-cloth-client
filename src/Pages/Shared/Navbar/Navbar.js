
import { useState, useEffect, useContext } from 'react';
import toast from 'react-hot-toast';
 import logo from "../../../asserts/Logo/Logo (2).png"
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { Menu, X, ShoppingBag, User, Heart, Search, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
    const {user, signout} = useContext(AuthContext);
  const navigate = useNavigate();
  console.log("username", user, user?.displayName);
  const handleLogOut = () => {
    signout().then( () => {
      navigate("/")
      toast.success("Logout Successfully", {autoClose : 200});
      localStorage.removeItem("token");
    })

  }

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const closeMenu = () => {
      if (isMenuOpen) setIsMenuOpen(false);
      if (dropdownOpen) setDropdownOpen(null);
    };

    if (isMenuOpen || dropdownOpen) {
      document.addEventListener('click', closeMenu);
    }

    return () => document.removeEventListener('click', closeMenu);
  }, [isMenuOpen, dropdownOpen]);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (e, name) => {
    e.stopPropagation();
    setDropdownOpen(dropdownOpen === name ? null : name);
  };

  const toggleSearch = (e) => {
    e.stopPropagation();
    setIsSearchOpen(!isSearchOpen);
  };

  // Navigation items
  const navItems = [
    { name: 'Home', link: '#' },
    { 
      name: 'Shop', 
      link: '#',
      dropdown: [
        { name: 'Women', link: '#' },
        { name: 'Men', link: '#' },
        { name: 'Kids', link: '#' },
        { name: 'Accessories', link: '#' }
      ]
    },
    { name: 'Sell', link: '#' },
    { name: 'Blog', link: '#' },
    { name: 'About', link: '#' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <div className={`text-2xl font-bold ${isScrolled ? 'text-teal-800' : 'text-white'}`}>
                <span className="flex items-center">
                  <Recycle size={24} className="mr-2" />
                  Recycle Cloth
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <>
                    <button 
                      onClick={(e) => toggleDropdown(e, item.name)}
                      className={`px-4 py-2 rounded-md flex items-center ${
                        isScrolled ? 'text-gray-700 hover:text-teal-600' : 'text-white hover:text-emerald-300'
                      }`}
                    >
                      {item.name}
                      <ChevronDown size={16} className="ml-1" />
                    </button>
                    {dropdownOpen === item.name && (
                      <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                        {item.dropdown.map((subItem) => (
                          <a 
                            key={subItem.name}
                            href={subItem.link}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a 
                    href={item.link}
                    className={`px-4 py-2 rounded-md ${
                      isScrolled ? 'text-gray-700 hover:text-teal-600' : 'text-white hover:text-emerald-300'
                    }`}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center space-x-2">
            <button 
              onClick={toggleSearch}
              className={`p-2 rounded-full ${
                isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <a 
              href="#" 
              className={`p-2 rounded-full ${
                isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Favorites"
            >
              <Heart size={20} />
            </a>
            <a 
              href="#" 
              className={`p-2 rounded-full ${
                isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Shopping Bag"
            >
              <ShoppingBag size={20} />
            </a>
            <a 
              href="#" 
              className={`flex items-center px-4 py-2 rounded-md ${
                isScrolled 
                  ? 'bg-emerald-500 text-white hover:bg-emerald-600' 
                  : 'bg-white text-emerald-700 hover:bg-emerald-50'
              }`}
            >
              <User size={18} className="mr-2" />
              Account
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <button 
              onClick={toggleSearch}
              className={`p-2 rounded-full ${
                isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <a 
              href="#" 
              className={`p-2 rounded-full ${
                isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Shopping Bag"
            >
              <ShoppingBag size={20} />
            </a>
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-md ${
                isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="absolute left-0 right-0 top-full mt-0 px-4 py-3 bg-white shadow-md">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for sustainable fashion..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute left-0 right-0 top-full mt-0 bg-white shadow-lg z-40">
            <div className="px-4 py-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <>
                      <button 
                        onClick={(e) => toggleDropdown(e, item.name)}
                        className="flex items-center justify-between w-full px-4 py-3 border-b border-gray-100 text-gray-700"
                      >
                        {item.name}
                        <ChevronDown size={16} className={`transform transition-transform ${dropdownOpen === item.name ? 'rotate-180' : ''}`} />
                      </button>
                      {dropdownOpen === item.name && (
                        <div className="bg-gray-50 px-4">
                          {item.dropdown.map((subItem) => (
                            <a 
                              key={subItem.name}
                              href={subItem.link}
                              className="block py-3 pl-4 border-b border-gray-100 text-gray-600"
                            >
                              {subItem.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a 
                      href={item.link}
                      className="block px-4 py-3 border-b border-gray-100 text-gray-700"
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
              <div className="flex items-center justify-between px-4 py-4">
                <a href="#" className="flex items-center text-gray-700">
                  <Heart size={20} className="mr-2" />
                  Favorites
                </a>
                <a href="#" className="flex items-center text-gray-700">
                  <User size={20} className="mr-2" />
                  Account
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// Add Recycle icon component since it wasn't included in the imports
function Recycle(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className || ""}
    >
      <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" />
      <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" />
      <path d="m14 16-3 3 3 3" />
      <path d="M8.293 13.596 7.196 9.5 3.1 10.598" />
      <path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843" />
      <path d="m13.378 9.633 4.096 1.098 1.097-4.096" />
    </svg>
  );
}