export default function Header() {
  return (
    <div className="mb-10 text-center">
      <div className="flex items-center justify-center gap-3">
        <span className="text-3xl">⚙️</span>
        <h1 className="text-4xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            TorqueLab
          </span>
        </h1>
      </div>

      <p className="mt-3 text-sm text-slate-400">
        Precision performance estimates for real-world builds
      </p>

      <div className="mx-auto mt-4 h-px w-32 bg-gradient-to-r from-transparent via-sky-500/60 to-transparent" />
    </div>
  );
}
