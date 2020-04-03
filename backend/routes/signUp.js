const { Router } = require('express')
const userModel = require('../db/models/user')//모델 가져온다
const passport = require("passport");
const router = Router();

router.post('/register', function (req, res, next) {
    const user = new userModel();
  // setting values
  console.log(req.body);
  var password = req.body.user.password;
  var name = req.body.user.name;
  
  userModel.findOne({name: name}, function(err, user){
      console.log('find user',err,user);
      if(err){return next(err);}
      if(user){
          //req.alart("이미 있는 아이디입니다.");
          res.redirect(301,"http://localhost:8080/register");
          return;
      }
      var newUser = new userModel({
          name: name,
          password: password,
      })
      res.json(newUser);
      newUser.save(next);
  })
},passport.authenticate("login", {
  successRedirect: "/",
  failureRedirect: "/register",
  failureFlash: true
}));


module.exports = router;
// https://velopert.com/332
