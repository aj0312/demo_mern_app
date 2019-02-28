const express = require('express');
const app = express();
const mongoOp = require('./mongo')
const bodyParser = require('body-parser')
const cors = require('cors')
const router = express.Router();
const port = process.env.PORT || 5000;

app.use(bodyParser.json())
app.use(cors({credentials: true, origin: true}))

router.route('/users')
      .get((req, res) => {
        console.log(req.query);
        console.log(res)
      }).post((req, res) => {
        let db = new mongoOp();
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

app.use('/', router)

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'Message from node' });
});