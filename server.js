const express = require('express');
const app = express();

app.use(express.static('dist'));
app.disable('x-powered-by');
app.get('/', (req, res) => {
  res.send('I\'m alive');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Lending page is listening on ${port}!`));
