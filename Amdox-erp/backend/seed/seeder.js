const mongoose = require("mongoose");
const connectDB = require("../config/db");
const User = require("../models/User");
const Department = require("../models/Department");
const Employee = require("../models/Employee");
const Project = require("../models/Project");
const Task = require("../models/Task");
const Inventory = require("../models/Inventory");
const Attendance = require("../models/Attendance");
const Leave = require("../models/Leave");
const Payroll = require("../models/Payroll");

const seedDatabase = async () => {
  try {
    // 1. Connect to DB
    await connectDB();

    console.log("Clearing existing collections...");
    await User.deleteMany({});
    await Department.deleteMany({});
    await Employee.deleteMany({});
    await Project.deleteMany({});
    await Task.deleteMany({});
    await Inventory.deleteMany({});
    await Attendance.deleteMany({});
    await Leave.deleteMany({});
    await Payroll.deleteMany({});

    console.log("Seeding departments...");
    const depts = [
      { departmentName: "Operations", description: "Business operations and center logs" },
      { departmentName: "People Operations", description: "HR and employee experience management" },
      { departmentName: "Delivery", description: "Software development and project sprint tracks" },
      { departmentName: "Finance", description: "Accounting, payroll calculation, ledger records" },
      { departmentName: "General", description: "General office operations" },
    ];
    const createdDepts = await Department.create(depts);
    const deptOps = createdDepts.find(d => d.departmentName === "Operations");
    const deptHR = createdDepts.find(d => d.departmentName === "People Operations");
    const deptDeliv = createdDepts.find(d => d.departmentName === "Delivery");
    const deptFinance = createdDepts.find(d => d.departmentName === "Finance");

    console.log("Seeding users...");
    // Passwords are set as plaintext, User pre-save hook will hash them
    const adminUser = new User({
      name: "Nadia Wilson",
      email: "admin@amdoxerp.com",
      password: "enterprise",
      role: "admin",
      phone: "+1 (555) 019-2834",
    });
    await adminUser.save();

    const hrUser = new User({
      name: "Sophia Carter",
      email: "hr@amdoxerp.com",
      password: "enterprise",
      role: "hr",
      phone: "+1 (555) 019-5823",
    });
    await hrUser.save();

    const managerUser = new User({
      name: "Maya Williams",
      email: "manager@amdoxerp.com",
      password: "enterprise",
      role: "manager",
      phone: "+1 (555) 019-3847",
    });
    await managerUser.save();

    const empUser1 = new User({
      name: "Aarav Mehta",
      email: "employee@amdoxerp.com",
      password: "enterprise",
      role: "employee",
      phone: "+1 (555) 019-9483",
    });
    await empUser1.save();

    const empUser2 = new User({
      name: "Elena Rostova",
      email: "elena@amdoxerp.com",
      password: "enterprise",
      role: "employee",
      phone: "+1 (555) 019-2244",
    });
    await empUser2.save();

    const empUser3 = new User({
      name: "Marcus Brody",
      email: "marcus@amdoxerp.com",
      password: "enterprise",
      role: "employee",
      phone: "+1 (555) 019-9988",
    });
    await empUser3.save();

    // Link departments to heads
    deptOps.head = adminUser._id;
    await deptOps.save();
    deptHR.head = hrUser._id;
    await deptHR.save();
    deptDeliv.head = managerUser._id;
    await deptDeliv.save();

    console.log("Seeding employee details...");
    const employeeDetails = [
      { employeeId: "EMP-1000", user: adminUser._id, department: deptOps._id, designation: "ERP Administrator", salary: 12500, joiningDate: new Date("2023-01-10") },
      { employeeId: "EMP-1002", user: hrUser._id, department: deptHR._id, designation: "HR Business Partner", salary: 8500, joiningDate: new Date("2023-03-15") },
      { employeeId: "EMP-1004", user: managerUser._id, department: deptDeliv._id, designation: "Project Manager", salary: 9500, joiningDate: new Date("2023-06-20") },
      { employeeId: "EMP-1001", user: empUser1._id, department: deptFinance._id, designation: "Senior Accountant", salary: 7200, joiningDate: new Date("2024-01-15") },
      { employeeId: "EMP-1005", user: empUser2._id, department: deptDeliv._id, designation: "Frontend Architect", salary: 8200, joiningDate: new Date("2024-02-01") },
      { employeeId: "EMP-1006", user: empUser3._id, department: deptHR._id, designation: "HR Recruiter", salary: 5000, joiningDate: new Date("2024-04-10") },
    ];
    await Employee.create(employeeDetails);

    console.log("Seeding projects...");
    const projects = [
      { title: "Finance Ledger Upgrade", manager: managerUser._id, progress: 82, status: "Active", budget: 120000, description: "Migration of ledger system to real-time sync database.", startDate: new Date("2026-05-01"), endDate: new Date("2026-09-30") },
      { title: "HR Portal Redesign", manager: managerUser._id, progress: 64, status: "Active", budget: 45000, description: "Redesigning internal HR and employee experience portal.", startDate: new Date("2026-04-15"), endDate: new Date("2026-08-15") },
      { title: "Inventory Procurement Sync", manager: managerUser._id, progress: 58, status: "Active", budget: 35000, description: "Automated stock levels reorder alerts and purchase sync.", startDate: new Date("2026-05-10"), endDate: new Date("2026-07-31") },
      { title: "IT Infrastructure Upgrade", manager: managerUser._id, progress: 46, status: "Planning", budget: 95000, description: "Migrating internal workflows and assets to secured cloud.", startDate: new Date("2026-06-01"), endDate: new Date("2026-12-31") },
    ];
    const createdProjects = await Project.create(projects);
    const projFinance = createdProjects.find(p => p.title === "Finance Ledger Upgrade");
    const projHR = createdProjects.find(p => p.title === "HR Portal Redesign");

    console.log("Seeding tasks...");
    const tasks = [
      { title: "Setup database schemas", description: "Incorporate mongoose and seed base MERN dataset", project: projHR._id, assignedTo: empUser2._id, assignedBy: adminUser._id, status: "completed", dueDate: new Date("2026-06-15") },
      { title: "Review authentication middleware", description: "Incorporate bcrypt and JWT checks", project: projHR._id, assignedTo: adminUser._id, assignedBy: adminUser._id, status: "in-progress", dueDate: new Date("2026-06-25") },
      { title: "Audit financial ledger compliance", description: "Ensure GAAP standards for accounting update", project: projFinance._id, assignedTo: empUser1._id, assignedBy: managerUser._id, status: "in-progress", dueDate: new Date("2026-06-28") },
      { title: "Create UI layouts for portal modules", description: "Write CSS styles and sidebar components", project: projHR._id, assignedTo: empUser2._id, assignedBy: managerUser._id, status: "completed", dueDate: new Date("2026-06-18") },
      { title: "Integrate React routes", description: "Connect state variables to dynamic modules", project: projHR._id, assignedTo: empUser2._id, assignedBy: managerUser._id, status: "pending", dueDate: new Date("2026-06-30") },
      { title: "Build payroll generation endpoints", description: "API for creating payouts list dynamically", project: projHR._id, assignedTo: empUser3._id, assignedBy: managerUser._id, status: "blocked", dueDate: new Date("2026-07-02") },
    ];
    await Task.create(tasks);

    console.log("Seeding inventory...");
    const inventory = [
      { name: "ThinkPad X1 Carbon Gen 11", sku: "TP-X1-G11-001", category: "Hardware", stock: 25, unit: "Units", price: 1450, status: "in-stock" },
      { name: "Apple MacBook Pro 16 M3 Max", sku: "MBP-M3-16-092", category: "Hardware", stock: 12, unit: "Units", price: 3200, status: "in-stock" },
      { name: "Dell UltraSharp 32 4K Monitor", sku: "DELL-U32-4K", category: "Peripherals", stock: 3, unit: "Units", price: 850, status: "low-stock" },
      { name: "Logitech MX Master 3S Mouse", sku: "LOGI-MX3S", category: "Peripherals", stock: 0, unit: "Units", price: 99, status: "out-of-stock" },
      { name: "Ergonomic Mesh Office Chair", sku: "CHAIR-ERG-MSH", category: "Office Furniture", stock: 45, unit: "Units", price: 299, status: "in-stock" },
    ];
    await Inventory.create(inventory);

    console.log("Seeding leaves...");
    const leaves = [
      { employee: empUser1._id, leaveType: "Annual", startDate: "2026-07-10", endDate: "2026-07-17", reason: "Family summer vacation planning.", status: "pending" },
      { employee: empUser2._id, leaveType: "Sick", startDate: "2026-06-14", endDate: "2026-06-15", reason: "Recovering from high flu and fever.", status: "approved", approvedBy: hrUser._id },
      { employee: empUser3._id, leaveType: "Casual", startDate: "2026-06-22", endDate: "2026-06-23", reason: "Urgent dental checkup appointment.", status: "approved", approvedBy: hrUser._id },
    ];
    await Leave.create(leaves);

    console.log("Seeding attendance...");
    const attendance = [
      { employee: empUser1._id, date: "2026-06-19", checkIn: "09:02:15", checkOut: "18:05:40", status: "present", totalHours: 9.05 },
      { employee: empUser2._id, date: "2026-06-19", checkIn: "08:45:00", checkOut: "17:30:10", status: "remote", totalHours: 8.75 },
      { employee: empUser3._id, date: "2026-06-19", checkIn: "09:15:30", checkOut: "18:00:00", status: "present", totalHours: 8.74 },
      { employee: managerUser._id, date: "2026-06-19", checkIn: "08:30:00", checkOut: "17:15:00", status: "present", totalHours: 8.75 },
      { employee: empUser1._id, date: "2026-06-18", checkIn: "08:58:22", checkOut: "18:02:11", status: "present", totalHours: 9.06 },
      { employee: empUser2._id, date: "2026-06-18", checkIn: "09:00:00", checkOut: "17:45:30", status: "remote", totalHours: 8.75 },
    ];
    await Attendance.create(attendance);

    console.log("Seeding payroll...");
    const payroll = [
      { employee: empUser1._id, month: "2026-05", basicSalary: 7200, allowance: 350, deduction: 150, totalSalary: 7400, status: "paid" },
      { employee: empUser2._id, month: "2026-05", basicSalary: 8200, allowance: 500, deduction: 200, totalSalary: 8500, status: "paid" },
      { employee: empUser3._id, month: "2026-05", basicSalary: 5000, allowance: 200, deduction: 100, totalSalary: 5100, status: "paid" },
      { employee: managerUser._id, month: "2026-05", basicSalary: 9500, allowance: 600, deduction: 300, totalSalary: 9800, status: "paid" },
    ];
    await Payroll.create(payroll);

    console.log("Database seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error(`Seeding database failed: ${error.message}`);
    process.exit(1);
  }
};

seedDatabase();
