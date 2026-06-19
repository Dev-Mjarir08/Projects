import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ModulePlaceholder from "../components/common/ModulePlaceholder.jsx";

const AdminLayout = lazy(() => import("../layouts/AdminLayout.jsx"));
const EmployeeLayout = lazy(() => import("../layouts/EmployeeLayout.jsx"));
const HRLayout = lazy(() => import("../layouts/HRLayout.jsx"));
const ManagerLayout = lazy(() => import("../layouts/ManagerLayout.jsx"));
const Login = lazy(() => import("../pages/auth/Login.jsx"));
const Register = lazy(() => import("../pages/auth/Register.jsx"));
const AdminDashboard = lazy(() => import("../pages/admin/Dashboard.jsx"));
const EmployeeDashboard = lazy(() => import("../pages/employee/Dashboard.jsx"));
const HRDashboard = lazy(() => import("../pages/hr/Dashboard.jsx"));
const ManagerDashboard = lazy(() => import("../pages/manager/Dashboard.jsx"));

const adminModules = [
  ["employees", "Employees"],
  ["attendance", "Attendance"],
  ["leave-management", "Leave Management"],
  ["projects", "Projects"],
  ["tasks", "Tasks"],
  ["inventory", "Inventory"],
  ["reports", "Reports"],
  ["settings", "Settings"],
];

const hrModules = [
  ["employees", "Employees"],
  ["attendance", "Attendance"],
  ["leave-requests", "Leave Requests"],
  ["payroll", "Payroll"],
];

const managerModules = [
  ["projects", "Projects"],
  ["tasks", "Tasks"],
  ["team-members", "Team Members"],
];

const employeeModules = [
  ["my-tasks", "My Tasks"],
  ["attendance", "Attendance"],
  ["apply-leave", "Apply Leave"],
  ["profile", "Profile"],
];

function RouteFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 dark:bg-slate-950">
      <div className="rounded-xl border border-white/70 bg-white/85 px-6 py-5 text-sm font-semibold text-slate-600 shadow-soft backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300">
        Loading AMDOX ERP...
      </div>
    </div>
  );
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            {adminModules.map(([path, moduleName]) => (
              <Route
                key={path}
                path={path}
                element={<ModulePlaceholder roleName="Admin" moduleName={moduleName} />}
              />
            ))}
          </Route>

          <Route path="/hr" element={<HRLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<HRDashboard />} />
            {hrModules.map(([path, moduleName]) => (
              <Route
                key={path}
                path={path}
                element={<ModulePlaceholder roleName="HR" moduleName={moduleName} />}
              />
            ))}
          </Route>

          <Route path="/manager" element={<ManagerLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<ManagerDashboard />} />
            {managerModules.map(([path, moduleName]) => (
              <Route
                key={path}
                path={path}
                element={<ModulePlaceholder roleName="Manager" moduleName={moduleName} />}
              />
            ))}
          </Route>

          <Route path="/employee" element={<EmployeeLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<EmployeeDashboard />} />
            {employeeModules.map(([path, moduleName]) => (
              <Route
                key={path}
                path={path}
                element={<ModulePlaceholder roleName="Employee" moduleName={moduleName} />}
              />
            ))}
          </Route>

          <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
