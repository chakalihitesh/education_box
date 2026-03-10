import { Link } from "react-router-dom";

export default function Updates() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10">
        <div className="flex items-center justify-between px-4 py-3 max-w-2xl mx-auto w-full">
          <button className="flex items-center justify-center size-10 rounded-full hover:bg-primary/10 text-slate-600 dark:text-slate-300">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <h1 className="text-primary text-xl font-bold tracking-tight">Education Box</h1>
          <button className="relative flex items-center justify-center size-10 rounded-full hover:bg-primary/10 text-slate-600 dark:text-slate-300">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-2 right-2 flex h-2 w-2 rounded-full bg-accent"></span>
          </button>
        </div>
      </header>
      <main className="flex-1 w-full max-w-2xl mx-auto px-4 py-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-50">Latest Education Updates</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Stay informed with the latest trends and insights.</p>
        </div>
        <div className="space-y-6 pb-24">
          <article className="bg-white dark:bg-slate-800/50 rounded-xl overflow-hidden shadow-sm border border-primary/5 hover:shadow-md transition-shadow duration-300">
            <div className="relative aspect-video w-full bg-slate-200 dark:bg-slate-700">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_XwZfzoXrqJ8at9nOIN8LBDMjh1sSnWMN7FoGEcR051OkfN2NyyrRnkPp7QB12ChjsVzagtPRn_nhInMw7fhLrqbVaQJ437o_JPhbcBFcorn8gc1dEwIdd5RQSJaKe1eqO0GUPo0M27FhH0vKQkPjtf6T2HDs-q9Sr9sLeNUwjSWUaDGQ3JZHKa66OOwTJS-5Z7nsqTLXlXMUhulswnVE2i_g0P8O6lJyVyFyHW46v5huItQEVCsxIioYyG_enp3bmty4hD8-o40" alt="News" />
              <span className="absolute top-3 left-3 bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md">Tech News</span>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold leading-tight mb-2 text-slate-900 dark:text-slate-50">The Future of Online Learning in 2024</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
                Exploring how artificial intelligence and virtual reality are reshaping the classroom experience for students and teachers worldwide.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-slate-400 text-xs flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">schedule</span> 5 min read
                </span>
                <button className="bg-accent hover:bg-accent/90 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2 shadow-sm shadow-accent/20">
                  Read More
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </article>
          <article className="bg-white dark:bg-slate-800/50 rounded-xl overflow-hidden shadow-sm border border-primary/5 hover:shadow-md transition-shadow duration-300">
            <div className="relative aspect-video w-full bg-slate-200 dark:bg-slate-700">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDw4JwqxvmhZZCUV-KhqXFZGkW-4I6UCWRL41TISCT_TA1ygWIrbtG9fz4VuPQ6L7s50rVCDtaV-EfQp05wrtuS3ih9pvnGVlylNS0qaAB2rlRTTcAPBu06mJiO9jgLlOPQuxbklnCgMeaJKBK0SrdjJez_Ril6t_xRvanoYOQdm6H6NcRmzsSUifUEnoUuvDLjSFepiGD1_qtwQDR7d_yjL9810nZVXs6zFL2U1LhYccG6jJ1dG_2DNkZDUxgOD_UcqfiJZRSnOmY" alt="News" />
              <span className="absolute top-3 left-3 bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md">Success Tips</span>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold leading-tight mb-2 text-slate-900 dark:text-slate-50">Top 10 Study Techniques for Better Retention</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
                Master your exams with these scientifically proven methods, including active recall and spaced repetition for maximum learning efficiency.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-slate-400 text-xs flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">schedule</span> 8 min read
                </span>
                <button className="bg-accent hover:bg-accent/90 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2 shadow-sm shadow-accent/20">
                  Read More
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </article>
          <article className="bg-white dark:bg-slate-800/50 rounded-xl overflow-hidden shadow-sm border border-primary/5 hover:shadow-md transition-shadow duration-300">
            <div className="relative aspect-video w-full bg-slate-200 dark:bg-slate-700">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkRjaNUOr_8zzlOocggET0mo2wEv9N9-e_E-7BgGNKrGuy2TaSL5DVuyaaZ2HUsavz-1oN7f_dgOYl7NOm0RNHKh9qbgsZ4BGpK5FfFivbSMUZ9wdOBb0Soy4Cgd8cckohGsZ9wp0RZTlORldm15SRW3pNyThMyy4jb-MbhZUBoIg0z22BtfcL3SIlBSpKB8iDgmblQXNcmwPVghFbUpuM5vwNbt5NC8_JHdNzAaoAKv7RxrSl4fX4LKPvwLIA8Q_bG5v9Yk_5VHw" alt="News" />
              <span className="absolute top-3 left-3 bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md">Global</span>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold leading-tight mb-2 text-slate-900 dark:text-slate-50">Global Exchange: Connecting Classrooms</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
                How cross-border educational partnerships are fostering cultural awareness and collaborative problem-solving among young students.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-slate-400 text-xs flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">schedule</span> 6 min read
                </span>
                <button className="bg-accent hover:bg-accent/90 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2 shadow-sm shadow-accent/20">
                  Read More
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </article>
        </div>
      </main>
      <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pb-safe z-50">
        <div className="flex items-center justify-around h-16 max-w-2xl mx-auto px-2">
          <Link to="/home" className="flex flex-col items-center justify-center gap-0.5 text-slate-400 dark:text-slate-500 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">home</span>
            <span className="text-[10px] font-medium">Home</span>
          </Link>
          <Link to="/updates" className="flex flex-col items-center justify-center gap-0.5 text-primary">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>newspaper</span>
            <span className="text-[10px] font-medium">Updates</span>
          </Link>
          <Link to="/lesson" className="flex flex-col items-center justify-center gap-0.5 text-slate-400 dark:text-slate-500 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">book_4</span>
            <span className="text-[10px] font-medium">Courses</span>
          </Link>
          <Link to="/profile" className="flex flex-col items-center justify-center gap-0.5 text-slate-400 dark:text-slate-500 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">person</span>
            <span className="text-[10px] font-medium">Profile</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
