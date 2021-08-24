const mongoose = require('mongoose')

mongoose.connect(process.env.MOGO_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})