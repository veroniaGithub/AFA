var feed  =   require("../../models/MTFT/feed");
var express     =   require("express");
var app         =   express();

exports.findAll = function(req,res){
    feed.find({}).sort('-specDate').exec(function(err,data){

        if(err) {
            var response = [];
        } else {
            var response = data;
        }
        res.json(response);
    });
};

exports.add = function(req,res){
    var newdb =  req.body;
    newdb.specDate = new Date();
    var db = new feed(newdb);
    db.save(function(err){
        if(err) {
            response = {"error" : true,"message" : err};
        } else {
            response = {"error" : false,"message" : "Data added"};
        }
        res.json(response);
    });
}


exports.update = function(req,res){
    var response = {"error" : true,"message" : "didn't enter the controller"};
    feed.update({_id: req.params.id},req.body,function(err,data){
        if(err) {
            response = {"error" : true,"message" : err};
            res.json(response);
        } else {
            response = {"error" : false,"message" : "Data is updated for " + req.params.id};
            res.json(response);
        }
    });
}

exports.delete = function(req,res){
    var response = {"error" : true,"message" : "didn't enter the controller"};
    feed.deleteOne( { "_id" : req.params.id },function(err,data){
      if(err) {
          response = {"error" : true,"message" : "Error fetching data"};
      } else {
        response = {"error" : true,"message" : "Data associated with "+req.params.id+"is deleted"};
      }
      res.json(response);
    });
}
