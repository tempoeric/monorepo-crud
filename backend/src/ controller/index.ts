// backend/projectsController.ts
import { Request, Response } from "express";
import { supabase } from "../../supabase";

// Get all projects
export const getProjects = async (req: Request, res: Response) => {
  const { data, error } = await supabase.from("projects").select("*");

  if (error) return res.status(400).json({ error: error.message });
  res.status(200).json(data);
};

// Create a new project
export const createProject = async (req: Request, res: Response) => {
  const { name, description, status, priority } = req.body;
  const { data, error } = await supabase
    .from("projects")
    .insert([{ name, description, status, priority }]);

  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data);
};

// Get a project by ID
export const getProjectById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("id", id)
    .single();

  if (error) return res.status(400).json({ error: error.message });
  res.status(200).json(data);
};

// Update a project
export const updateProject = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, description, status, priority } = req.body;

  const { data, error } = await supabase
    .from("projects")
    .update({ name, description, status, priority })
    .eq("id", id);

  if (error) return res.status(400).json({ error: error.message });
  res.status(200).json(data);
};

// Delete a project
export const deleteProject = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { _data, error } = await supabase
    .from("projects")
    .delete()
    .eq("id", id);

  if (error) return res.status(400).json({ error: error.message });
  res.status(204).send();
};
