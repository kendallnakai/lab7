var projects = require('../projects.json');

/*
 * GET home page.
 */

 exports.viewAlt = function(request, response) {
   projects["viewAlt"] = true;
   console.log(projects);
   response.render('index', projects);
 }

 exports.view = function(request, response) {
 	projects["viewAlt"] = false;
 	console.log(projects);
 	response.render('index', projects);
 };
 
