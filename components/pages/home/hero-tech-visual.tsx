"use client"

import { Code2, Database, FileCheck } from "lucide-react"

export function HeroTechVisual() {
   return (
      <div className="relative w-full max-w-[460px] mx-auto lg:ml-auto h-[540px] flex flex-col bg-surface-dashboard rounded-[2rem] p-6 lg:p-8 shadow-2xl shadow-indigo-500/10 border border-white/50 overflow-hidden">

         {/* Header */}
         <div className="mb-6 relative z-20 text-center">
            <h3 className="font-display text-3xl sm:text-4xl font-black text-foreground leading-[1.1] mb-2 tracking-tight">
               Engineering <br />
               <span className="text-[var(--brand-violet)]">Tech Stack</span>
            </h3>
            <p className="text-xs text-[var(--neutral-slate-500)] font-medium max-w-[280px] mx-auto leading-relaxed">
               Modern technologies supporting product engineering, QA, and Atlassian app development.
            </p>
         </div>

         {/* Top Categories */}
         <div className="flex justify-center gap-3 mb-6 relative z-20">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-muted-foreground shadow-sm border border-[var(--neutral-slate-100)]">
               <Code2 className="h-3.5 w-3.5 text-[var(--brand-violet)]" /> Frontend
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-muted-foreground shadow-sm border border-[var(--neutral-slate-100)]">
               <Database className="h-3.5 w-3.5 text-[var(--brand-violet)]" /> Backend
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-muted-foreground shadow-sm border border-[var(--neutral-slate-100)]">
               <FileCheck className="h-3.5 w-3.5 text-[var(--brand-violet)]" /> QA Automation
            </span>
         </div>

         {/* Floating Network */}
         <div className="flex-1 relative flex items-center justify-center -mt-4">
            {/* Abstract orbital lines */}
            <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
               <div className="w-[280px] h-[180px] border border-dashed border-[var(--brand-violet)]/40 rounded-[100%] absolute transform rotate-12" />
               <div className="w-[360px] h-[220px] border border-dashed border-[var(--brand-violet)]/30 rounded-[100%] absolute transform -rotate-6" />
            </div>

            {/* Central Core Element */}
            <div className="relative z-10 w-28 h-28 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-[var(--neutral-slate-100)] flex flex-col items-center justify-center transform -rotate-3 p-3">
               <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-violet)]/10 to-transparent rounded-2xl" />
               <div className="w-10 h-10 bg-[var(--brand-violet)] rounded-xl flex items-center justify-center shadow-lg shadow-[var(--brand-violet)]/30 mb-2">
                  <span className="text-white font-black font-mono text-sm">&lt;/&gt;</span>
               </div>
               <div className="flex gap-1 w-full px-2">
                  <div className="h-1 bg-[var(--neutral-slate-200)] rounded-full w-full"></div>
                  <div className="h-1 bg-[var(--neutral-slate-200)] rounded-full w-2/3"></div>
               </div>
               <div className="flex gap-1 w-full px-2 mt-1">
                  <div className="h-1 bg-[var(--neutral-slate-200)] rounded-full w-1/2"></div>
                  <div className="h-1 bg-[var(--neutral-slate-200)] rounded-full w-full"></div>
               </div>

               <div className="absolute bottom-2 right-2 w-8 h-8 bg-[var(--neutral-slate-50)] rounded border border-[var(--neutral-slate-100)] flex items-end justify-center p-1 gap-0.5">
                  <div className="w-1.5 h-2 bg-indigo-300 rounded-sm"></div>
                  <div className="w-1.5 h-4 bg-indigo-400 rounded-sm"></div>
                  <div className="w-1.5 h-3 bg-[var(--brand-violet)] rounded-sm"></div>
               </div>
            </div>

            {/* Orbiting Tech Pills */}
            <div className="absolute inset-0 pointer-events-none z-20">
               {/* Top Left - Java */}
               <div className="absolute top-[8%] left-[16%] bg-white rounded-full px-3 py-1.5 shadow-md flex items-center gap-1.5 border border-[var(--neutral-slate-50)]">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" className="w-4 h-4" />
                  <span className="text-[10px] font-bold text-[var(--neutral-slate-700)]">Java</span>
               </div>

               {/* Top Right - Confluence */}
               <div className="absolute top-[8%] right-[24%] bg-white rounded-full px-3 py-1.5 shadow-md flex items-center gap-1.5 border border-[var(--neutral-slate-50)]">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/confluence/confluence-original.svg" alt="" aria-hidden="true" className="w-4 h-4" />
                  <span className="text-[10px] font-bold text-[var(--neutral-slate-700)]">Confluence</span>
               </div>

               {/* Mid Upper Left - React */}
               <div className="absolute top-[32%] left-[4%] bg-white rounded-full px-3 py-1.5 shadow-md flex items-center gap-1.5 border border-[var(--neutral-slate-50)]">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" className="w-4 h-4" />
                  <span className="text-[10px] font-bold text-[var(--neutral-slate-700)]">React</span>
               </div>

               {/* Mid Upper Right - Jira */}
               <div className="absolute top-[24%] right-[8%] bg-white rounded-full px-3 py-1.5 shadow-md flex items-center gap-1.5 border border-[var(--neutral-slate-50)]">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" alt="" aria-hidden="true" className="w-4 h-4" />
                  <span className="text-[10px] font-bold text-[var(--neutral-slate-700)]">Jira</span>
               </div>

               {/* Mid Right - AWS */}
               <div className="absolute top-[40%] right-[3%] bg-white rounded-full px-3 py-1.5 shadow-md flex items-center gap-1.5 border border-[var(--neutral-slate-50)]">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" className="w-6 h-4 object-contain" />
               </div>

               {/* Mid Lower Left - Node.js */}
               <div className="absolute top-[60%] left-[6%] bg-white rounded-full px-3 py-1.5 shadow-md flex items-center gap-1.5 border border-[var(--neutral-slate-50)]">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node" className="w-4 h-4" />
                  <span className="text-[10px] font-bold text-[var(--neutral-slate-700)]">Node.js</span>
               </div>

               {/* Mid Lower Right - Docker */}
               <div className="absolute top-[56%] right-[6%] bg-white rounded-full px-3 py-1.5 shadow-md flex items-center gap-1.5 border border-[var(--neutral-slate-50)]">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="Docker" className="w-4 h-4" />
                  <span className="text-[10px] font-bold text-[var(--neutral-slate-700)]">Docker</span>
               </div>

               {/* Bottom Right - Selenium */}
               <div className="absolute top-[72%] right-[10%] bg-white rounded-full px-3 py-1.5 shadow-md flex items-center gap-1.5 border border-[var(--neutral-slate-50)]">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg" alt="" aria-hidden="true" className="w-4 h-4" />
                  <span className="text-[10px] font-bold text-[var(--neutral-slate-700)]">Selenium</span>
               </div>

               {/* Bottom Left - Playwright */}
               <div className="absolute top-[84%] left-[14%] bg-white rounded-full px-3 py-1.5 shadow-md flex items-center gap-1.5 border border-[var(--neutral-slate-50)]">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg" alt="" aria-hidden="true" className="w-4 h-4" />
                  <span className="text-[10px] font-bold text-[var(--neutral-slate-700)]">Playwright</span>
               </div>

               {/* Bottom Center-Right - Kubernetes (Side-by-side with Playwright) */}
               <div className="absolute top-[84%] right-[26%] bg-white rounded-full px-3 py-1.5 shadow-md flex items-center gap-1.5 border border-[var(--neutral-slate-50)]">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg" alt="K8s" className="w-4 h-4" />
                  <span className="text-[10px] font-bold text-[var(--neutral-slate-700)]">Kubernetes</span>
               </div>
            </div>

         </div>

      </div>
   )
}
