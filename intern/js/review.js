

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
			for(var i = 0; i < result.length; i++) {
    			//console.log(result[i].company_name);
    			$("#reviewHolder").find('tbody').append( "<tr><td>" + result[i].company_name +"</td><td>" + result[i].job_title +"</td><td>" + result[i].rating +"</td><td>" + result[i].state +"</td><td>" + result[i].city +"</td><td>" + result[i].salary +"</td><td>" + result[i].season +"</td><td>" + result[i].durration +"</td><td>"+ result[i].other_data +"</td></tr>" );

			}

		},
		error: function(error){
			console.log("Error:"  + error);
		}
	});




});
//?name=#1&state=#2&city=#3&pay=#4&order=#5