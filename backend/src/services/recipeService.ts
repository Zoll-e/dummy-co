import { Recipe } from 'types/recipe'

export const fetchRecipes = async (): Promise<Recipe[]> => {
  const response = await fetch("https://dummyjson.com/recipes?limit=50");
  
  if (!response.ok) throw new Error("Failed to fetch recipes");
  const data = await response.json();
  return data.recipes;
};
