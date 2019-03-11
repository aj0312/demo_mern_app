const express = require('express');
const app = express();
// const mongoOp = require('./mongo')
const bodyParser = require('body-parser')
const cors = require('cors')
const router = express.Router();
const port = process.env.PORT || 5000;
const mongoToDoConn = require('./mongo_todo')
let Todo = require('./todo.model')

app.use(bodyParser.json())
app.use(cors({credentials: true, origin: true}))

router.route('/users')
      .get((req, res) => {
        console.log(req.query);
        console.log(res)
      }).post((req, res) => {
        let db = new mongoToDoConn();
        console.log(req);

        db.userEmail = req.body.email_id

        db.userPassword = require('crypto')
                            .createHash('sha1')
                            .update(req.body.password)
                            .digest('base64')
        db.save(err => {
          console.log(err)
          res.json({status: err?false:true})
        })

      })

// app.use('/', router)
router.route('/').get( (req, res) => {
  Todo.find(
    (err, todos) => { 
      if(err) 
        console.log(err) 
      else 
        res.json(todos)
      }
  )
})
router.route('/:id').get(
  (req, res) => {
    let id = req.params.id
    Todo.findById(id, 
      (err, todo)  => res.json(todo)
    )
  }
)
router.route('/update/:id').post(
  (req, res) => {
    Todo.findById(req.params.id, 
      (err, todo) => {
        if (!todo)
          res.status(404).send(`data not found`)
        else
          todo.todo_description = req.body.todo_description
          todo.todo_responsible = req.body.todo_responsible
          todo.todo_priority = req.body.todo_priority
          todo.todo_completed = req.body.todo_completed

          todo.save().then(todo => {
            res.json(`Todo updated`)
          })
          .catch(err => 
            res.status(400).send(`Update not possible`)
          )
    })
})

router.route('/add').post( 
  (req, res) => {
    let todo = new Todo(req.body)
    todo.save()
        .then(
          todo => res.status(200).json({'todo': `Successfully added new todo`})
        )
        .catch(
          error => res.send(400).send(`adding new todo failed!`)
        )
  })

  app.use('/todos', router)
  
// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'Message from node' });
});