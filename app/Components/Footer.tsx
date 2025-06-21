import React from "react";
import { Sparkles } from "lucide-react";

const Footer: React.FC = () => (
  <footer className="py-12 border-t border-white/10 backdrop-blur-md bg-black/20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="flex items-center justify-center space-x-2 mb-4">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          PortfolioHub
        </span>
      </div>
      <p className="text-gray-400">
        © 2025 PortfolioHub. Empowering developers to build meaningful projects.
      </p>
    </div>
  </footer>
);

export default Footer;
