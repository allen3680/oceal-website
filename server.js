let express = require('express');
let app = express();

app.listen(3000, () => {
  console.log(`listen on port: ${port}`);
});

app.use(express.static('view'));

app.get('/', (req, res) => {
  res.redirect('http://oceal.co/index.html');
});
