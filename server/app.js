const express = require('express');
const bodyParser = require('body-parser');
const sort = require('./../client/helpers/sort.js').sort;
const PORT = 3000;
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, '../client')));

// also works
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname + './../client/index.html'));
// })

app.post('/sort', (req, res) => {
  let term = req.body.input;
  let sorted = sort(term);
  
  res.send({
    input: term,
    sorted: sorted
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})