import type { CalcResult } from "../../typings/Typings";
import Stat from "./Stat";

export default function ResultCard({ result }: { result: CalcResult }) {
  return (
    <div className="relative mt-4 animate-fadeInUp">
      <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-primary/40 via-accent/30 to-primary/40 blur-md opacity-60" />

      <div className="relative bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-xl p-4 grid grid-cols-3 gap-3 glass">
        <Stat
          label="0–60 (s)"
          value={result.zeroToSixty.toFixed(2)}
          highlight="primary"
        />
        <Stat
          label="¼ mile (s)"
          value={result.quarterMile.toFixed(2)}
          highlight="accent"
        />
        <Stat
          label="Trap (mph)"
          value={result.trapSpeed.toFixed(1)}
          highlight="glow"
        />
      </div>
    </div>
  );
}