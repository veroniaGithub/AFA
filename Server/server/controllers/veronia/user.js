var user  =   require("../../models/veronia/user");
var nodemailer = require('nodemailer');
var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: "contact.veronia@gmail.com",
        pass: "veronia2017"
    }
});
var express     =   require("express");
var app         =   express();
exports.findAll = function(req,res){
    var response = {"error" : true,"message" : "didn't enter the controller"};
    user.find({},function(err,data){

        if(err) {
            response = {"error" : true,"message" : "Error fetching data"};
        } else {
            response = data;
        }
        res.json(response);
    });
};


exports.findById = function(req,res){
    var response = {"error" : true,"message" : "didn't enter the controller"};
    user.findById(req.params.id,function(err,data){
        if(err) {
            response = {"error" : true,"message" : "Error fetching data"};
        } else {
            response = {"error" : false,"message" : data};
        }
        res.json(response);
    });
};


exports.add = function(req,res){
    var db = new user();
    var response = {"error" : true,"message" : "didn't enter the controller"};
    db = req.body;
    db.save(function(err){
        if(err) {
            response = {"error" : true,"message" : "Error adding data"};
        } else {
            response = {"error" : false,"message" : "Data added"};
        }
        res.json(response);
    });
}


exports.update = function(req,res){
    var response = {"error" : true,"message" : "didn't enter the controller"};
    user.findById(req.params.id,function(err,data){
        if(err) {
            response = {"error" : true,"message" : "Error fetching data"};
        } else {
            data = req.body;
            data.save(function(err){
                if(err) {
                    response = {"error" : true,"message" : "Error updating data"};
                } else {
                    response = {"error" : false,"message" : "Data is updated for " + data};
                }
                res.json(response);
            })
        }
    });
}


exports.delete = function(req,res){
    var response = {"error" : true,"message" : "didn't enter the controller"};
    user.findById(req.params.id,function(err,data){
      response = {"error" : false,"message" : "still here"};
        if(err) {
            response = {"error" : true,"message" : "Error fetching data"};
        } else {
            user.remove({_id : req.params.id},function(err){
                if(err) {
                    response = {"error" : true,"message" : "Error deleting data"};
                } else {
                    response = {"error" : true,"message" : "Data associated with "+req.params.id+"is deleted"};
                }
            });
        }
        res.json(response);
    });
}
exports.sendMail =function (req, res) {
  var mailOpts = {
      from: req.body.email,
      to: 'contact.veronia@gmail.com',
      subject: req.body.name + '<' + req.body.email + '>'+ ' : CONTACTEZ-NOUS',
      text: 'Bnojour, ' +'\n\n' + req.body.message + '\n\n' + 'Cordialement, '+req.body.name
  };
  smtpTransport.sendMail(mailOpts, function (error, response) {
    if(error) console.log(error); else {
      var mailOptsresponse = {
          from: 'contact.veronia@gmail.com',
          to: req.body.email,
          subject: 'Mail reçu !',
          text: 'Bonjour, ' +'\n\n' + 'Merci pour contacter notre équipe ! Nous avons reçu votre mail et nous allons vous répondre dans les brefs délais.' + '\n\n' + 'Cordialement, VERONIA support team'
      };
      smtpTransport.sendMail(mailOptsresponse);
      res.redirect('/');
    }

  });
}
