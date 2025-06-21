import React, { useRef, useState, useEffect } from "react";
import {
  ChevronDown,
  Sparkles,
  Target,
  Zap,
  Eye,
  Heart,
  Star,
  ArrowRight,
  Menu,
  X,
  Lightbulb,
  Code,
  Palette,
  Globe,
} from "lucide-react";
import "animate.css";
import PortfolioDetail from "./PortfolioDetail";
import { useNavigate } from "react-router-dom";
import GeneratorSection from "./GeneratorSection";
import MarketplaceSection from "./MarketplaceSection";
import AboutSection from "./AboutSection";
import Footer from "./Footer";
import { getRandomIdea, scrollToSection as scrollToSectionUtil } from "./utils";
import Banner3D from "./3dBanner";

export type PortfolioIdea = {
  title: string;
  problem: string;
  solution: string;
  tech: string[];
};

export const portfolioIdeas: PortfolioIdea[] = [
  {
    title: "EcoTrack Dashboard",
    problem:
      "Individuals and businesses lack a comprehensive tool to monitor and manage their environmental impact.",
    solution:
      "A dashboard that provides real-time analytics on carbon footprint, energy consumption, and waste management, helping users make sustainable choices.",
    tech: ["React", "Node.js", "MongoDB", "Chart.js", "Tailwind CSS"],
  },
  {
    title: "FinanceFlow Pro",
    problem:
      "Managing personal finances and investments is complex and time-consuming.",
    solution:
      "An all-in-one platform that simplifies budgeting, tracking expenses, and managing investments with real-time data and AI-driven insights.",
    tech: ["Next.js", "PostgreSQL", "Redis", "Stripe API", "TypeScript"],
  },
  {
    title: "ConnectLocal",
    problem:
      "Local communities lack a dedicated platform for interaction and support between neighbors and local businesses.",
    solution:
      "A social networking app that connects users based on their location, interests, and needs, fostering community engagement and local commerce.",
    tech: ["React Native", "Firebase", "Google Maps API", "Socket.io"],
  },
];

type PortfolioType = {
  id: number;
  title: string;
  creator: string;
  price: string;
  rating: number;
  views: string;
  tags: string[];
  image: string;
  description: string;
  features: string[];
  techStack: string[];
  demoUrl: string;
  codeUrl: string;
  screenshots: string[];
  reviews: {
    name: string;
    rating: number;
    comment: string;
  }[];
};

export const featuredPortfolios = [
  {
    id: 1,
    title: "EcoTrack Dashboard",
    creator: "Sarah Chen",
    price: "$299",
    rating: 4.9,
    views: "12.3k",
    tags: ["Sustainability", "Analytics", "Mobile-First"],
    image: "bg-gradient-to-br from-green-400 to-blue-500",
    description:
      "A comprehensive sustainability tracking dashboard that helps individuals and businesses monitor their environmental impact with real-time analytics and actionable insights.",
    features: [
      "Real-time carbon footprint tracking",
      "Interactive data visualizations",
      "Goal setting and progress monitoring",
      "Social sharing capabilities",
      "Mobile-responsive design",
    ],
    techStack: ["React", "Node.js", "MongoDB", "Chart.js", "Tailwind CSS"],
    demoUrl: "#",
    codeUrl: "#",
    screenshots: [
      "bg-gradient-to-br from-green-400 to-blue-500",
      "bg-gradient-to-br from-blue-400 to-green-500",
      "bg-gradient-to-br from-cyan-400 to-green-500",
    ],
    reviews: [
      {
        name: "Alex Johnson",
        rating: 5,
        comment:
          "Excellent design and functionality. Really helped me understand sustainability metrics.",
      },
      {
        name: "Maria Garcia",
        rating: 4,
        comment: "Great project! The visualizations are very intuitive.",
      },
    ],
  },
  {
    id: 2,
    title: "FinanceFlow Pro",
    creator: "Marcus Rodriguez",
    price: "$449",
    rating: 4.8,
    views: "8.7k",
    tags: ["Fintech", "Real-time", "Secure"],
    image: "bg-gradient-to-br from-purple-400 to-pink-500",
    description:
      "A sophisticated financial management platform with real-time transaction processing, advanced security features, and comprehensive reporting capabilities.",
    features: [
      "Real-time transaction processing",
      "Advanced security protocols",
      "Comprehensive financial reporting",
      "Multi-currency support",
      "API integration capabilities",
    ],
    techStack: ["Next.js", "PostgreSQL", "Redis", "Stripe API", "TypeScript"],
    demoUrl: "#",
    codeUrl: "#",
    screenshots: [
      "bg-gradient-to-br from-purple-400 to-pink-500",
      "bg-gradient-to-br from-pink-400 to-purple-500",
      "bg-gradient-to-br from-indigo-400 to-purple-500",
    ],
    reviews: [
      {
        name: "David Kim",
        rating: 5,
        comment:
          "Professional-grade fintech solution. The security features are impressive.",
      },
      {
        name: "Emma Wilson",
        rating: 4,
        comment: "Solid implementation with great attention to detail.",
      },
    ],
  },
  {
    id: 3,
    title: "ConnectLocal",
    creator: "Elena Vasquez",
    price: "$199",
    rating: 4.7,
    views: "15.2k",
    tags: ["Community", "Social", "Geolocation"],
    image: "bg-gradient-to-br from-orange-400 to-red-500",
    description:
      "A hyper-local community platform that connects neighbors and local businesses through geolocation-based features and social networking capabilities.",
    features: [
      "Location-based community discovery",
      "Local business integration",
      "Event management system",
      "Real-time messaging",
      "Community forums",
    ],
    techStack: ["React Native", "Firebase", "Google Maps API", "Socket.io"],
    demoUrl: "#",
    codeUrl: "#",
    screenshots: [
      "bg-gradient-to-br from-orange-400 to-red-500",
      "bg-gradient-to-br from-red-400 to-orange-500",
      "bg-gradient-to-br from-yellow-400 to-red-500",
    ],
    reviews: [
      {
        name: "Carlos Martinez",
        rating: 5,
        comment:
          "Amazing community features! Really brings neighborhoods together.",
      },
      {
        name: "Lisa Chen",
        rating: 4,
        comment:
          "Great concept and execution. The geolocation features work perfectly.",
      },
    ],
  },
];

const Portfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [generatedIdea, setGeneratedIdea] = useState<PortfolioIdea | null>(
    null
  );
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [visibleElements, setVisibleElements] = useState<Set<string>>(
    new Set()
  );
  const [currentView, setCurrentView] = useState<string>("main");
  const [selectedPortfolio, setSelectedPortfolio] =
    useState<PortfolioType | null>(null);

  const navigate = useNavigate();

  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const generateIdea = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const randomIdea = getRandomIdea(portfolioIdeas);
      setGeneratedIdea(randomIdea);
      setIsGenerating(false);
    }, 2000);
  };

  const scrollToSection = (sectionId: string) => {
    scrollToSectionUtil(sectionId, setActiveSection, setIsMenuOpen);
  };

  const viewPortfolioDetails = (portfolio: PortfolioType) => {
    navigate(`/cardDetails/${portfolio.id}`);
  };

  const backToMain = () => {
    setCurrentView("main");
    setSelectedPortfolio(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_50%)] pointer-events-none"></div>
      {currentView === "main" ? (
        <>
          {/* Sticky Navigation */}
          <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    PortfolioHub
                  </span>
                </div>

                <div className="hidden md:flex items-center space-x-8">
                  {["home", "generator", "marketplace", "about", "blog"].map(
                    (section) => (
                      <button
                        key={section}
                        onClick={() => scrollToSection(section)}
                        className={`capitalize transition-all duration-300 ${
                          activeSection === section
                            ? "text-cyan-400 border-b-2 border-cyan-400"
                            : "text-gray-300 hover:text-white"
                        }`}
                      >
                        {section}
                      </button>
                    )
                  )}
                </div>

                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-sm"
                >
                  {isMenuOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="md:hidden bg-black/80 backdrop-blur-lg border-t border-white/10">
                <div className="px-4 py-2 space-y-2">
                  {["home", "generator", "marketplace", "about", "blog"].map(
                    (section) => (
                      <button
                        key={section}
                        onClick={() => scrollToSection(section)}
                        className="block w-full text-left px-3 py-2 capitalize text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
                      >
                        {section}
                      </button>
                    )
                  )}
                </div>
              </div>
            )}
          </nav>

          {/* Hero Section */}
          <Banner3D />

          {/* Generator, Marketplace, About Sections */}
          <GeneratorSection
            generatedIdea={generatedIdea}
            isGenerating={isGenerating}
            generateIdea={generateIdea}
            visibleElements={visibleElements}
          />
          <MarketplaceSection
            featuredPortfolios={featuredPortfolios}
            visibleElements={visibleElements}
            viewPortfolioDetails={viewPortfolioDetails}
          />
          <AboutSection visibleElements={visibleElements} />

          {/* Footer */}
          <Footer />
        </>
      ) : (
        /* Portfolio Detail Page */
        <div className="min-h-screen">
          {/* Detail Page Navigation */}
          <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <button
                  onClick={backToMain}
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

          {/* Portfolio Detail Content */}
          <PortfolioDetail selectedPortfolio={selectedPortfolio} />
        </div>
      )}
    </div>
  );
};

export default Portfolio;
