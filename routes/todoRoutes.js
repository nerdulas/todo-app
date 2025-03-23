const express = require("express");
const Todo = require("../models/Todo");

const router = express.Router();

// Get all todos
router.get("/", async (req, res ) => {
    const todos = await Todo.find();
    res.json(todos);
});

// Add a new todo
router.post("/", async (req, res) => {
    const newTodo = new Todo(req.body);
    await newTodo.save();
    res.json(newTodo);
});

// Toggle completion status
router.put("/:id", async (req, res) => {
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true});
    res.json(updatedTodo);
});

// Delete a todo
router.delete("/:id", async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: "Todo delted" });
})

module.exports = router;