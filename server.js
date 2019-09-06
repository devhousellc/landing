const express = require('express');
const app = express();

app.use(express.static('dist'));
app.get('/', (req, res) => {
  res.send('I\'m alive');
});

app.listen(80, () => console.log('Lending page is listening on 80!'));
