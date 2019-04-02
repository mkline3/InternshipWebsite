$(document).ready(function(){
	$("#ifOther").hide();
	$("#rate").hide();
	$("#company").hide();
	$("#type").change(function(){
		if($("#type").val() === "Other"){
			$("#ifOther").show();
		}
		else{
			$("#ifOther").hide();
		}

	});
	$("#pay").change(function(){
		if($("#pay").val() === "paid"){
			$("#rate").show();
		}
		else{
			$("#rate").hide();
		}
	});
	$("#Com").change(function(){
		if($("#Com").val() === "Other"){
			$("#company").show();
		}
		else{
			$("#company").hide();
		}
	});
		
	$("#submit").click(function(){
		$.ajax({
			url: 'http://localhost:8080/newReview',
			type: "POST",
			data:{
				comp: $("#comp").val(),
				address: $("#address").val(),
				city: $("#city").val(),
				state: $("#state").val(),
				semester:$("#semester").val(),
				dur: $("#dur").val(),
				types: $("#type").val(),
				pay: $("#rate").val(),
				review: $("#review").val(),
				textbox: $("#textbox").val()

			},
			success: function(result){

				console.log(result);

			},
			error: function(error){
				console.log("Error:"  + error);
			}
		});
	});

});