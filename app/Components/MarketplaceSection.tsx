import React from "react";
import { Star, Eye, ArrowRight } from "lucide-react";

interface MarketplaceSectionProps {
  featuredPortfolios: any[];
  visibleElements: Set<string>;
  viewPortfolioDetails: (portfolio: any) => void;
}

const MarketplaceSection: React.FC<MarketplaceSectionProps> = ({
  featuredPortfolios,
  visibleElements,
  viewPortfolioDetails,
}) => {
  return (
    <section
      id="marketplace"
      className="py-20 relative"
      style={{
        background:
          "linear-gradient(135deg, #0a0e1a 0%, #1a1f2e 25%, #2a3f5f 50%, #1e3a8a 75%, #0f172a 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="glass-bg"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          data-animate="true"
          id="marketplace-header"
          className={`text-center mb-16 transition-all duration-1000 ${
            visibleElements.has("marketplace-header")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Portfolio Marketplace
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover premium portfolio projects from talented developers
            worldwide. Buy complete solutions or sell your own creations.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPortfolios.map((portfolio, index) => (
            <div
              key={portfolio.id}
              data-animate="true"
              id={`portfolio-${portfolio.id}`}
              className={`backdrop-blur-md bg-white/5 rounded-3xl overflow-hidden border border-white/10 transition-all duration-1000 hover:scale-100 hover:shadow-2xl hover:shadow-cyan-500/10 service-card ${
                visibleElements.has(`portfolio-${portfolio.id}`)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              <div
                className={`h-48 ${portfolio.image} relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4 flex items-center gap-2 text-white">
                  <Eye className="w-4 h-4" />
                  <span className="text-sm">{portfolio.views}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">
                    {portfolio.title}
                  </h3>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm">{portfolio.rating}</span>
                  </div>
                </div>
                <p className="text-gray-400 mb-4">by {portfolio.creator}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {portfolio.tags.map((tag: string, tagIndex: number) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded-md text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-cyan-400">
                    {portfolio.price}
                  </span>
                  <button
                    onClick={() => viewPortfolioDetails(portfolio)}
                    className="group flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="group px-8 py-4 border-2 border-cyan-400/50 backdrop-blur-sm bg-white/5 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-cyan-400/10 hover:border-cyan-400 hover:scale-105">
            <span className="flex items-center gap-2">
              View All Portfolios
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>
      <style>{`
        .service-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 20px;
          padding: 2.5rem 1.5rem;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(.4,2,.6,1);
        }
        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #3b82f6, #1d4ed8, #1e40af);
          transform: scaleX(0);
          transition: transform 0.4s cubic-bezier(.4,2,.6,1);
        }
        .service-card:hover::before {
          transform: scaleX(1);
        }
        .service-card:hover {
          transform: translateY(-10px) scale(1.05);
          background: rgba(59, 130, 246, 0.1);
          box-shadow: 0 20px 40px rgba(59, 130, 246, 0.2);
        }
      `}</style>
    </section>
  );
};

export default MarketplaceSection;
