const express = require("express");
const router = express.Router();
const { verifyToken, isManager } = require("../middleware/authMiddleware");
const {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} = require("../controllers/projectController");

router.use(verifyToken);

router.get("/", getProjects);
router.post("/", isManager, createProject);
router.put("/:id", isManager, updateProject);
router.delete("/:id", isManager, deleteProject);

module.exports = router;
