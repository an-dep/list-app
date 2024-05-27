var express = require('express');
var router = express.Router();
var taskController = require('../controller/taskController');

// router.get('/', function (req, res) {
//     res.render('index',{title: 'ai ma biet'});
// });
router.get('/tasks', taskController.getAllTasks);
router.post('/add', taskController.createTask);
router.post('/tasks/update/:id', taskController.createTask);
router.post('/tasks/delete/:id', taskController.deleteTask);

module.exports = router;