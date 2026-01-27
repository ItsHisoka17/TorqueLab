export default function Stat({
  label,
  value,
  highlight = "primary",
}: {
  label: string;
  value: string;
  highlight?: "primary" | "accent" | "glow";
}) {
  return (
    <div className="group text-center">
      <div className="text-xs text-slate-400 tracking-wide mb-1">
        {label}
      </div>

      <div
        className={`
          text-xl font-semibold
          transition-all duration-300
          text-${highlight}
          group-hover:scale-105
          group-hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.4)]
        `}
      >
        {value}
      </div>
    </div>
  );
}