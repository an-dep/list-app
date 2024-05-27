const Task = require('../models/taskModel');

exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.render('tasks', { tasks: tasks }); // Đảm bảo biến tasks được truyền vào template jade
    } catch (err) {
        res.status(500).send('Server bị lỗi');
    }
};

exports.createTask = async (req, res) => {
    const { title, description } = req.body;
    try{
        await Task.create({title, description});
        res.redirect('/');
    }catch (error){
        res.status(500).send('server bij loi');
    }
}
exports.updateTask = async (req, res) => {
    const taskId = req.params.id;
    const {title, description, is_completed} = req.body;
    try{
        await Task.update({title, description, is_completed},
            {where: {id: taskId}}
            );
        res.redirect('/');
    }catch (error){
        res.status(500).send('server bij loi');
    }
}

exports.deleteTask = async (req, res) => {
    const taskId = req.params.id;
    try {
        await Task.destroy({where: {id: taskId}});
        res.redirect('/');
    }catch (error){
        res.status(500).send('server bij loi');
    }
}