const { Router } = require('express')

const router = Router();

//채널별 동영상 list get
router.get('/channelList', function (req, res, next) {
    
});

//채널별 동영상 업로드 
router.post('/upload', function (req, res, next) {
    
});

//user의 DB에 구독 채널 추가 
router.post('/addSubscribe', function (req, res, next) {
    
});

//user의 DB에서 구독 채널 삭제
router.post('/deleteSubscribe', function (req, res, next) {
    
});



module.exports = router
