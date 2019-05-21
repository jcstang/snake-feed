const express = require('express');
const bodyParser = require('body-parser');
const debug = require('debug')('app:authRoutes');

const authRouter = express.Router();

function router(titleThing) {

    authRouter.route('/signUp')
      .post((req, res) => {
        debug(req.body);
        //create user
        //log them in
        req.login(req.body, ()=> {
          res.redirect('/auth/profile');
        });
        res.json(req.body);
      });
  authRouter.route('profile')
      .get((req, res) => {

      });
  return authRouter;
}



// function router(titleThing) {
//   signinRouter.route('/')
//     .get( (req, res) => {
//       res.render(
//         'signin',
//         {
//           title: titleThing
//         }
//       );
//     });
//   return signinRouter;
// };

//if you don't have the module exports than app crashes
module.exports = router;