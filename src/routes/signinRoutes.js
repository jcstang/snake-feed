const express = require('express');

const signinRouter = express.Router();

function router(titleThing) {
  signinRouter.route('/')
    .get( (req, res) => {
      res.render(
        'signin',
        {
          title: titleThing
        }
      );
    });
  return signinRouter;
};

//if you don't have the module exports than app crashes
module.exports = router;



// const express = require('express');
// const debug = require('debug')('app:aboutRoutes');

// const aboutRouter = express.Router();

// function router(titleThing) {
//   aboutRouter.route('/')
//     .get((req, res) => {
//       res.render(
//         'about',
//         {
//           title: titleThing
//         }
//       );
//     });
//   return aboutRouter;
// };

// module.exports = router;