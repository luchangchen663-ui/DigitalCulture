/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { Bell } from "lucide-react";

const NOTIFICATIONS = [
  "New Fruit Drama uploaded!",
  "Crying Strawberry is trending.",
  "You've been scrolling for 40 minutes.",
  "Algorithm updated: More slop found.",
  "Check out 'Banana Betrayal Part 4'.",
  "Engagement levels decreasing. Scroll faster.",
  "Recommended for you: Silent Orange.",
  "Millions are watching right now."
];

export const NotificationManager = () => {
  const [active, setActive] = useState<{ id: number; text: string }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        const id = Date.now();
        const text = NOTIFICATIONS[Math.floor(Math.random() * NOTIFICATIONS.length)];
        setActive(prev => [...prev, { id, text }]);
        setTimeout(() => setActive(prev => prev.filter(n => n.id !== id)), 4000);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="notification-port" className="fixed top-4 right-4 z-[9999] flex flex-col gap-2 pointer-events-none">
      <AnimatePresence>
        {active.map(n => (
          <motion.div
            key={n.id}
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            className="bg-neutral-900 border border-neutral-700 p-3 rounded-lg shadow-xl min-w-[240px] flex items-center gap-3 backdrop-blur-md"
          >
            <div className="w-8 h-8 rounded-full bg-neon-red/20 flex items-center justify-center text-neon-red">
              <Bell size={14} />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-neutral-500 uppercase tracking-wider font-bold">System Alert</span>
              <span className="text-xs text-neutral-200">{n.text}</span>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
