import { Link } from "react-router-dom";

export default function Bot() {
  return (
    <div className="bg-[#F5FAFF] font-display text-[#333333] min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white dark:bg-[#221610] shadow-sm px-4 py-3 flex items-center justify-between border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <Link to="/lesson" className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined text-slate-600 dark:text-slate-300">arrow_back</span>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#ec5b13]/10 flex items-center justify-center text-[#ec5b13] overflow-hidden">
              <span className="material-symbols-outlined text-2xl">smart_toy</span>
            </div>
            <div>
              <h1 className="text-lg font-bold leading-tight tracking-tight dark:text-slate-100">Study Assistant Bot</h1>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">Online</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 text-slate-400 hover:text-[#ec5b13] transition-colors">
            <span className="material-symbols-outlined">more_vert</span>
          </button>
        </div>
      </header>
      <div className="px-4 py-3 bg-white dark:bg-[#221610]/50 border-b border-slate-100 dark:border-slate-800">
        <label className="relative block max-w-2xl mx-auto">
          <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
            <span className="material-symbols-outlined text-xl">search</span>
          </span>
          <input className="w-full h-11 pl-11 pr-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-[#ec5b13]/20 focus:border-[#ec5b13] outline-none transition-all placeholder:text-slate-400 text-sm" placeholder="Search chat history or topics" type="text" />
        </label>
      </div>
      <main className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 max-w-4xl mx-auto w-full">
        <div className="flex items-start gap-3 animate-fade-in">
          <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-slate-100">
            <span className="material-symbols-outlined text-[#ec5b13] text-lg">smart_toy</span>
          </div>
          <div className="flex flex-col gap-1 max-w-[85%] md:max-w-[70%]">
            <span className="text-[11px] font-semibold text-slate-400 ml-1 uppercase tracking-wider">Study Bot</span>
            <div className="bg-white dark:bg-slate-800 text-[#333333] dark:text-slate-200 p-4 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 dark:border-slate-700 leading-relaxed">
              Hello! I'm your Study Assistant. How can I help you with your learning today?
            </div>
          </div>
        </div>
        <div className="flex items-start gap-3 justify-end animate-fade-in">
          <div className="flex flex-col gap-1 items-end max-w-[85%] md:max-w-[70%]">
            <span className="text-[11px] font-semibold text-slate-400 mr-1 uppercase tracking-wider">You</span>
            <div className="bg-[#4DA6FF] text-white p-4 rounded-2xl rounded-tr-none shadow-md leading-relaxed">
              Can you explain the quadratic formula to me? I'm having trouble remembering it for my exam tomorrow.
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-[#ec5b13]/20 flex items-center justify-center shrink-0 overflow-hidden">
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYIutkwddSW0jaB_PgvGU8ip7NI0ne-M1vCMvHJqvRQhOBtYiwzPgR6GNkt2AoP81BqxntN2jRd1WetLWumiVPZgyEF206kk448rahiTAoHwsq-B4ZujfXbII_WurVdEIz4pjp2tOVaGYAhHloccuUxsP2X1rcEvup2BCyFUSur8Pg1oqo6jbk6Kq-72YF9GB43OUihO5S0bYxIRDUiqwTQvHq7qvy5PcaWl9GJabIugx5wtAiB9ngdou4ZDEJUC6tqdK71bhyr0E" alt="User" />
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-slate-100">
            <span className="material-symbols-outlined text-[#ec5b13] text-lg">smart_toy</span>
          </div>
          <div className="flex flex-col gap-1 max-w-[85%] md:max-w-[70%]">
            <span className="text-[11px] font-semibold text-slate-400 ml-1 uppercase tracking-wider">Study Bot</span>
            <div className="bg-white dark:bg-slate-800 text-[#333333] dark:text-slate-200 p-4 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 dark:border-slate-700 leading-relaxed">
              <p className="mb-3">Of course! The quadratic formula is used to find the roots of a quadratic equation in the form <strong className="text-[#ec5b13] italic">ax² + bx + c = 0</strong>.</p>
              <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-dashed border-slate-200 dark:border-slate-700 text-center font-mono text-lg my-2">
                x = <span className="inline-block align-middle">-b ± √(b² - 4ac)<br/><hr className="border-slate-400"/>2a</span>
              </div>
              <p className="mt-3">Would you like to try a practice problem to see how it works step-by-step?</p>
            </div>
          </div>
        </div>
        <div className="flex items-start gap-3 justify-end">
          <div className="flex flex-col gap-1 items-end max-w-[85%] md:max-w-[70%]">
            <span className="text-[11px] font-semibold text-slate-400 mr-1 uppercase tracking-wider">You</span>
            <div className="bg-[#4DA6FF] text-white p-4 rounded-2xl rounded-tr-none shadow-md leading-relaxed">
              Yes, please! Let's do one.
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-[#ec5b13]/20 flex items-center justify-center shrink-0 overflow-hidden">
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYzjy2wio3GA63LoOy4ajNh22Fe9YdvLVk91dw_ftwuPZXjW2N08kdYRLP0UoaQKFJpLLaiUD5lvsZiCvUEc4nhgMOwuvpm-VHlEx2xstrYGYByzvlSarNjQ59s5klmOKdFA2EPhwwiLgEQ32sFlYvXNRHe1iaWVlYd_nnbc62-xnx2s9jJM-qn634VUIDBkuC6WKTdKoIKbl4CUjHyiPQ4c3EZr1diMfsFFxPA9VGVlxNFOg5S0ZJunH8hAxKsjWaUPxQp2OWu6Y" alt="User" />
          </div>
        </div>
      </main>
      <footer className="bg-white dark:bg-[#221610] p-4 md:p-6 border-t border-slate-200 dark:border-slate-800 shadow-[0_-4px_20px_rgba(0,0,0,0.03)]">
        <div className="max-w-4xl mx-auto flex items-center gap-3">
          <button className="flex items-center justify-center w-11 h-11 rounded-full text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 shrink-0">
            <span className="material-symbols-outlined">attach_file</span>
          </button>
          <div className="flex-1 relative">
            <input className="w-full h-12 px-6 bg-slate-50 dark:bg-slate-900 border-none rounded-full focus:ring-2 focus:ring-[#ec5b13]/20 text-[#333333] dark:text-slate-100 placeholder:text-slate-400" placeholder="Type your question here..." type="text" />
          </div>
          <button className="bg-[#ec5b13] hover:bg-[#ec5b13]/90 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg shadow-[#ec5b13]/30 transition-all active:scale-95 shrink-0">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>send</span>
          </button>
        </div>
        <p className="text-[10px] text-center text-slate-400 mt-3 font-medium uppercase tracking-[0.1em]">AI can make mistakes. Verify important information.</p>
      </footer>
    </div>
  );
}
