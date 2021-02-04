var data = require("../data.json");

exports.addFriend = function(request, response) {
	// Your code goes here
	data.friends.push({
		"name": request.query.name,
		"description": request.query.description,
		"imageURL": "http://lorempixel.com"//fake imageURL			
	});
	response.render('index', data);
};