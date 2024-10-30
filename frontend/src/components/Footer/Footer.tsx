import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Logo and Social Icons */}
        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center space-x-2">
            <div className="text-yellow-400 text-3xl font-bold">T</div>
            <span className="text-white text-2xl font-semibold">TextZen</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-yellow-400">F</a>
            <a href="#" className="text-gray-400 hover:text-yellow-400">I</a>
            <a href="#" className="text-gray-400 hover:text-yellow-400">X</a>
            <a href="#" className="text-gray-400 hover:text-yellow-400">Y</a>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          <div>
            <h3 className="text-white font-semibold mb-4">Pagedone</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-400">Home</a></li>
              <li><a href="#" className="hover:text-yellow-400">About</a></li>
              <li><a href="#" className="hover:text-yellow-400">Pricing</a></li>
              <li><a href="#" className="hover:text-yellow-400">Pro Version</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-400">Figma UI System</a></li>
              <li><a href="#" className="hover:text-yellow-400">Icons Assets</a></li>
              <li><a href="#" className="hover:text-yellow-400">Responsive Blocks</a></li>
              <li><a href="#" className="hover:text-yellow-400">Components Library</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-400">FAQs</a></li>
              <li><a href="#" className="hover:text-yellow-400">Quick Start</a></li>
              <li><a href="#" className="hover:text-yellow-400">Documentation</a></li>
              <li><a href="#" className="hover:text-yellow-400">User Guide</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Newsletter</h3>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="mail@pagedone.com"
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <div className="flex items-center space-x-2">
                <input type="checkbox" className="text-yellow-400" />
                <span className="text-sm">
                  I agree with <a href="#" className="text-yellow-400 underline">Privacy Policy</a> and <a href="#" className="text-yellow-400 underline">Terms of Condition</a>
                </span>
              </div>
              <button className="w-full py-2 rounded-md bg-yellow-400 text-gray-900 font-semibold">
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm mt-10 border-t border-gray-700 pt-6">
          <p className="mb-4 sm:mb-0">©pagedone 2023, All rights reserved.</p>
          <button className="px-4 py-2 rounded-md bg-gray-800 text-gray-400 hover:text-yellow-400">
            Have a question? talk to us
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
