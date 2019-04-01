

$(document).ready(function(){

	$.ajax({
		url: 'http://localhost:8080/test',
		type: "GET",
		success: function(result){
			console.log(result);

		},
		error: function(error){
			console.log("Error:"  + error);
		}
	});




});