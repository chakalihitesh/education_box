import { Link } from "react-router-dom";

export default function LanguageSettings() {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex justify-center font-display">
      <div className="relative flex h-full min-h-screen w-full max-w-md flex-col bg-background-light dark:bg-background-dark overflow-x-hidden">
        <div className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 sticky top-0 z-10">
          <Link to="/profile" className="text-slate-800 dark:text-slate-100 flex size-10 items-center justify-center rounded-full hover:bg-primary/10 transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <h2 className="text-slate-800 dark:text-slate-100 text-xl font-bold leading-tight tracking-tight ml-2">Language Settings</h2>
        </div>
        <div className="px-6 py-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-primary/20 p-2 rounded-xl">
              <span className="material-symbols-outlined text-primary text-3xl">translate</span>
            </div>
            <div>
              <h1 className="text-slate-800 dark:text-slate-100 text-lg font-bold">Choose your language</h1>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Select the language you prefer for learning.</p>
            </div>
          </div>
        </div>
        <div className="px-4 flex-1">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-primary/10 overflow-hidden">
            <div className="flex flex-col">
              <label className="flex items-center gap-4 p-5 cursor-pointer hover:bg-primary/5 transition-colors border-b border-slate-100 dark:border-slate-700">
                <div className="flex-1">
                  <p className="text-slate-800 dark:text-slate-100 text-base font-semibold">English</p>
                  <p className="text-slate-400 text-xs">Recommended</p>
                </div>
                <input defaultChecked className="h-6 w-6 rounded-full border-2 border-slate-300 dark:border-slate-600 bg-transparent text-accent focus:ring-0 focus:ring-offset-0" name="language" type="radio" />
              </label>
              <label className="flex items-center gap-4 p-5 cursor-pointer hover:bg-primary/5 transition-colors border-b border-slate-100 dark:border-slate-700">
                <div className="flex-1">
                  <p className="text-slate-800 dark:text-slate-100 text-base font-semibold">Tamil</p>
                  <p className="text-slate-400 text-xs">தமிழ்</p>
                </div>
                <input className="h-6 w-6 rounded-full border-2 border-slate-300 dark:border-slate-600 bg-transparent text-accent focus:ring-0 focus:ring-offset-0" name="language" type="radio" />
              </label>
              <label className="flex items-center gap-4 p-5 cursor-pointer hover:bg-primary/5 transition-colors border-b border-slate-100 dark:border-slate-700">
                <div className="flex-1">
                  <p className="text-slate-800 dark:text-slate-100 text-base font-semibold">Hindi</p>
                  <p className="text-slate-400 text-xs">हिन्दी</p>
                </div>
                <input className="h-6 w-6 rounded-full border-2 border-slate-300 dark:border-slate-600 bg-transparent text-accent focus:ring-0 focus:ring-offset-0" name="language" type="radio" />
              </label>
              <label className="flex items-center gap-4 p-5 cursor-pointer hover:bg-primary/5 transition-colors">
                <div className="flex-1">
                  <p className="text-slate-800 dark:text-slate-100 text-base font-semibold">Telugu</p>
                  <p className="text-slate-400 text-xs">తెలుగు</p>
                </div>
                <input className="h-6 w-6 rounded-full border-2 border-slate-300 dark:border-slate-600 bg-transparent text-accent focus:ring-0 focus:ring-offset-0" name="language" type="radio" />
              </label>
            </div>
          </div>
          <div className="mt-6 flex gap-3 px-2">
            <span className="material-symbols-outlined text-primary text-xl">info</span>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Changing the language will update the app interface and course materials to your selected choice. You can change this anytime.
            </p>
          </div>
        </div>
        <div className="p-6 mt-auto">
          <Link to="/profile" className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-2xl h-14 px-5 bg-primary text-white text-lg font-bold leading-normal tracking-wide shadow-lg shadow-primary/20 active:scale-95 transition-transform">
            <span className="truncate">Save Settings</span>
          </Link>
          <div className="mt-4 text-center">
            <span className="text-xs font-medium text-slate-400 tracking-widest uppercase">Education Box v2.4</span>
          </div>
        </div>
        <div className="h-4 bg-background-light dark:bg-background-dark"></div>
      </div>
    </div>
  );
}
