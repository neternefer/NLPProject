const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 5000;
const Aylien = require("aylien_textapi");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static('dist'));

const textApi = new Aylien({
  application_id: "ef81c1c2",
  application_key: "45a709371915f5c7bddee79ca6757ced"
});

app.get('/', (req, res) => {
  res.sendFile('dist/index.html');
});

app.post('/sentiment', (req, res) => {
  const param = req.body.text ? { text: req.body.text } : { url: req.body.url }
  textApi.sentiment(param, (error, result) => {
    res.send(result);
  });
});

app.listen(port, () => console.log(`Aylien app listening on port ${port}!`));
