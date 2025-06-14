import express from "express";
import recipeRoutes from "./routes/recipeRoutes";
import healthCheck from "./routes/healthCheck";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/", healthCheck);
app.use("/recipes", recipeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
