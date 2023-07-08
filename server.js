const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
})

app.post('/', (req,res) => {
    var wt = Number(req.body.weight);
    var ht = Number(req.body.height);
    ht/=100;
    var bmi = wt/(ht*ht);
    bmi = +bmi.toFixed(2);

    res.send("Your BMI is " + bmi);
})


app.listen(port, () => {
  console.log(`BMI Calculator app listening on port ${port}`)
})
