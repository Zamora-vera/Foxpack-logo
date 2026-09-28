import { FoxPackLogo, GREEN } from "./FoxPackLogo";

type FoxPackBrandProps = {
  /** Altura del cubo en px. El texto escala con ella. */
  size?: number;
  /** "dark" = sobre fondo oscuro (texto principal blanco). */
  variant?: "light" | "dark";
  showTagline?: boolean;
  className?: string;
};

export const FoxPackBrand = ({
  size = 48,
  variant = "dark",
  showTagline = true,
  className = "",
}: FoxPackBrandProps) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <FoxPackLogo
      variant={variant === "dark" ? "dark" : "light"}
      style={{ width: size, height: size, flexShrink: 0 }}
      animated={false}
    />
    <div style={{ fontSize: size * 0.62 }} className="leading-none">
      <div className="flex items-baseline gap-[0.14em] font-extrabold uppercase tracking-[-0.02em]">
        <span className={variant === "dark" ? "text-white" : "text-[#0A0A0B]"}>Fox</span>
        <span style={{ color: GREEN }}>Pack</span>
      </div>
      {showTagline && (
        <div
          className={`mt-[0.42em] font-bold uppercase tracking-[0.24em] ${
            variant === "dark" ? "text-white/45" : "text-[#0A0A0B]/60"
          }`}
          style={{ fontSize: "0.42em" }}
        >
          Paquetería Courier
        </div>
      )}
    </div>
  </div>
);
