import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/onboarding-1");
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#f0f7ff] dark:bg-slate-900 font-display">
      <div className="flex flex-col items-center z-10">
        <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-3xl shadow-xl mb-12 backdrop-blur-sm">
          <div className="w-64 h-64 bg-[#231f20] rounded-2xl flex flex-col items-center justify-center p-6 shadow-2xl">
            <div className="relative flex flex-col items-center mb-6">
              <span
                className="material-symbols-outlined text-[#d4af37] text-5xl absolute -top-8"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                eco
              </span>
              <span
                className="material-symbols-outlined text-[#d4af37] text-6xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                menu_book
              </span>
            </div>
            <div className="text-white text-sm tracking-[0.2em] font-bold mt-2">
              EDUCATION BOX
            </div>
            <div className="text-white/50 text-[8px] tracking-widest mt-1">
              SAFE & LOGIC IN ORX
            </div>
          </div>
        </div>

        <h1 className="text-[#4DA6FF] text-4xl md:text-5xl font-black tracking-wider text-center leading-tight mb-4">
          OFFLINE STUDY
          <br />
          HELPER
        </h1>

        <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl">
          Learn Anywhere.{" "}
          <span className="text-[#FF8C42] font-bold">Learn Offline.</span>
        </p>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-[100px] md:h-[150px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,110.1,192,85.14,236.14,67.18,279.4,59.9,321.39,56.44Z"
            className="fill-[#bde0fe] dark:fill-slate-800"
          ></path>
        </svg>
      </div>
    </div>
  );
}
