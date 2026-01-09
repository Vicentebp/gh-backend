import type { Request, Response, NextFunction } from "express";
import { tasks, Task } from "../models/taskModel";
import { v4 as uuidv4} from 'uuid';
export const createTask = (req: Request, res: Response, next: NextFunction) => {
  try {
    const taskInfo = req.body;
    const newTask: Task = { id: uuidv4(), ...taskInfo };
    tasks.push(newTask);
    res.status(201).json(newTask);
  } catch (error) {
    next(error);
  }
};

export const getTasks = (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(tasks);
  } catch (error) {
    next(error);
  }
};

export const getTaskById = (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id, 10);
    const task = tasks.find((i) => i.id === id);
    if (!task) {
      res.status(404).json({ message: "Task not found" });
      return;
    }
    res.json(task);
  } catch (error) {
    next(error);
  }
};

export const updateTask = (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id, 10);
    const { name } = req.body;
    const taskIndex = tasks.findIndex((i) => i.id === id);
    if (taskIndex === -1) {
      res.status(404).json({ message: "Task not found" });
      return;
    }
    tasks[taskIndex].name = name;
    res.json(tasks[taskIndex]);
  } catch (error) {
    next(error);
  }
};

export const deleteTask = (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id, 10);
    const taskIndex = tasks.findIndex((i) => i.id === id);
    if (taskIndex === -1) {
      res.status(404).json({ message: "Task not found" });
      return;
    }
    const deletedTask = tasks.splice(taskIndex, 1)[0];
    res.json(deletedTask);
  } catch (error) {
    next(error);
  }
};
