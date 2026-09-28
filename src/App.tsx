import { useEffect, useState, type ReactNode } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { DesktopPanel } from "./components/DesktopPanel";
import { DemoNotice } from "./components/DemoNotice";
import {
  detectPlatform,
  readPlatformOverride,
  storeNameFor,
  storeUrlFor,
  type Platform,
} from "./lib/device";

const LOADER_MS = 5000;
const TOTAL_SECONDS = LOADER_MS / 1000;

type Phase = "loading" | "redirecting" | "ready";

export default function App() {
  const [demo, setDemo] = useState<Platform | null>(null);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<Phase>("loading");

  const [autoPlatform] = useState<Platform>(detectPlatform);
  const [override] = useState<Platform | null>(readPlatformOverride);
  const platform: Platform = demo ?? override ?? autoPlatform;
  const isSimulation = demo !== null || override !== null;

  useEffect(() => {
    setProgress(0);
    setPhase("loading");

    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const next = Math.min(1, (now - start) / LOADER_MS);
      setProgress(next);
      if (next < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setPhase(platform === "desktop" ? "ready" : "redirecting");
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [platform]);

  useEffect(() => {
    if (phase !== "redirecting" || isSimulation) return;
    const timer = window.setTimeout(() => {
      window.location.replace(storeUrlFor(platform));
    }, 700);
    return () => window.clearTimeout(timer);
  }, [phase, platform, isSimulation]);

  const secondsLeft = Math.max(0, Math.ceil(TOTAL_SECONDS * (1 - progress)));

  let content: ReactNode;

  if (phase === "loading") {
    content = (
      <LoadingScreen
        progress={progress}
        secondsLeft={secondsLeft}
        headline={
          platform === "desktop"
            ? "Preparando tu descarga…"
            : `Abriendo FoxPack en ${storeNameFor(platform)}…`
        }
        target={platform === "desktop" ? "Cargando opciones" : `Destino: ${storeNameFor(platform)}`}
      />
    );
  } else if (phase === "redirecting" && isSimulation) {
    content = <DemoNotice platform={platform} onReset={() => setDemo(null)} />;
  } else if (phase === "redirecting") {
    content = (
      <LoadingScreen
        progress={1}
        secondsLeft={0}
        headline={`Abriendo ${storeNameFor(platform)}…`}
        target={storeNameFor(platform)}
      />
    );
  } else {
    content = <DesktopPanel onDemo={setDemo} autoPlatform={autoPlatform} />;
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#08080a]">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#F97316]/15 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-[-190px] right-[-120px] h-[420px] w-[420px] rounded-full bg-[#8DC63F]/10 blur-[130px]" />
      <div className="relative">{content}</div>
    </div>
  );
}
