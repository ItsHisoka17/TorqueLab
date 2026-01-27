import { useState } from "react";
import ResultCard from "./ResultCard";
import Tachometer from "./Tachometer.tsx";
import type { CalcData, CalcResult } from "../../../../typings/Typings";

interface Payload {
  data: CalcData;
}

export default function CalculatorForm() {
  const [h, setH] = useState("");
  const [t, setT] = useState("");
  const [w, setW] = useState("");
  const [d, setD] = useState("AWD");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<CalcResult | null>(null);
  const [rev, setRev] = useState(0);


  async function handleCalculate() {
    setLoading(true);
    setResult(null);
    setRev(0);
  
    let interval = d === "RWD" ? 35 : 80;
    function rev():void {
      setRev((r):number => {
        if (r>=1) {
          clearInterval(revTimer);
          revTimer = window.setInterval(rev, 80)
          return 0;
        }
        return Math.min(1, r + 0.06)
      });
    };
    let revTimer = window.setInterval(
      rev,
      interval
    );
    const payload: Payload = {
      data: {
        h: Number(h || 0),
        t: Number(t || 0),
        w: Number(w || 0),
        d,
      },
    };

    try {
      const res = await fetch("/api/calculate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("API error");

      const data: CalcResult = await res.json();

      setTimeout(() => {
        setResult(data);
        setLoading(false);
        clearInterval(revTimer);
        setRev(0);
      }, 3000);
    } catch (err) {
      console.error(err);
      setLoading(false);
      clearInterval(revTimer);
      setRev(0);
    }
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4">
        <FloatingInput label="Horsepower (hp)" value={h} onChange={setH} />
        <FloatingInput label="Torque (lb·ft)" value={t} onChange={setT} />
        <FloatingInput label="Weight (lbs)" value={w} onChange={setW}/>
        <div>

          <div className="mb-2 text-sm text-slate-300">Drivetrain</div>
          <div className="flex gap-3">
            {["FWD", "RWD", "AWD"].map((opt) => (
              <button
                key={opt}
                type="button"
                data-active={d === opt}
                onClick={() => setD(opt)}
                className={`flex-1 rounded-lg py-2 text-sm font-medium transition ${
                  d === opt
                    ? "bg-gradient-to-r from-primary to-accent text-black shadow-md"
                    : "border border-white/6 bg-transparent text-slate-300 hover:border-primary"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={handleCalculate}
          disabled={loading}
          className="relative flex-1 rounded-xl bg-gradient-to-r from-primary to-accent py-3 font-semibold text-black shadow-lg transition-all hover:scale-[1.01] disabled:opacity-60"
        >
          <span className="relative z-10">
            {loading ? "Calculating…" : "Calculate"}
          </span>

          <div
            className="absolute right-3 top-1/2 -translate-y-1/2"
            aria-hidden
          >
            <svg
              className={`gear h-5 w-5 ${
                loading ? "animate-gearSpin" : ""
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            >
              <path d="M12 8v.01" strokeLinecap="round" />
              <path
                d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </button>

        <div className="w-36">
          <Tachometer
            value={result ? Math.min(1, result.trapSpeed / 200) : rev}
          />
        </div>
      </div>

      {result && <ResultCard result={result} />}
    </div>
  );
}

function FloatingInput({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="relative block">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder=" "
        type="number"
        className="
          peer
          w-full
          rounded-lg
          bg-transparent
          border border-white/6
          px-4
          pt-6 pb-2
          text-slate-100
          placeholder-transparent
          focus:border-primary
          focus:ring-2 focus:ring-primary/20
          transition
        "
        required
      />

      <span
        className="
          pointer-events-none
          absolute left-4 top-2
          text-xs text-slate-400
          transition-all

          peer-placeholder-shown:top-4
          peer-placeholder-shown:text-sm
          peer-placeholder-shown:text-slate-500

          peer-focus:top-2
          peer-focus:text-xs
          peer-focus:text-primary
        "
      >
        {label}
      </span>
    </label>
  );
}
