import { Link } from "react-router-dom";
import { FiArrowRight, FiBriefcase, FiMail, FiUser } from "react-icons/fi";

export default function Register() {
  return (
    <main className="min-h-screen bg-background px-4 py-10 dark:bg-slate-950">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-3xl items-center justify-center">
        <form className="w-full rounded-xl border border-white/70 bg-white/85 p-6 shadow-soft backdrop-blur-xl sm:p-10 dark:border-slate-800 dark:bg-slate-900/80">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-sm font-black text-white">
              AX
            </span>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                AMDOX ERP
              </p>
              <h1 className="text-2xl font-bold text-slate-950 dark:text-white">Create account</h1>
            </div>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Full Name</span>
              <span className="relative mt-2 block">
                <FiUser className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input className="erp-focus h-12 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-3 text-sm dark:border-slate-800 dark:bg-slate-950 dark:text-white" />
              </span>
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Work Email</span>
              <span className="relative mt-2 block">
                <FiMail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input type="email" className="erp-focus h-12 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-3 text-sm dark:border-slate-800 dark:bg-slate-950 dark:text-white" />
              </span>
            </label>
            <label className="block sm:col-span-2">
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Company</span>
              <span className="relative mt-2 block">
                <FiBriefcase className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input className="erp-focus h-12 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-3 text-sm dark:border-slate-800 dark:bg-slate-950 dark:text-white" />
              </span>
            </label>
          </div>

          <Link
            to="/admin/dashboard"
            className="erp-focus mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
          >
            Create Workspace
            <FiArrowRight className="h-4 w-4" />
          </Link>

          <p className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
            Already registered?{" "}
            <Link to="/login" className="font-bold text-primary hover:text-blue-700">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
}
