const { Router } = require('express')
const User = require('../db/models/user')//모델 가져온다
const crypto = require('crypto');//node.js에서 제공하는 암호화 모듈이다
const router = Router();

//Login
router.get('/', function (req, res, next) {
});

//checkLogin
router.post('/checkUser', function(req, res, next) {
  const user = new User();
  // setting values
  console.log(req.body);
  // user.id = req.body.user.id;
  // user.password = req.body.user.password;
  // user.name = req.body.user.name;
  
  // //DB에 암호화 하여 저장하였으니 DB에서 확인할때도 암호화 된 키로 확인한다
  // let  cipher = crypto.createCipher('aes192', 'key');
  // cipher.update(req.body.user.password,'utf8', 'base64');
  // let cipherPw = cipher.final('base64');

  
  // User.findOne({name: "닉네임2"}, function(err, user){
  //   console.log(err,user);
  // })

  // find user in MongoDB
  User.findOne({name: req.body.name}, function(err, user){
    console.log('find User', err, user);
    // 구문 error
    if(err) return res.status(500).json({error: err});
    // User가 없으면 
    if(!user) {
      // 유저없다는걸 보내야지!!!!!!
      res.json({result: -1});
      return;
      user.save(function(err){
        
        if(err){
          console.error(err);
          res.json({result: 0});
          return;
        }
        res.json({result: 1});
      }); 
    } else { //존재하는 password, id이면 user을 vue로 보냄
      res.json(user);
    }
  })


});

module.exports = router

// blog.naver.com/PostView.nhn?blogId=kangminser88&logNo=221152151491&targetKeyword=&targetRecommendationCode=1&proxyReferer=https%3A%2F%2Fwww.google.co.kr%2F
// http://3dmpengines.tistory.com/1874 로그인