import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  size: number;
  speedY: number;
  speedX: number;
  alpha: number;
  maxAlpha: number;
  color: string;
}

export const AntigravityBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; targetX: number; targetY: number }>({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Initialize particles floating against gravity (Antigravity)
    const particleCount = Math.min(Math.floor((width * height) / 14000), 85);
    const particles: Particle[] = [];

    const colors = [
      'rgba(255, 255, 255, ',
      'rgba(226, 232, 240, ',
      'rgba(212, 175, 55, ', // subtle gold
      'rgba(148, 163, 184, ',
    ];

    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const maxAlpha = Math.random() * 0.45 + 0.15;
      const color = colors[Math.floor(Math.random() * colors.length)];
      particles.push({
        x,
        y,
        originX: x,
        originY: y,
        size: Math.random() * 2 + 0.7,
        speedY: -(Math.random() * 0.45 + 0.15), // Floating upwards (antigravity)
        speedX: (Math.random() - 0.5) * 0.25,
        alpha: maxAlpha * 0.5,
        maxAlpha,
        color,
      });
    }

    // Render loop
    let lastTime = performance.now();
    const render = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      // Smooth mouse lerp
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Render subtle mouse ambient illumination
      const gradient = ctx.createRadialGradient(
        mouseRef.current.x,
        mouseRef.current.y,
        0,
        mouseRef.current.x,
        mouseRef.current.y,
        450
      );
      gradient.addColorStop(0, 'rgba(212, 175, 55, 0.035)');
      gradient.addColorStop(0.5, 'rgba(226, 232, 240, 0.015)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Render static corner atmospheric accents
      const topGrad = ctx.createRadialGradient(width * 0.85, height * 0.15, 0, width * 0.85, height * 0.15, 600);
      topGrad.addColorStop(0, 'rgba(212, 175, 55, 0.03)');
      topGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = topGrad;
      ctx.fillRect(0, 0, width, height);

      const botGrad = ctx.createRadialGradient(width * 0.15, height * 0.85, 0, width * 0.15, height * 0.85, 700);
      botGrad.addColorStop(0, 'rgba(99, 102, 241, 0.025)');
      botGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = botGrad;
      ctx.fillRect(0, 0, width, height);

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Float upwards against gravity
        p.y += p.speedY * 60 * dt;
        p.x += p.speedX * 60 * dt;

        // Subtle interactive mouse repulsion / displacement
        const dx = p.x - mouseRef.current.x;
        const dy = p.y - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150 && dist > 0) {
          const force = (1 - dist / 150) * 1.5;
          p.x += (dx / dist) * force;
          p.y += (dy / dist) * force;
        }

        // Wrap around vertically
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        // Draw particle with gentle glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.fill();

        // Connect nearby particles with subtle ethereal threads
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distSq = (p.x - p2.x) ** 2 + (p.y - p2.y) ** 2;
          if (distSq < 7500) {
            const lineAlpha = (1 - Math.sqrt(distSq) / 86.6) * 0.08;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full block opacity-90"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.08),rgba(255,255,255,0))]" />
    </div>
  );
};
