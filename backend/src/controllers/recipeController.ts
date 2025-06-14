import { Request, Response } from "express";
import { fetchRecipes } from "../services/recipeService";
import { Recipe } from "types/recipe";

export const getAllRecipes = async (_req: Request, res: Response) => {
  try {
    const recipes = await fetchRecipes();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const logRecipesAsJSON = async (req: Request, res: Response) => {
  try {
    console.info(JSON.stringify(req.body, null, 2));
    res.json({ message: "Recipes logged as JSON successfully" });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const logRecipesAsTable = async (req: Request, res: Response) => {
  try {
    console.table(
      req.body.recipes.map((r: Recipe) => {
        const {
          id,
          image,
          ingredients,
          tags,
          mealType,
          reviewCount,
          userId,
          ...rest
        } = r;
        return {
          ...rest,
          ingredients: ingredients?.length ?? 0,
          instructions: r.instructions?.length ?? 0,
        };
      })
    );

    res.json({ message: "Recipes logged as table successfully" });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};
