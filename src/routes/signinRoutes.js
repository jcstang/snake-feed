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