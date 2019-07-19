var code = require("../../models/MTFT/code");
var express = require("express");
var app = express();
var user = require("../../models/MTFT/user");
var nodemailer = require('nodemailer');

exports.change = function (req, res) {
    console.log(req.body.email)
    var mailOpts = {
        from: 'contact.veronia@gmail.com',
        to: req.body.email,
        subject: "Code d'activation: One Million Trees For Tunisia",
        text: 'Bonjour, ' + '\n\n' + "le code d'activation est : \n" + req.body.code + '\n\n' + 'Cordialement, ACACIAS FOR ALL'
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
        if (error) res.json({ "error": error })
        var new_user = new user(req.body);
        user.find({"email": req.body.email},function(errorFind,dataFind){
            if (dataFind.length>0){
                var response = { "user": {} };
                res.json(response);
            }
            else {
                user.update({ _id: req.params._id },new_user,function (err) {
                    var response = { "user": new_user , "responseSendMail": result};
                    res.json(response);
                });
            }
        })
    });
};
