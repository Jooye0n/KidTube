const { Router } = require('express');
const router = Router();
const up = require('../db/mongo');
const GFS = require('../db/mongo');
const videoModel = require('../db/models/video');
const commentModel = require('../db/models/comment')

//비디오 추가
router.post('/upload', up.upload, (req, res)=>{
    //console.log(req.file);
    if(req.file){
        //const video = new videoModel();
        //video.name = req.body.video.name;
        //video.videoName = req.file.name;
        //console.log(req.file);

        return res.json({
            success: true,
            file: req.file
        })
    }
    res.send({ success: false });
});
router.get('/upload', function (req, res) {
    res.send('upload');
});


//GET http://localhost:8000/video/[videoId]
router.get('/:filename', function (req, res, next) {
    //videoId 를 files_id로 변환시켜서 찾아야함
    GFS.gfs = GFS.Grid(GFS.conn.db, GFS.mongoose.mongo);
    console.log(req.params.filename);
    GFS.gfs.files.find({
        filename: req.params.filename
    }).toArray((err, file) => {
        if(!file || file.length === 0){
            return res.status(404).json({
                message: "Video not found"
            });
        }
        console.log("22");
        var readStream = GFS.gfs.createReadStream({
            filename: file[0].filename
        });
        console.log("33");
        res.set('Content-Type', file[0].contentType);
        return readStream.pipe(res);
    });
});
router.get('/', (req, res) => {
    GFS.gfs = GFS.Grid(GFS.conn.db, GFS.mongoose.mongo);
    //console.log(GFS.gfs);
    GFS.gfs.files.find({})
        .toArray((err, files) => {
            console.log(files);
        if (!files || files.length === 0) {
            return res.status(404).json({
                message: "Could not find files"
            });
        }
        return res.json(files);
    });
});
//댓글 추가 
router.post('/addCommet/:VideoName', function (req, res, next) {
    console.log(req.body.writer+" "+req.body.content+" "+req.body.videoName+" ")
    commentModel.create({writer: req.body.writer, content: req.body.content, videoName:req.body.videoName}, function(err, s){
        if(err)
        {
            console.log("코멘트 등록 에러")
            res.json({result: 0}); 
        }
        else{
            console.log("[writer]"+req.body.writer+"[content]"+req.body.content+"[비디오명]"+req.body.videoName)
            res.json({result: 1});
        }
    })
    
});

//댓글 삭제 
router.get('/deleteComment/:videoName', function (req, res, next) {
    
});

//비디오 코멘트 목록 가져오기
router.get('/commentsList/:videoName', function (req, res, next) {
    console.log(req.params.videoName)
    commentModel.find({videoName:req.params.videoName}, function(err, comments){
        if(err){
            return res.send(err);
        }
        else{
            console.log(comments)
            res.json(comments);
        }
    
    })

    
});





module.exports = router
