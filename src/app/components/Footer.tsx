'use client';

import { ExternalLink, Mail, LinkedinIcon, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Atharva Sawant</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              3D Environment Artist & Game Developer with professional QA experience and IndieCade recognition. 
              Creating quality-focused game environments and assets from Boston, MA.
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:atharvass99@gmail.com"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/atharva-sawant-9315b71a3/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.artstation.com/atharvasawant99"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                aria-label="ArtStation"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Portfolio</h4>
            <nav className="space-y-2">
              <a href="#games" className="block text-gray-300 hover:text-white transition-colors">
                Published Games
              </a>
              <a href="#environments" className="block text-gray-300 hover:text-white transition-colors">
                3D Environments
              </a>
              <a href="#models" className="block text-gray-300 hover:text-white transition-colors">
                3D Assets & Props
              </a>
              <a href="#about" className="block text-gray-300 hover:text-white transition-colors">
                About Me
              </a>
              <a href="#contact" className="block text-gray-300 hover:text-white transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* External Links */}
          <div>
            <h4 className="font-semibold mb-4">My Work</h4>
            <div className="space-y-2">
              <a
                href="https://www.artstation.com/atharvasawant99"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-300 hover:text-white transition-colors flex items-center gap-2"
              >
                ArtStation Portfolio
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://atharvasawant.itch.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-300 hover:text-white transition-colors flex items-center gap-2"
              >
                Published Games
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2025 Atharva Sawant. All rights reserved.
            </div>
            
            {/* Your Signature */}
            <div className="text-sm">
              <a
                href="https://xtremery.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent animate-pulse hover:animate-shimmer font-medium"
              >
                Environment-crafted by Xtremery · DeLand, FL
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;