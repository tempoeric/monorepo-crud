// backend/projectsRoutes.ts
import { Router } from "express";
import {
  getProjects,
  createProject,
  getProjectById,
  updateProject,
  deleteProject,
} from "../ controller";

const router = Router();

router.get("/projects", getProjects);
router.post("/projects", createProject);
router.get("/projects/:id", getProjectById);
router.put("/projects/:id", updateProject);
router.delete("/projects/:id", deleteProject);

export default router;
