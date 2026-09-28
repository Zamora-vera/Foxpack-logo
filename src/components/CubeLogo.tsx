type CubeLogoProps = {
  className?: string;
  animated?: boolean;
};

export const CubeLogo = ({ className = "", animated = true }: CubeLogoProps) => (
  <svg
    viewBox="0 0 200 200"
    className={className}
    role="img"
    aria-label="FoxPack"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="fp-top" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#2b2b31" />
        <stop offset="100%" stopColor="#141417" />
      </linearGradient>
      <linearGradient id="fp-left" x1="0" y1="0" x2="0.4" y2="1">
        <stop offset="0%" stopColor="#26262b" />
        <stop offset="100%" stopColor="#121215" />
      </linearGradient>
      <linearGradient id="fp-right" x1="1" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#33333a" />
        <stop offset="100%" stopColor="#1b1b1f" />
      </linearGradient>
      <linearGradient id="fp-green" x1="0" y1="0" x2="0.6" y2="1">
        <stop offset="0%" stopColor="#5ee87a" />
        <stop offset="100%" stopColor="#2fbf4c" />
      </linearGradient>
      <filter id="fp-glow" x="-60%" y="-60%" width="220%" height="220%">
        <feGaussianBlur stdDeviation="9" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <g className={animated ? "fp-cube-float" : undefined}>
      <ellipse cx="100" cy="184" rx="52" ry="9" fill="#F97316" opacity="0.22" filter="url(#fp-glow)" />

      {/* Caras del cubo */}
      <polygon points="100,28 172,64 100,100 28,64" fill="url(#fp-top)" />
      <polygon points="28,64 100,100 100,172 28,136" fill="url(#fp-left)" />
      <polygon points="100,100 172,64 172,136 100,172" fill="url(#fp-right)" />

      {/* Aristas */}
      <g fill="none" stroke="#000000" strokeWidth="2.5" strokeLinejoin="round" opacity="0.85">
        <polygon points="100,28 172,64 100,100 28,64" />
        <polygon points="28,64 100,100 100,172 28,136" />
        <polygon points="100,100 172,64 172,136 100,172" />
      </g>

      {/* Rombo naranja en la cara superior */}
      <g className={animated ? "fp-diamond-pulse" : undefined}>
        <polygon
          points="100,37 137,64 100,91 63,64"
          fill="none"
          stroke="#F97316"
          strokeWidth="8"
          strokeLinejoin="miter"
        />
      </g>

      {/* Letra L verde en la cara izquierda */}
      <polygon
        points="43.84,84.88 59.68,92.8 59.68,120.16 84.16,132.4 84.16,148.24 43.84,128.08"
        fill="url(#fp-green)"
      />

      {/* Cruz X oscura en la cara derecha */}
      <polygon points="112.96,106.48 159.04,129.52 159.04,118 112.96,94.96" fill="#0c0c0e" />
      <polygon points="159.04,83.44 112.96,152.56 112.96,164.08 159.04,94.96" fill="#0c0c0e" />
    </g>
  </svg>
);
