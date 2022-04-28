const express = require('express');

let app = express();

//Routing for the endpoints
require('./route/index')(app);

let webserver = app.listen(8080,function(){
    let host = webserver.address().address;
    let port = webserver.address().port;
    console.log("App is listening at http://%s:s%",host,port);
});
