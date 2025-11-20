const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://tilak:1234567890@cluster0.mlaafeg.mongodb.net/Card")

const CardSchema = mongoose.Schema({
    name : {type:String, required:true},
    description : {type:String},
    interest : [{type:String}],
    links : {
        linkedIn : {type:String},
        instagram : {type:String}
    }
})

const Card = mongoose.model('Card', CardSchema)

module.exports = {Card}