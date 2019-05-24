const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const debug = require('debug')('app');

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '/public')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

//const signinRouter = require('./src/routes/signinRoutes')('Danger Noodle Noms');
//const authRouter = require('./src/routes/authRoutes')('Danger Noodle Noms');

//app.use('/signin', signinRouter);
//app.use('/auth', authRouter);

const listOfImgs = [
  { link: 'https://source.unsplash.com/JVeSvSfzWSE', title: 'Blah'},
  { link: 'https://source.unsplash.com/uywhcKtg5SQ', title: 'Blah'},
  { link: 'https://source.unsplash.com/gUkGFLbN4us', title: 'Blah'},
  { link: 'https://source.unsplash.com/g3qrH9Mm93k', title: 'Blah'},
  { link: 'https://source.unsplash.com/87oQ_cUO1Ns', title: 'Blah'},
  { link: 'https://source.unsplash.com/b13VqWj-gmU', title: 'Blah'},
  { link: 'https://source.unsplash.com/va-wXGiYUao', title: 'Blah'},
  { link: 'https://source.unsplash.com/sai-x7brics', title: 'Blah'},
  { link: 'https://source.unsplash.com/rQ9QfnEEmrQ', title: 'Blah'}
];


app.post('/auth/signin', (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

app.get('/auth', (req, res) => {
  res.render(
    'signin',
    {
      title: 'Danger'
    }
  )
})

// authRouter.route('/signin')
//     .post((req, res) => {
//       console.log(req.get('content-type'));
//       console.log(req.headers);
//       console.log(req.params);
//       console.log(req.statusMessage);
//       //debug(req.body);
//       //console.log(req.body);
//       res.json(req.body);
//     });

app.get('/', (req, res) => {
  res.render(
      'index',
      {
        title: 'Snake-Feed',
        titleAlt: 'Danger Noodle Noms',
        listOfImgs
      }
  );
});

app.listen(port, () => {
  console.log(`listenting on port ${port}`);
});