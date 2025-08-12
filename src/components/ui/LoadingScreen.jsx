import  { useEffect, useState } from "react";
import { Terminal, Code, Zap, Layers } from "lucide-react";

const LoadingScreen = ({ showLoading, setShowLoading }) => {
  const [progress, setProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [loadingText, setLoadingText] = useState("Initializing...");
  const [particleStyles, setParticleStyles] = useState([]);

  // Different stages of the loading sequence
  const loadingPhases = [
    { text: "Initializing...", icon: Zap, duration: 600 },
    { text: "Loading Components...", icon: Layers, duration: 1000 },
    { text: "Compiling Assets...", icon: Code, duration: 600 },
    { text: "Optimizing Performance...", icon: Terminal, duration: 1000 },
    { text: "Finalizing...", icon: Zap, duration: 500 },
  ];

  useEffect(() => {
    if (!showLoading) return;

    let progressInterval;
    let phaseTimeout;
    let currentProgress = 0;

    // Simulates progress increasing over time
    const updateProgress = () => {
      progressInterval = setInterval(() => {
        currentProgress += Math.random() * 3 + 1;
        if (currentProgress > 100) currentProgress = 100;
        setProgress(currentProgress);

        if (currentProgress >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setShowLoading(false), 500);
        }
      }, 80);
    };

    // Cycles through loading phases sequentially
    const cyclePhases = () => {
      let phaseIndex = 0;

      const nextPhase = () => {
        if (phaseIndex < loadingPhases.length) {
          setCurrentPhase(phaseIndex);
          setLoadingText(loadingPhases[phaseIndex].text);

          phaseTimeout = setTimeout(() => {
            phaseIndex++;
            nextPhase();
          }, loadingPhases[phaseIndex].duration);
        }
      };

      nextPhase();
    };

    updateProgress();
    cyclePhases();

    return () => {
      clearInterval(progressInterval);
      clearTimeout(phaseTimeout);
    };
  }, [showLoading, setShowLoading]);

  useEffect(() => {
    if (!showLoading) return;

    // Randomly generates decorative particle styles
    const styles = [...Array(25)].map(() => ({
      width: `${Math.random() * 4 + 2}px`,
      height: `${Math.random() * 4 + 2}px`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      opacity: Math.random() * 0.6 + 0.2,
      animationDuration: `${Math.random() * 20 + 10}s`,
      animationDelay: `${Math.random() * 5}s`,
      background: getRandomColor(),
      borderRadius: Math.random() > 0.5 ? "50%" : "2px",
      boxShadow: `0 0 ${Math.random() * 10 + 5}px ${getRandomColor()}`,
    }));

    setParticleStyles(styles);
  }, [showLoading]);

  function getRandomColor() {
    const colors = [
      "rgba(59, 130, 246, 0.4)",
      "rgba(147, 51, 234, 0.4)",
      "rgba(236, 72, 153, 0.4)",
      "rgba(6, 182, 212, 0.4)",
      "rgba(34, 197, 94, 0.4)",
      "rgba(251, 191, 36, 0.4)", // light creamy yellow
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  if (!showLoading) return null;

  const colorPhases = [
    "gradient-text-pink",
    "gradient-text-purple",
    "gradient-text-blue",
    "gradient-text-blue",
  ];

  const CurrentIcon = loadingPhases[currentPhase]?.icon || Terminal;
  const CurrentTitleColor = colorPhases[currentPhase] || "gradient-text-blue";

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-black to-black flex flex-col items-center justify-center overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0 will-change-[transform,opacity]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(200, 220, 255, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(200, 220, 255, 0.08) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
            animation: "grid-move 20s linear infinite",
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particleStyles.map((style, i) => (
          <div
            key={`particle-${i}`}
            className="will-change-[transform,opacity] absolute animate-float-particle"
            style={{
              ...style,
              animation: `float-particle-${(i % 4) + 1} ${style.animationDuration} linear infinite`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-8">
        {/* Rotating icon rings */}
        <div className="relative mb-8">
          <div className="relative w-24 h-24 mb-6">
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-pink-500 border-r-primary will-change-transform animate-spin" />
            <div className="absolute inset-2 rounded-full border-4 border-transparent border-b-secondary border-l-primary will-change-transform animate-spin-reverse" />
            <div className="absolute inset-4 rounded-full border-2 border-transparent border-t-accent will-change-transform animate-spin-slow" />
            <div className="absolute inset-6 rounded-full bg-slate-900/80 backdrop-blur-sm flex items-center justify-center border border-slate-700">
              <CurrentIcon className="w-6 h-6 text-blue-500 will-change-[transform,opacity]  animate-pulse" />
            </div>
          </div>
        </div>

        {/* Branding */}
        <div className="mb-6">
          <h1 className={`will-change-[color] ${CurrentTitleColor} text-3xl md:text-4xl font-bold text-transparent mb-2`}>
            Portfolio
          </h1>
          <p className="text-slate-400 text-sm tracking-wide">
            Professional Developer Experience
          </p>
        </div>

        {/* Phase text */}
        <div className="mb-8 h-6">
          <p className="text-green-500 text-sm font-medium will-change-contents transition-all duration-300 ease-in-out">
            {loadingText}
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-80 px-14 sm:px-5 md:px-1 max-w-sm mb-4">
          <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden backdrop-blur-sm border border-slate-600">
            <div
              className="will-change-transform h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
            </div>
          </div>
          <div className="flex justify-between items-center mt-2 text-xs text-slate-500">
            <span>Loading</span>
            <span>{Math.round(progress)}%</span>
          </div>
        </div>

        {/* Loading dots */}
        <div className="flex space-x-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="h-2 w-2 md:w-2.5 md:h-2.5 rounded-full will-change-transform animate-pulse"
              style={{
                animationDelay: `${i * 0.3}s`,
                animationDuration: "1.5s",
                background: "linear-gradient(150deg, rgb(25, 81, 81), rgb(49, 189, 170), rgb(6, 134, 143), rgb(23, 101, 101))",
              }}
            />
          ))}
        </div>
      </div>

      {/* Ambient lights */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl will-change-transform animate-pulse-slow" />
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-purple-500/8 rounded-full blur-3xl will-change-transform animate-float-gentle" />
        <div
          className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-pink-500/8 rounded-full blur-3xl animate-float-gentle"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl will-change-transform animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Decorative corners */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-blue-500/30 rounded-tl-lg" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-purple-500/30 rounded-tr-lg" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-pink-500/30 rounded-bl-lg" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-cyan-500/30 rounded-br-lg" />
    </div>
  );
};

export default LoadingScreen;
