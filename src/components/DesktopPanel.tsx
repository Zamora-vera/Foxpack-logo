import { FoxPackBrand } from "./FoxPackBrand";
import { StoreCard } from "./StoreCard";
import { APP_STORE_URL, PLAY_STORE_URL, type Platform, isInAppBrowser } from "../lib/device";

type DesktopPanelProps = {
  onDemo: (platform: Platform) => void;
  autoPlatform: Platform;
};

export const DesktopPanel = ({ onDemo, autoPlatform }: DesktopPanelProps) => (
  <div className="flex min-h-screen flex-col items-center justify-center px-6 py-14">
    <FoxPackBrand size={54} variant="dark" className="mb-8" />

    <h1 className="max-w-lg text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
      Descarga FoxPack en tu teléfono
    </h1>
    <p className="mt-3 max-w-md text-center text-sm leading-relaxed text-white/55">
      Escanea el código QR con la cámara de tu dispositivo, o toca el botón de tu tienda para
      descargar la app ahora mismo.
    </p>

    <div className="mt-10 grid w-full max-w-2xl gap-6 sm:grid-cols-2">
      <StoreCard
        platform="ios"
        name="App Store"
        tagline="iPhone · iPad"
        url={APP_STORE_URL}
        accent="#F97316"
      />
      <StoreCard
        platform="android"
        name="Google Play"
        tagline="Android"
        url={PLAY_STORE_URL}
        accent="#8DC63F"
      />
    </div>

    {autoPlatform !== "desktop" && (
      <p className="mt-6 rounded-xl border border-[#F97316]/30 bg-[#F97316]/10 px-4 py-2 text-xs text-[#FDBA74]">
        Estás en un entorno de escritorio ampliado — estos enlaces también funcionan en tu móvil.
      </p>
    )}

    {isInAppBrowser() && (
      <p className="mt-4 max-w-md rounded-xl border border-amber-400/25 bg-amber-400/10 px-4 py-3 text-center text-xs text-amber-200">
        Parece que estás dentro de otra app (Instagram, Facebook, TikTok…). Si el enlace no abre la
        tienda, toca el menú y elige <strong>“Abrir en el navegador”</strong>.
      </p>
    )}

    <div className="mt-12 flex flex-col items-center gap-3">
      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/30">
        Vista previa del flujo
      </span>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => onDemo("ios")}
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 transition-colors hover:bg-white/10"
        >
          Probar en iPhone
        </button>
        <button
          type="button"
          onClick={() => onDemo("android")}
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 transition-colors hover:bg-white/10"
        >
          Probar en Android
        </button>
      </div>
    </div>
  </div>
);
