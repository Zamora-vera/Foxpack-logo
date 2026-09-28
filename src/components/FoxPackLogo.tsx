import type { CSSProperties } from "react";

type FoxPackLogoProps = {
  className?: string;
  style?: CSSProperties;
  /** "light" = sobre fondo claro (caras negras, separaciones blancas).
   *  "dark"  = sobre fondo oscuro (caras elevadas, separaciones claras). */
  variant?: "light" | "dark";
  animated?: boolean;
};

/* Geometría isométrica del cubo (unidades del viewBox 318×320) */
const SILHOUETTE = "159,12 306,104 306,216 159,308 12,216 12,104";

/* Caras retraídas para dejar ver las separaciones internas del logo */
const TOP_FACE = "159,17.86 12,109.86 159,201.86 306,109.86";
const LEFT_FACE = "12,109.86 154,198.71 154,304.87 12,216";
const RIGHT_FACE = "164,198.71 306,109.86 306,216 164,304.87";

/* Letra "L" en el espacio aplanado de la cara izquierda */
const LETTER_L = "48,110 88,110 88,168 130,168 130,196 48,196";

export const ORANGE = "#F97316";
export const GREEN = "#8DC63F";

export const FoxPackLogo = ({
  className = "",
  style,
  variant = "light",
  animated = true,
}: FoxPackLogoProps) => {
  const faceFill = variant === "light" ? "#0A0A0B" : "#16161B";
  const gapFill = variant === "light" ? "#FFFFFF" : "rgba(255,255,255,0.16)";

  return (
    <svg
      viewBox="0 0 318 320"
      className={className}
      style={style}
      role="img"
      aria-label="FoxPack"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        className={animated ? "fp-cube-float" : undefined}
        style={{ transformOrigin: "159px 160px" }}
      >
        {/* Silueta del cubo: rellena los huecos internos y perfila el borde */}
        <polygon points={SILHOUETTE} fill={gapFill} />

        {/* Caras */}
        <polygon points={TOP_FACE} fill={faceFill} />
        <polygon points={LEFT_FACE} fill={faceFill} />
        <polygon points={RIGHT_FACE} fill={faceFill} />

        {/* Rombo naranja en la cara superior */}
        <polygon
          className={animated ? "fp-diamond-pulse" : undefined}
          points="159,59.26 239.85,109.86 159,160.46 78.15,109.86"
          fill="none"
          stroke={ORANGE}
          strokeWidth={17}
          strokeLinejoin="miter"
        />

        {/* Cara izquierda: letra L verde, apoyada en el plano de la cara */}
        <g transform="matrix(1, 0.6257, 0, 1, 0, 0)">
          <polygon points={LETTER_L} fill={GREEN} />
        </g>

        {/* Cara derecha: letra X blanca, apoyada en el plano de la cara */}
        <g transform="matrix(1, -0.6257, 0, 1, 0, 0)">
          <g transform="translate(235 354.4) rotate(48.3)">
            <rect x={-60} y={-8} width={120} height={16} fill="#FFFFFF" />
          </g>
          <g transform="translate(235 354.4) rotate(-48.3)">
            <rect x={-60} y={-8} width={120} height={16} fill="#FFFFFF" />
          </g>
        </g>
      </g>
    </svg>
  );
};
