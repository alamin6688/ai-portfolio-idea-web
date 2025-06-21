import React, { useEffect } from "react";

const Banner3D: React.FC = () => {
  useEffect(() => {
    // Smooth scroll for scroll indicator
    const scrollIndicator = document.querySelector(".scroll-indicator");
    if (scrollIndicator) {
      scrollIndicator.addEventListener("click", () => {
        document
          .querySelector(".next-section")
          ?.scrollIntoView({ behavior: "smooth" });
      });
    }
    // Parallax effect for orbs
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const orbs = document.querySelectorAll(".liquid-orb");
      orbs.forEach((orb, index) => {
        const speed = 0.5 + index * 0.1;
        (orb as HTMLElement).style.transform = `translateY(${
          scrolled * speed
        }px)`;
      });
    };
    window.addEventListener("scroll", handleScroll);
    // Intersection observer for feature cards
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.animationPlayState = "running";
        }
      });
    }, observerOptions);
    document.querySelectorAll(".feature-card").forEach((card) => {
      observer.observe(card);
    });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <style>{`
        .hero-section { height: 100vh; position: relative; overflow: hidden; background: linear-gradient(135deg, #0a0e1a 0%, #1a1f2e 25%, #2a3f5f 50%, #1e3a8a 75%, #0f172a 100%); }
        .glass-bg { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 30% 20%, rgba(59,130,246,0.15) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(147,197,253,0.1) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(30,58,138,0.05) 0%, transparent 50%); backdrop-filter: blur(1px); }
        .liquid-orb { position: absolute; border-radius: 50%; background: radial-gradient(circle at 30% 30%, rgba(59,130,246,0.3) 0%, rgba(37,99,235,0.2) 50%, rgba(30,58,138,0.1) 100%); backdrop-filter: blur(20px); border: 1px solid rgba(59,130,246,0.2); animation: float 6s ease-in-out infinite; }
        .orb-1 { width: 300px; height: 300px; top: 10%; left: 15%; animation-delay: 0s; }
        .orb-2 { width: 200px; height: 200px; top: 60%; right: 20%; animation-delay: 2s; }
        .orb-3 { width: 150px; height: 150px; top: 30%; right: 10%; animation-delay: 4s; }
        .hero-content { position: relative; z-index: 10; height: 100vh; display: flex; align-items: center; justify-content: center; text-align: center; padding: 0 2rem; }
        .content-wrapper { max-width: 1200px; width: 100%; display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
        .text-content { text-align: left; }
        .hero-title { font-size: 3.5rem; font-weight: 700; line-height: 1.1; margin-bottom: 1.5rem; background: linear-gradient(135deg, #ffffff 0%, #93c5fd 50%, #3b82f6 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; animation: fadeInUp 1s ease-out; }
        .hero-subtitle { font-size: 1.25rem; line-height: 1.6; margin-bottom: 2rem; color: rgba(255,255,255,0.8); animation: fadeInUp 1s ease-out 0.2s both; }
        .cta-buttons { display: flex; gap: 1rem; margin-bottom: 2rem; animation: fadeInUp 1s ease-out 0.4s both; }
        .btn-primary { padding: 1rem 2rem; background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); border: none; border-radius: 12px; color: white; font-weight: 600; font-size: 1rem; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 10px 30px rgba(59,130,246,0.3); }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 15px 40px rgba(59,130,246,0.4); }
        .btn-secondary { padding: 1rem 2rem; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); border-radius: 12px; color: white; font-weight: 600; font-size: 1rem; cursor: pointer; transition: all 0.3s ease; backdrop-filter: blur(10px); }
        .btn-secondary:hover { background: rgba(255,255,255,0.2); transform: translateY(-2px); }
        .stats { display: flex; gap: 2rem; animation: fadeInUp 1s ease-out 0.6s both; }
        .stat { text-align: center; }
        .stat-number { font-size: 2rem; font-weight: bold; color: #3b82f6; margin-bottom: 0.5rem; }
        .stat-label { font-size: 0.9rem; color: rgba(255,255,255,0.6); }
        .visual-content { position: relative; height: 500px; animation: fadeInRight 1s ease-out 0.3s both; }
        .macbook { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%) rotateX(10deg) rotateY(-15deg); width: 400px; height: 250px; background: linear-gradient(135deg, #1f2937 0%, #374151 100%); border-radius: 20px; box-shadow: 0 25px 50px rgba(0,0,0,0.5); transform-style: preserve-3d; }
        .macbook-screen { width: 100%; height: 100%; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 15px; border: 2px solid #374151; position: relative; overflow: hidden; }
        .screen-content { padding: 20px; height: 100%; background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #1e40af 100%); display: flex; flex-direction: column; justify-content: space-between; }
        .ui-elements { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
        .floating-card { position: absolute; background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2); border-radius: 12px; padding: 1rem; box-shadow: 0 8px 32px rgba(0,0,0,0.3); animation: floatCard 4s ease-in-out infinite; }
        .card-1 { top: 10%; right: -10%; width: 120px; height: 80px; animation-delay: 0s; }
        .card-2 { bottom: 20%; left: -15%; width: 140px; height: 100px; animation-delay: 2s; }
        .card-3 { top: 70%; right: -20%; width: 100px; height: 60px; animation-delay: 1s; }
        .tool-icon { position: absolute; width: 40px; height: 40px; background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); border-radius: 10px; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.2rem; box-shadow: 0 5px 15px rgba(59,130,246,0.4); animation: pulse 2s ease-in-out infinite; }
        .icon-1 { top: 15%; left: 80%; animation-delay: 0s; }
        .icon-2 { top: 45%; left: 85%; animation-delay: 0.5s; }
        .icon-3 { top: 75%; left: 90%; animation-delay: 1s; }
        .next-section { min-height: 100vh; background: linear-gradient(180deg, #0a0e1a 0%, #1a202c 100%); padding: 4rem 2rem; display: flex; align-items: center; justify-content: center; }
        .section-content { max-width: 1200px; text-align: center; }
        .section-title { font-size: 2.5rem; font-weight: 700; margin-bottom: 2rem; color: #3b82f6; }
        .features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-top: 3rem; }
        .feature-card { background: rgba(255,255,255,0.05); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: 2rem; transition: all 0.3s ease; }
        .feature-card:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(59,130,246,0.2); }
        .scroll-indicator { position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%); animation: bounce 2s infinite; }
        .scroll-arrow { width: 24px; height: 24px; border-right: 2px solid #3b82f6; border-bottom: 2px solid #3b82f6; transform: rotate(45deg); }
        @keyframes float { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-20px) rotate(180deg); } }
        @keyframes floatCard { 0%, 100% { transform: translateY(0px) rotateY(0deg); } 50% { transform: translateY(-15px) rotateY(10deg); } }
        @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.1); } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeInRight { from { opacity: 0; transform: translateX(50px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes bounce { 0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); } 40% { transform: translateX(-50%) translateY(-10px); } 60% { transform: translateX(-50%) translateY(-5px); } }
        @media (max-width: 768px) { .content-wrapper { grid-template-columns: 1fr; gap: 2rem; text-align: center; } .hero-title { font-size: 2.5rem; } .macbook { width: 300px; height: 200px; } .stats { justify-content: center; } .cta-buttons { flex-direction: column; align-items: center; } }
      `}</style>
      <section className="hero-section">
        <div className="glass-bg"></div>
        <div className="liquid-orb orb-1"></div>
        <div className="liquid-orb orb-2"></div>
        <div className="liquid-orb orb-3"></div>
        <div className="hero-content">
          <div className="content-wrapper">
            <div className="text-content">
              <h1 className="hero-title">Digital Mastery Unleashed</h1>
              <p className="hero-subtitle">
                Discover, create, and sell stunning portfolio projects that
                solve real-world problems. <br />
                Join thousands of developers building the future with
                cutting-edge tools and technologies.
              </p>
              <div className="cta-buttons">
                <button className="btn-primary">Start Building</button>
                <button
                  className="btn-secondary"
                  onClick={() => {
                    document
                      .getElementById("marketplace")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Explore Portfolio
                </button>
              </div>
              <div className="stats">
                <div className="stat">
                  <div className="stat-number">15K+</div>
                  <div className="stat-label">Developers</div>
                </div>
                <div className="stat">
                  <div className="stat-number">8K+</div>
                  <div className="stat-label">Projects</div>
                </div>
                <div className="stat">
                  <div className="stat-number">$5M+</div>
                  <div className="stat-label">Earned</div>
                </div>
              </div>
            </div>
            <div className="visual-content">
              <div className="macbook">
                <div className="macbook-screen">
                  <div className="screen-content">
                    <div
                      style={{
                        background: "rgba(59,130,246,0.2)",
                        height: 8,
                        borderRadius: 4,
                        width: "80%",
                      }}
                    ></div>
                    <div
                      style={{
                        background: "rgba(255,255,255,0.1)",
                        height: 60,
                        borderRadius: 8,
                        margin: "10px 0",
                      }}
                    ></div>
                    <div
                      style={{
                        background: "rgba(59,130,246,0.3)",
                        height: 40,
                        borderRadius: 6,
                        width: "60%",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="ui-elements">
                <div className="floating-card card-1">
                  <div
                    style={{
                      background: "#3b82f6",
                      height: 20,
                      borderRadius: 4,
                      marginBottom: 8,
                    }}
                  ></div>
                  <div
                    style={{
                      background: "rgba(255,255,255,0.3)",
                      height: 12,
                      borderRadius: 2,
                      width: "70%",
                    }}
                  ></div>
                </div>
                <div className="floating-card card-2">
                  <div
                    style={{
                      background: "#10b981",
                      height: 16,
                      borderRadius: 3,
                      marginBottom: 6,
                    }}
                  ></div>
                  <div
                    style={{
                      background: "rgba(255,255,255,0.2)",
                      height: 10,
                      borderRadius: 2,
                      width: "80%",
                    }}
                  ></div>
                  <div
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      height: 10,
                      borderRadius: 2,
                      width: "50%",
                      marginTop: 4,
                    }}
                  ></div>
                </div>
                <div className="floating-card card-3">
                  <div
                    style={{
                      background: "#f59e0b",
                      height: 14,
                      borderRadius: 3,
                      marginBottom: 4,
                    }}
                  ></div>
                  <div
                    style={{
                      background: "rgba(255,255,255,0.2)",
                      height: 8,
                      borderRadius: 2,
                      width: "60%",
                    }}
                  ></div>
                </div>
              </div>
              <div className="tool-icon icon-1">⚡</div>
              <div className="tool-icon icon-2">🎨</div>
              <div className="tool-icon icon-3">💼</div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </section>
    </>
  );
};

export default Banner3D;
