var mongoose    =   require("mongoose");
var mongoSchema =   mongoose.Schema;

var coordsSchema = {
  "lat" : Number,
  "lng" : Number,
  "color" : String,
  "image" : String,
  "species" : String,
  "number" : Number,
  "date" : String
}

var userSchema  = {
    "name" : String,
    "email":String,
    "photo" : String,
    "coords" : [coordsSchema],
    "totalArbres": Number
};
var feedSchema  = {
  "user" : userSchema,
  "date": String,
  "image" : String,
  "likes": Number,
  "lat": Number,
  "lng": Number,
  "specDate" : Date

};


module.exports = mongoose.model('mtft_feeds',feedSchema);
