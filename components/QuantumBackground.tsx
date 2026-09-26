"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

interface FieldProps {
  count: number;
  reduced: boolean;
}

function ParticleField({ count, reduced }: FieldProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const { viewport, mouse } = useThree();

  // base positions, velocities, phase offsets, and brightness per-particle
  const { positions, basePositions, velocities, phases, sizes } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const basePositions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    const phases = new Float32Array(count);
    const sizes = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      // probability-cloud clustering: sample from a soft gaussian-ish radial distribution
      const r = Math.pow(Math.random(), 0.55) * 9;
      const theta = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 6;
      const x = Math.cos(theta) * r;
      const z = Math.sin(theta) * r * 0.6 - 2;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      basePositions[i * 3] = x;
      basePositions[i * 3 + 1] = y;
      basePositions[i * 3 + 2] = z;

      velocities[i * 3] = (Math.random() - 0.5) * 0.002;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.002;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.001;

      phases[i] = Math.random() * Math.PI * 2;
      sizes[i] = Math.random() < 0.08 ? 2.6 : Math.random() * 1.4 + 0.4;
    }

    return { positions, basePositions, velocities, phases, sizes };
  }, [count]);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
    return geo;
  }, [positions, sizes]);

  const lineGeometry = useMemo(() => {
    // pre-allocate a generous buffer; only a subset of segments is drawn each frame
    const maxSegments = Math.min(count * 2, 900);
    const arr = new Float32Array(maxSegments * 2 * 3);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(arr, 3));
    geo.setDrawRange(0, 0);
    return geo;
  }, [count]);

  const mouseWorld = useRef(new THREE.Vector3(9999, 9999, 0));
  const targetMouseWorld = useRef(new THREE.Vector3(9999, 9999, 0));
  const t = useRef(0);

  useFrame((state, delta) => {
    if (reduced) return;
    t.current += delta;

    // project mouse (NDC) onto a plane roughly in front of the particles
    targetMouseWorld.current.set(
      (mouse.x * viewport.width) / 2,
      (mouse.y * viewport.height) / 2,
      0
    );
    mouseWorld.current.lerp(targetMouseWorld.current, 0.08);

    const posAttr = geometry.getAttribute("position") as THREE.BufferAttribute;
    const arr = posAttr.array as Float32Array;

    const repelRadius = 2.1;
    const repelStrength = 0.9;

    for (let i = 0; i < count; i++) {
      const ix = i * 3;
      const bx = basePositions[ix];
      const by = basePositions[ix + 1];
      const bz = basePositions[ix + 2];

      // gentle wave-like drift around base position
      const wave = Math.sin(t.current * 0.35 + phases[i]) * 0.22;
      const wave2 = Math.cos(t.current * 0.22 + phases[i] * 1.7) * 0.18;

      let x = bx + wave;
      let y = by + wave2;
      let z = bz + Math.sin(t.current * 0.15 + phases[i]) * 0.15;

      // cursor repulsion — disturbing the probability field
      const dx = x - mouseWorld.current.x;
      const dy = y - mouseWorld.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < repelRadius) {
        const force = (1 - dist / repelRadius) * repelStrength;
        const nx = dx / (dist || 1);
        const ny = dy / (dist || 1);
        x += nx * force;
        y += ny * force;
      }

      arr[ix] = x;
      arr[ix + 1] = y;
      arr[ix + 2] = z;
    }
    posAttr.needsUpdate = true;

    // sparse connecting lines between nearby particles close to the cursor disturbance
    if (linesRef.current) {
      const lineArr = (lineGeometry.getAttribute("position") as THREE.BufferAttribute)
        .array as Float32Array;
      let segCount = 0;
      const maxSegments = lineArr.length / 6;
      const step = Math.max(1, Math.floor(count / 220));

      for (let i = 0; i < count && segCount < maxSegments; i += step) {
        const ix = i * 3;
        const jx = ((i + step) % count) * 3;
        const dx = arr[ix] - arr[jx];
        const dy = arr[ix + 1] - arr[jx + 1];
        const dz = arr[ix + 2] - arr[jx + 2];
        const d2 = dx * dx + dy * dy + dz * dz;
        if (d2 < 2.4) {
          const base = segCount * 6;
          lineArr[base] = arr[ix];
          lineArr[base + 1] = arr[ix + 1];
          lineArr[base + 2] = arr[ix + 2];
          lineArr[base + 3] = arr[jx];
          lineArr[base + 4] = arr[jx + 1];
          lineArr[base + 5] = arr[jx + 2];
          segCount++;
        }
      }
      lineGeometry.setDrawRange(0, segCount * 2);
      (lineGeometry.getAttribute("position") as THREE.BufferAttribute).needsUpdate = true;
    }
  });

  return (
    <group>
      <points ref={pointsRef} geometry={geometry}>
        <pointsMaterial
          size={0.045}
          color="#5fd6f5"
          transparent
          opacity={0.75}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
      <lineSegments ref={linesRef} geometry={lineGeometry}>
        <lineBasicMaterial
          color="#38bfe0"
          transparent
          opacity={0.12}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  );
}

function useResponsiveCount() {
  const [count, setCount] = useState(700);

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) return 0;
      if (w < 640) return 220;
      if (w < 1024) return 420;
      return 750;
    };
    setCount(compute());
    const onResize = () => setCount(compute());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return count;
}

export default function QuantumBackground() {
  const count = useResponsiveCount();
  const [reduced, setReduced] = useState(false);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    const onVisibility = () => setInView(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  if (count === 0) {
    return (
      <div
        aria-hidden
        className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_35%,rgba(34,163,196,0.09),transparent_60%)]"
      />
    );
  }

  return (
    <div aria-hidden className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 55 }}
        dpr={[1, 1.8]}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
        frameloop={inView ? "always" : "never"}
      >
        <ParticleField count={count} reduced={reduced} />
      </Canvas>
    </div>
  );
}
