const express = require("express");
const router = express.Router();
const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
const {
  getAdminDashboardStats,
  getEmployeeDashboardStats
} = require("../controllers/dashboardController");

router.use(verifyToken);

router.get("/admin", isAdmin, getAdminDashboardStats);
router.get("/employee", getEmployeeDashboardStats);

module.exports = router;
