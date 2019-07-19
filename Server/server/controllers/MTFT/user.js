var user  =   require("../../models/MTFT/user");
var express     =   require("express");
var app         =   express();

exports.findAllCoordsExceptUser = function(req,res){
    user.find({"_id": { $ne: req.params.user_id }},function(err,data){

        if(err) {
            var response = [];
        } else {
            var response = [];
            data.forEach((userE => {
                userE.coords.forEach(coordE =>{
                    if(coordE.color == "green"){
                        var coordToAdd = {
                            "lat": coordE.lat,
                            "lng": coordE.lng,
                            "number": coordE.number,
                            "image": coordE.image
                        }
                        response.push(coordToAdd);
                    }
                })
            }))
        }
        res.json(response);
    });
};
exports.findAll = function(req,res){
    user.find({}).sort('-totalArbres').exec(function(err,data){

        if(err) {
            var response = [];
        } else {
            var response = data;
        }
        res.json(response);
    });
};
exports.update = function(req,res){
    var response = {"error" : true,"message" : "didn't enter the controller"};
    user.update({_id: req.params.id},req.body,function(err,data){
        if(err) {
            response = {"error" : true,"message" : "Error fetching data"};
            res.json(response);
        } else {
            response = req.body;
            res.json(response);
        }
    });
}

exports.delete = function(req,res){
    var response = {"error" : true,"message" : "didn't enter the controller"};
    user.deleteOne( { "_id" : req.params.id },function(err,data){
      if(err) {
          response = {"error" : true,"message" : "Error fetching data"};
      } else {
        response = {"error" : true,"message" : "Data associated with "+req.params.id+"is deleted"};
      }
      res.json(response);
    });
}
exports.findByCoords = function(req,res){
    user.find( { "_id" : req.params.user_id, "coords.lat": req.params.lat, "coords.lng": req.params.lng},function(err,data){
      if(err) {
        var  response = {"error" : true,"message" : "Error fetching data"};
      } else {
       var  response = data;
      }
      res.json(response);
    });
}