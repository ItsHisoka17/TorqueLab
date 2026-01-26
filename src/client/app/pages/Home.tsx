import CalculatorForm from "../components/CalculatorForm";
import Header from "../components/Header";

export default function Home() {
  return (
    <main className="mx-auto">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
            <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none">
              <path d="M12 2v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              <path d="M12 18v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </div>
          <h1 className="text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            TorqueLab
          </h1>
        </div>
        <p className="text-slate-400 mt-2">Real-time performance estimation — tweak and learn</p>
      </div>

      <div className="glass rounded-2xl p-8 shadow-[0_30px_60px_rgba(2,6,23,0.7)] mx-auto max-w-xl">
        <Header />
        <CalculatorForm />
      </div>

      <footer className="text-center mt-6 text-xs text-slate-500">
        Built to experiment • TorqueLab
      </footer>
    </main>
  );
}
