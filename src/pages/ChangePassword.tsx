import { Link } from "react-router-dom";

export default function ChangePassword() {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display">
      <header className="sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-4 py-4 border-b border-primary/10">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <Link to="/profile" className="p-2 rounded-lg hover:bg-primary/10 transition-colors">
            <span className="material-symbols-outlined text-primary">arrow_back</span>
          </Link>
          <h1 className="text-lg font-bold tracking-tight">Change Password</h1>
          <div className="w-10"></div>
        </div>
      </header>
      <main className="flex-1 w-full max-w-md mx-auto p-4 pb-24">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden mb-6">
          <div className="bg-primary/5 dark:bg-primary/10 p-8 flex justify-center">
            <div className="size-20 rounded-full bg-accent/10 flex items-center justify-center text-accent">
              <span className="material-symbols-outlined text-4xl">lock_reset</span>
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Secure Your Account</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Choose a strong password with at least 8 characters including numbers and symbols.
            </p>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-6">
          <form className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-800 dark:text-slate-200 ml-1">Old Password</label>
              <div className="relative">
                <input className="w-full px-4 py-3.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary/50 text-slate-800 dark:text-slate-100 placeholder:text-slate-400 transition-all" placeholder="Enter current password" type="password" />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600" type="button">
                  <span className="material-symbols-outlined text-xl">visibility</span>
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-800 dark:text-slate-200 ml-1">New Password</label>
              <div className="relative">
                <input className="w-full px-4 py-3.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary/50 text-slate-800 dark:text-slate-100 placeholder:text-slate-400 transition-all" placeholder="Enter new password" type="password" />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600" type="button">
                  <span className="material-symbols-outlined text-xl">visibility</span>
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-800 dark:text-slate-200 ml-1">Confirm Password</label>
              <div className="relative">
                <input className="w-full px-4 py-3.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary/50 text-slate-800 dark:text-slate-100 placeholder:text-slate-400 transition-all" placeholder="Repeat new password" type="password" />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600" type="button">
                  <span className="material-symbols-outlined text-xl">visibility</span>
                </button>
              </div>
            </div>
            <Link to="/profile" className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-accent/25 transition-all flex items-center justify-center gap-2 group mt-6">
              Update Password
              <span className="material-symbols-outlined">check_circle</span>
            </Link>
          </form>
        </div>
      </main>
    </div>
  );
}
