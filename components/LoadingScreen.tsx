"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINES = [
  "INITIALIZING WAVEFUNCTION...",
  "LOADING MARKET DATA...",
  "CALIBRATING MODELS...",
  "ESTABLISHING STATE...",
];

export default function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [visibleLines, setVisibleLines] = useState(0);
  const [ready, setReady] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      onDone();
      setHide(true);
      return;
    }

    const stepMs = 320;
    const timers: ReturnType<typeof setTimeout>[] = [];

    LINES.forEach((_, i) => {
      timers.push(
        setTimeout(() => setVisibleLines(i + 1), stepMs * (i + 1))
      );
    });

    timers.push(
      setTimeout(() => setReady(true), stepMs * (LINES.length + 1))
    );

    timers.push(
      setTimeout(() => {
        setHide(true);
        onDone();
      }, stepMs * (LINES.length + 1) + 650)
    );

    return () => timers.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence>
      {!hide && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-void"
          role="status"
          aria-live="polite"
          aria-label="Loading portfolio"
        >
          <div className="w-[min(90vw,420px)] font-mono text-xs text-mute">
            <p className="mb-6 tracking-widest2 text-quantum-300">
              QUANTUM SYSTEM
            </p>
            <ul className="space-y-2">
              {LINES.map((line, i) => (
                <li
                  key={line}
                  className={`transition-opacity duration-300 ${
                    i < visibleLines ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <span className="text-quantum-400">{">"}</span> {line}{" "}
                  {i < visibleLines && (
                    <span className="text-quantum-500">[OK]</span>
                  )}
                </li>
              ))}
            </ul>
            <p
              className={`mt-6 text-paper transition-opacity duration-300 ${
                ready ? "opacity-100" : "opacity-0"
              }`}
            >
              SYSTEM READY<span className="caret" />
            </p>
            <div className="mt-8 h-px w-full bg-line">
              <motion.div
                className="h-px bg-quantum-400"
                initial={{ width: "0%" }}
                animate={{ width: ready ? "100%" : `${visibleLines * 25}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
