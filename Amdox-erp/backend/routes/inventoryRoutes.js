const express = require("express");
const router = express.Router();
const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
const {
  getInventory,
  createInventoryItem,
  updateInventoryItem,
  deleteInventoryItem,
} = require("../controllers/inventoryController");

router.use(verifyToken);

router.get("/", getInventory);
router.post("/", isAdmin, createInventoryItem);
router.put("/:id", isAdmin, updateInventoryItem);
router.delete("/:id", isAdmin, deleteInventoryItem);

module.exports = router;
