import { useEffect, useState } from "react";
import type { Recipe } from 'types/recipe'

export function RecipesList() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/recipes")
      .then(async (res) => {
        if (!res.ok) throw new Error(`Error: ${res.status}`);
        return res.json();
      })
      .then((data: Recipe[]) => {
        setRecipes(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading recipes...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        {recipes.map((r) => (
          <li key={r.id}>
            <h2>{r.name}</h2>
            <p>Ingredients: {r.ingredients.join(", ")}</p>
            <p>Instructions: {r.instructions}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
