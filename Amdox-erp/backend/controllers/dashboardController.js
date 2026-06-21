const User = require("../models/User");
const Project = require("../models/Project");
const Task = require("../models/Task");
const Inventory = require("../models/Inventory");
const Attendance = require("../models/Attendance");
const Leave = require("../models/Leave");
const Employee = require("../models/Employee");
const Department = require("../models/Department");

const getAdminDashboardStats = async (req, res, next) => {
  try {
    const totalEmployees = await User.countDocuments({ status: "active" });
    const activeProjects = await Project.countDocuments({ status: "Active" });
    const pendingTasks = await Task.countDocuments({ status: { $ne: "completed" } });
    
    const inventoryItemsRaw = await Inventory.find();
    const inventoryItems = inventoryItemsRaw.reduce((acc, item) => acc + item.stock, 0);

    // Stat cards mapping
    const statCards = [
      { label: "Total Employees", value: totalEmployees.toLocaleString(), change: "+1.2%", trend: "up", icon: "employees", tone: "blue" },
      { label: "Active Projects", value: activeProjects.toString(), change: "+5.1%", trend: "up", icon: "projects", tone: "cyan" },
      { label: "Pending Tasks", value: pendingTasks.toString(), change: "-3.8%", trend: "down", icon: "tasks", tone: "amber" },
      { label: "Inventory Items", value: inventoryItems.toLocaleString(), change: "+2.6%", trend: "up", icon: "inventory", tone: "emerald" },
    ];

    // Attendance stats
    const today = new Date().toISOString().split("T")[0];
    const presentToday = await Attendance.countDocuments({ date: today, status: "present" });
    const remoteToday = await Attendance.countDocuments({ date: today, status: "remote" });
    const leaveRequests = await Leave.countDocuments({ status: "pending" });

    res.json({
      statCards,
      todayStats: {
        present: presentToday,
        remote: remoteToday,
        leavesPending: leaveRequests
      }
    });
  } catch (err) {
    next(err);
  }
};

const getEmployeeDashboardStats = async (req, res, next) => {
  try {
    const userId = req.user._id;

    const assignedTasks = await Task.countDocuments({ assignedTo: userId, status: { $ne: "completed" } });
    const completedTasks = await Task.countDocuments({ assignedTo: userId, status: "completed" });
    const totalTasks = assignedTasks + completedTasks;
    
    // Attendance rate
    const totalWorkingDays = 22; // default standard
    const totalPresent = await Attendance.countDocuments({ employee: userId });
    const attendanceRate = totalWorkingDays > 0 ? Math.round((totalPresent / totalWorkingDays) * 100) : 100;

    // Leave balance (out of 20)
    const approvedLeaves = await Leave.find({ employee: userId, status: "approved" });
    const leavesUsed = approvedLeaves.reduce((acc, l) => {
      const start = new Date(l.startDate);
      const end = new Date(l.endDate);
      const diffTime = Math.abs(end - start);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
      return acc + diffDays;
    }, 0);
    const leaveBalance = Math.max(20 - leavesUsed, 0);

    const statCards = [
      { label: "Assigned Tasks", value: assignedTasks.toString(), change: `${completedTasks} completed`, trend: "down", icon: "tasks", tone: "blue" },
      { label: "Attendance Rate", value: `${attendanceRate}%`, change: "Stable", trend: "up", icon: "attendance", tone: "emerald" },
      { label: "Leave Balance", value: `${leaveBalance} days`, change: "Available", trend: "neutral", icon: "leave", tone: "cyan" },
      { label: "Project Hours", value: `${totalPresent * 8}h`, change: "+8h today", trend: "up", icon: "projects", tone: "amber" },
    ];

    res.json({
      statCards
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAdminDashboardStats,
  getEmployeeDashboardStats
};
