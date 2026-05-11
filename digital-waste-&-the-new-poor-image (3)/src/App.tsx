/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { CONTENT } from "./constants";
import { VideoSimulation } from "./components/VideoSimulation";
import { NotificationManager } from "./components/NotificationManager";
import { ArrowDown, Heart } from "lucide-react";

export default function App() {
  return (
    <div className="relative font-sans antialiased text-theme-text bg-theme-bg min-h-screen flex flex-col selection:bg-neon-red selection:text-black border-4 md:border-8 border-[#1a1a1c]">
      <NotificationManager />

      {/* FIXED HEADER */}
      <header className="fixed top-0 left-0 right-0 h-12 bg-theme-surface border-b border-theme-border z-[60] flex items-center justify-between px-6">
        <div className="flex items-center gap-4 text-[10px] tracking-[0.2em] font-mono text-theme-muted uppercase">
          <span>Status: Archiving</span>
          <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
          <span className="hidden md:inline">Feed_ID: AI_FRUIT_DRAMA_V04</span>
        </div>
        <div className="font-mono text-[10px] text-theme-muted uppercase hidden sm:block">
          System Time: 04:12:88 UTC
        </div>
      </header>

      <div className="flex flex-1 pt-12">
        {/* SIDEBAR LEFT */}
        <aside className="w-12 md:w-16 border-r border-theme-border fixed left-0 top-12 bottom-0 bg-theme-bg z-50 flex flex-col items-center py-12 gap-16 overflow-hidden">
          <div className="writing-vertical font-mono text-[10px] tracking-[0.3em] text-[#444] uppercase whitespace-nowrap">
            Digital Waste — Microsite
          </div>
          <div className="writing-vertical font-mono text-[10px] tracking-[0.3em] text-[#444] uppercase whitespace-nowrap">
            Hito Steyerl Ref: 31-46
          </div>
        </aside>

        {/* MAIN CONTENT AREA */}
        <div className="flex-1 ml-12 md:ml-16">
          {/* PAGE 1 — WELCOME TO THE FEED */}
          <section id="page-1" className="min-h-[calc(100vh-3rem)] flex flex-col justify-center px-6 md:px-16 py-20 relative border-b border-theme-border">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="max-w-5xl z-10"
            >
              <div className="absolute top-8 right-8 w-64 h-64 border-l border-b border-theme-border p-4 font-mono text-[9px] text-[#555] leading-relaxed hidden lg:block">
                METADATA ANALYTICS:<br/>
                [Compression: 88.4%]<br/>
                [Circulation: HIGH]<br/>
                [Meaning: NEGATIVE]<br/>
                [Algorithmic_Visibility: 9.4]<br/><br/>
                The poor image is a copy in motion. Its quality is bad, its resolution substandard and all its copies look different. It is a ghost of an image...
              </div>

              <span className="text-[10px] font-mono text-theme-muted tracking-[0.4em] uppercase mb-6 block">01 / Welcome to the feed</span>
              <h1 className="text-6xl md:text-9xl font-display font-bold leading-[0.85] tracking-tighter uppercase mb-6 text-[#efefef]">
                DIGITAL<br/>WASTE
              </h1>
              <p className="text-xs md:text-sm tracking-[0.4em] uppercase text-theme-muted mb-12 italic">
                {CONTENT.page1.subtitle}
              </p>
              
              <div className="h-[1px] w-48 bg-[#333] mb-12"></div>

              <div className="grid md:grid-cols-2 gap-16">
                <div className="space-y-6">
                  {CONTENT.page1.intro.map((para, i) => (
                    <p key={i} className="text-sm md:text-base text-[#999] leading-relaxed">
                      {para}
                    </p>
                  ))}
                  <div className="pt-8 border-t border-theme-border">
                    <p className="text-[10px] font-mono text-theme-muted mb-2 uppercase">Theory Extract //</p>
                    <blockquote className="text-sm italic text-[#888] leading-snug">
                      “{CONTENT.page1.quote}”
                    </blockquote>
                  </div>
                </div>
                
                <div className="relative flex justify-center lg:justify-end">
                   <VideoSimulation 
                     id="v1" 
                     seed="aifruitsoriginal_video" 
                     username="aifruitsoriginal" 
                     caption="The original AI fruit drama. #aifruits #drama #slop" 
                     videoId="7613621906616388886"
                   />
                </div>
              </div>
            </motion.div>
          </section>

          {/* PAGE 2 — THE NEW POOR IMAGE */}
          <section id="page-2" className="min-h-screen flex flex-col justify-center px-6 md:px-16 py-24 bg-[#0c0c0e] border-b border-theme-border">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="grid lg:grid-cols-5 gap-12"
            >
              <div className="lg:col-span-3">
                <span className="text-[10px] font-mono text-theme-muted tracking-[0.3em] uppercase mb-4 block">02 / Critical Theory</span>
                <h2 className="text-5xl md:text-7xl font-display font-bold leading-none tracking-tighter uppercase mb-2 text-[#efefef]">
                  {CONTENT.page2.title}
                </h2>
                <p className="font-mono text-[10px] text-neon-red uppercase tracking-widest mb-12">
                  {CONTENT.page2.theory}
                </p>
                
                <div className="space-y-8 max-w-xl">
                  {CONTENT.page2.text.map((para, i) => (
                    <p key={i} className="text-sm md:text-base text-[#999] leading-relaxed">
                      {para}
                    </p>
                  ))}
                  <p className="text-xl font-light text-[#efefef] pt-10 border-t border-theme-border italic leading-tight">
                     “{CONTENT.page2.quote}”
                  </p>
                </div>
              </div>

              <div className="lg:col-span-2 flex flex-col items-center justify-center gap-10">
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <div className="flex-1 aspect-[3/4] bg-[#111] border border-[#222] relative overflow-hidden group">
                  <img 
                    src="https://i.postimg.cc/jSW3QVT1/IMG-8750.jpg" 
                    className="w-full h-full object-cover grayscale contrast-125"
                    alt="AI anatomical glitch 1"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/60 backdrop-blur-sm text-[8px] font-mono text-neon-red">
                    ANOMALY detected: STRUCTURAL_ERROR_v1
                  </div>
                </div>
                <div className="flex-1 aspect-[3/4] bg-[#111] border border-[#222] relative overflow-hidden group">
                  <img 
                    src="https://i.postimg.cc/T3yNq8xS/IMG-8751.jpg" 
                    className="w-full h-full object-cover grayscale contrast-125"
                    alt="AI anatomical glitch 2"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/60 backdrop-blur-sm text-[8px] font-mono text-neon-red">
                    ANOMALY detected: ANATOMICAL_COLLAPSE_v2
                  </div>
                </div>
              </div>
                <div className="p-4 border border-[#222] bg-black w-full max-w-[280px] text-[9px] font-mono space-y-1">
                  <div className="flex justify-between"><span>ARTIFACTS:</span><span className="text-[#888]">DETECTED</span></div>
                  <div className="flex justify-between"><span>COMPRESSION:</span><span className="text-[#888]">8x LOSS</span></div>
                  <div className="flex justify-between"><span>VELOCITY:</span><span className="text-[#888]">12k/sec</span></div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* PAGE 3 — AI SLOP MACHINE */}
          <section id="page-3" className="min-h-screen py-24 px-6 md:px-16 border-b border-theme-border">
            <div className="mb-20">
              <span className="text-[10px] font-mono text-theme-muted tracking-[0.3em] uppercase mb-4 block">03 / Mass Production</span>
              <h2 className="text-5xl md:text-7xl font-display font-bold leading-none tracking-tighter uppercase mb-12 text-[#efefef]">
                {CONTENT.page3.title}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl">
                 {CONTENT.page3.text.map((para, i) => (
                   <p key={i} className="text-sm text-[#888] leading-relaxed">
                     {para}
                   </p>
                 ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[0, 1, 2].map((i) => (
                <div key={i} className="relative aspect-[9/16] bg-[#111] border border-[#222] overflow-hidden group">
                   <img 
                    src={
                      i === 0 ? "https://i.postimg.cc/QtXLjX9z/IMG-8752.jpg" :
                      i === 1 ? "https://i.postimg.cc/bJzXqzDB/IMG-8753.jpg" :
                      "https://i.postimg.cc/8518T1J3/IMG-8754.jpg"
                    } 
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                    alt={`TikTok Slop Component ${i}`}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 right-2 px-2 py-1 bg-black/80 text-[7px] font-mono text-neutral-500 uppercase tracking-widest">
                    Source: TikTok
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-neon-red/30 group-hover:bg-neon-red transition-colors"></div>
                </div>
              ))}
            </div>
            
            <div className="mt-20 flex items-center gap-8">
               <div className="flex-1 h-[1px] bg-theme-border"></div>
               <div className="text-center">
                 <p className="text-xl md:text-3xl font-light text-[#999] italic">
                   “{CONTENT.page3.quote}”
                 </p>
                 <p className="text-[10px] font-mono text-theme-muted uppercase tracking-[0.2em] mt-4">
                   Picture from: Tiktok
                 </p>
               </div>
               <div className="flex-1 h-[1px] bg-theme-border"></div>
            </div>
          </section>

          {/* PAGE 4 — WHY CAN’T WE STOP WATCHING? */}
          <section id="page-4" className="min-h-screen flex flex-col justify-center px-6 md:px-16 py-24 bg-[#0a0a0b] relative">
            <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               className="grid lg:grid-cols-2 gap-20"
            >
              <div>
                <span className="text-[10px] font-mono text-theme-muted tracking-[0.3em] uppercase mb-4 block">04 / Algorithmic Attention</span>
                <h2 className="text-5xl md:text-7xl font-display font-bold leading-none tracking-tighter uppercase mb-12 text-[#efefef]">
                  {CONTENT.page4.title}
                </h2>
                
                <div className="space-y-8 max-w-xl">
                  {CONTENT.page4.text.map((para, i) => (
                    <p key={i} className="text-base text-[#999] leading-relaxed">
                      {para}
                    </p>
                  ))}
                  <div className="p-6 border border-theme-border bg-theme-surface flex flex-col gap-4">
                     <div className="flex justify-between items-center">
                        <span className="text-[10px] font-mono text-theme-muted uppercase">Attention_Score</span>
                        <span className="text-[10px] font-mono text-neon-red">CRITICAL</span>
                     </div>
                     <div className="w-full h-[2px] bg-[#1a1a1c] overflow-hidden">
                        <motion.div 
                          className="h-full bg-neon-red"
                          initial={{ width: "0%" }}
                          whileInView={{ width: "95%" }}
                          transition={{ duration: 2, delay: 0.5 }}
                        />
                     </div>
                     <p className="text-[10px] font-mono text-[#555] italic">
                       “{CONTENT.page4.quote}”
                     </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap lg:flex-nowrap gap-6 justify-center">
                 {/* Images removed per request */}
              </div>
            </motion.div>
          </section>

          {/* PAGE 5 — DIGITAL WASTE REFLECTION */}
          <section id="page-5" className="min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-24 bg-[#efefef] text-black">
            <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               className="max-w-4xl w-full"
            >
              <div className="flex items-center gap-4 mb-12 opacity-20">
                <div className="flex-1 h-[1px] bg-black"></div>
                <span className="text-[10px] font-mono uppercase tracking-[0.4em]">Final Reflection</span>
                <div className="flex-1 h-[1px] bg-black"></div>
              </div>

              <h2 className="text-7xl md:text-[10vw] font-display font-bold leading-[0.8] tracking-tighter uppercase mb-16 text-black/10">
                {CONTENT.page5.title}
              </h2>

              <div className="columns-1 md:columns-2 gap-12 space-y-12 mb-20 text-neutral-600">
                {CONTENT.page5.text.map((para, i) => (
                  <p key={i} className="text-lg font-light leading-relaxed break-inside-avoid">
                    {para}
                  </p>
                ))}
              </div>

              <p className="text-2xl md:text-3xl font-light italic leading-tight text-neutral-950 border-y border-black/5 py-12">
                 {CONTENT.page5.finalQuote}
              </p>
            </motion.div>
          </section>

          {/* PAGE 6 — ARCHIVE REFERENCES */}
          <footer id="page-6" className="min-h-screen flex flex-col justify-center px-6 md:px-16 py-24 bg-theme-bg">
            <div className="grid lg:grid-cols-6 gap-20">
              <div className="lg:col-span-2">
                <span className="text-[10px] font-mono text-theme-muted tracking-[0.3em] uppercase mb-8 block">06 / Archive Catalogue</span>
                <h2 className="text-5xl font-display font-bold leading-none tracking-tighter uppercase mb-12 text-[#efefef]">
                  {CONTENT.page6.title}
                </h2>
                <p className="text-[#666] leading-relaxed text-sm mb-12">
                  {CONTENT.page6.statement}
                </p>
                
                <button className="w-full bg-white text-black py-3 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-[#ccc] transition-colors">
                  Restart Session
                </button>
              </div>

              <div className="lg:col-span-4 border-l border-theme-border pl-8 md:pl-20">
                 <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] mb-12 text-theme-muted">Bibliography // Ref List</h3>
                 <ul className="space-y-10">
                   {CONTENT.page6.references.map((ref, i) => (
                     <li key={i} className="text-xs md:text-sm text-[#888] font-light leading-relaxed flex items-start gap-6 group">
                        <span className="font-mono text-[#444] group-hover:text-neon-red transition-colors shrink-0">[{i+1}]</span>
                        <span className="group-hover:text-white transition-colors">{ref}</span>
                     </li>
                   ))}
                 </ul>

                 <div className="mt-24 pt-12 border-t border-theme-border flex flex-wrap gap-8 text-[9px] font-mono text-[#444] uppercase tracking-widest">
                    <span>Established_2025 // Unit_9</span>
                    <div className="flex gap-4">
                      <span>#AISLOP</span>
                      <span>#POORIMAGE</span>
                      <span>#WASTE</span>
                    </div>
                 </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
      
      {/* OVERLAY GRAIN/TEXTURE */}
      <div className="fixed inset-0 pointer-events-none mix-blend-overlay opacity-5 z-[100] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
    </div>
  );
}
