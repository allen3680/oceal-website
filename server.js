let express = require('express');
let app = express();

app.listen(80, () => {
  console.log(`listen on port: 80`);
});

app.use(express.static('view'));

app.get('/', (req, res) => {
  res.redirect('http://oceal.co/index.html');
});
