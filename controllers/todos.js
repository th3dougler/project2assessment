let todoModel = require("../data/todos");

function index(req, res, next) {
  res.render("index", {
    title: "Unit 2 Assessment",
    todos: todoModel,
  });
}

function create(req, res, next) {
    todoModel.push({
        todo: req.body.todo,
        done: false,
    })
    res.redirect('/');
    // todoModel.push()
}

function deleteOne(req, res, next) {
    let idx = Number.parseInt(req.params.id);
  todoModel.splice(idx, 1);
  res.redirect('/');
}

module.exports = {
  index,
  create,
  delete: deleteOne,
};
