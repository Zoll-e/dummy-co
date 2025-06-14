import { useRecipes } from "../hooks/useRecipes";
import { useSnackbar } from "../hooks/useSnackbar";
import RecipeCard from "./RecipeCard";
import ActionButton from "./ActionButton";
import Spinner from "./Spinner";

function RecipesList() {
  const { showSnackbar, Snackbar } = useSnackbar();
  const { recipes, loading, error } = useRecipes();

  const handleLogging = (type: "table" | "json") => {
    if (recipes.length === 0) {
      showSnackbar("No recipes to log", "info");
      return;
    }

    fetch(`/recipes/log-${type}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ recipes }),
    })
      .then((res) =>
        res.ok ? res.json() : Promise.reject(new Error(`Error: ${res.status}`))
      )
      .then(() => {
        showSnackbar(
          `Recipes logged using ${
            type === "table" ? "console.table" : "JSON.stringify"
          }, please check your console!`,
          "success"
        );
      })
      .catch((err) => {
        console.error("Error sending request:", err);
        showSnackbar(err.message, "error");
      });
  };

  if (loading) return <Spinner />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="mx-auto w-[80%] max-w-7xl  py-15">
      <div className="my-6 left-0 flex md:flex-row  gap-4 flex-col rounded-2xl justify-between  items-center p-4 bg-gray-100">
        <h1 className="text-2xl font-bold text-gray-900 md:text-left text-center mb-4 md:mb-0 md:w-auto w-full md:grow">
          recipes
        </h1>
        <div className="flex md:flex-row gap-4 flex-col">
          <ActionButton
            title="Log using console.table"
            onClick={() => handleLogging("table")}
          />
          <ActionButton
            title="Log using JSON stringify"
            onClick={() => handleLogging("json")}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
        {recipes.map((r) => (
          <RecipeCard recipe={r} key={r.id} />
        ))}
      </div>
      <Snackbar />
    </div>
  );
}

export default RecipesList;
