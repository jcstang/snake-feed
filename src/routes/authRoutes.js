const express = require('express');
const bodyParser = require('body-parser');
const debug = require('debug')('app:authRoutes');

const authRouter = express.Router();

function router(titleThing) {
  // authRouter.route('/')
  //   .get((req, res) => {
  //     res.render(
  //       'signin',
  //       {
  //         title: titleThing
  //       }
  //     )
  //   });
  // authRouter.route('/signin')
  //   .post((req, res) => {
  //     console.log(req.body);
  //     console.log(req.get('content-type'));
  //     console.log(req.headers);
  //     console.log(req.params);
  //     console.log(req.statusMessage);
  //     //debug(req.body);
  //     //console.log(req.body);
  //     res.json(req.body);
  //   });
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