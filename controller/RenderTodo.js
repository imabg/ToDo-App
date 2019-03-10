const Todo = require('../model/Todo');

exports.RenderTodo = (req, res, next) => {
  Todo.findAll()
    .then(todo => {
      res.render('ViewTodo', { pageTitle: 'Home', todos: todo });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.CreateTodo = (req, res, next) => {
  res.render('CreateTodo', { pageTitle: 'Create Todo', edit: false });
};

exports.SaveTodo = (req, res, next) => {
  const title = req.body.title;
  const body = req.body.body;
  Todo.create({
    title: title,
    body: body
  })
    .then(() => {
      res.redirect('/');
    })
    .catch(err => {
      console.log(err);
    });
};

exports.DetailTodo = (req, res, next) => {
  const id = req.params.id;
  Todo.findByPk(id)
    .then(todo => {
      res.render('CreateTodo', {
        pageTitle: 'Edit Mode',
        edit: 'true',
        todo: todo
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.DeleteTodo = (req, res, next) => {
  const id = req.params.id;
  Todo.findByPk(id)
    .then(todo => {
      return todo.destroy();
    })
    .then(() => {
      console.log('Delete Successfully!');
      res.redirect('/');
    })
    .catch(err => {
      console.log(err);
    });
};

exports.SaveChange = (req, res, next) => {
  const id = req.params.id;
  const title = req.body.title;
  const body = req.body.body;
  Todo.findByPk(id)
    .then(todo => {
      todo.title = title;
      todo.body = body;
      return todo.save();
    })
    .then(() => {
      console.log('Updated!!');
      res.redirect('/');
    })
    .catch(err => {
      console.log(err);
    });
};
