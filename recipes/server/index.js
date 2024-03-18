const express = require('express');

const app = express();
const PORT = process.env.PORT || 3002;

const recipeRoute = require('./routes/Recipes');
const reactAppRouter = require('./routes/ReactApp');
app.use('/api/recipes', recipeRoute);
app.use(reactAppRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});