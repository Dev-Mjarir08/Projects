import { Link } from "react-router-dom";
import { FiArrowRight, FiLock, FiMail } from "react-icons/fi";

export default function Login() {
  return (
    <main className="min-h-screen bg-background px-4 py-10 dark:bg-slate-950">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl items-center justify-center">
        <section className="grid w-full overflow-hidden rounded-xl border border-white/70 bg-white/80 shadow-soft backdrop-blur-xl md:grid-cols-[0.95fr_1.05fr] dark:border-slate-800 dark:bg-slate-900/75">
          <div className="hidden bg-secondary p-10 text-white md:flex md:flex-col md:justify-between">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-sm font-black">
                AX
              </div>
              <h1 className="mt-8 text-3xl font-bold">AMDOX ERP System</h1>
              <p className="mt-4 max-w-sm text-sm leading-6 text-slate-300">
                Centralized operations for HR, projects, payroll, inventory, and reporting.
              </p>
            </div>
            <p className="text-xs text-slate-400">Secure enterprise workspace</p>
          </div>

          <form className="p-6 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Welcome back</p>
            <h2 className="mt-3 text-2xl font-bold text-slate-950 dark:text-white">Sign in</h2>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Use the demo workspace to preview the dashboard.
            </p>

            <label className="mt-8 block">
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Email</span>
              <span className="relative mt-2 block">
                <FiMail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  defaultValue="admin@amdoxerp.com"
                  className="erp-focus h-12 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-3 text-sm dark:border-slate-800 dark:bg-slate-950 dark:text-white"
                />
              </span>
            </label>

            <label className="mt-5 block">
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Password</span>
              <span className="relative mt-2 block">
                <FiLock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="password"
                  defaultValue="enterprise"
                  className="erp-focus h-12 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-3 text-sm dark:border-slate-800 dark:bg-slate-950 dark:text-white"
                />
              </span>
            </label>

            <Link
              to="/admin/dashboard"
              className="erp-focus mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
            >
              Open Dashboard
              <FiArrowRight className="h-4 w-4" />
            </Link>

            <p className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
              Need an account?{" "}
              <Link to="/register" className="font-bold text-primary hover:text-blue-700">
                Register
              </Link>
            </p>
          </form>
        </section>
      </div>
    </main>
  );
}
