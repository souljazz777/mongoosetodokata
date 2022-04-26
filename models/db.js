const dotenv = require('dotenv');
const { default: mongoose } = require('mongoose');

dotenv.config({path:"./config.env"})
const DB = process.env.DATABASE.replace(
    '<password>',
    process.env.DATABASE_PASSWORD
)

mongoose.connect(DB)
    .then(() => {
        console.log('資料庫連線成功')
    })
    .catch((error) => {
        console.log('error')
    })

module.exports = DB
    