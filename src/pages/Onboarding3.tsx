import { Link } from "react-router-dom";

export default function Onboarding3() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display antialiased">
      <div className="flex items-center p-4 pb-2 justify-between">
        <Link to="/onboarding-2" className="text-slate-600 dark:text-slate-300 flex size-12 shrink-0 items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <Link to="/login" className="text-primary font-semibold text-sm px-4 py-2">
          Skip
        </Link>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="@container w-full max-w-md mx-auto">
          <div className="@[480px]:px-4 @[480px]:py-3">
            <div className="w-full bg-primary/10 dark:bg-primary/20 aspect-square flex items-center justify-center rounded-xl overflow-hidden shadow-sm relative" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAHRLbocdCjwG_iwmcMcN5glNuP28ykTYPCFRAs5svozfFSPk8479JbDbXD2iNryH6c6Jn0rmsYxTd6SIzsY9f3tRc436Tad7AApEklL-uCLMHxPz-3gomu6Uavy6mSwbSpZrREpfu6Vy4O6fT59G9ymYa18GaHd9Vhp8RTkYpszaBbI2Yc1szt02RU6Sv1AcOd2ljaxOR5NwyWLDr2nYgzkph-CYgKm9yp57udi0z_7PEND5id8CHBIfvdDC7LBAWn4Eki4kXkKS4")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent flex flex-col items-center justify-center">
                <div className="bg-white dark:bg-slate-900 p-8 rounded-full shadow-xl relative">
                  <span className="material-symbols-outlined text-accent !text-7xl" style={{ fontVariationSettings: "'FILL' 1" }}>inventory_2</span>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-4 ml-6">
                    <span className="material-symbols-outlined text-primary !text-4xl animate-bounce">download_for_offline</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-md w-full mt-10 text-center">
          <h1 className="text-slate-900 dark:text-slate-100 tracking-tight text-3xl font-bold leading-tight pb-4">
            Your Offline Library
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg font-normal leading-relaxed px-2">
            Access your study materials anytime, anywhere. Download once and learn without internet distractions or data limits.
          </p>
        </div>
        <div className="flex w-full flex-row items-center justify-center gap-3 py-10">
          <div className="h-2 w-2 rounded-full bg-slate-200 dark:bg-slate-700"></div>
          <div className="h-2 w-2 rounded-full bg-slate-200 dark:bg-slate-700"></div>
          <div className="h-2.5 w-8 rounded-full bg-accent"></div>
        </div>
      </div>
      <div className="p-6 pb-12 w-full max-w-md mx-auto">
        <Link to="/login" className="w-full bg-accent hover:bg-opacity-90 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 group">
          Get Started
          <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
        </Link>
      </div>
    </div>
  );
}
