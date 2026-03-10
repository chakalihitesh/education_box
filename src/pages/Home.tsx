import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased min-h-screen">
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] flex items-center justify-center overflow-hidden z-0">
        <span className="material-symbols-outlined text-[40rem]">school</span>
      </div>
      <div className="relative z-10 flex flex-col min-h-screen max-w-md mx-auto bg-background-light dark:bg-background-dark shadow-2xl">
        <header className="flex items-center justify-between px-6 py-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-50">
          <div className="flex items-center gap-3">
            <Link to="/profile" className="size-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 overflow-hidden">
              <img className="size-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoFT_5eY-5qJ0bmiP_GtRrajU57eS6mGg-x4QpUaGLa_h8mdcsJTa5ZJ9tpMbQEgkHxPMXsibsHek_hym4bjZna9CYVFbE_2Us0jcUn_MqlxCuclW_6qEZqyDFXtyYETSf5ccXZTb9uC6y-KxmRGMHaZ-tX4QIE4GERGQ87v48BNB1u5GkCC6PyKkCoyJbEtPjcbS2VqEQH6HkHt9uSuGM5_GwJdGpLJOp3mOOsXeNndTVe8WP5VVJp4IghQTZ4vAgBPddkmBllKU" alt="Profile" />
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-3xl">school</span>
            <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Education Box</h1>
          </div>
          <button className="text-slate-600 dark:text-slate-400">
            <span className="material-symbols-outlined">notifications</span>
          </button>
        </header>
        <main className="flex-1 pb-24">
          <div className="px-6 py-4">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-slate-400 group-focus-within:text-primary transition-colors">search</span>
              </div>
              <input className="block w-full pl-12 pr-4 py-4 bg-white dark:bg-slate-800 border-none rounded-2xl shadow-sm ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-slate-400 text-sm" placeholder="Search for lessons, topics or subjects" type="text" />
            </div>
          </div>
          <section className="mt-4">
            <div className="px-6 flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100">Select Your Board</h2>
              <button className="text-primary text-sm font-semibold">View All</button>
            </div>
            <div className="flex gap-4 px-6 overflow-x-auto no-scrollbar pb-2">
              <div className="flex-shrink-0 w-32 aspect-square rounded-2xl bg-white dark:bg-slate-800 border border-primary/40 shadow-md flex flex-col items-center justify-center p-4 text-center cursor-pointer relative">
                <div className="absolute top-2 right-2 size-2 bg-primary rounded-full"></div>
                <div className="size-12 rounded-full bg-primary flex items-center justify-center mb-3">
                  <span className="font-bold text-white">State</span>
                </div>
                <span className="text-xs font-bold text-primary">State Board</span>
              </div>
            </div>
          </section>
          <section className="mt-8">
            <div className="px-6 mb-4">
              <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100">Select Your Class</h2>
            </div>
            <div className="flex gap-3 px-6 overflow-x-auto no-scrollbar pb-2">
              <button className="flex-shrink-0 w-20 h-20 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-primary/10 hover:border-primary transition-all">Class 6</button>
              <button className="flex-shrink-0 w-20 h-20 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-primary/10 hover:border-primary transition-all">Class 7</button>
              <button className="flex-shrink-0 w-20 h-20 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-primary/10 hover:border-primary transition-all">Class 8</button>
              <button className="flex-shrink-0 w-20 h-20 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-primary/10 hover:border-primary transition-all">Class 9</button>
              <button className="flex-shrink-0 w-20 h-20 rounded-xl bg-primary shadow-lg shadow-primary/30 flex items-center justify-center text-sm font-bold text-white">Class 10</button>
            </div>
          </section>
          <section className="mt-8">
            <div className="px-6 mb-4">
              <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100">Popular Subjects</h2>
            </div>
            <div className="flex gap-4 px-6 overflow-x-auto no-scrollbar">
              <div className="flex-shrink-0 w-24 flex flex-col items-center">
                <div className="size-16 rounded-2xl bg-[#FFE8D6] dark:bg-orange-900/30 flex items-center justify-center text-accent mb-2">
                  <span className="material-symbols-outlined text-3xl">functions</span>
                </div>
                <span className="text-xs font-semibold">Maths</span>
              </div>
              <div className="flex-shrink-0 w-24 flex flex-col items-center">
                <div className="size-16 rounded-2xl bg-[#E0F2FE] dark:bg-blue-900/30 flex items-center justify-center text-primary mb-2">
                  <span className="material-symbols-outlined text-3xl">biotech</span>
                </div>
                <span className="text-xs font-semibold">Science</span>
              </div>
              <div className="flex-shrink-0 w-24 flex flex-col items-center">
                <div className="size-16 rounded-2xl bg-[#DCFCE7] dark:bg-green-900/30 flex items-center justify-center text-green-600 mb-2">
                  <span className="material-symbols-outlined text-3xl">language</span>
                </div>
                <span className="text-xs font-semibold">English</span>
              </div>
              <div className="flex-shrink-0 w-24 flex flex-col items-center">
                <div className="size-16 rounded-2xl bg-[#F3E8FF] dark:bg-purple-900/30 flex items-center justify-center text-purple-600 mb-2">
                  <span className="material-symbols-outlined text-3xl">history_edu</span>
                </div>
                <span className="text-xs font-semibold">History</span>
              </div>
            </div>
          </section>
          <section className="mt-8 px-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100">Continue Learning</h2>
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">2 Lessons Left</span>
            </div>
            <div className="space-y-4">
              <Link to="/lesson" className="block p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm flex gap-4 items-center">
                <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">play_circle</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-bold mb-1">Quadratic Equations</h3>
                  <div className="w-full bg-slate-100 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  <p className="text-[10px] mt-1.5 text-slate-500 font-medium">65% Completed • Part 2 of 5</p>
                </div>
              </Link>
            </div>
          </section>
          <section className="mt-8 px-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100">Latest Updates</h2>
              <Link to="/updates" className="text-primary text-sm font-semibold">View News</Link>
            </div>
            <div className="space-y-4">
              <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm flex">
                <div className="w-24 h-24 flex-shrink-0 bg-slate-200">
                  <img className="size-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZjC2ePXnWcV1QRzg9gseP1J_E8Iw_QT0D0liyduo3i0A4RNO2sK3k7jJUamVa0WNhZ1Z32kC6eUhtTi1mXvs7u7tG363Kc7H1PxM1la8oWGVoQUca4_jeyvSSVfzNk3KndsfP0JrBQdE5sZlqA3eKm0Rgro8wytoJz7NMkRufNDNsCUCDAPaegk3xgEgO77J-w8qT9M7xE6w0m4VWIJPgfHw7w1ldER-e1nFd5ho2Sfaujamdn7vFWi0yjycgyU9y-A7Ze8jJXy0" alt="News" />
                </div>
                <div className="p-3 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-accent/10 text-accent text-[8px] font-bold px-1.5 py-0.5 rounded uppercase">Govt News</span>
                    <span className="text-[10px] text-slate-400">2h ago</span>
                  </div>
                  <h3 className="text-xs font-bold leading-tight line-clamp-2">New curriculum framework released for secondary education 2024</h3>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm flex">
                <div className="w-24 h-24 flex-shrink-0 bg-slate-200">
                  <img className="size-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuADGyzOfa_1VCSU6jFrceYFRXckzCteQuQ-u4SnYbIyAwS1a4zKFPGi1lq4mnvvdiRVygZRCSKdjrwqcQrTJTgdnYqNVdEqagyo60eK2nmzhg5W0kGg9EGR6nQD6UsXmabCldxdnMW0x6eFdGJXIyPFcLF7yutpNmGAFVHDgZ7_bdg9fr79LoNNo4AvpEn7ZFWZ9PBpbSzchbyPK1GdOLxdC5XLx6v8GKpR83E6TLfWdjviX2EACDag-r49l6Fcmd4HxydAR1wIORs" alt="News" />
                </div>
                <div className="p-3 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-primary/10 text-primary text-[8px] font-bold px-1.5 py-0.5 rounded uppercase">Scholarship</span>
                    <span className="text-[10px] text-slate-400">5h ago</span>
                  </div>
                  <h3 className="text-xs font-bold leading-tight line-clamp-2">Application open for National Merit Scholarship Program</h3>
                </div>
              </div>
            </div>
          </section>
        </main>
        <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg border-t border-slate-100 dark:border-slate-800 px-6 py-3 flex justify-between items-center z-50">
          <Link to="/home" className="flex flex-col items-center gap-1 text-primary">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
            <span className="text-[10px] font-bold">Home</span>
          </Link>
          <Link to="/lesson" className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">menu_book</span>
            <span className="text-[10px] font-medium">Courses</span>
          </Link>
          <Link to="/updates" className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">newspaper</span>
            <span className="text-[10px] font-medium">Updates</span>
          </Link>
          <Link to="/profile" className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">person</span>
            <span className="text-[10px] font-medium">Profile</span>
          </Link>
        </nav>
      </div>
    </div>
  );
}
