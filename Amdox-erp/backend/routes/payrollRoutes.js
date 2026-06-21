const express = require("express");
const router = express.Router();
const { verifyToken, isHR } = require("../middleware/authMiddleware");
const {
  getPayrollRecords,
  generatePayroll,
  updatePayrollStatus,
} = require("../controllers/payrollController");

router.use(verifyToken);

router.get("/", getPayrollRecords);
router.post("/generate", isHR, generatePayroll);
router.patch("/:id", isHR, updatePayrollStatus);

module.exports = router;
