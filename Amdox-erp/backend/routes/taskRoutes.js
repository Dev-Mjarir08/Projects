const express = require("express");
const router = express.Router();
const { verifyToken, isManager } = require("../middleware/authMiddleware");
const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

router.use(verifyToken);

router.get("/", getTasks);
router.post("/", isManager, createTask);
router.put("/:id", updateTask);
router.delete("/:id", isManager, deleteTask);

module.exports = router;
