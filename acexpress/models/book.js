var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var book= new Schema(
    {name:String,email:String,password:String,contact:Number}
);
mongoose.model('books',book);