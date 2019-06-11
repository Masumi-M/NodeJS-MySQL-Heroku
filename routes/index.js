var express = require('express');
var router = express.Router();

// Require mysqlConnection
const connection = require('../public/javascripts/mysqlConnection');

/* GET index page. */
router.get('/', function (req, res, next) {
  indexRender(res);
});

/* POST new todo. */
router.post('/', function (req, res, next) {
  console.log('CreateTodo');
  console.log(req.body.todo_content);

  connection.query('INSERT INTO todoList (name) VALUES(?);', req.body.todo_content, (error, response) => {
    if (error) {
      console.error('Insert Error:' + error);
    } else {
      console.log('Insert Success');
      indexRender(res);
    }
    return;
  });
});

/* Render Function */
const indexRender = (res) => {
  connection.query('SELECT name FROM todoList ORDER BY ID ASC;', (error, response) => {
    if (error) {
      console.error('Read Error:' + error);
    } else {
      console.log('Read Success');
      res.render('index', {
        title: 'Todo List',
        todos: response
      });
    }
    return;
  });
}

module.exports = router;