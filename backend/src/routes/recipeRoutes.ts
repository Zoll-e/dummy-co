import { Router } from "express";
import { getAllRecipes, logRecipesAsJSON,logRecipesAsTable } from "../controllers/recipeController"

const router = Router();

router.get('/', getAllRecipes);
router.post('/log-json', logRecipesAsJSON);
router.post('/log-table', logRecipesAsTable);



export default router;