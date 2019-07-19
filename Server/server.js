var express     =   require("express");
var app         =   express();
var bodyParser  =   require("body-parser");
var mongoose    =   require('mongoose');
var compression = require('compression')
var fs = require('fs');

var options = {
    server: {
        socketOptions: {
            keepAlive: 300000,
            connectTimeoutMS: 30000
        }
    },
    replset: {
        socketOptions: {
            keepAlive: 300000,
            connectTimeoutMS: 30000
        }
    }
};
mongoose.connect('mongodb://veronia:veronia2017@ds129723.mlab.com:29723/veronia',options);
// mongoose.connect('mongodb://localhost:27017/veronia',options);
app.use(compression())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended" : false}));
app.use(express.static(__dirname + '/client'));
app.use('/data', express.static(__dirname + '/client/'));


app.get('/', function(req, res) {
  res.render('index.min.html');
});

//Create Routes
require('./server/routes')(app);

app.listen(process.env.PORT || 3100, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
