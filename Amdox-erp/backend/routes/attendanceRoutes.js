const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/authMiddleware");
const {
  getAttendanceLogs,
  getClockInStatus,
  clockIn,
  clockOut,
} = require("../controllers/attendanceController");

router.use(verifyToken);

router.get("/", getAttendanceLogs);
router.get("/status", getClockInStatus);
router.post("/clock-in", clockIn);
router.post("/clock-out", clockOut);

module.exports = router;
