import { Request, Response } from 'express';
import { fetchRecipes } from '../services/recipeService';


export const getAllRecipes = async (_req: Request, res: Response) => {
  try {
    const recipes = await fetchRecipes();
    
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};
