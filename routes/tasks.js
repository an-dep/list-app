const express = require('express');
const router = express.Router();
const taskController = require('../controller/taskController');



router.get('/tasks', function (req, res) {
    res.render('index',{title: 'Todo List'});
    router.get('/tasks', taskController.getAllTasks);
    router.post('/tasks/add', taskController.createTask);
    router.post('/tasks/update/:id', taskController.updateTask);
    router.post('/tasks/delete/:id', taskController.deleteTask);
});

module.exports = router;
