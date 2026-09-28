import QRCode from "react-qr-code";

type StoreCardProps = {
  platform: "ios" | "android";
  name: string;
  tagline: string;
  url: string;
  accent: string;
};

export const StoreCard = ({ platform, name, tagline, url, accent }: StoreCardProps) => (
  <div className="group flex w-full flex-col items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]">
    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: accent }} />
      {tagline}
    </div>

    <div className="rounded-2xl bg-white p-3 shadow-[0_0_40px_-12px_rgba(249,115,22,0.5)]">
      <QRCode
        value={url}
        size={148}
        bgColor="#FFFFFF"
        fgColor="#0A0A0B"
        level="M"
        style={{ height: 148, width: 148 }}
      />
    </div>

    <div className="text-center">
      <p className="text-lg font-semibold text-white">{name}</p>
      <p className="mt-1 text-sm text-white/50">Escanea con la cámara de tu {platform === "ios" ? "iPhone" : "Android"}</p>
    </div>

    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-white/10"
      style={{ borderColor: `${accent}55` }}
    >
      Abrir en {name}
    </a>
  </div>
);
