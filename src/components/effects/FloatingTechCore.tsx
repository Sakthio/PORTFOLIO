import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { Sparkles, Cpu, Eye } from 'lucide-react';

export const FloatingTechCore: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const mousePos = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 450;
    const height = container.clientHeight || 450;

    // Three.js Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 6.2;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for complete 3D assembly
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // 1. Inner Luminous Neural Icosahedron
    const icoGeometry = new THREE.IcosahedronGeometry(1.2, 1);
    const icoMaterial = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      wireframe: true,
      roughness: 0.2,
      metalness: 0.9,
      emissive: 0x5a4510,
      emissiveIntensity: 0.4,
    });
    const icosahedron = new THREE.Mesh(icoGeometry, icoMaterial);
    coreGroup.add(icosahedron);

    // 2. Inner Solid Glow Core
    const innerSphereGeo = new THREE.SphereGeometry(0.75, 24, 24);
    const innerSphereMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: false,
      transparent: true,
      opacity: 0.18,
    });
    const innerSphere = new THREE.Mesh(innerSphereGeo, innerSphereMat);
    coreGroup.add(innerSphere);

    // 3. Nested Antigravity Gimbal Rings (Apple luxury style)
    const ring1Geo = new THREE.TorusGeometry(1.85, 0.022, 16, 100);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0xe2e8f0,
      metalness: 0.95,
      roughness: 0.15,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    coreGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(2.15, 0.02, 16, 100);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.9,
      roughness: 0.2,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = Math.PI / 3;
    coreGroup.add(ring2);

    const ring3Geo = new THREE.TorusGeometry(2.4, 0.015, 16, 100);
    const ring3Mat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      metalness: 0.9,
      roughness: 0.3,
      transparent: true,
      opacity: 0.7,
    });
    const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
    ring3.rotation.y = Math.PI / 4;
    coreGroup.add(ring3);

    // 4. Orbiting Neural Satellite Nodes
    const nodeCount = 18;
    const nodeGroup = new THREE.Group();
    const nodeGeo = new THREE.SphereGeometry(0.05, 12, 12);
    const nodeMat = new THREE.MeshBasicMaterial({ color: 0xfff2a8 });

    const nodes: { mesh: THREE.Mesh; angle: number; radius: number; speed: number; yOffset: number }[] = [];
    for (let i = 0; i < nodeCount; i++) {
      const mesh = new THREE.Mesh(nodeGeo, nodeMat);
      const radius = 1.4 + Math.random() * 1.2;
      const angle = (i / nodeCount) * Math.PI * 2;
      const speed = (0.2 + Math.random() * 0.4) * (Math.random() > 0.5 ? 1 : -1);
      const yOffset = (Math.random() - 0.5) * 1.5;
      mesh.position.set(Math.cos(angle) * radius, yOffset, Math.sin(angle) * radius);
      nodeGroup.add(mesh);
      nodes.push({ mesh, angle, radius, speed, yOffset });
    }
    coreGroup.add(nodeGroup);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const goldLight = new THREE.PointLight(0xd4af37, 3.5, 20);
    goldLight.position.set(3, 4, 4);
    scene.add(goldLight);

    const silverLight = new THREE.PointLight(0xe2e8f0, 2.5, 20);
    silverLight.position.set(-4, -3, 3);
    scene.add(silverLight);

    // Mouse parallax tracking
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / height) * 2 - 1);
      mousePos.current.targetX = x;
      mousePos.current.targetY = y;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth || 450;
      const newHeight = container.clientHeight || 450;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let reqId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerping
      mousePos.current.x += (mousePos.current.targetX - mousePos.current.x) * 0.05;
      mousePos.current.y += (mousePos.current.targetY - mousePos.current.y) * 0.05;

      // Antigravity levitation & rotation
      coreGroup.rotation.y = elapsedTime * 0.25 + mousePos.current.x * 0.4;
      coreGroup.rotation.x = Math.sin(elapsedTime * 0.4) * 0.15 + mousePos.current.y * 0.4;
      coreGroup.position.y = Math.sin(elapsedTime * 0.8) * 0.12;

      // Independent Gimbal Ring Rotations
      ring1.rotation.x = elapsedTime * 0.35;
      ring1.rotation.y = elapsedTime * 0.15;

      ring2.rotation.y = -elapsedTime * 0.4;
      ring2.rotation.z = Math.cos(elapsedTime * 0.3) * 0.2;

      ring3.rotation.x = Math.sin(elapsedTime * 0.3) * 0.3;
      ring3.rotation.z = elapsedTime * 0.2;

      // Inner core breathing pulse
      const pulseScale = 1 + Math.sin(elapsedTime * 2) * 0.04;
      icosahedron.scale.set(pulseScale, pulseScale, pulseScale);
      icosahedron.rotation.y = -elapsedTime * 0.5;

      // Update orbiting nodes
      nodes.forEach((node) => {
        node.angle += node.speed * 0.02;
        node.mesh.position.x = Math.cos(node.angle) * node.radius;
        node.mesh.position.z = Math.sin(node.angle) * node.radius;
        node.mesh.position.y = node.yOffset + Math.sin(elapsedTime * 1.5 + node.angle) * 0.15;
      });

      renderer.render(scene, camera);
      reqId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(reqId);
      renderer.dispose();
      icoGeometry.dispose();
      icoMaterial.dispose();
      innerSphereGeo.dispose();
      innerSphereMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      ring3Geo.dispose();
      ring3Mat.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full max-w-[500px] h-[450px] sm:h-[500px] flex items-center justify-center select-none">
      {/* Three.js Canvas Container */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Floating Glass Badges around the 3D core with Antigravity feel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="absolute -top-2 -left-2 sm:left-4 glass-surface px-3.5 py-2 rounded-full flex items-center gap-2 border border-white/10 shadow-glass-sm animate-float-slow"
      >
        <span className="w-2 h-2 rounded-full bg-gold-400 animate-ping" />
        <span className="text-xs font-medium tracking-wide text-slate-200 flex items-center gap-1.5">
          <Cpu className="w-3.5 h-3.5 text-gold-400" />
          Neural Core Active
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="absolute -bottom-3 -right-2 sm:right-4 glass-surface px-4 py-2.5 rounded-2xl flex items-center gap-3 border border-white/10 shadow-glass-md animate-float-reverse"
      >
        <div className="w-8 h-8 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400">
          <Eye className="w-4 h-4" />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[10px] uppercase tracking-wider text-slate-400 font-mono">Edge Perception</span>
          <span className="text-xs font-semibold text-white">Smart Camera Vision</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute top-1/2 -right-6 hidden md:flex glass-surface px-3 py-1.5 rounded-full items-center gap-1.5 border border-white/10 text-[11px] font-mono text-slate-300 shadow-glass-sm"
      >
        <Sparkles className="w-3 h-3 text-gold-400" />
        <span>Antigravity Physics</span>
      </motion.div>
    </div>
  );
};
