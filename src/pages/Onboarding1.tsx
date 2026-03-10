import { Link } from "react-router-dom";

export default function Onboarding1() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased">
      <div className="flex items-center p-6 justify-end">
        <Link
          to="/home"
          className="text-primary text-base font-semibold leading-normal tracking-wide hover:opacity-80 transition-opacity"
        >
          Skip
        </Link>
      </div>
      <div className="flex-1 flex flex-col items-center px-6">
        <div className="w-full max-w-md aspect-square @container">
          <div className="w-full h-full bg-primary/10 rounded-xl overflow-hidden shadow-sm flex items-center justify-center relative">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCdQJ6-fep5oS3vrKCSAXDPhPajWi8J8S0mIAzs4EGDe49m8g2gy8G5bycBweYqz34sZdnLrtMcjen9p9RMrgxpIwsMP4451BQnYJfndSXRKty9vyHODzwEVS4nFRlZsvfzBY0UuvPm7vofAb470ztpOfUQJ6P4ATS6Mzsdu1Ja67NufoVR63Ky3sRXuGfMeRI1ToIb3W7Jnmfr8MfDMn_s8o267gjOG5R0SXTUDOz40wc7N1MU5SkYg7zgZ507ASwDlZhoGfUE_lM")',
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            <div className="absolute top-4 right-4 bg-accent text-white p-2 rounded-full shadow-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl">
                wifi_off
              </span>
            </div>
          </div>
        </div>
        <div className="w-full max-w-md flex flex-col items-center pt-10 text-center">
          <h1 className="text-slate-900 dark:text-white tracking-tight text-3xl font-bold leading-tight pb-4">
            Study Anytime, Anywhere
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg font-normal leading-relaxed px-2">
            Access your study materials offline. No Wi-Fi? No problem. Education
            Box keeps you learning even when you're on the go.
          </p>
        </div>
        <div className="mt-auto w-full max-w-md flex flex-col items-center pb-12">
          <div className="flex flex-row items-center justify-center gap-2.5 py-8">
            <div className="h-2.5 w-8 rounded-full bg-primary"></div>
            <div className="h-2.5 w-2.5 rounded-full bg-primary/30"></div>
            <div className="h-2.5 w-2.5 rounded-full bg-primary/30"></div>
          </div>
          <Link
            to="/onboarding-2"
            className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 hover:bg-primary/90 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            Next
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
