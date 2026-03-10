import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display">
      <div className="flex-grow flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-md">
          <div className="flex flex-col items-center mb-8">
            <div className="bg-primary/10 p-3 rounded-2xl mb-4">
              <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 tracking-tight">Education Box</h2>
          </div>
          <div className="bg-white dark:bg-slate-900 shadow-xl shadow-primary/5 rounded-2xl p-6 sm:p-10 border border-primary/10">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100">Create your account</h1>
              <p className="text-slate-500 dark:text-slate-400 mt-2">Join thousands of learners today.</p>
            </div>
            <form className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-800 dark:text-slate-200 ml-1">Full Name</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">person</span>
                  <input className="w-full pl-12 pr-4 py-3.5 bg-background-light dark:bg-slate-800 border-none rounded-xl focus:ring-2 focus:ring-primary/50 text-slate-800 dark:text-slate-100 placeholder:text-slate-400 transition-all" placeholder="John Doe" type="text" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-800 dark:text-slate-200 ml-1">Email or Mobile Number</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">contact_mail</span>
                  <input className="w-full pl-12 pr-4 py-3.5 bg-background-light dark:bg-slate-800 border-none rounded-xl focus:ring-2 focus:ring-primary/50 text-slate-800 dark:text-slate-100 placeholder:text-slate-400 transition-all" placeholder="Email or mobile number" type="text" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-800 dark:text-slate-200 ml-1">Password</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">lock</span>
                    <input className="w-full pl-12 pr-4 py-3.5 bg-background-light dark:bg-slate-800 border-none rounded-xl focus:ring-2 focus:ring-primary/50 text-slate-800 dark:text-slate-100 placeholder:text-slate-400 transition-all" placeholder="••••••••" type="password" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-800 dark:text-slate-200 ml-1">Confirm</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">verified_user</span>
                    <input className="w-full pl-12 pr-4 py-3.5 bg-background-light dark:bg-slate-800 border-none rounded-xl focus:ring-2 focus:ring-primary/50 text-slate-800 dark:text-slate-100 placeholder:text-slate-400 transition-all" placeholder="••••••••" type="password" />
                  </div>
                </div>
              </div>
              <Link to="/verify-otp" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/25 transition-all flex items-center justify-center gap-2 group mt-4">
                <span>Send OTP</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </form>
            <div className="mt-8 text-center">
              <p className="text-slate-500 dark:text-slate-400">
                Already have an account? 
                <Link to="/login" className="text-primary font-bold hover:underline ml-1">Sign in</Link>
              </p>
            </div>
          </div>
          <div className="mt-8 text-center px-4">
            <p className="text-xs text-slate-400 dark:text-slate-500 leading-relaxed">
              By signing up, you agree to our <a className="underline" href="#">Terms of Service</a> and <a className="underline" href="#">Privacy Policy</a>. We'll send you a one-time password to verify your mobile number.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
