'use strict';

/**
* Get url, send back summary
*/
exports.summarize = function(req, res) {
	console.log("Here!");
	if(!req.body.hasOwnProperty('text')){
		res.statusCode = 400;
    	return res.send('Error 400: Post syntax incorrect.');
	}

	var summary = summarizeText(req.body.text);

	res.json({
		summary: summary
	});
};

var summarizeText = function (text){
	return "Summary placeholder";
};