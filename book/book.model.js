const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
	
	id:{type: Number, require:true},
	name:{type:String},
	image:{type:String},
	price:{type:String},
	author:{type:String},
})

const Book = mongoose.model("book",bookSchema);

module.exports =Book


