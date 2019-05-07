const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

const signinRouter = require('./src/routes/signinRoutes')('Danger Noodle Noms');
app.use('/signin', signinRouter);

// const aboutRouter = require('./src/routes/aboutRoutes')('About Pages');
// const showsRouter = require('./src/routes/showsRoutes')('Shows Page');
// app.use('/about', aboutRouter);
// app.use('/shows', showsRouter);

app.get('/', (req, res) => {
  res.render(
      'index',
      {
        title: 'Snake-Feed',
        titleAlt: 'Danger Noodle Noms'
      }
  );
});

// app.get('/signin', (req, res) => {
//   res.render(
//     'signin',
//     {
//       titleAlt: 'Danger Noodle Noms'
//     }
//   );
// });

app.listen(port, () => {
  console.log(`listenting on port ${port}`);
});