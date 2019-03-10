exports.createTodo = (req, res, next) => {
  res.render('CreateTodo', { pageTitle: 'Create Todo' });
};
