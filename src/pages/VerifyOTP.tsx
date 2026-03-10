import { Link } from "react-router-dom";

export default function VerifyOTP() {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex items-center justify-center p-4 font-display">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background-light to-background-light dark:from-primary/10 dark:via-background-dark dark:to-background-dark"></div>
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-slate-900 shadow-xl shadow-primary/5 rounded-2xl overflow-hidden border border-primary/10 p-8 md:p-10">
          <div className="flex flex-col items-center text-center mb-10">
            <div className="size-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-4">
              <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
            </div>
            <h1 className="text-slate-800 dark:text-slate-100 text-lg font-bold tracking-tight mb-1">Education Box</h1>
            <div className="h-1 w-8 bg-primary rounded-full"></div>
          </div>
          <div className="text-center mb-8">
            <h2 className="text-slate-800 dark:text-white text-2xl font-bold leading-tight mb-2">Verify your mobile number</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-normal">
              Enter the 6-digit OTP sent to <span className="font-semibold text-slate-800 dark:text-slate-200">+1 (555) •••-••89</span>
            </p>
          </div>
          <div className="flex justify-between gap-2 mb-8">
            <input className="w-12 h-14 text-center text-xl font-bold bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-xl transition-all text-slate-800 dark:text-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none" maxLength={1} type="text" defaultValue="4" />
            <input className="w-12 h-14 text-center text-xl font-bold bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-xl transition-all text-slate-800 dark:text-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none" maxLength={1} type="text" defaultValue="8" />
            <input className="w-12 h-14 text-center text-xl font-bold bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-xl transition-all text-slate-800 dark:text-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none" maxLength={1} placeholder="-" type="text" />
            <input className="w-12 h-14 text-center text-xl font-bold bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-xl transition-all text-slate-800 dark:text-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none" maxLength={1} placeholder="-" type="text" />
            <input className="w-12 h-14 text-center text-xl font-bold bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-xl transition-all text-slate-800 dark:text-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none" maxLength={1} placeholder="-" type="text" />
            <input className="w-12 h-14 text-center text-xl font-bold bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-xl transition-all text-slate-800 dark:text-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none" maxLength={1} placeholder="-" type="text" />
          </div>
          <div className="space-y-4">
            <Link to="/home" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 active:scale-[0.98]">
              <span>Verify OTP</span>
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
            <div className="flex items-center justify-center gap-2 text-sm">
              <span className="text-slate-500 dark:text-slate-400">Didn't receive the code?</span>
              <button className="text-accent font-semibold hover:underline decoration-2 underline-offset-4 transition-all">Resend OTP</button>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 py-2 px-4 bg-slate-50 dark:bg-slate-800/50 rounded-full w-fit mx-auto">
            <span className="material-symbols-outlined text-sm text-slate-400">timer</span>
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">00:54</span>
          </div>
        </div>
        <p className="mt-8 text-center text-slate-400 dark:text-slate-500 text-xs">
          By continuing, you agree to Education Box's <br/>
          <a className="underline" href="#">Terms of Service</a> and <a className="underline" href="#">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
}
