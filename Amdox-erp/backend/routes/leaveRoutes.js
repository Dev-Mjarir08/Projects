const express = require("express");
const router = express.Router();
const { verifyToken, isHR } = require("../middleware/authMiddleware");
const {
  getLeaves,
  applyLeave,
  reviewLeave,
} = require("../controllers/leaveController");

router.use(verifyToken);

router.get("/", getLeaves);
router.post("/", applyLeave);
router.patch("/:id", isHR, reviewLeave);

module.exports = router;
