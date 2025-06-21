import React from "react";
import { useParams } from "react-router-dom";
import PortfolioDetail from "../Components/PortfolioDetail";
import { featuredPortfolios } from "../Components/test2";
import { Sparkles, ArrowRight } from "lucide-react";

export default function CardDetails() {
  const { id } = useParams();
  const portfolio = featuredPortfolios.find((p) => String(p.id) === String(id));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_50%)] pointer-events-none"></div>
      {/* Sticky Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => window.history.back()}
              className="flex items-center space-x-2 text-cyan-400 hover:text-white transition-colors"
            >
              <ArrowRight className="w-5 h-5 rotate-180" />
              <span>Back to Marketplace</span>
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                PortfolioHub
              </span>
            </div>
          </div>
        </div>
      </nav>
      <div className="pt-20">
        <PortfolioDetail selectedPortfolio={portfolio} />
      </div>
    </div>
  );
}
