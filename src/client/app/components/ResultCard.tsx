import type { CalcResult } from "../../../../typings/Typings";
import Stat from "./Stat";

export default function ResultCard({ result }: { result: CalcResult }) {
  return (
    <div className="mt-4 bg-gradient-to-br from-white/3 to-transparent border border-white/6 rounded-xl p-4 grid grid-cols-3 gap-3">
      <Stat label="0–60 (s)" value={result.zeroToSixty.toFixed(2)} />
      <Stat label="¼ mile (s)" value={result.quarterMile.toFixed(2)} />
      <Stat label="Trap (mph)" value={result.trapSpeed.toFixed(1)} />
    </div>
  );
}
