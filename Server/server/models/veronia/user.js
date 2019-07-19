var mongoose    =   require("mongoose");

var mongoSchema =   mongoose.Schema;

var userSchema  = {
    "firstname" : String,
    "lastname":String,
    "email":String,
    "password" : String,
};


module.exports = mongoose.model('veronia_users',userSchema);
