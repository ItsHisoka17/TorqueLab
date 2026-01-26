import Home from "./pages/Home";
import { useEffect, useState } from "react";

export default function App() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
  }, [theme]);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-black relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[-15%] top-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-sky-600/8 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 w-full max-w-3xl px-6">
          <div className="flex justify-end mb-4">
            <button
              onClick={() => {
                setTheme((d) => d === "dark" ? "light": "dark");
                document.documentElement.classList.toggle("dark", theme==="dark");
              }}
              className="text-sm text-slate-300 bg-white/3 px-3 py-1 rounded-lg border border-white/6 hover:bg-white/6 transition"
            >
              Toggle Theme
            </button>
          </div>

          <Home />
        </div>
      </div>
    </>
  );
}
