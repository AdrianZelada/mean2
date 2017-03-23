/**
 * Created by iZel on 3/21/17.
 */
let mongoose=require('mongoose');

let User = mongoose.Schema({
    name: String,
    category:String,
});

module.exports=mongoose.model('User',User);