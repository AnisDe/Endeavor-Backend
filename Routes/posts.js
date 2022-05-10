const express = require('express');
const router = express.Router();

const posts = require('../controllers/posts');

router.post('/addPost', posts.AddPost);

router.get('/getAllPost', posts.listAllPost);