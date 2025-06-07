import express from "express";
import authMiddlewareget from "../middleware/authMiddleware.js";
import {
  getAllEntries,
  getEntryById,
  createEntry,
  updateEntry,
  deleteEntry,
} from "../controller/entries.controller.js";

const router = express.Router();

router.get("/", authMiddlewareget, getAllEntries);
router.get("/:id", authMiddlewareget, getEntryById);
router.post("/", authMiddlewareget, createEntry);
router.put("/:id", authMiddlewareget, updateEntry);
router.delete("/:id", authMiddlewareget, deleteEntry);

export default router;
