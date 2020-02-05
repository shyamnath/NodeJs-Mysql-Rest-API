const todoController = require('./../controllers/todo.controller')
var express = require('express')
var router = express.Router()

router.get("/", todoController.greeting)
router.post("/", todoController.createTodo)
router.get("/all", todoController.getAllTodos)
router.put("/:id", todoController.updateTodo)
router.delete("/:id", todoController.deleteTodo)

module.exports = router;