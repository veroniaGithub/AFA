var express     =   require("express");
var app         =   express();


module.exports = function(app){
    //******************************require from controllers****************************//
    var veronia_users = require('./controllers/veronia/user');
    var mtft_users = require('./controllers/MTFT/user');
    var mtft_login = require('./controllers/MTFT/login');
    var mtft_changeMail= require('./controllers/MTFT/changeMail');    

    var mtft_feeds = require('./controllers/MTFT/feed');
    var mtft_codes = require('./controllers/MTFT/code');

    //*****************************set routes******************************************//

    //veronia
    app.get('/veronia/ws_users', veronia_users.findAll);
    app.get('/veronia/ws_users/:id', veronia_users.findById);
    app.post('/veronia/ws_users', veronia_users.add);
    app.put('/veronia/ws_users/:id', veronia_users.update);
    app.delete('/veronia/ws_users/:id', veronia_users.delete);
    app.post('/contact', veronia_users.sendMail);


    //MTFT
    app.post('/mtft/ws_login', mtft_login.loginUser);

    app.post('/mtft/ws_changemail', mtft_changeMail.change);    

    app.get('/mtft/ws_users', mtft_users.findAll);
    app.get('/mtft/ws_users/:user_id', mtft_users.findAllCoordsExceptUser);
    app.post('/mtft/ws_users/:id', mtft_users.update);
    app.delete('/mtft/ws_users/:id', mtft_users.delete);
    app.get('/mtft/ws_users/coords/:user_id/:lat/:lng', mtft_users.findByCoords);

    app.get('/mtft/ws_feeds', mtft_feeds.findAll);
    app.post('/mtft/ws_feeds', mtft_feeds.add);
    app.post('/mtft/ws_feeds/:id', mtft_feeds.update);
    app.delete('/mtft/ws_feeds/:id', mtft_feeds.delete);

    app.get('/mtft/ws_codes', mtft_codes.findLast);
    app.get('/mtft/ws_codes/:value', mtft_codes.findcode);
    app.delete('/mtft/ws_codes/:id', mtft_codes.delete);
}
