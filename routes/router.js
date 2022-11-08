const express = require('express');
const router = express.Router();

// paths
const news = require('./api/data/news');
const projects = require('./api/data/project');
const grants = require('./api/data/grant')

// data routes
router.get('/data/news', news.getNews);
router.get('/data/projects', projects.getProjects);
router.post('/data/grants/add', grants.addOne);

module.exports = router;
