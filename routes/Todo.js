const express = require('express');
const router = express.Router();

const Home = require('../controller/RenderTodo');

router.get('/', Home.RenderTodo);

router.get('/create', Home.CreateTodo);

router.post('/save', Home.SaveTodo);

router.get('/view/:id', Home.DetailTodo);

router.get('/delete/:id', Home.DeleteTodo);

router.post('/changeSave/:id', Home.SaveChange);

module.exports = router;
