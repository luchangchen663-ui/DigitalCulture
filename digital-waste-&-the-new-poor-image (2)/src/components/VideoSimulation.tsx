/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Heart, MessageCircle, Share2, Music2 } from "lucide-react";

interface VideoSimulationProps {
  id: string;
  seed: string;
  caption: string;
  username: string;
  glitch?: boolean;
  blur?: boolean;
  videoId?: string;
}

export const VideoSimulation = ({ id, seed, caption, username, glitch, blur, videoId }: VideoSimulationProps) => {
  return (
    <motion.div 
      id={id}
      className={`relative w-[280px] h-[500px] bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl flex-shrink-0 group ${glitch ? 'glitch-overlay' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {videoId ? (
        <iframe 
          src={`https://www.tiktok.com/embed/v2/${videoId}`}
          className="w-full h-full border-none scale-[1.02]"
          allow="autoplay; encrypted-media; fullscreen"
          title="TikTok Video"
        />
      ) : (
        <img 
          src={`https://picsum.photos/seed/${seed}/400/800${blur ? '?blur=5' : ''}`} 
          className={`w-full h-full object-cover grayscale-[0.2] contrast-[1.1] ${blur ? 'brightness-75' : ''}`}
          alt="Simulated TikTok Fruit Drama"
          referrerPolicy="no-referrer"
        />
      )}
      
      {/* TikTok UI Overlays - Hide if real video is playing to avoid double UI, or keep for 'critical' effect */}
      {!videoId && (
        <>
          <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end gap-1">
            <span className="font-bold text-sm text-white/90">@{username}</span>
            <p className="text-xs text-white/80 line-clamp-2 leading-snug">{caption}</p>
            <div className="flex items-center gap-2 mt-2">
              <Music2 size={12} className="animate-spin-slow" />
              <span className="text-[10px] text-white/60">Original sound - AI Slop Generator</span>
            </div>
          </div>

          <div className="absolute right-2 bottom-20 flex flex-col items-center gap-4 text-white/90">
            <div className="flex flex-col items-center gap-1">
              <Heart size={24} fill="currentColor" className="text-white/40 group-hover:text-red-500 transition-colors" />
              <span className="text-[10px] font-medium">1.2M</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <MessageCircle size={24} className="text-white/40" />
              <span className="text-[10px] font-medium">45K</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Share2 size={24} className="text-white/40" />
              <span className="text-[10px] font-medium">200K</span>
            </div>
          </div>
        </>
      )}

      {/* Industrial Overlay for algorithmic feel - keep even with video */}
      <div className="absolute top-2 left-2 px-2 py-1 bg-black/50 backdrop-blur-sm border border-neutral-700/50 rounded text-[9px] font-mono text-neutral-400 uppercase tracking-widest z-10">
        Stream_ID: {seed}
      </div>
    </motion.div>
  );
};
