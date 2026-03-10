import { Link } from "react-router-dom";

export default function Onboarding2() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display antialiased">
      <div className="flex items-center bg-transparent p-4 pb-2 justify-between">
        <Link
          to="/"
          className="text-slate-900 dark:text-slate-100 flex size-12 shrink-0 items-center justify-start hover:bg-primary/10 rounded-full transition-colors"
        >
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </Link>
        <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">
          Education Box
        </h2>
      </div>
      <div className="flex w-full flex-row items-center justify-center gap-3 py-6">
        <div className="h-2 w-2 rounded-full bg-primary/30 dark:bg-primary/20"></div>
        <div className="h-2 w-8 rounded-full bg-primary"></div>
        <div className="h-2 w-2 rounded-full bg-primary/30 dark:bg-primary/20"></div>
      </div>
      <div className="@container px-6 py-4">
        <div className="@[480px]:px-4 @[480px]:py-3">
          <div
            className="w-full bg-primary/10 dark:bg-primary/5 flex flex-col items-center justify-center overflow-hidden rounded-xl min-h-80 shadow-inner border border-primary/10 relative"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC5H4EGJ_wDHw_IDBE7zMeW0PwAHI93IOHITOudOF6RErqscPQ-VBdpmAs0SROhmBY0lBu049ANcZiFpu8PfozmtAC5F7xdvaf1KuwiUu3Avn6nYsC-_XQ8dKVZ6siTGO0ag1WHBWB8iAsrHJV_-vX8uAA7cMlffjVY40VG08W0F9IhGQ0p4-UBJbXHIreYYi5_i3A_MtI8t2tXjfpPva7bNp5XFu-X251HlJVKyqnNYjqH96v1KLcmKCOSTj6JgWtH5x8gsTSm5qU")',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
            <span className="material-symbols-outlined text-[120px] text-primary opacity-80">
              folder_managed
            </span>
          </div>
        </div>
      </div>
      <div className="px-6 flex flex-col flex-1">
        <h2 className="text-slate-900 dark:text-slate-100 tracking-tight text-[28px] font-extrabold leading-tight text-center pb-3 pt-8">
          Organized Learning
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-relaxed pb-8 pt-1 text-center max-w-md mx-auto">
          Keep your study materials neatly categorized in digital folders.
          Access your notes, books, and assignments instantly, even offline.
        </p>
        <div className="flex-1"></div>
        <div className="flex flex-col gap-3 pb-10 w-full max-w-md mx-auto">
          <Link
            to="/onboarding-3"
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/25 transition-all text-center"
          >
            Next
          </Link>
          <Link
            to="/"
            className="w-full bg-transparent hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 font-semibold py-3 rounded-xl transition-all text-center"
          >
            Back
          </Link>
        </div>
      </div>
      <div className="h-1 w-20 bg-slate-300 dark:bg-slate-700 rounded-full mx-auto mb-4"></div>
    </div>
  );
}
