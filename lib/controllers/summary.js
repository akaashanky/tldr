'use strict';
var nodesum = require('node-sumuparticles');

/**
* Get url, send back summary
*/
exports.summarize = function(req, res) {
	console.log("Here!");
	if(!req.body.hasOwnProperty('url')){
		res.statusCode = 400;
    	return res.send('Error 400: Post syntax incorrect.');
	}
	
	var url=req.body.url;

	nodesum.summarize(url, function(title, summary, failure) {
    if(failure) {
        console.log("There was an error. URL: "+url); 
    }
    console.log(summary);

    res.json({
    	title: title,
		summary: summary
		});
	});

	
};
