import React from "react";
import { Zap, Target, Lightbulb, Code, Palette } from "lucide-react";

interface GeneratorSectionProps {
  generatedIdea: any;
  isGenerating: boolean;
  generateIdea: () => void;
  visibleElements: Set<string>;
}

const GeneratorSection: React.FC<GeneratorSectionProps> = ({
  generatedIdea,
  isGenerating,
  generateIdea,
  visibleElements,
}) => {
  return (
    <section id="generator" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          data-animate="true"
          id="generator-header"
          className={`text-center mb-16 transition-all duration-1000 ${
            visibleElements.has("generator-header")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            AI-Powered Idea Generator
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stuck on what to build? Our intelligent generator creates portfolio
            ideas based on real-world problems and trending technologies.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            data-animate="true"
            id="generator-card"
            className={`backdrop-blur-md bg-white/5 rounded-3xl p-8 border border-white/10 transition-all duration-1000 ${
              visibleElements.has("generator-card")
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="text-center mb-8">
              <button
                onClick={generateIdea}
                disabled={isGenerating}
                className="group relative px-10 py-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 flex items-center gap-3">
                  {isGenerating ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Generating...
                    </>
                  ) : (
                    <>
                      <Zap className="w-6 h-6" />
                      Generate Portfolio Idea
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
            {generatedIdea && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-cyan-400 mb-3">
                    {generatedIdea.title}
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Target className="w-5 h-5 text-red-400" />
                        <span className="font-semibold text-red-400">
                          Problem
                        </span>
                      </div>
                      <p className="text-gray-300">{generatedIdea.problem}</p>
                    </div>
                    <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Lightbulb className="w-5 h-5 text-green-400" />
                        <span className="font-semibold text-green-400">
                          Solution
                        </span>
                      </div>
                      <p className="text-gray-300">{generatedIdea.solution}</p>
                    </div>
                    <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Code className="w-5 h-5 text-blue-400" />
                        <span className="font-semibold text-blue-400">
                          Tech Stack
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {generatedIdea.tech.map(
                          (tech: string, index: number) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div
            data-animate="true"
            id="generator-features"
            className={`space-y-6 transition-all duration-1000 delay-300 ${
              visibleElements.has("generator-features")
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Problem-Focused</h3>
              </div>
              <p className="text-gray-300">
                Every idea addresses a real-world problem with market validation
                potential.
              </p>
            </div>
            <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Modern Tech Stacks</h3>
              </div>
              <p className="text-gray-300">
                Curated technology combinations that align with current industry
                trends.
              </p>
            </div>
            <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Instant Inspiration</h3>
              </div>
              <p className="text-gray-300">
                Break through creative blocks with AI-generated project
                concepts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneratorSection;
