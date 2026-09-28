import { CubeLogo } from "./CubeLogo";
import { storeNameFor, storeUrlFor, type Platform } from "../lib/device";

type DemoNoticeProps = {
  platform: Platform;
  onReset: () => void;
};

export const DemoNotice = ({ platform, onReset }: DemoNoticeProps) => {
  const url = storeUrlFor(platform);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <CubeLogo className="h-16 w-16" />
      <h1 className="mt-6 text-xl font-bold text-white">
        Aquí te llevaríamos a {storeNameFor(platform)}
      </h1>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/55">
        Esta es la simulación del flujo dentro del editor. En un dispositivo real, la página
        redirige automáticamente al terminar el contador de 5 segundos.
      </p>
      <p className="mt-4 break-all rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white/45">
        {url}
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-[#F97316] px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-[#fb923c]"
        >
          Abrir el enlace real
        </a>
        <button
          type="button"
          onClick={onReset}
          className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/80 transition-colors hover:bg-white/10"
        >
          Volver al inicio
        </button>
      </div>
    </div>
  );
};
