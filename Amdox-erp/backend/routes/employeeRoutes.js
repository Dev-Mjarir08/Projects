const express = require("express");
const router = express.Router();
const { verifyToken, isHR } = require("../middleware/authMiddleware");
const {
  getEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employeeController");

router.use(verifyToken);

router.get("/", getEmployees);
router.post("/", isHR, createEmployee);
router.put("/:id", updateEmployee); // employees can update their own details, managers/HR can update anyone
router.delete("/:id", isHR, deleteEmployee);

module.exports = router;
