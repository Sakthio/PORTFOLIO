import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface LiquidButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'gold' | 'glass';
  icon?: React.ReactNode;
  magnetic?: boolean;
  className?: string;
  asAnchor?: boolean;
  href?: string;
}

export const LiquidButton: React.FC<LiquidButtonProps> = ({
  children,
  variant = 'primary',
  icon,
  magnetic = true,
  className = '',
  asAnchor = false,
  href,
  onClick,
  ...props
}) => {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);

  // Magnetic cursor spring tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!magnetic || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    mouseX.set(distanceX * 0.3);
    mouseY.set(distanceY * 0.3);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'gold':
        return 'bg-gradient-to-r from-gold-500/15 via-gold-400/25 to-gold-600/15 text-white border-gold-400/40 hover:border-gold-300 hover:shadow-[0_0_30px_-5px_rgba(212,175,55,0.4)]';
      case 'secondary':
        return 'bg-white/[0.03] text-slate-300 border-white/10 hover:border-white/25 hover:text-white hover:bg-white/[0.08] hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.5)]';
      case 'glass':
        return 'bg-black/30 backdrop-blur-2xl text-slate-200 border-white/[0.12] hover:border-white/30 hover:text-white hover:shadow-[0_0_25px_-5px_rgba(255,255,255,0.15)]';
      case 'primary':
      default:
        return 'bg-gradient-to-b from-white/[0.12] to-white/[0.02] text-white border-white/20 hover:border-gold-400/50 hover:shadow-[0_0_30px_-5px_rgba(212,175,55,0.25)]';
    }
  };

  const content = (
    <>
      {/* Animated liquid light shimmer across surface */}
      <span
        className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle top bevel highlight simulating glass refraction */}
      <span
        className="absolute inset-x-3 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Button inner content */}
      <span className="relative z-10 flex items-center justify-center gap-2.5 font-medium tracking-wide">
        {children}
        {icon && (
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            {icon}
          </span>
        )}
      </span>
    </>
  );

  const sharedClasses = `group relative inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-medium tracking-wide backdrop-blur-xl border transition-all duration-300 select-none overflow-hidden active:scale-95 ${getVariantStyles()} ${className}`;

  if (asAnchor && href) {
    return (
      <motion.a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        style={{ x: springX, y: springY }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={sharedClasses}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.Ref<HTMLButtonElement>}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={sharedClasses}
      {...(props as any)}
    >
      {content}
    </motion.button>
  );
};
