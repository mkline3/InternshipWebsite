

$(document).ready(function(){

	$.ajax({
		url: 'http://localhost:8080/review',
		type: "GET",
		data:{
			name: $("#name").val(),
			state: $("#state").val(),
			city: $("#city").val(),
			pay: $("#pay").val(),
			order:$("#rate").val(),

		},
		success: function(result){

			console.log(result);

		},
		error: function(error){
			console.log("Error:"  + error);
		}
	});




});
//?name=#1&state=#2&city=#3&pay=#4&order=#5