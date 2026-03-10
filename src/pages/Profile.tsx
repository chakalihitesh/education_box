import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col font-display">
      <header className="sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-4 py-4 border-b border-primary/10">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <Link to="/home" className="p-2 rounded-lg hover:bg-primary/10 transition-colors">
            <span className="material-symbols-outlined text-primary">arrow_back</span>
          </Link>
          <h1 className="text-lg font-bold tracking-tight">Education Box</h1>
          <div className="w-10"></div>
        </div>
      </header>
      <main className="flex-1 w-full max-w-md mx-auto p-4 pb-24">
        <section className="flex flex-col items-center py-6 mb-6">
          <div className="relative group">
            <div className="size-32 rounded-full border-4 border-white dark:border-slate-800 shadow-xl overflow-hidden bg-slate-200" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDh895yPz4riqRITKzWV-Lr-bEPFnm5TdvLS_BhDHmuxRAuSeo1Z3Wrk8p7F13IgBaoh37wcZbA1BeGiVqohPYmEnOdANZAJzJRdl9ZXLH53gW-e5U7mKW5hwfq9acgUrMv_0g4NnXdIFL5u-y9g3VMYX1B955qdpEVeLhfPzyKum-_BJXVHBi2KpXtH6lpkX9-r4YEgwvVTtiZgcFBDMNjuO2TReGFYaOsf4ckco2FO7Xl_JKDO0OybQVRIc1pIstYwo_mY2hXyGc')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
            </div>
            <button className="absolute bottom-1 right-1 bg-accent text-white p-2 rounded-full shadow-lg border-2 border-white dark:border-slate-800 hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-sm">edit</span>
            </button>
          </div>
          <div className="text-center mt-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Jane Doe</h2>
            <p className="text-slate-500 dark:text-slate-400 font-medium">+1 234 567 890</p>
          </div>
        </section>
        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 px-2 mb-2">Account Settings</h3>
          <Link to="/change-password" className="flex items-center gap-4 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
            <div className="flex size-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <span className="material-symbols-outlined">lock</span>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-slate-800 dark:text-slate-200">Change Password</p>
              <p className="text-xs text-slate-400">Update your security credentials</p>
            </div>
            <span className="material-symbols-outlined text-slate-300 group-hover:translate-x-1 transition-transform">chevron_right</span>
          </Link>
          <Link to="/language" className="flex items-center gap-4 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
            <div className="flex size-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <span className="material-symbols-outlined">language</span>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-slate-800 dark:text-slate-200">Language Settings</p>
              <p className="text-xs text-slate-400">English (United States)</p>
            </div>
            <span className="material-symbols-outlined text-slate-300 group-hover:translate-x-1 transition-transform">chevron_right</span>
          </Link>
          <div className="flex items-center gap-4 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
            <div className="flex size-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <span className="material-symbols-outlined">info</span>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-slate-800 dark:text-slate-200">About App</p>
              <p className="text-xs text-slate-400">Version 2.4.0 (Education Box)</p>
            </div>
            <span className="material-symbols-outlined text-slate-300 group-hover:translate-x-1 transition-transform">chevron_right</span>
          </div>
          <Link to="/login" className="w-full flex items-center gap-4 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors group mt-4">
            <div className="flex size-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <span className="material-symbols-outlined">logout</span>
            </div>
            <div className="flex-1 text-left">
              <p className="font-semibold text-red-500">Logout</p>
              <p className="text-xs text-slate-400">Sign out of your account</p>
            </div>
          </Link>
        </div>
        <div className="mt-8 p-6 bg-primary/10 rounded-xl text-center border border-primary/20">
          <h4 className="font-bold text-primary mb-1">Need Help?</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Contact our support team for assistance with your courses.</p>
          <button className="bg-primary text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:opacity-90 transition-opacity">
            Contact Support
          </button>
        </div>
      </main>
      <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-primary/10 px-6 pb-6 pt-3 flex justify-around items-center z-50 max-w-md mx-auto shadow-[0_-4px_20px_-5px_rgba(0,0,0,0.1)]">
        <Link to="/home" className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors">
          <span className="material-symbols-outlined">home</span>
          <span className="text-[10px] font-medium">Home</span>
        </Link>
        <Link to="/updates" className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors">
          <span className="material-symbols-outlined">notifications</span>
          <span className="text-[10px] font-medium">Updates</span>
        </Link>
        <Link to="/lesson" className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors">
          <span className="material-symbols-outlined">book_4</span>
          <span className="text-[10px] font-medium">Courses</span>
        </Link>
        <Link to="/profile" className="flex flex-col items-center gap-1 text-primary">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
          <span className="text-[10px] font-bold">Profile</span>
        </Link>
      </nav>
    </div>
  );
}
