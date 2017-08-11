//Dependencies
const EXPRESS = require("express");
const PATH = require("path");

const PORT = process.env.PORT || 3000;
const APP = EXPRESS();


//path to serve static files.
APP.use(EXPRESS.static(PATH.join(__dirname, "public")));

// ROUTER - Below points our server to a series of "route" files.

require("./controller/routes.js")(APP);


//Express Listener
APP.listen(PORT, function(){
	console.log("Listening on port:", PORT);
});