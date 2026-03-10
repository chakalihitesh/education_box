import { Link } from "react-router-dom";

export default function Lesson() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10">
        <div className="flex items-center px-4 py-3 max-w-2xl mx-auto w-full">
          <Link to="/home" className="flex items-center justify-center size-10 rounded-full hover:bg-primary/10 text-slate-600 dark:text-slate-300">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <h1 className="text-lg font-bold tracking-tight ml-2">Quadratic Equations - Part 1</h1>
        </div>
      </header>
      <main className="flex-1 w-full max-w-2xl mx-auto px-4 py-6 pb-24">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 mb-6 shadow-sm border border-slate-100 dark:border-slate-700">
          <div className="flex justify-between text-sm font-bold mb-2">
            <span>Lesson Progress</span>
            <span className="text-accent">35%</span>
          </div>
          <div className="w-full bg-slate-100 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
            <div className="bg-accent h-full rounded-full" style={{ width: '35%' }}></div>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700 mb-6">
          <div className="aspect-video bg-primary/10 p-4">
            <div className="w-full h-full bg-[#0F5286] rounded-xl relative overflow-hidden flex items-center justify-center">
              <div className="absolute w-full h-px bg-white/30"></div>
              <div className="absolute h-full w-px bg-white/30"></div>
              <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M 50 100 Q 75 0 100 100" fill="none" stroke="white" strokeWidth="1" opacity="0.5" />
              </svg>
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Understanding the Quadratic Formula</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              The standard form of a quadratic equation is <span className="bg-accent/10 text-accent px-1 rounded">ax² + bx + c = 0</span>, where a, b, and c are constants and a ≠ 0.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              To solve for x, we use the quadratic formula. This formula is derived from the process of completing the square and provides the roots of any quadratic equation, whether they are real or complex.
            </p>
            <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border-l-4 border-accent mb-6 text-center font-bold text-xl">
              x = <span className="inline-block align-middle">-b ± √(b² - 4ac)<br/><hr className="border-slate-400 my-1"/>2a</span>
            </div>
            <h3 className="text-lg font-bold mb-3">The Discriminant</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              The expression inside the square root, b² - 4ac, is called the <strong>discriminant (D)</strong>. It tells us the nature of the roots:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400 mb-8">
              <li>If <strong>D &gt; 0</strong>, there are two distinct real roots.</li>
              <li>If <strong>D = 0</strong>, there is exactly one real root (a repeated root).</li>
              <li>If <strong>D &lt; 0</strong>, there are no real roots (two complex roots).</li>
            </ul>
            <div className="space-y-3">
              <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3.5 rounded-xl shadow-sm transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-lg">download</span>
                Download for Offline
              </button>
              <button className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-3.5 rounded-xl shadow-sm transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-lg">quiz</span>
                Take Quiz
              </button>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-white dark:bg-slate-800 rounded-xl p-4 flex items-center gap-4 shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="size-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
              <span className="material-symbols-outlined">menu_book</span>
            </div>
            <div>
              <h4 className="font-bold text-sm">Reading Material</h4>
              <p className="text-xs text-slate-500">PDF Guide • 2.4 MB</p>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-xl p-4 flex items-center gap-4 shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="size-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>play_circle</span>
            </div>
            <div>
              <h4 className="font-bold text-sm">Video Lecture</h4>
              <p className="text-xs text-slate-500">12:45 Minutes</p>
            </div>
          </div>
        </div>
      </main>
      <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pb-safe z-50">
        <div className="flex items-center justify-around h-16 max-w-2xl mx-auto px-2">
          <Link to="/lesson" className="flex flex-col items-center justify-center gap-0.5 text-accent">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>book_4</span>
            <span className="text-[10px] font-bold">Lessons</span>
          </Link>
          <Link to="/bot" className="flex flex-col items-center justify-center gap-0.5 text-slate-400 dark:text-slate-500 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">edit_square</span>
            <span className="text-[10px] font-medium">Practice</span>
          </Link>
          <Link to="/home" className="flex flex-col items-center justify-center gap-0.5 text-slate-400 dark:text-slate-500 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">bookmark</span>
            <span className="text-[10px] font-medium">Saved</span>
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
