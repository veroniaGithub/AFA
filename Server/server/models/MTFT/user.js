var mongoose    =   require("mongoose");

var mongoSchema =   mongoose.Schema;

var coordsSchema = {
  "lat" : Number,
  "lng" : Number,
  "color" : String,
  "image" : String,
  "species" : String,
  "number" : Number,
  "date" : String,
  "date_id": String
}

var userSchema  = {
    "name" : String,
    "email":String,
    "facebook_email": String,
    "photo" : String,
    "coords" : [coordsSchema],
    "totalArbres": Number,
    "code": String,
    "verified": false,
    "likes": []
};


module.exports = mongoose.model('mtft_users',userSchema);
