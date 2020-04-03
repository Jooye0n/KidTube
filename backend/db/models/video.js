const { mongoose, autoIncrement } = require('../mongo')

const userSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,//고유한 값(중복이면 저장실패)
        required: true,
    },
    name: {
        type:String,
        required: true,
    },
    viewCount: { // start from 0
        type: Number,
        required: true,
    },
    create_date: { 
        type:Date, 
        default:Date.now 
    },
    //비디오 업로드한 사용자명
    upLoader: {
        type: String,
        required: true,
    },
    comment:{
        type: String
    }
    /* ... */
});

// videoId를 Auto Increment 필드로 지정
userSchema.plugin(autoIncrement, {
    model: 'Video',
    field: 'id',
    startAt: 1001
})

module.exports = mongoose.model('Video', userSchema)
