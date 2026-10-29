"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experienceData } from "@/lib/data";
import { SectionHeading } from "./ui/SectionHeading";
import { getTechIcon } from "./ui/TechIcons";
import { 
  Building2, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Globe2, 
  Zap, 
  Layers, 
  ArrowRight,
  Sparkles,
  Server,
  Boxes,
  Briefcase,
  ChevronRight,
  TrendingUp,
  Award
} from "lucide-react";

export function Experience() {
  const [selectedCompanyId, setSelectedCompanyId] = useState<string>("exp-1");

  const oceansoftwares = experienceData.find((e) => e.id === "exp-1") || experienceData[0];
  const redblox = experienceData.find((e) => e.id === "exp-2") || experienceData[1];

  const companies = [
    {
      ...oceansoftwares,
      shortName: "Oceansoftwares",
      initials: "OS",
      isCurrent: true,
      color: "#10b981",
      accentBg: "rgba(16, 185, 129, 0.15)",
      borderColor: "border-[#10b981]",
      locationBadge: "Chennai, India",
      internationalHighlight: "Dubai Client Collaboration",
      tenureTag: "Present • Active Leadership",
      deliveredProjects: [
        { name: "Syncraze", role: "Dubai Enterprise Client", highlight: "9+ Modules ERP", tech: "Next.js, Node, Mongo" },
        { name: "CNI Business Forum", role: "Business Networking", highlight: "Modular Architecture", tech: "React, Form Engine" },
        { name: "Aram Enterprises", role: "Fintech Platform", highlight: "Chit Fund Ledger", tech: "PHP, MySQL, Responsive" },
        { name: "The Star Business", role: "Enterprise Portal", highlight: "Multi-Module Web", tech: "React.js, REST API" },
      ],
      pillars: [
        { label: "Core Architecture", val: "Next.js & React System", desc: "Modular reusable component systems" },
        { label: "Backend Services", val: "Node.js & MongoDB", desc: "High-throughput enterprise REST APIs" },
        { label: "Global Reach", val: "Dubai Client Project", desc: "Direct international deployment" },
      ]
    },
    {
      ...redblox,
      shortName: "Redblox Technologies",
      initials: "RT",
      isCurrent: false,
      color: "#c8cb6d",
      accentBg: "rgba(200, 203, 109, 0.15)",
      borderColor: "border-[#c8cb6d]",
      locationBadge: "Pondicherry, India",
      internationalHighlight: null,
      tenureTag: "2+ Years Milestone",
      deliveredProjects: [
        { name: "Mellowplex", role: "AI Movie Metaverse Platform", highlight: "360° VR & Caching", tech: "React, Next.js, React Query" },
        { name: "Gaston", role: "Real-Time Telemetry Dashboard", highlight: "Low-Latency Sync", tech: "React Hooks, Custom Logic" },
      ],
      pillars: [
        { label: "Key Platforms", val: "Mellowplex & Gaston", desc: "AI movie metaverse & real-time telemetry" },
        { label: "Analytics", val: "ApexCharts Visuals", desc: "Real-time telemetry & KPI widgets" },
        { label: "Data Engine", val: "PHP & MySQL Stack", desc: "Bulk imports & role-based license auth" },
      ]
    }
  ];

  const activeCompany = companies.find((c) => c.id === selectedCompanyId) || companies[0];

  return (
    <section id="experience" className="py-24 sm:py-32 relative overflow-hidden scroll-mt-20">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute top-1/4 -left-48 w-96 h-96 bg-[#10b981]/10 rounded-full blur-[140px] -z-10" />
      <div className="pointer-events-none absolute bottom-1/4 -right-48 w-96 h-96 bg-[#c8cb6d]/10 rounded-full blur-[140px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Interactive Career Deck"
          title="Professional Career &"
          gradientText="Engineering Experience"
          description="An Apple-style interactive master-detail showcase tracking software engineering in Pondicherry to full-stack enterprise architecture in Chennai with international client deliverables."
        />

        {/* ========================================================================= */}
        {/* MASTER-DETAIL CAREER DECK CONTAINER                                       */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mt-10 sm:mt-14 items-start">
          
          {/* ======================================================================= */}
          {/* LEFT COLUMN: COMPANY SELECTOR CARDS (SPAN 4)                            */}
          {/* ======================================================================= */}
          <div className="lg:col-span-4 flex flex-col gap-3.5">
            <span className="text-xs font-mono font-bold uppercase tracking-wider dark:text-stone-400 text-stone-600 mb-1 flex items-center gap-1.5 px-1">
              <Briefcase className="w-3.5 h-3.5 text-[#10b981]" />
              <span>Career Positions ({companies.length})</span>
            </span>

            {/* Company Selector Tab Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {companies.map((company) => {
                const isSelected = selectedCompanyId === company.id;

                return (
                  <motion.button
                    key={company.id}
                    onClick={() => setSelectedCompanyId(company.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`relative p-5 sm:p-5.5 rounded-3xl text-left transition-all duration-300 cursor-pointer overflow-hidden border ${
                      isSelected
                        ? "dark:bg-zinc-900/95 bg-white border-[#10b981] shadow-[0_12px_35px_-10px_rgba(16,185,129,0.3)] ring-1 ring-[#10b981]/50 scale-[1.01]"
                        : "dark:bg-zinc-950/70 bg-stone-50/90 dark:border-white/10 border-stone-200/90 hover:dark:bg-zinc-900/60 hover:bg-white shadow-sm"
                    }`}
                  >
                    {/* Active Accent Indicator Bar on Left */}
                    {isSelected && (
                      <motion.div
                        layoutId="activeCompanyIndicator"
                        className="absolute left-0 top-3 bottom-3 w-1.5 rounded-r-full bg-[#10b981] shadow-[0_0_12px_#10b981]"
                      />
                    )}

                    {/* Top Row: Initials + Status Badges */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-9 h-9 rounded-2xl flex items-center justify-center font-mono font-black text-xs border shadow-sm ${
                            isSelected
                              ? "bg-gradient-to-tr from-[#064e3b] to-[#10b981] text-white border-[#34d399]"
                              : "dark:bg-zinc-800 bg-stone-200 dark:text-stone-300 text-stone-700 dark:border-white/10 border-stone-300"
                          }`}
                        >
                          {company.initials}
                        </div>
                        <span className="text-xs font-mono font-bold dark:text-stone-300 text-stone-800">
                          {company.shortName}
                        </span>
                      </div>

                      {/* Active / Current Badge */}
                      {company.isCurrent ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/40">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-ping" />
                          Active
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold dark:bg-white/[0.05] bg-stone-100 dark:text-stone-400 text-stone-600 border dark:border-white/10 border-stone-200">
                          2+ Years
                        </span>
                      )}
                    </div>

                    {/* Role Title */}
                    <h4 className="text-base sm:text-lg font-black dark:text-white text-stone-900 mb-1">
                      {company.role}
                    </h4>

                    {/* Meta Location & Period */}
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono dark:text-stone-400 text-stone-600">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#e69832]" />
                        {company.locationBadge}
                      </span>
                      <span>•</span>
                      <span>{company.period}</span>
                    </div>

                    {/* Highlight Dubai Tag */}
                    {company.internationalHighlight && (
                      <div className="mt-2.5 pt-2 border-t dark:border-white/10 border-stone-100 flex items-center gap-1 text-[11px] font-mono text-[#10b981] font-semibold">
                        <Globe2 className="w-3 h-3" />
                        <span>{company.internationalHighlight}</span>
                      </div>
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Quick Summary Pill Card at Bottom of Selector */}
            <div className="p-4 rounded-2xl glass-panel border dark:border-white/10 border-stone-200/90 shadow-md mt-2">
              <div className="flex items-center gap-2 mb-1.5">
                <Sparkles className="w-4 h-4 text-[#10b981]" />
                <span className="text-xs font-mono font-bold dark:text-white text-stone-900">
                  Career Trajectory
                </span>
              </div>
              <p className="text-[11px] font-mono dark:text-stone-400 text-stone-600 leading-relaxed">
                Progressed from Junior Software Developer in Pondicherry to Frontend Lead in Chennai collaborating directly with Dubai enterprise stakeholders.
              </p>
            </div>
          </div>

          {/* ======================================================================= */}
          {/* RIGHT COLUMN: RICH DETAIL SHOWCASE CARD (SPAN 8)                        */}
          {/* ======================================================================= */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCompany.id}
                initial={{ opacity: 0, y: 15, scale: 0.99 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.99 }}
                transition={{ duration: 0.3 }}
                className="p-6 sm:p-9 rounded-3xl glass-panel border-2 dark:border-white/15 border-stone-200 shadow-2xl relative overflow-hidden"
              >
                {/* Background Ambient Glow */}
                <div
                  className="absolute -top-24 -right-24 w-60 h-60 rounded-full blur-3xl opacity-20 pointer-events-none"
                  style={{ backgroundColor: activeCompany.color }}
                />

                {/* Top Header Badge Row */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b dark:border-white/10 border-stone-200/80">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="px-3 py-1 rounded-xl text-xs font-mono font-black tracking-wider uppercase border shadow-sm"
                      style={{
                        backgroundColor: activeCompany.accentBg,
                        color: activeCompany.color,
                        borderColor: `${activeCompany.color}40`,
                      }}
                    >
                      {activeCompany.shortName}
                    </span>

                    {activeCompany.isCurrent && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/40 shadow-[0_0_12px_rgba(16,185,129,0.3)]">
                        <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping" />
                        Current Role
                      </span>
                    )}
                  </div>

                  {/* International Flag Badge */}
                  {activeCompany.internationalHighlight && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase dark:bg-[#c8cb6d]/15 bg-[#5c6b2f]/10 dark:text-[#e2e58c] text-[#344415] border dark:border-[#c8cb6d]/30 border-[#5c6b2f]/30 shadow-sm">
                      <Globe2 className="w-3.5 h-3.5 text-[#10b981]" />
                      {activeCompany.internationalHighlight}
                    </span>
                  )}
                </div>

                {/* Company & Role Headline */}
                <div className="mb-4">
                  <h3 className="text-2xl sm:text-4xl font-black dark:text-white text-stone-900 tracking-tight mb-1">
                    {activeCompany.role}
                  </h3>
                  <p className="text-sm sm:text-base font-mono font-bold dark:text-stone-300 text-stone-700">
                    {activeCompany.company}
                  </p>
                </div>

                {/* Meta Location, Period & Tenure */}
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono mb-6 pb-4 border-b dark:border-white/10 border-stone-200/80">
                  <span className="inline-flex items-center gap-1.5 font-semibold text-[#10b981]">
                    <Calendar className="w-3.5 h-3.5" />
                    {activeCompany.period}
                  </span>
                  <span className="dark:text-stone-500 text-stone-400">•</span>
                  <span className="inline-flex items-center gap-1.5 dark:text-stone-300 text-stone-700 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#e69832]" />
                    {activeCompany.locationBadge}
                  </span>
                  <span className="dark:text-stone-500 text-stone-400">•</span>
                  <span className="dark:text-stone-400 text-stone-600 font-medium">
                    Full-Time Engineering
                  </span>
                </div>

                {/* Overview Description */}
                <p className="text-xs sm:text-sm dark:text-stone-300 text-stone-700 leading-relaxed mb-8 font-normal">
                  {activeCompany.description}
                </p>

                {/* 3 Architecture Pillar Highlight Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-8">
                  {activeCompany.pillars.map((pillar, pIdx) => (
                    <div
                      key={pIdx}
                      className="p-4 rounded-2xl dark:bg-white/[0.04] bg-stone-50 border dark:border-white/10 border-stone-200/90 shadow-sm flex flex-col justify-between"
                    >
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#10b981] mb-1">
                        Pillar 0{pIdx + 1} • {pillar.label}
                      </span>
                      <h4 className="text-sm sm:text-base font-bold dark:text-white text-stone-900 mb-1">
                        {pillar.val}
                      </h4>
                      <p className="text-[11px] dark:text-stone-400 text-stone-600 leading-snug">
                        {pillar.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Key Deliverables & Achievements */}
                <div className="mb-8">
                  <span className="text-xs font-mono uppercase font-bold tracking-wider dark:text-stone-400 text-stone-600 mb-3 block">
                    Key Deliverables & Architectural Achievements
                  </span>
                  <div className="grid grid-cols-1 gap-2.5">
                    {activeCompany.achievements.map((item, aIdx) => (
                      <div
                        key={aIdx}
                        className="flex items-start gap-3 p-3 rounded-2xl dark:bg-white/[0.02] bg-stone-50/80 border dark:border-white/5 border-stone-200/70 text-xs sm:text-sm dark:text-stone-300 text-stone-700 font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Delivered Production Projects Built at this Company */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono uppercase font-bold tracking-wider dark:text-stone-400 text-stone-600 flex items-center gap-1.5">
                      <Boxes className="w-3.5 h-3.5 text-[#10b981]" />
                      Projects Built at {activeCompany.shortName} ({activeCompany.deliveredProjects.length})
                    </span>
                    <a
                      href="#projects"
                      className="text-xs font-mono dark:text-[#c8cb6d] text-[#5c6b2f] hover:underline font-semibold flex items-center gap-1"
                    >
                      <span>View in Projects</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeCompany.deliveredProjects.map((proj) => (
                      <a
                        key={proj.name}
                        href="#projects"
                        className="p-3.5 rounded-2xl dark:bg-white/[0.03] bg-stone-50 border dark:border-white/10 border-stone-200/80 hover:dark:border-[#10b981]/50 hover:border-[#10b981]/50 transition-all group flex flex-col justify-between"
                      >
                        <div className="flex items-start justify-between gap-2 mb-1.5">
                          <span className="text-sm font-bold dark:text-white text-stone-900 group-hover:text-[#10b981] transition-colors">
                            {proj.name}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full dark:bg-white/[0.06] bg-white dark:text-[#e2e58c] text-[#344415] border dark:border-white/10 border-stone-200 font-bold shrink-0">
                            {proj.highlight}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-[11px] font-mono dark:text-stone-400 text-stone-600">
                          <span>{proj.role}</span>
                          <span className="text-[10px] dark:text-stone-500 text-stone-500">{proj.tech}</span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Production Tech Stack Engine */}
                <div className="pt-5 border-t dark:border-white/10 border-stone-200/80">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono uppercase font-bold tracking-wider dark:text-stone-400 text-stone-600 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-[#10b981]" />
                      Production Stack & Tools
                    </span>
                    <span className="text-xs font-mono dark:text-[#c8cb6d] text-[#5c6b2f] font-semibold">
                      {activeCompany.technologies.length} Technologies
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {activeCompany.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-mono font-semibold dark:bg-white/[0.06] bg-stone-100 dark:text-white text-stone-900 border dark:border-white/10 border-stone-200 shadow-sm hover:scale-105 transition-transform"
                      >
                        <span className="w-4 h-4 flex items-center justify-center shrink-0">
                          {getTechIcon(tech, { className: "w-4 h-4" })}
                        </span>
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
