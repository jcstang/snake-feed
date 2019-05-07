const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const debug = require('debug')('app');

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '/public')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

const signinRouter = require('./src/routes/signinRoutes')('Danger Noodle Noms');
const authRouter = require('./src/routes/authRoutes')('Danger Noodle Noms');

app.use('/signin', signinRouter);
app.use('/auth', authRouter);

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