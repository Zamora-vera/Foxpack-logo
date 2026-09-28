import { FoxPackLogo } from "./FoxPackLogo";

type LoadingScreenProps = {
  progress: number;
  secondsLeft: number;
  headline: string;
  target: string;
};

const RADIUS = 92;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export const LoadingScreen = ({ progress, secondsLeft, headline, target }: LoadingScreenProps) => (
  <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
    <div className="relative h-[240px] w-[240px]">
      <div className="fp-halo absolute inset-6 rounded-full bg-[#F97316]/25 blur-3xl" />
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full -rotate-90">
        <circle cx="100" cy="100" r={RADIUS} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="4" />
        <circle
          cx="100"
          cy="100"
          r={RADIUS}
          fill="none"
          stroke="url(#fp-ring)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE * (1 - progress)}
        />
        <defs>
          <linearGradient id="fp-ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F97316" />
            <stop offset="55%" stopColor="#FB923C" />
            <stop offset="100%" stopColor="#8DC63F" />
          </linearGradient>
        </defs>
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <FoxPackLogo
          variant="dark"
          className="h-[126px] w-[126px] drop-shadow-[0_18px_32px_rgba(0,0,0,0.55)]"
        />
      </div>
    </div>

    <div className="mt-9 flex items-baseline gap-[0.14em] text-[27px] font-extrabold uppercase leading-none tracking-[-0.02em]">
      <span className="text-white">Fox</span>
      <span className="text-[#8DC63F]">Pack</span>
    </div>
    <p className="mt-3.5 max-w-xs text-sm text-white/55">{headline}</p>

    <div className="mt-8 w-full max-w-[280px]">
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#F97316] to-[#8DC63F] transition-[width] duration-100 ease-linear"
          style={{ width: `${Math.round(progress * 100)}%` }}
        />
      </div>
      <div className="mt-3 flex items-center justify-between text-xs font-medium text-white/45">
        <span>{Math.round(progress * 100)}%</span>
        <span>{secondsLeft > 0 ? `${secondsLeft}s · ${target}` : target}</span>
      </div>
    </div>
  </div>
);
