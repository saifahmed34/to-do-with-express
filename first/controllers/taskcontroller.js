const Task = require("../models/taskmodels");

// Get all tasks
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.send(tasks);
    } catch (err) {
        res.status(500).send("Error fetching tasks");
    }
};

// Create a new task
const createTask = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) return res.status(400).send("Name is required");

        const newTask = await Task.create({ name });
        res.status(201).send(newTask);
    } catch (err) {
        res.status(500).send("Error creating task");
    }
};

// Update a task by MongoDB ID
const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;

        const updated = await Task.findByIdAndUpdate(id, { name }, { new: true });
        if (!updated) return res.status(404).send("Task not found");

        res.send(updated);
    } catch (err) {
        res.status(500).send("Error updating task");
    }
};

// Delete a task by MongoDB ID
const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;

        const deleted = await Task.findByIdAndDelete(id);
        if (!deleted) return res.status(404).send("Task not found");

        res.send(deleted);
    } catch (err) {
        res.status(500).send("Error deleting task");
    }
};

module.exports = {
    getTasks,
    createTask,
    updateTask,
    deleteTask
};
