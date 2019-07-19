var code  =   require("../../models/MTFT/code");
var express     =   require("express");
var app         =   express();
var user  =   require("../../models/MTFT/user");
var nodemailer = require('nodemailer');

exports.loginUser = function(req,res){
    user.find({facebook_email: req.body.facebook_email},function(erroruser,founduser){
      if (erroruser) res.json({"erroruser": erroruser});
        if(founduser.length > 0) {
            var response = {"user": founduser[0]};
            res.json(response);
        } else {
          code.find({},function(errorcode,foundcode){
            if (errorcode) res.json({"errorcode": errorcode})
                if(foundcode[foundcode.length - 1]) {
                  var new_code = foundcode[foundcode.length - 1].value.toString();
                }
                else {
                  var new_code = '1234567890';
                }
                if (foundcode[foundcode.length - 1]);
                    code.deleteOne({"_id" : foundcode[foundcode.length - 1]._id},function(errordelete,datadelete){
                if(errordelete) res.json({"errorcode": errordelete});
                var mailOpts = {
                    from: 'contact.veronia@gmail.com',
                    to: req.body.email,
                    subject: "Code d'activation: One Million Trees For Tunisia !",
                    text: 'Bonjour, ' +'\n\n' + "le code d'activation est : \n" + foundcode[foundcode.length - 1].value.toString() + '\n\n' + 'Cordialement, ACACIAS FOR ALL'
                };
                var smtpTransport = nodemailer.createTransport({
                    service: "gmail",
                    host: "smtp.gmail.com",
                    auth: {
                        user: "contact.veronia@gmail.com",
                        pass: "veronia2017"
                    }
                });

                smtpTransport.sendMail(mailOpts, function (error, result) {
                  if (error) res.json({"error": error})
                  var new_user = new user(req.body);
                  new_user.code = new_code;
                  new_user.save(function(err){
                      var response = {"user": new_user};
                      res.json(response);
                  });
                });
              });

          });
        }
    });
};
