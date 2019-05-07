const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render(
      'index',
      {
        title: 'Snake-Feed',
        titleAlt: 'Danger Noodle Noms'
      }
  );
});

app.listen(port, () => {
  console.log(`listenting on port ${port}`);
});