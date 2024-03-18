const express = require('express');
const recipeRoute = require('./routes/Recipes')
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3002; // i accidentally screwed up port 3001 and decided to use 3002 (didn't restart 3001), but you can switch it back to 3001 when you want to test it
const path = require('path');

app.use(bodyParser.json());

app.use('/api/recipes', recipeRoute);

// serve static files (React app) from the build directory
app.use(express.static(path.join(__dirname,'..','build')));

// serve static image files from the public directory
app.use('/img', express.static(path.join(__dirname, 'public', 'img')));

// Catch-all route to serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

// start the server
const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = server