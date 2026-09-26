"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

const wrapperClass =
  "relative h-48 w-full overflow-hidden border border-line bg-abyss/60 md:h-full";

/* ---------- CREDIT RISK: PD distribution + ROC ---------- */
export function CreditRiskViz() {
  const bars = [4, 9, 18, 30, 42, 55, 38, 24, 13, 6];
  return (
    <div className={wrapperClass}>
      <svg viewBox="0 0 300 180" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
        <line x1="20" y1="150" x2="280" y2="150" stroke="#1c2530" strokeWidth="1" />
        {bars.map((h, i) => (
          <motion.rect
            key={i}
            x={24 + i * 25}
            width={18}
            fill="#38bfe0"
            fillOpacity={0.55}
            initial={{ height: 0, y: 150 }}
            whileInView={{ height: h * 2, y: 150 - h * 2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.04, ease: "easeOut" }}
          />
        ))}
        <motion.path
          d="M20,150 C 90,145 140,60 280,20"
          fill="none"
          stroke="#9be9ff"
          strokeWidth="1.4"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.85 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        />
        <line x1="20" y1="150" x2="280" y2="20" stroke="#7c8896" strokeDasharray="2 3" strokeWidth="0.75" />
        <text x="230" y="34" className="font-mono" fontSize="8" fill="#5fd6f5">
          ROC
        </text>
        <text x="24" y="164" className="font-mono" fontSize="7" fill="#7c8896">
          PD SCORE DISTRIBUTION
        </text>
      </svg>
    </div>
  );
}

/* ---------- MONTE CARLO: stochastic paths ---------- */
export function MonteCarloViz() {
  const paths = useMemo(() => {
    const arr: string[] = [];
    for (let p = 0; p < 9; p++) {
      let y = 90;
      let d = `M0,${y.toFixed(1)}`;
      for (let x = 10; x <= 300; x += 10) {
        y += (Math.sin((x + p * 37) * 0.045) + (Math.random() - 0.5)) * 6;
        y = Math.max(10, Math.min(170, y));
        d += ` L${x},${y.toFixed(1)}`;
      }
      arr.push(d);
    }
    return arr;
  }, []);

  return (
    <div className={wrapperClass}>
      <svg viewBox="0 0 300 180" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
        {paths.map((d, i) => (
          <motion.path
            key={i}
            d={d}
            fill="none"
            stroke={i === 0 ? "#9be9ff" : "#22a3c4"}
            strokeWidth={i === 0 ? 1.3 : 0.6}
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: i === 0 ? 0.9 : 0.35 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, delay: i * 0.12, ease: "easeInOut" }}
          />
        ))}
        <text x="8" y="16" className="font-mono" fontSize="7" fill="#5fd6f5">
          SIMULATIONS: 10,000
        </text>
        <text x="8" y="176" className="font-mono" fontSize="7" fill="#7c8896">
          VaR 99% · EXPECTED SHORTFALL (illustrative)
        </text>
      </svg>
    </div>
  );
}

/* ---------- MARKET REGIME: price series with regime bands ---------- */
export function MarketRegimeViz() {
  const points = useMemo(() => {
    let y = 90;
    const pts: number[] = [];
    for (let i = 0; i < 60; i++) {
      const vol = i < 20 ? 2 : i < 40 ? 6 : 10;
      y += (Math.random() - 0.5) * vol;
      y = Math.max(15, Math.min(165, y));
      pts.push(y);
    }
    return pts;
  }, []);

  const path = points
    .map((y, i) => `${i === 0 ? "M" : "L"}${(i * 300) / (points.length - 1)},${y.toFixed(1)}`)
    .join(" ");

  return (
    <div className={wrapperClass}>
      <svg viewBox="0 0 300 180" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
        <rect x="0" y="0" width="100" height="180" fill="#164e60" fillOpacity="0.12" />
        <rect x="100" y="0" width="100" height="180" fill="#186a82" fillOpacity="0.2" />
        <rect x="200" y="0" width="100" height="180" fill="#22a3c4" fillOpacity="0.3" />
        <motion.path
          d={path}
          fill="none"
          stroke="#eafcff"
          strokeWidth="1.2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        />
        <text x="6" y="14" className="font-mono" fontSize="6.5" fill="#9be9ff">
          REGIME 01 — LOW VOL
        </text>
        <text x="106" y="14" className="font-mono" fontSize="6.5" fill="#9be9ff">
          REGIME 02 — HIGH VOL
        </text>
        <text x="206" y="14" className="font-mono" fontSize="6.5" fill="#eafcff">
          REGIME 03 — CRISIS
        </text>
      </svg>
    </div>
  );
}

/* ---------- RMT EIGENVALUE SPECTRUM ---------- */
export function RMTEigenvalueViz() {
  const bulk = useMemo(() => {
    const arr: number[] = [];
    for (let i = 0; i < 40; i++) {
      // approximate Marchenko-Pastur-like bulk between 0.2 and 1.8
      arr.push(0.2 + Math.random() * 1.6);
    }
    return arr;
  }, []);
  const outliers = [2.4, 2.9, 3.4];

  return (
    <div className={wrapperClass}>
      <svg viewBox="0 0 300 180" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
        <path
          d="M40,150 C 90,150 100,40 150,40 C 200,40 210,150 260,150"
          fill="none"
          stroke="#186a82"
          strokeWidth="1"
          opacity="0.5"
        />
        {bulk.map((v, i) => (
          <motion.circle
            key={`b-${i}`}
            cx={40 + v * 70}
            cy={150 - Math.sin((v / 1.8) * Math.PI) * 105}
            r="1.6"
            fill="#38bfe0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.7 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.015 }}
          />
        ))}
        {outliers.map((v, i) => (
          <motion.circle
            key={`o-${i}`}
            cx={40 + v * 70}
            cy={148}
            r="3"
            fill="#eafcff"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 + i * 0.15 }}
          />
        ))}
        <line x1="40" y1="150" x2="270" y2="150" stroke="#1c2530" strokeWidth="1" />
        <text x="150" y="168" textAnchor="middle" className="font-mono" fontSize="7" fill="#7c8896">
          λ — CORRELATION EIGENVALUE SPECTRUM
        </text>
        <text x="240" y="140" className="font-mono" fontSize="6.5" fill="#eafcff">
          outliers
        </text>
      </svg>
    </div>
  );
}

/* ---------- AI AGENT NETWORK ---------- */
export function AIAgentViz() {
  const nodes = [
    { x: 150, y: 20, label: "USER" },
    { x: 150, y: 62, label: "AGENT" },
    { x: 150, y: 104, label: "TOOLS" },
    { x: 70, y: 146, label: "DATA" },
    { x: 150, y: 146, label: "MODEL" },
    { x: 230, y: 146, label: "SEARCH" },
    { x: 150, y: 172, label: "RESPONSE" },
  ];
  const edges: [number, number][] = [
    [0, 1],
    [1, 2],
    [2, 3],
    [2, 4],
    [2, 5],
    [3, 6],
    [4, 6],
    [5, 6],
  ];

  return (
    <div className={wrapperClass}>
      <svg viewBox="0 0 300 190" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
        {edges.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="#22a3c4"
            strokeWidth="0.75"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
          />
        ))}
        {nodes.map((n, i) => (
          <g key={n.label}>
            <motion.circle
              cx={n.x}
              cy={n.y}
              r="4"
              fill={i === 1 ? "#eafcff" : "#5fd6f5"}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
            />
            <text
              x={n.x}
              y={n.y - 9}
              textAnchor="middle"
              className="font-mono"
              fontSize="6.5"
              fill="#9be9ff"
            >
              {n.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

/* ---------- GENERIC: correlation-style grid ---------- */
export function GenericViz() {
  const cells = Array.from({ length: 36 });
  return (
    <div className={wrapperClass}>
      <div className="grid h-full w-full grid-cols-6 gap-px p-3">
        {cells.map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.15 + Math.random() * 0.6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i % 6) * 0.03 + Math.floor(i / 6) * 0.03 }}
            className="bg-quantum-400"
          />
        ))}
      </div>
    </div>
  );
}

export function VisualizationFor({ type }: { type: string }) {
  switch (type) {
    case "credit-risk":
      return <CreditRiskViz />;
    case "monte-carlo":
      return <MonteCarloViz />;
    case "market-regime":
      return <MarketRegimeViz />;
    case "rmt-eigenvalue":
      return <RMTEigenvalueViz />;
    case "ai-agent":
      return <AIAgentViz />;
    default:
      return <GenericViz />;
  }
}
