import { useState, useEffect, useRef } from "react";
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

const PortfolioApp = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [generatedIdea, setGeneratedIdea] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [visibleElements, setVisibleElements] = useState(new Set());
  const [currentView, setCurrentView] = useState("main");
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);

  const observerRef = useRef(null);

  const portfolioIdeas = [
    {
      title: "AI-Powered Task Manager",
      problem: "People struggle with prioritizing daily tasks effectively",
      solution: "Smart task prioritization using machine learning algorithms",
      tech: ["React", "Node.js", "TensorFlow.js", "MongoDB"],
    },
    {
      title: "Sustainable Living Tracker",
      problem:
        "Individuals want to reduce their carbon footprint but lack guidance",
      solution: "Personal sustainability dashboard with actionable insights",
      tech: ["Vue.js", "Python", "Chart.js", "PostgreSQL"],
    },
    {
      title: "Local Business Discovery Platform",
      problem:
        "Small businesses struggle with online visibility in their communities",
      solution: "Hyper-local discovery platform with community features",
      tech: ["React Native", "Firebase", "Google Maps API", "Stripe"],
    },
    {
      title: "Mental Health Check-in App",
      problem: "Regular mental health monitoring is often overlooked",
      solution:
        "Daily mood tracking with personalized wellness recommendations",
      tech: ["Flutter", "Supabase", "Chart.js", "Push Notifications"],
    },
    {
      title: "Skill Exchange Marketplace",
      problem: "People have skills to share but no platform to connect",
      solution: "Peer-to-peer skill trading platform with built-in scheduling",
      tech: ["Next.js", "Prisma", "Tailwind CSS", "Stripe Connect"],
    },
  ];

  const featuredPortfolios = [
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
      observerRef.current.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const generateIdea = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const randomIdea =
        portfolioIdeas[Math.floor(Math.random() * portfolioIdeas.length)];
      setGeneratedIdea(randomIdea);
      setIsGenerating(false);
    }, 2000);
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const viewPortfolioDetails = (portfolio) => {
    setSelectedPortfolio(portfolio);
    setCurrentView("portfolio-detail");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const backToMain = () => {
    setCurrentView("main");
    setSelectedPortfolio(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_50%)] pointer-events-none"></div>

      {currentView === "main" ? (
        <>
          {/* Main App Content */}
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
                  {["home", "generator", "marketplace", "about"].map(
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
                  {["home", "generator", "marketplace", "about"].map(
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
          <section
            id="home"
            className="min-h-screen flex items-center justify-center relative pt-16"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div
                data-animate="true"
                id="hero-content"
                className={`transition-all duration-1000 ${
                  visibleElements.has("hero-content")
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
              >
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent leading-tight">
                  Showcase Your
                  <br />
                  Digital Mastery
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Discover, create, and sell stunning portfolio projects that
                  solve real-world problems. Join thousands of developers
                  building the future.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <button
                    onClick={() => scrollToSection("generator")}
                    className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <Lightbulb className="w-5 h-5" />
                      Generate Ideas
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>

                  <button
                    onClick={() => scrollToSection("marketplace")}
                    className="group px-8 py-4 border-2 border-cyan-400/50 backdrop-blur-sm bg-white/5 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-cyan-400/10 hover:border-cyan-400 hover:scale-105"
                  >
                    <span className="flex items-center gap-2">
                      <Globe className="w-5 h-5" />
                      Explore Marketplace
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronDown className="w-8 h-8 text-cyan-400" />
            </div>
          </section>

          {/* Portfolio Generator Section */}
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
                  Stuck on what to build? Our intelligent generator creates
                  portfolio ideas based on real-world problems and trending
                  technologies.
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
                            <p className="text-gray-300">
                              {generatedIdea.problem}
                            </p>
                          </div>

                          <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                            <div className="flex items-center gap-2 mb-2">
                              <Lightbulb className="w-5 h-5 text-green-400" />
                              <span className="font-semibold text-green-400">
                                Solution
                              </span>
                            </div>
                            <p className="text-gray-300">
                              {generatedIdea.solution}
                            </p>
                          </div>

                          <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                            <div className="flex items-center gap-2 mb-2">
                              <Code className="w-5 h-5 text-blue-400" />
                              <span className="font-semibold text-blue-400">
                                Tech Stack
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {generatedIdea.tech.map((tech, index) => (
                                <span
                                  key={index}
                                  className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                                >
                                  {tech}
                                </span>
                              ))}
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
                      Every idea addresses a real-world problem with market
                      validation potential.
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
                      Curated technology combinations that align with current
                      industry trends.
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

          {/* Marketplace Section */}
          <section id="marketplace" className="py-20 relative">
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
                    className={`backdrop-blur-md bg-white/5 rounded-3xl overflow-hidden border border-white/10 transition-all duration-1000 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 ${
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

                      <p className="text-gray-400 mb-4">
                        by {portfolio.creator}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {portfolio.tags.map((tag, tagIndex) => (
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
          </section>

          {/* About Section */}
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
                  We believe great portfolios should solve real problems. Our
                  platform connects talented developers with meaningful project
                  ideas and provides a marketplace for exceptional work. Join
                  our community of innovators building the future.
                </p>

                <div className="grid md:grid-cols-3 gap-8 mt-16">
                  {[
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
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="backdrop-blur-md bg-white/5 rounded-2xl p-8 border border-white/10"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-300">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
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
                © 2025 PortfolioHub. Empowering developers to build meaningful
                projects.
              </p>
            </div>
          </footer>
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
          {selectedPortfolio && (
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
                        {selectedPortfolio.tags.map((tag, index) => (
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
                          <p className="text-sm opacity-80">
                            Interactive Preview
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Features Section */}
              <section className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h2 className="text-3xl font-bold mb-8 text-center">
                    Key Features
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {selectedPortfolio.features.map((feature, index) => (
                      <div
                        key={index}
                        className="backdrop-blur-md bg-white/5 rounded-xl p-6 border border-white/10"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                            <Zap className="w-4 h-4 text-white" />
                          </div>
                          <span className="font-semibold text-white">
                            {feature}
                          </span>
                        </div>
                      </div>
                    ))}
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
                    {selectedPortfolio.techStack.map((tech, index) => (
                      <div
                        key={index}
                        className="backdrop-blur-md bg-white/5 rounded-lg px-6 py-3 border border-white/10"
                      >
                        <span className="font-semibold text-cyan-400">
                          {tech}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Screenshots Gallery */}
              <section className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h2 className="text-3xl font-bold mb-8 text-center">
                    Screenshots
                  </h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    {selectedPortfolio.screenshots.map((screenshot, index) => (
                      <div
                        key={index}
                        className={`aspect-video rounded-xl ${screenshot} p-6 flex items-center justify-center`}
                      >
                        <div className="text-center text-white">
                          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                            <Eye className="w-6 h-6" />
                          </div>
                          <p className="text-sm opacity-80">
                            Screenshot {index + 1}
                          </p>
                        </div>
                      </div>
                    ))}
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
                    {selectedPortfolio.reviews.map((review, index) => (
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
                            <h4 className="font-semibold text-white">
                              {review.name}
                            </h4>
                            <div className="flex items-center gap-1">
                              {[...Array(review.rating)].map((_, i) => (
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
                    <h2 className="text-3xl font-bold mb-4">
                      Ready to Get Started?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                      Get instant access to the complete source code,
                      documentation, and setup guide.
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
          )}
        </div>
      )}
    </div>
  );
};

export default PortfolioApp;
