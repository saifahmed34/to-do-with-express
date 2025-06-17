const task = require("../models/taskmodels");

let id = 1;

const getTasks = (req, res) => {
    res.send(task);
    console.log(task);
};

const createTask = (req, res) => {
    const name = req.body.name;
    task.push({ id: id++, name });
    res.status(201).send();
};

const updateTask = (req, res) => {
    const id = parseInt(req.params.id);
    if (!id) {
        return res.status(400).send("Invalid ID");
    }

    const taskupdate = task.find(t => t.id === id);
    if (!taskupdate) {
        return res.status(404).send("Task not found");
    }

    const { name } = req.body;
    taskupdate.name = name;
    res.send(taskupdate);
};

const deleteTask = (req, res) => {
    const id = parseInt(req.params.id);
    const index = task.findIndex(t => t.id === id);
    if (index === -1) {
        return res.status(404).send("This task was not found");
    }

    const deleted = task.splice(index, 1)[0];
    res.send(deleted);
};

module.exports = {
    getTasks,
    createTask,
    updateTask,
    deleteTask
};
