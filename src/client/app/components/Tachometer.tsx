export default function Tachometer({ value = 0 }: { value: number }) {
  const angle = -90 + value * 150;
  return (
    <div className="relative w-36 h-20">
      <svg viewBox="0 0 120 60" className="w-full h-full">
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0" stopColor="#06b6d4" stopOpacity="0.9"/>
            <stop offset="1" stopColor="#7c3aed" stopOpacity="0.9"/>
          </linearGradient>
        </defs>
        <path d="M10 50 A50 50 0 0 1 110 50" stroke="#0b1220" strokeWidth="10" fill="none" />
        <path d="M10 50 A50 50 0 0 1 110 50" stroke="url(#g1)" strokeWidth="4" fill="none" />
        {Array.from({ length: 7 }).map((_, i) => {
          const t = (i / 6) * Math.PI;
          const x1 = 60 + Math.cos(Math.PI - t) * 44;
          const y1 = 50 - Math.sin(Math.PI - t) * 44;
          const x2 = 60 + Math.cos(Math.PI - t) * 36;
          const y2 = 50 - Math.sin(Math.PI - t) * 36;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#94a3b8" strokeWidth="1.6"/>;
        })}
        <g className="needle" style={{ transform: `rotate(${angle}deg)`, transformOrigin: "60px 50px" }}>
          <line x1="60" y1="50" x2="60" y2="14" stroke="#fffbeb" strokeWidth="2.6" />
        </g>
      </svg>
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 text-xs text-slate-400">RPM</div>
    </div>
  );
}
