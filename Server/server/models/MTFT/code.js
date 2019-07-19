var mongoose    =   require("mongoose");
var mongoSchema =   mongoose.Schema;

var codeSchema = {
  "value": String
}



module.exports = mongoose.model('mtft_codes',codeSchema);
