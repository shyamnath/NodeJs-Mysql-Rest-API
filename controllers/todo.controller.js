const todoController = require('./../models').todo;

exports.greeting = async (req, res) => {
    res.send('Hello from the ToDo Controller');
};

exports.createTodo = async (req, res) => {
    const { title, description } = req.body;
    todo = await todoController.create({ title, description });
    res.send(todo);
};

exports.getAllTodos = async (req, res) => {
    todoList = await todoController.findAll();
    res.send(todoList);
};

exports.updateTodo = async (req, res) => {
    const id = req.params.id;
    const { title, description } = req.body;

    todo = await todoController.update(
        { title, description },
        { returning: true, where: { id } }
    );

    res.send(todo);
};

exports.deleteTodo = async (req, res) => {
    const id = req.params.id;
    await todoController.destroy({
        where: {
            id
        }
    });
    res.send({ 'message': 'Todo deleted succesfully' });
};