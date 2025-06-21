import React from "react";
import { Star, Eye, Zap, Globe } from "lucide-react";

interface PortfolioDetailProps {
  selectedPortfolio: any;
}

const PortfolioDetail: React.FC<PortfolioDetailProps> = ({
  selectedPortfolio,
}) => {
  if (!selectedPortfolio) return null;

  return (
    <div className="pt-20 pb-12">
      {/* Hero Section */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Portfolio Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-cyan-400">
                <span className="text-sm uppercase tracking-wide">
                  Portfolio Project
                </span>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-current text-yellow-400" />
                  <span className="text-yellow-400">
                    {selectedPortfolio.rating}
                  </span>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {selectedPortfolio.title}
              </h1>
              <div className="flex items-center gap-4 text-gray-300">
                <span>
                  by{" "}
                  <span className="text-white font-semibold">
                    {selectedPortfolio.creator}
                  </span>
                </span>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>{selectedPortfolio.views} views</span>
                </div>
              </div>
              <p className="text-xl text-gray-300 leading-relaxed">
                {selectedPortfolio.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedPortfolio.tags.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4 pt-4">
                <span className="text-3xl font-bold text-cyan-400">
                  {selectedPortfolio.price}
                </span>
                <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  Purchase Now
                </button>
                <button className="px-6 py-3 border border-cyan-400/50 rounded-lg font-semibold transition-all duration-300 hover:bg-cyan-400/10">
                  Live Demo
                </button>
              </div>
            </div>
            {/* Main Screenshot */}
            <div className="relative">
              <div
                className={`aspect-video rounded-2xl ${selectedPortfolio.image} p-8 flex items-center justify-center`}
              >
                <div className="text-center text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    {selectedPortfolio.title}
                  </h3>
                  <p className="text-sm opacity-80">Interactive Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedPortfolio.features.map(
              (feature: string, index: number) => (
                <div
                  key={index}
                  className="backdrop-blur-md bg-white/5 rounded-xl p-6 border border-white/10"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-semibold text-white">{feature}</span>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
      {/* Tech Stack */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Technology Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {selectedPortfolio.techStack.map((tech: string, index: number) => (
              <div
                key={index}
                className="backdrop-blur-md bg-white/5 rounded-lg px-6 py-3 border border-white/10"
              >
                <span className="font-semibold text-cyan-400">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Screenshots Gallery */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Screenshots</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {selectedPortfolio.screenshots.map(
              (screenshot: string, index: number) => (
                <div
                  key={index}
                  className={`aspect-video rounded-xl ${screenshot} p-6 flex items-center justify-center`}
                >
                  <div className="text-center text-white">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Eye className="w-6 h-6" />
                    </div>
                    <p className="text-sm opacity-80">Screenshot {index + 1}</p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
      {/* Reviews Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Customer Reviews
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {selectedPortfolio.reviews.map((review: any, index: number) => (
              <div
                key={index}
                className="backdrop-blur-md bg-white/5 rounded-xl p-6 border border-white/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">
                      {review.name[0]}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{review.name}</h4>
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_: any, i: number) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-current text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Purchase CTA */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="backdrop-blur-md bg-white/5 rounded-3xl p-12 border border-white/10">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Get instant access to the complete source code, documentation, and
              setup guide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-bold text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                Purchase for {selectedPortfolio.price}
              </button>
              <button className="px-8 py-4 border-2 border-cyan-400/50 backdrop-blur-sm bg-white/5 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-cyan-400/10 hover:border-cyan-400">
                Contact Seller
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioDetail;
