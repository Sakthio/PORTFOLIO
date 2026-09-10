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

    const width = container.clientWidth || 460;
    const height = container.clientHeight || 460;

    // Three.js Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 6.0;

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

    // Create a smooth feathered radial alpha map on a canvas for atmospheric blending
    const alphaCanvas = document.createElement('canvas');
    alphaCanvas.width = 512;
    alphaCanvas.height = 512;
    const alphaCtx = alphaCanvas.getContext('2d');
    if (alphaCtx) {
      const grad = alphaCtx.createRadialGradient(256, 256, 170, 256, 256, 256);
      grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      grad.addColorStop(0.85, 'rgba(255, 255, 255, 0.95)');
      grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      alphaCtx.fillStyle = grad;
      alphaCtx.fillRect(0, 0, 512, 512);
    }
    const alphaTexture = new THREE.CanvasTexture(alphaCanvas);

    // 1. Photo Avatar Integration (Atmospheric Holographic Portal)
    const textureLoader = new THREE.TextureLoader();
    const photoTexture = textureLoader.load(
      '/sakthivel.jpg',
      undefined,
      undefined,
      () => {
        // Fallback to assets if needed
        textureLoader.load('./src/assets/sakthivel.jpg', (tex) => {
          if (portalMesh) {
            (portalMesh.material as THREE.MeshStandardMaterial).map = tex;
            (portalMesh.material as THREE.MeshStandardMaterial).needsUpdate = true;
          }
        });
      }
    );

    photoTexture.colorSpace = THREE.SRGBColorSpace;

    // Portal geometry for Sakthivel's portrait
    const portalGeo = new THREE.CircleGeometry(1.22, 64);
    const portalMat = new THREE.MeshStandardMaterial({
      map: photoTexture,
      alphaMap: alphaTexture,
      transparent: true,
      roughness: 0.35,
      metalness: 0.1,
      side: THREE.DoubleSide,
    });
    const portalMesh = new THREE.Mesh(portalGeo, portalMat);
    coreGroup.add(portalMesh);

    // 2. Halo Backlight behind the photo
    const haloGeo = new THREE.RingGeometry(1.2, 1.45, 64);
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0xd4af37,
      transparent: true,
      opacity: 0.25,
      side: THREE.DoubleSide,
    });
    const haloMesh = new THREE.Mesh(haloGeo, haloMat);
    haloMesh.position.z = -0.05;
    coreGroup.add(haloMesh);

    // 3. Fine Refraction Bezel Ring
    const bezelGeo = new THREE.RingGeometry(1.21, 1.25, 64);
    const bezelMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 0.95,
      roughness: 0.1,
      side: THREE.DoubleSide,
    });
    const bezelMesh = new THREE.Mesh(bezelGeo, bezelMat);
    bezelMesh.position.z = 0.02;
    coreGroup.add(bezelMesh);

    // 4. Outer Antigravity Gimbal Rings Orbiting Around The Photo
    const ring1Geo = new THREE.TorusGeometry(1.75, 0.02, 16, 120);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0xe2e8f0,
      metalness: 0.95,
      roughness: 0.15,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    coreGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(2.05, 0.022, 16, 120);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.92,
      roughness: 0.18,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = Math.PI / 3;
    coreGroup.add(ring2);

    const ring3Geo = new THREE.TorusGeometry(2.35, 0.015, 16, 120);
    const ring3Mat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      metalness: 0.9,
      roughness: 0.25,
      transparent: true,
      opacity: 0.65,
    });
    const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
    ring3.rotation.y = Math.PI / 4;
    coreGroup.add(ring3);

    // 5. Orbiting Stardust & Neural Satellite Nodes
    const nodeCount = 20;
    const nodeGroup = new THREE.Group();
    const nodeGeo = new THREE.SphereGeometry(0.045, 12, 12);
    const nodeMat = new THREE.MeshBasicMaterial({ color: 0xfff2a8 });

    const nodes: { mesh: THREE.Mesh; angle: number; radius: number; speed: number; yOffset: number }[] = [];
    for (let i = 0; i < nodeCount; i++) {
      const mesh = new THREE.Mesh(nodeGeo, nodeMat);
      const radius = 1.45 + Math.random() * 1.1;
      const angle = (i / nodeCount) * Math.PI * 2;
      const speed = (0.2 + Math.random() * 0.35) * (Math.random() > 0.5 ? 1 : -1);
      const yOffset = (Math.random() - 0.5) * 1.4;
      mesh.position.set(Math.cos(angle) * radius, yOffset, Math.sin(angle) * radius);
      nodeGroup.add(mesh);
      nodes.push({ mesh, angle, radius, speed, yOffset });
    }
    coreGroup.add(nodeGroup);

    // 6. Dynamic Atmospheric Point Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const goldLight = new THREE.PointLight(0xd4af37, 3.8, 15);
    goldLight.position.set(2.5, 3, 3);
    scene.add(goldLight);

    const silverLight = new THREE.PointLight(0xe2e8f0, 2.2, 15);
    silverLight.position.set(-3, -2.5, 2.5);
    scene.add(silverLight);

    // Mouse movement parallax tracking
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / height) * 2 - 1);
      mousePos.current.targetX = x;
      mousePos.current.targetY = y;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth || 460;
      const newHeight = container.clientHeight || 460;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // 7. Animation Loop with Antigravity Levitation
    let reqId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerping
      mousePos.current.x += (mousePos.current.targetX - mousePos.current.x) * 0.05;
      mousePos.current.y += (mousePos.current.targetY - mousePos.current.y) * 0.05;

      // Antigravity levitation & subtle 3D tilt response
      coreGroup.rotation.y = Math.sin(elapsedTime * 0.3) * 0.15 + mousePos.current.x * 0.45;
      coreGroup.rotation.x = Math.cos(elapsedTime * 0.4) * 0.1 + mousePos.current.y * 0.4;
      coreGroup.position.y = Math.sin(elapsedTime * 0.9) * 0.12;

      // Gimbal Rings Orbiting in 3D around Sakthivel's photo
      ring1.rotation.x = elapsedTime * 0.35;
      ring1.rotation.y = elapsedTime * 0.15;

      ring2.rotation.y = -elapsedTime * 0.4;
      ring2.rotation.z = Math.cos(elapsedTime * 0.3) * 0.25;

      ring3.rotation.x = Math.sin(elapsedTime * 0.3) * 0.35;
      ring3.rotation.z = elapsedTime * 0.22;

      // Halo breathing pulse
      const pulseScale = 1 + Math.sin(elapsedTime * 2.2) * 0.03;
      haloMesh.scale.set(pulseScale, pulseScale, 1);

      // Orbiting satellites
      nodes.forEach((node) => {
        node.angle += node.speed * 0.02;
        node.mesh.position.x = Math.cos(node.angle) * node.radius;
        node.mesh.position.z = Math.sin(node.angle) * node.radius;
        node.mesh.position.y = node.yOffset + Math.sin(elapsedTime * 1.6 + node.angle) * 0.15;
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
      portalGeo.dispose();
      portalMat.dispose();
      haloGeo.dispose();
      haloMat.dispose();
      bezelGeo.dispose();
      bezelMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      ring3Geo.dispose();
      ring3Mat.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
      photoTexture.dispose();
      alphaTexture.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full max-w-[500px] h-[460px] sm:h-[510px] flex items-center justify-center select-none">
      {/* Background Ambient Radial Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-gold-500/15 via-white/[0.03] to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Three.js Canvas Container */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Floating Glass Badges around the 3D photo core */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="absolute -top-2 -left-2 sm:left-2 glass-surface px-3.5 py-2 rounded-full flex items-center gap-2 border border-white/10 shadow-glass-sm animate-float-slow"
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
        className="absolute -bottom-3 -right-2 sm:right-2 glass-surface px-4 py-2.5 rounded-2xl flex items-center gap-3 border border-white/10 shadow-glass-md animate-float-reverse"
      >
        <div className="w-8 h-8 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400">
          <Eye className="w-4 h-4" />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[10px] uppercase tracking-wider text-slate-400 font-mono">Edge Vision</span>
          <span className="text-xs font-semibold text-white">Sakthivel V • AI & DS</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute top-1/2 -right-4 hidden md:flex glass-surface px-3 py-1.5 rounded-full items-center gap-1.5 border border-white/10 text-[11px] font-mono text-slate-300 shadow-glass-sm"
      >
        <Sparkles className="w-3 h-3 text-gold-400" />
        <span>3D Antigravity Portal</span>
      </motion.div>
    </div>
  );
};
