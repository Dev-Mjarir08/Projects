const express = require("express");
const router = express.Router();
const { verifyToken, isHR } = require("../middleware/authMiddleware");
const {
  getDepartments,
  createDepartment,
  updateDepartment,
  deleteDepartment,
} = require("../controllers/departmentController");

router.use(verifyToken);

router.get("/", getDepartments);
router.post("/", isHR, createDepartment);
router.put("/:id", isHR, updateDepartment);
router.delete("/:id", isHR, deleteDepartment);

module.exports = router;
