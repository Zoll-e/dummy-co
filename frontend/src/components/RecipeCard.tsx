import { useState } from "react";
import type { Recipe } from "types/recipe";

type RecipeCardProps = {
  recipe: Recipe;
};

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const { name, image, ingredients } = recipe;
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="max-w-md rounded-2xl shadow-lg overflow-hidden bg-white hover:scale-102 transition-transform duration-300">
      <div className="relative w-full h-48">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
        <img
          src={image}
          alt={name}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageLoaded(true)}
          className={`w-full h-48 object-cover transition-opacity duration-300 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <h3 className="text-sm text-gray-500 mb-1">Ingredients:</h3>
        <ul className="list-disc list-inside mb-2 text-sm text-gray-700">
          {ingredients.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeCard;
