const { mongoose, autoIncrement } = require('../mongo')

const commentSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,//고유한 값(중복이면 저장실패)
        required: true,
    },
    //코멘트 작성자
    writer: {
        type:String,
        required: true,
    },
    content: { // start from 0
        type: String,
        required: true,
    },
    create_date: { 
        type:Date, 
        default:Date.now 
    },
    videoName:{
        type:String,
        required:true
    }
    /* ... */
});

// videoId를 Auto Increment 필드로 지정
commentSchema.plugin(autoIncrement, {
    model: 'Comment',
    field: 'id',
    startAt: 0
})

module.exports = mongoose.model('Comment', commentSchema)