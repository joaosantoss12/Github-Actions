const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Hello World app listening at http://localhost:${port}`);
});
