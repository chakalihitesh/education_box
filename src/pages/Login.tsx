import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display">
      <div className="flex-1 flex items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl shadow-xl shadow-primary/10 overflow-hidden border border-primary/10">
          <div className="p-8 sm:p-10">
            <div className="flex flex-col items-center mb-8">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4 border-2 border-primary/20 relative">
                <span className="material-symbols-outlined text-primary text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  menu_book
                </span>
                <span className="material-symbols-outlined text-accent text-3xl absolute -mt-8" style={{ fontVariationSettings: "'FILL' 1" }}>
                  park
                </span>
              </div>
              <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Education Box</h1>
              <p className="text-slate-500 dark:text-slate-400 mt-1">Nurturing Knowledge Together</p>
            </div>
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-1">Welcome Back</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">Please enter your details to sign in</p>
            </div>
            <form className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-800 dark:text-slate-200 block px-1">Mobile Number</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
                    call
                  </span>
                  <input className="w-full pl-12 pr-4 py-3.5 bg-background-light dark:bg-slate-800 border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl text-slate-800 dark:text-slate-100 transition-all placeholder:text-slate-400" placeholder="Enter mobile number" type="tel" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center px-1">
                  <label className="text-sm font-medium text-slate-800 dark:text-slate-200 block">Password</label>
                  <a className="text-xs font-semibold text-primary hover:text-primary/80 transition-colors" href="#">Forgot Password?</a>
                </div>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
                    lock
                  </span>
                  <input className="w-full pl-12 pr-12 py-3.5 bg-background-light dark:bg-slate-800 border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl text-slate-800 dark:text-slate-100 transition-all placeholder:text-slate-400" placeholder="••••••••" type="password" />
                  <button className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600" type="button">
                    <span className="material-symbols-outlined text-xl">visibility</span>
                  </button>
                </div>
              </div>
              <div className="pt-2 flex flex-col gap-4">
                <Link to="/home" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/25 transition-all active:scale-[0.98] text-center">
                  Login
                </Link>
                <Link to="/signup" className="w-full bg-transparent border-2 border-primary/20 text-primary hover:bg-primary/5 font-bold py-3.5 rounded-xl transition-all text-center">
                  Create Account
                </Link>
              </div>
            </form>
            <div className="mt-8 text-center">
              <p className="text-xs text-slate-400 dark:text-slate-500">
                Need help? <a className="text-accent font-medium" href="#">Contact Support</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden opacity-20 dark:opacity-10">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary blur-[100px]"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-accent blur-[100px]"></div>
      </div>
    </div>
  );
}
