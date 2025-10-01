import Link from 'next/link';
import { FiHeart } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="glass-effect border-t border-white/10">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-300 flex items-center justify-center md:justify-start gap-1">
              Made with <FiHeart className="text-red-500 animate-pulse" /> by GHazal Aryem
            </p>
          </div>
          
          <div className="flex space-x-6">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-300">
              Home
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-300">
              About
            </Link>
            <Link href="/projects" className="text-gray-300 hover:text-white transition-colors duration-300">
              Projects
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-300">
              Contact
            </Link>
          </div>
        </div>
        
        <div className="text-center mt-4 pt-4 border-t border-white/10">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} GHazal Aryem. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;