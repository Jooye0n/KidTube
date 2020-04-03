//const { Router } = require('Express');
//const router = Router();
const mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment')
const { DB } = require('../constants');

const multer = require('multer');
const Grid = require('gridfs-stream');

mongoose.connect(DB, {
    useCreateIndex: true,
    useNewUrlParser: true})
    .then(() => {
console.log('mongoDB is connected...')
})
.catch((err) => {
throw err
});
const conn = mongoose.connection;

let gfs = null;

conn.once('open', ()=>{
    console.log('database connected');
    gfs = Grid(conn.db, mongoose.mongo);
    //console.log("1111321");
    //console.log(gfs);
});
const storage = require('multer-gridfs-storage')({
    url: DB,
    file: (req, file) => {
        return{
            filename: file.originalname,

        }
    }
});
//};
const upload = multer({
    storage: storage
}).single('file'); //vue post 에서 id = 'file'

// Auto Increment 플러그인
autoIncrement.initialize(mongoose.connection);

module.exports = {
    mongoose,
    conn,
    autoIncrement: autoIncrement.plugin,
    upload,
    gfs,
    Grid
};
