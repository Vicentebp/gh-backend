import { Router } from "express";
import { createTask, getTasks, getTaskById, updateTask, deleteTask } from "../controllers/taskController";

const router = Router();

router.get("task/", getTasks);
router.get("task/:id", getTaskById);
router.post("task/", createTask);
router.put("task/:id", updateTask);
router.delete("task/:id", deleteTask);

export default router;
