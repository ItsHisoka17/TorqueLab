export default function Tachometer({ value = 0 }: { value: number }) {
  const angle = -90 + value * 150;

  return (
    <div className="relative w-36 h-24">
      <svg viewBox="0 0 120 70" className="w-full h-full">
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0" stopColor="#06b6d4" stopOpacity="0.9" />
            <stop offset="0.75" stopColor="#7c3aed" stopOpacity="0.9" />
            <stop offset="1" stopColor="#ef4444" stopOpacity="1" />
          </linearGradient>
        </defs>

        <path
          d="M10 55 A50 50 0 0 1 110 55"
          stroke="#0b1220"
          strokeWidth="10"
          fill="none"
        />

        <path
          d="M10 55 A50 50 0 0 1 110 55"
          stroke="url(#g1)"
          strokeWidth="4"
          fill="none"
        />

        {Array.from({ length: 7 }).map((_, i) => {
          const t = (i / 6) * Math.PI;
          const angleRad = Math.PI - t;

          const isRedline = i >= 5;

          const x1 = 60 + Math.cos(angleRad) * 44;
          const y1 = 55 - Math.sin(angleRad) * 44;
          const x2 = 60 + Math.cos(angleRad) * 36;
          const y2 = 55 - Math.sin(angleRad) * 36;

          const nx = 60 + Math.cos(angleRad) * 28;
          const ny = 55 - Math.sin(angleRad) * 28 + 6;

          return (
            <g key={i}>
              <line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={isRedline ? "#ef4444" : "#94a3b8"}
                strokeWidth={isRedline ? 2.2 : 1.6}
              />

              <text
                x={nx}
                y={ny}
                textAnchor="middle"
                fontSize="7"
                fill={isRedline ? "#ef4444" : "#94a3b8"}
                fontWeight={isRedline ? "600" : "400"}
              >
                {i + 1}
              </text>
            </g>
          );
        })}

        <g
          className="needle transition-transform duration-300 ease-out"
          style={{
            transform: `rotate(${angle}deg)`,
            transformOrigin: "60px 55px",
          }}
        >
          <line
            x1="60"
            y1="55"
            x2="60"
            y2="18"
            stroke="#fffbeb"
            strokeWidth="2.6"
          />
          <circle cx="60" cy="55" r="3.2" fill="#fffbeb" />
        </g>
      </svg>

      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 text-[10px] tracking-wide text-slate-400">
        RPM ×1000
      </div>
    </div>
  );
}