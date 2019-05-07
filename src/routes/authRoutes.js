const express = require('express');
const bodyParser = require('body-parser');
const debug = require('debug')('app:authRoutes');

const authRouter = express.Router();

function router(titleThing) {
  authRouter.route('/signin')
    .post((req, res) => {
      debug(req.body);
      console.log(req.body);
      res.json(req.body);
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