const express = require('express');
const path = require('path');

const router = express.Router();

// this serves the React frontend
router.use(express.static(path.join(__dirname, '..', '..', 'build')));

// if the server doesn't have the route, serve index.html
// so that the React router handles it
router.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "..", '..', "build", "index.html"));
});

module.exports = router;