let express = require('express');
let app = express();

app.listen(3000);

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.redirect('http://oceal.co/index.html');
});
