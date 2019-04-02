

$(document).ready(function(){

	$.ajax({
		url: 'http://localhost:8080/review',
		type: "GET",
		success: function(result){

			console.log(result);

		},
		error: function(error){
			console.log("Error:"  + error);
		}
	});




});