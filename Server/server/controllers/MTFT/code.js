var code  =   require("../../models/MTFT/code");
var express     =   require("express");
var app         =   express();

exports.findcode = function(req,res){
    code.find({value: req.params.value},function(err,data){

        if(err) {
            var response = [];
        } else {
            var response = data;
        }
        res.json(response);
    });
};
exports.findLast = function(req,res){
    code.find({},function(err,data){

        if(err) {
            var response = [];
        } else {
            var response = data[data.length-1];
        }
        res.json(response);
    });
};

exports.delete = function(req,res){
    var response = {"error" : true,"message" : "didn't enter the controller"};
    code.deleteOne( { "_id" : req.params.id },function(err,data){
      if(err) {
          response = {"error" : true,"message" : "Error fetching data"};
      } else {
        response = {"error" : true,"message" : "Data associated with "+req.params.id+"is deleted"};
      }
      res.json(response);
    });
}
