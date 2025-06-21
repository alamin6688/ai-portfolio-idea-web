import React from "react";
import { Heart, Zap, Star } from "lucide-react";

const aboutItems = [
  {
    icon: Heart,
    title: "Community Driven",
    desc: "Built by developers, for developers",
  },
  {
    icon: Zap,
    title: "Innovation First",
    desc: "Cutting-edge projects that matter",
  },
  {
    icon: Star,
    title: "Quality Assured",
    desc: "Curated content you can trust",
  },
];

interface AboutSectionProps {
  visibleElements: Set<string>;
}

const AboutSection: React.FC<AboutSectionProps> = ({ visibleElements }) => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          data-animate="true"
          id="about-content"
          className={`transition-all duration-1000 ${
            visibleElements.has("about-content")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Why PortfolioHub?
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            We believe great portfolios should solve real problems. Our platform
            connects talented developers with meaningful project ideas and
            provides a marketplace for exceptional work. Join our community of
            innovators building the future.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {aboutItems.map((item, index) => (
              <div
                key={index}
                className="backdrop-blur-md bg-white/5 rounded-xl p-8 border border-white/10 flex flex-col items-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
