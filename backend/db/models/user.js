const { mongoose, autoIncrement } = require('../mongo')

const userSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,//고유한 값(중복이면 저장실패)
        required: true,
    },
    name: {
        type:String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    create_date: { 
        type:Date, 
        default:Date.now 
    }

    /* ... */
});

// doctorId를 Auto Increment 필드로 지정
userSchema.plugin(autoIncrement, {
    model: 'User',
    field: 'id',
    startAt: 1
})

module.exports = mongoose.model('User', userSchema)
