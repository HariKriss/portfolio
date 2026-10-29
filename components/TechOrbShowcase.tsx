"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  getTechIcon,
  ReactIcon,
  NextjsIcon,
  JavaScriptIcon,
  TypeScriptIcon,
  MuiIcon,
  ReduxIcon,
  ReactQueryIcon,
  GitIcon,
  GithubIcon,
  NodejsIcon,
  TailwindIcon,
  MongodbIcon,
  ExpressIcon,
  MysqlIcon,
  PhpIcon,
  ApexChartsIcon
} from "./ui/TechIcons";
import { Badge } from "./ui/Badge";
import { 
  X, 
  Layers, 
  Zap, 
  CheckCircle2, 
  Activity,
  Play,
  Pause,
  ChevronRight,
  Sparkles
} from "lucide-react";

export interface TechDetail {
  id: string;
  name: string;
  category: "Frontend" | "Backend" | "Database" | "State & Tools";
  level: "Expert" | "Advanced" | "Intermediate";
  experience: string;
  summary: string;
  features: string[];
  usedInProjects: string[];
  color: string;
  accent: string;
  tier: "inner" | "mid" | "outer";
}

export const techDetailsData: Record<string, TechDetail> = {
  react: {
    id: "react",
    name: "React.js",
    category: "Frontend",
    level: "Expert",
    experience: "3+ Years Professional",
    summary: "Primary core framework for engineering reactive, accessible, and high-performance component architectures across complex enterprise web apps.",
    features: [
      "Custom React Hooks & Context APIs",
      "Memoization & Re-render optimization",
      "Dynamic Routing & Suspense",
      "Enterprise design systems"
    ],
    usedInProjects: ["Syncraze ERP", "Mellowplex", "Gaston", "CNI Business", "The Star Business"],
    color: "#61DAFB",
    accent: "rgba(97, 218, 251, 0.25)",
    tier: "inner"
  },
  nextjs: {
    id: "nextjs",
    name: "Next.js",
    category: "Frontend",
    level: "Advanced",
    experience: "2+ Years Production",
    summary: "Modern App Router architecture, Server & Client components, server-side caching, and production bundle optimization.",
    features: [
      "App Router & Server Components",
      "Code-Splitting & Dynamic Imports",
      "SEO Metadata & Structured JSON-LD",
      "Route Handlers & Edge Rendering"
    ],
    usedInProjects: ["Syncraze Enterprise", "Mellowplex Web Platform"],
    color: "#0ea5e9",
    accent: "rgba(14, 165, 233, 0.25)",
    tier: "inner"
  },
  typescript: {
    id: "typescript",
    name: "TypeScript",
    category: "Frontend",
    level: "Advanced",
    experience: "3+ Years Strict Mode",
    summary: "Strongly-typed contracts, modular interface modeling, generic UI utilities, and zero runtime type error guarantees.",
    features: [
      "Strict type checking & generics",
      "Interface contract definitions",
      "Reusable component prop types",
      "Refactoring reliability & speed"
    ],
    usedInProjects: ["Syncraze ERP", "Mellowplex", "Modern Portfolios"],
    color: "#3178C6",
    accent: "rgba(49, 120, 198, 0.25)",
    tier: "inner"
  },
  tailwind: {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Frontend",
    level: "Expert",
    experience: "3+ Years",
    summary: "Modern utility-first responsive styling, custom design tokens, dark/light theme systems, and micro-interactions.",
    features: [
      "Custom theme extensions & tokens",
      "Responsive fluid layouts (Mobile-First)",
      "Dark mode & high-contrast themes",
      "JIT compiler & zero-runtime CSS"
    ],
    usedInProjects: ["Syncraze ERP", "Mellowplex", "Gaston Monitoring", "Aram Enterprises"],
    color: "#06B6D4",
    accent: "rgba(6, 182, 212, 0.25)",
    tier: "inner"
  },
  nodejs: {
    id: "nodejs",
    name: "Node.js",
    category: "Backend",
    level: "Advanced",
    experience: "2.5+ Years",
    summary: "Asynchronous runtime environments, RESTful APIs, auth pipelines, background jobs, and stream processing.",
    features: [
      "Event-driven architecture & streams",
      "RESTful API design & middleware",
      "JWT authentication & bcrypt hashing",
      "Process management & error handling"
    ],
    usedInProjects: ["Syncraze API", "Mellowplex Server", "Gaston Monitoring"],
    color: "#339933",
    accent: "rgba(51, 153, 51, 0.25)",
    tier: "mid"
  },
  express: {
    id: "express",
    name: "Express.js",
    category: "Backend",
    level: "Advanced",
    experience: "2.5+ Years",
    summary: "High-throughput modular microservices, CORS security policies, request validation, and database connectors.",
    features: [
      "Modular routing architectures",
      "Custom authentication middlewares",
      "Rate-limiting & security headers",
      "Centralized error handling"
    ],
    usedInProjects: ["Syncraze Enterprise Server", "Gaston API"],
    color: "#ffffff",
    accent: "rgba(255, 255, 255, 0.25)",
    tier: "mid"
  },
  mongodb: {
    id: "mongodb",
    name: "MongoDB",
    category: "Database",
    level: "Advanced",
    experience: "2+ Years",
    summary: "Document database architecture, flexible schemas, indexing strategies, and aggregation pipeline analytics.",
    features: [
      "Mongoose ODM schema modeling",
      "Complex aggregation pipelines",
      "Indexed queries & pagination",
      "Multi-tenant data isolation"
    ],
    usedInProjects: ["Syncraze ERP Suite", "Mellowplex DB"],
    color: "#13AA52",
    accent: "rgba(19, 170, 82, 0.25)",
    tier: "mid"
  },
  mysql: {
    id: "mysql",
    name: "MySQL",
    category: "Database",
    level: "Intermediate",
    experience: "2+ Years",
    summary: "Relational schema design, ACID transactions, complex joins, indexing, and foreign key integrity.",
    features: [
      "Relational table normalization",
      "Complex multi-table JOINs",
      "ACID compliant transactions",
      "Stored procedures & query tuning"
    ],
    usedInProjects: ["Enterprise Internal Tools", "CNI Business Suite"],
    color: "#00758F",
    accent: "rgba(0, 117, 143, 0.25)",
    tier: "mid"
  },
  redux: {
    id: "redux",
    name: "Redux RTK",
    category: "State & Tools",
    level: "Advanced",
    experience: "2.5+ Years",
    summary: "Predictable centralized state management with Redux Toolkit (RTK), slices, memoized selectors, and RTK Query.",
    features: [
      "createSlice & createAsyncThunk",
      "Normalized entity state management",
      "RTK Query caching & invalidation",
      "Redux DevTools state debugging"
    ],
    usedInProjects: ["Syncraze ERP (9+ Modules)", "Mellowplex Admin"],
    color: "#764ABC",
    accent: "rgba(118, 74, 188, 0.25)",
    tier: "mid"
  },
  javascript: {
    id: "javascript",
    name: "JavaScript (ES6+)",
    category: "Frontend",
    level: "Expert",
    experience: "3+ Years",
    summary: "Deep knowledge of async event loops, DOM manipulation, functional paradigms, closures, and browser APIs.",
    features: [
      "Async/Await & Promises",
      "Event loops & microtask queues",
      "Destructuring & spread patterns",
      "High-order array functions"
    ],
    usedInProjects: ["All Client & Enterprise Projects"],
    color: "#F7DF1E",
    accent: "rgba(247, 223, 30, 0.25)",
    tier: "outer"
  },
  git: {
    id: "git",
    name: "Git / GitHub",
    category: "State & Tools",
    level: "Expert",
    experience: "3+ Years",
    summary: "Distributed version control, trunk-based development, git rebasing, merge conflict resolution, and CI/CD pipelines.",
    features: [
      "Feature branching & rebasing",
      "Merge conflict resolution",
      "GitHub pull requests & code review",
      "Release tag management"
    ],
    usedInProjects: ["All Client & Enterprise Projects"],
    color: "#F05032",
    accent: "rgba(240, 80, 50, 0.25)",
    tier: "outer"
  },
  reactquery: {
    id: "reactquery",
    name: "React Query",
    category: "State & Tools",
    level: "Advanced",
    experience: "2+ Years",
    summary: "Server-state caching, automatic background refetching, optimistic mutations, and window focus synchronization.",
    features: [
      "Stale-while-revalidate caching",
      "Optimistic UI updates",
      "Infinite scroll & pagination",
      "Automatic query deduplication"
    ],
    usedInProjects: ["Syncraze Enterprise Dashboard", "Gaston Live"],
    color: "#FF4154",
    accent: "rgba(255, 65, 84, 0.25)",
    tier: "outer"
  },
  apexcharts: {
    id: "apexcharts",
    name: "ApexCharts",
    category: "Frontend",
    level: "Advanced",
    experience: "2+ Years",
    summary: "Real-time telemetry dashboards, interactive multi-axis area/bar charts, KPI widgets, and dynamic responsive charts.",
    features: [
      "Live updating streaming charts",
      "Multi-series bar & area analytics",
      "Custom tooltip & legend formatting",
      "Theme synchronization & smooth animations"
    ],
    usedInProjects: ["Syncraze ERP", "Gaston Monitoring"],
    color: "#00E396",
    accent: "rgba(0, 227, 150, 0.25)",
    tier: "outer"
  },
  php: {
    id: "php",
    name: "PHP Server",
    category: "Backend",
    level: "Intermediate",
    experience: "2+ Years",
    summary: "Server-side scripting, legacy API maintenance, database integration, and MVC application architecture.",
    features: [
      "RESTful endpoint implementation",
      "PDO secure database bindings",
      "Server session & auth cookies",
      "Legacy system migration to Node/Next"
    ],
    usedInProjects: ["Aram Enterprises", "Star Business Portal"],
    color: "#777BB4",
    accent: "rgba(119, 123, 180, 0.25)",
    tier: "outer"
  },
  mui: {
    id: "mui",
    name: "MUI Design",
    category: "Frontend",
    level: "Advanced",
    experience: "2.5+ Years",
    summary: "Material Design enterprise data grids, complex modal forms, custom palette overrides, and accessible controls.",
    features: [
      "Custom theme themeProvider overrides",
      "DataGrid pro filtering & sorting",
      "Accessible modal & drawer systems",
      "Styled-components & sx prop APIs"
    ],
    usedInProjects: ["Syncraze ERP Management Suite"],
    color: "#007FFF",
    accent: "rgba(0, 127, 255, 0.25)",
    tier: "outer"
  },
};

// 3 Concentric Orbit Rings Definitions (Compact & Responsive with % Radii)
const orbitRings = [
  {
    tier: "inner" as const,
    label: "Core Frontend",
    duration: "26s",
    radiusPercent: 21,
    nodes: ["react", "nextjs", "typescript", "tailwind"],
    direction: "cw" as const,
    ringColor: "dark:border-[#c8cb6d]/30 border-[#5c6b2f]/35",
  },
  {
    tier: "mid" as const,
    label: "Full-Stack & DB",
    duration: "36s",
    radiusPercent: 33,
    nodes: ["nodejs", "express", "mongodb", "mysql", "redux"],
    direction: "ccw" as const,
    ringColor: "dark:border-[#10b981]/25 border-[#10b981]/30",
  },
  {
    tier: "outer" as const,
    label: "Ecosystem & DevOps",
    duration: "48s",
    radiusPercent: 45,
    nodes: ["javascript", "git", "reactquery", "apexcharts", "php", "mui"],
    direction: "cw" as const,
    ringColor: "dark:border-[#e2e58c]/20 border-[#7e8a42]/30",
  },
];

export function TechOrbShowcase() {
  const [selectedTech, setSelectedTech] = useState<TechDetail | null>(null);
  const [hoveredTechId, setHoveredTechId] = useState<string | null>("react");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const categories = [
    { key: "All", label: "All Stack (15)" },
    { key: "Frontend", label: "Frontend" },
    { key: "Backend", label: "Backend & DB" },
    { key: "State & Tools", label: "DevOps & Tools" },
  ];

  const isNodeActive = (nodeId: string) => {
    if (activeCategory === "All") return true;
    const tech = techDetailsData[nodeId];
    if (!tech) return false;
    if (activeCategory === "Backend") {
      return tech.category === "Backend" || tech.category === "Database";
    }
    return tech.category === activeCategory;
  };

  const activeTech = techDetailsData[hoveredTechId || "react"] || techDetailsData["react"];

  return (
    <div className="relative w-full max-w-4xl mx-auto my-6 flex flex-col items-center justify-center">
      
      {/* Top Controls Bar: Categories Filter + Pause Toggle */}
      <div className="w-full flex flex-wrap items-center justify-between gap-3 mb-6 px-2 z-20">
        
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-mono transition-all duration-300 cursor-pointer flex items-center gap-1.5 shadow-sm ${
                  isActive
                    ? "dark:bg-[#c8cb6d] bg-[#c8cb6d]/35 dark:text-stone-950 text-[#2d3a12] border dark:border-[#c8cb6d] border-[#7e8a42]/50 font-bold shadow-sm scale-105"
                    : "dark:bg-white/[0.04] bg-stone-100 dark:text-stone-400 text-stone-700 dark:border-white/10 border-stone-200 hover:dark:text-white hover:text-stone-950 hover:dark:bg-white/[0.08] hover:bg-stone-200"
                }`}
              >
                {isActive && <span className="w-1.5 h-1.5 rounded-full dark:bg-stone-950 bg-[#2d3a12] animate-ping" />}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Orbit Freeze Toggle Button */}
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="inline-flex items-center gap-1.5 px-3 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-mono dark:bg-white/[0.05] bg-stone-100 dark:border-white/10 border-stone-200 dark:text-stone-300 text-stone-700 hover:dark:text-white hover:text-stone-900 transition-colors shadow-sm cursor-pointer ml-auto"
          title="Pause or Resume Orbits"
        >
          {isPaused ? (
            <>
              <Play className="w-3 h-3 text-[#10b981] fill-current" />
              <span>Orbit Paused</span>
            </>
          ) : (
            <>
              <Pause className="w-3 h-3 text-[#c8cb6d] fill-current" />
              <span className="hidden sm:inline">Orbit Active</span>
              <span className="sm:hidden">Active</span>
            </>
          )}
        </button>
      </div>

      {/* ========================================================================= */}
      {/* COMPACT CONCENTRIC 3D PLANETARY ORBIT CANVAS                             */}
      {/* ========================================================================= */}
      <div 
        className="relative w-[340px] h-[340px] xs:w-[360px] xs:h-[360px] sm:w-[460px] sm:h-[460px] md:w-[480px] md:h-[480px] flex items-center justify-center my-2 select-none overflow-visible"
        style={{
          // When user hovers on canvas, orbit gently pauses
        }}
      >
        {/* Soft Radial Ambient Glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#7e8a42]/10 via-[#c8cb6d]/10 to-transparent blur-3xl pointer-events-none -z-10" />

        {/* --------------------------------------------------------------------- */}
        {/* CENTRAL GLOWING CORE (HP SUN)                                         */}
        {/* --------------------------------------------------------------------- */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          {/* Pulsing Atmosphere Wave */}
          <div className="absolute -inset-3 rounded-full bg-[#10b981]/20 animate-ping pointer-events-none" />
          <div className="absolute -inset-1.5 rounded-full bg-[#c8cb6d]/15 animate-pulse pointer-events-none" />

          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              boxShadow: [
                "0 0 25px rgba(200,203,109,0.35), 0 0 50px rgba(16,185,129,0.2)",
                "0 0 45px rgba(200,203,109,0.6), 0 0 75px rgba(16,185,129,0.4)",
                "0 0 25px rgba(200,203,109,0.35), 0 0 50px rgba(16,185,129,0.2)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-14 h-14 sm:w-18 sm:h-18 rounded-full bg-gradient-to-tr from-[#0d160f] via-[#1a281c] to-[#0a110b] dark:border-2 border-[1.5px] dark:border-[#c8cb6d] border-[#5c6b2f] flex flex-col items-center justify-center shadow-xl group cursor-pointer relative"
          >
            {/* Inner Rotating Aura Ring */}
            <div className="absolute inset-1 rounded-full border border-dashed border-[#e2e58c]/40 animate-spin-conic pointer-events-none" />
            
            <span className="text-sm sm:text-base font-mono font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-[#e2e58c] to-[#c8cb6d]">
              HP
            </span>
            <span className="text-[7px] sm:text-[8px] font-mono text-[#10b981] font-bold tracking-widest uppercase">
              CORE
            </span>
          </motion.div>
        </div>

        {/* --------------------------------------------------------------------- */}
        {/* 3 CONCENTRIC ORBITAL RINGS & SATELLITE PLANET NODES                   */}
        {/* --------------------------------------------------------------------- */}
        {orbitRings.map((ring) => {
          const isClockwise = ring.direction === "cw";
          const spinClass = isClockwise ? "animate-orbit-cw" : "animate-orbit-ccw";
          const counterClass = isClockwise ? "animate-orbit-counter-cw" : "animate-orbit-counter-ccw";
          const diameterPercent = ring.radiusPercent * 2;

          return (
            <React.Fragment key={ring.tier}>
              {/* Circular Dotted Orbit Track Line */}
              <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed ${ring.ringColor} pointer-events-none -z-0 transition-opacity duration-300`}
                style={{
                  width: `${diameterPercent}%`,
                  height: `${diameterPercent}%`,
                }}
              />

              {/* Rotating Container for Planets on this Ring */}
              <div
                className={`absolute inset-0 rounded-full ${spinClass} pointer-events-none`}
                style={{
                  // @ts-expect-error custom property for duration
                  "--orbit-dur": ring.duration,
                  animationPlayState: isPaused ? "paused" : "running",
                }}
              >
                {ring.nodes.map((nodeId, idx) => {
                  const tech = techDetailsData[nodeId];
                  if (!tech) return null;
                  const isMatch = isNodeActive(nodeId);
                  const isHovered = hoveredTechId === nodeId;
                  const total = ring.nodes.length;
                  const angleDeg = (idx * 360) / total;
                  const angleRad = ((angleDeg - 90) * Math.PI) / 180;
                  const leftPos = 50 + Math.cos(angleRad) * ring.radiusPercent;
                  const topPos = 50 + Math.sin(angleRad) * ring.radiusPercent;

                  return (
                    <div
                      key={nodeId}
                      className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                      style={{
                        left: `${leftPos}%`,
                        top: `${topPos}%`,
                      }}
                    >
                      {/* Counter-Spin Wrapper so Icons Stay Upright */}
                      <div
                        className={counterClass}
                        style={{
                          // @ts-expect-error custom property for duration
                          "--orbit-dur": ring.duration,
                          animationPlayState: isPaused ? "paused" : "running",
                        }}
                      >
                        <motion.button
                          onClick={() => {
                            setHoveredTechId(nodeId);
                            setSelectedTech(tech);
                          }}
                          onMouseEnter={() => setHoveredTechId(nodeId)}
                          whileHover={{ scale: 1.25, zIndex: 40 }}
                          whileTap={{ scale: 0.95 }}
                          className={`relative group/node p-1.5 sm:p-2 rounded-xl sm:rounded-2xl backdrop-blur-xl transition-all duration-300 flex items-center justify-center cursor-pointer shadow-md ${
                            isHovered
                              ? "dark:bg-zinc-900 bg-white border-2 border-[#c8cb6d] shadow-[0_0_25px_rgba(200,203,109,0.7)] scale-110 z-30"
                              : isMatch
                              ? "dark:bg-zinc-950/90 bg-white/95 border dark:border-white/15 border-stone-200 hover:border-[#c8cb6d]"
                              : "dark:bg-zinc-950/40 bg-stone-100/60 border dark:border-white/5 border-stone-200 opacity-30 hover:opacity-100"
                          }`}
                          style={{
                            boxShadow: isHovered
                              ? `0 0 25px ${tech.color}90, 0 0 10px rgba(200,203,109,0.5)`
                              : undefined,
                          }}
                          aria-label={`Inspect ${tech.name}`}
                        >
                          {/* Tech Brand Icon */}
                          <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center shrink-0">
                            {getTechIcon(tech.name, { className: "w-4 h-4 sm:w-5 sm:h-5" })}
                          </div>

                          {/* Mini Brand Dot */}
                          <span
                            className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full border border-white dark:border-zinc-950 shadow-sm"
                            style={{ backgroundColor: tech.color }}
                          />

                          {/* Hover Tooltip Label */}
                          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover/node:opacity-100 transition-opacity pointer-events-none z-50">
                            <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold dark:bg-black bg-stone-900 text-white shadow-md border dark:border-white/15 border-stone-700">
                              {tech.name}
                            </span>
                          </div>
                        </motion.button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </React.Fragment>
          );
        })}
      </div>

      {/* ========================================================================= */}
      {/* COMPACT ACTIVE TELEMETRY HUD DOCK (Below Orbit)                           */}
      {/* ========================================================================= */}
      <div className="w-full max-w-xl mx-auto mt-4 z-20">
        <motion.div
          key={activeTech.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="p-3.5 sm:p-4 rounded-2xl glass-panel border dark:border-white/10 border-stone-200/90 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 relative overflow-hidden group/hud"
        >
          {/* Subtle Accent Glow */}
          <div
            className="absolute -right-8 -top-8 w-32 h-32 rounded-full blur-2xl opacity-20 pointer-events-none"
            style={{ backgroundColor: activeTech.color }}
          />

          {/* Left: Icon + Specs */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl dark:bg-white/[0.06] bg-stone-100 dark:border-white/10 border-stone-200 flex items-center justify-center shrink-0 shadow-sm">
              {getTechIcon(activeTech.name, { className: "w-6 h-6 sm:w-7 sm:h-7" })}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-sm sm:text-base font-bold dark:text-white text-stone-900">
                  {activeTech.name}
                </h4>
                <Badge variant="accent" size="sm">
                  {activeTech.level}
                </Badge>
              </div>
              <p className="text-[11px] font-mono dark:text-[#c8cb6d] text-[#4d5e24] font-semibold">
                {activeTech.category} • {activeTech.experience}
              </p>
            </div>
          </div>

          {/* Middle: Shipped In Pill Badges */}
          <div className="hidden md:flex flex-wrap items-center gap-1 max-w-[200px]">
            {activeTech.usedInProjects.slice(0, 2).map((proj) => (
              <span
                key={proj}
                className="px-2 py-0.5 rounded-md text-[10px] font-mono font-medium dark:bg-white/[0.05] bg-stone-100 dark:text-stone-300 text-stone-700 truncate"
              >
                {proj}
              </span>
            ))}
            {activeTech.usedInProjects.length > 2 && (
              <span className="text-[10px] font-mono dark:text-stone-400 text-stone-600">
                +{activeTech.usedInProjects.length - 2}
              </span>
            )}
          </div>

          {/* Right: Inspect Button */}
          <button
            onClick={() => setSelectedTech(activeTech)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#7e8a42]/30 to-[#c8cb6d]/30 hover:from-[#7e8a42]/50 hover:to-[#c8cb6d]/50 border dark:border-[#c8cb6d]/40 border-[#5c6b2f]/40 dark:text-white text-[#344415] text-xs font-bold transition-all shadow-sm shrink-0 cursor-pointer"
          >
            <span>Inspect Spec</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </motion.div>

        {/* Small Helper Legend */}
        <p className="text-[11px] font-mono dark:text-stone-400 text-stone-600 text-center mt-2.5 flex items-center justify-center gap-1.5">
          <Activity className="w-3 h-3 text-[#10b981] animate-pulse" />
          <span>Interactive 3D Planetary Orbit • Tap or hover any node to inspect specs</span>
        </p>
      </div>

      {/* ========================================================================= */}
      {/* POPUP TECH SPEC MODAL                                                     */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {selectedTech && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTech(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md -z-10"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 25 }}
              transition={{ type: "spring", damping: 25, stiffness: 320 }}
              className="relative w-full max-w-lg rounded-3xl dark:bg-zinc-950 bg-white dark:border-white/15 border-stone-200 p-6 sm:p-8 shadow-2xl text-left my-auto overflow-hidden transition-colors"
            >
              {/* Background Accent Glow */}
              <div
                className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl pointer-events-none -z-10 opacity-30"
                style={{ backgroundColor: selectedTech.color }}
              />

              {/* Close Button */}
              <button
                onClick={() => setSelectedTech(null)}
                className="absolute top-5 right-5 p-2 rounded-full dark:bg-zinc-900/90 bg-stone-100 hover:dark:bg-zinc-800 hover:bg-stone-200 dark:border-white/15 border-stone-200 dark:text-stone-400 text-stone-600 hover:dark:text-white hover:text-stone-900 transition-colors cursor-pointer"
                aria-label="Close Tech Spec"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Header: Icon + Name + Category */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl dark:bg-white/[0.06] bg-stone-100 dark:border-white/15 border-stone-200 flex items-center justify-center shadow-lg shrink-0">
                  {getTechIcon(selectedTech.name, { className: "w-8 h-8" })}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl sm:text-2xl font-black dark:text-white text-stone-900">
                      {selectedTech.name}
                    </h3>
                    <Badge variant="accent" size="sm">
                      {selectedTech.level}
                    </Badge>
                  </div>
                  <p className="text-xs font-mono dark:text-[#c8cb6d] text-[#4d5e24] font-semibold">
                    {selectedTech.category} • {selectedTech.experience}
                  </p>
                </div>
              </div>

              {/* Summary */}
              <p className="text-xs sm:text-sm dark:text-stone-300 text-stone-700 leading-relaxed mb-6 font-normal">
                {selectedTech.summary}
              </p>

              {/* Key Technical Capabilities */}
              <div className="mb-6">
                <h4 className="text-xs font-mono font-bold dark:text-stone-400 text-stone-700 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 dark:text-[#c8cb6d] text-[#5c6b2f]" />
                  <span>Key Architecture & Capabilities</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedTech.features.map((feat) => (
                    <div
                      key={feat}
                      className="flex items-start gap-2 p-2 rounded-xl dark:bg-white/[0.03] bg-stone-50 dark:border-white/10 border-stone-200 text-xs dark:text-stone-300 text-stone-700 font-medium"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Production Projects Utilizing This Tech */}
              <div className="mb-6">
                <h4 className="text-xs font-mono font-bold dark:text-stone-400 text-stone-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 dark:text-[#e2e58c] text-[#4d5e24]" />
                  <span>Shipped In Production Projects</span>
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedTech.usedInProjects.map((proj) => (
                    <span
                      key={proj}
                      className="px-2.5 py-1 rounded-lg text-xs font-semibold dark:bg-[#c8cb6d]/10 bg-[#5c6b2f]/10 dark:text-[#e2e58c] text-[#344415] border dark:border-[#c8cb6d]/25 border-[#5c6b2f]/30"
                    >
                      {proj}
                    </span>
                  ))}
                </div>
              </div>

              {/* Close CTA */}
              <div className="pt-4 border-t dark:border-white/10 border-stone-200 flex justify-end">
                <button
                  onClick={() => setSelectedTech(null)}
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#7e8a42] to-[#c8cb6d] text-stone-950 font-bold text-xs shadow-lg hover:brightness-110 transition-all cursor-pointer"
                >
                  Close Spec
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
