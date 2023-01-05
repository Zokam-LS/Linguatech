const express = require('express');
const app = express();

const router = require('./routes/router')

const port = 3333;

/** EJS - Template Engine  **/
app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.static('public'));

app.use(router);

/** Run application  **/
app.listen(port, () => {
  console.log(`---------------------------`);
  console.log(`Server running on port ${port}`);
  console.log(`---------------------------`);
})