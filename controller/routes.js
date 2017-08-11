const PATH = require('path');

module.exports = function (app)
{

	app.get('/', function(req,res){

		 res.sendFile(PATH.join(__dirname, "../public/index.html"));
	});

	// app.get('/about', function(req,res){

	// 	 res.sendFile(PATH.join(__dirname, "../public/about.html"));
	// });

	// app.get('/portfolio', function(req,res){

	// 	 res.sendFile(PATH.join(__dirname, "../public/portfolio.html"));
	// });

	// app.get('/contact', function(req,res){

	// 	 res.sendFile(PATH.join(__dirname, "../public/contact.html"));
	// });


	//404 'Catch-all' any other route gets caught here;
	app.get('*', function(req,res){		
		res.sendFile(PATH.join(__dirname, "../public/index.html"));
	});
};