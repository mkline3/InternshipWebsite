$(document).ready(function(){
	var company;
	$("#ifOther").hide();
	$("#rate").hide();
	$("#company").hide();
	$("#type").change(function(){
		if($("#type").val() === "Other"){
			$("#ifOther").show();
			company = $("#ifOther").val();
		}
		else{
			$("#ifOther").hide();
			company = $("#comp").val();
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
	$.ajax({
		url: 'http://localhost:8080/comp',
		type: "GET",
		success: function(result){
			//console.log(result);
			for(var i = 0; i < result.length; i++) {
    			//console.log(result[i].company_name);
    			$('#Com').append($('<option>', { 
			        value: result[i].company_name,
			        text : result[i].company_name
			    }));
    			

			}

		},
		error: function(error){
			console.log("Error:"  + error);
		}
	});
	$.ajax({
		url: 'http://localhost:8080/title',
		type: "GET",
		success: function(result){
			console.log(result);
			for(var i = 0; i < result.length; i++) {
    			//console.log(result[i].company_name);
    			$('#type').append($('<option>', { 
			        value: result[i].job_title,
			        text : result[i].job_title
			    }));
    			

			}

		},
		error: function(error){
			console.log("Error:"  + error);
		}
	});
		
	$("#Review").submit(function(){
		console.log("Click");
		var ot;
		var tit
		if($("#Com").val() === "Other"){
			ot = $("#comp").val();
		}
		else{
			ot = $("#Com").val();
		}
		if($("#type").val() === "Other"){
			tit = $("#isOther").val()
		}
		else{
			tit = $("#type").val();
		}
		if($("#pay").val() === "paid"){
			doll = $("#Rate").val()
		}
		else{
			doll = "0";
		}
		var data = {
		    "format": "json",
		    "addressdetails": 1,
		    "q": $("#address").val() + " " + $("#city").val(),
		    "limit": 1
		};
		var long;
		var lat;
		$.ajax({
		  method: "GET",
		  url: "https://nominatim.openstreetmap.org",
		  data: data
		})
		.done(function( msg ) {
		    //console.log( msg );
		    console.log(msg[0].lon);
		    console.log(msg[0].lat);
		    long = parseFloat(msg[0].lon);
			lat = parseFloat(msg[0].lat);


			var d = parseInt($("#dur").val());
			//console.log($("#rev").val());
			var r =parseInt($("#rev").val());
			$.ajax({
				url: 'http://localhost:8080/newReview',
				type: "POST",
				data:{
					comp: ot,
					address: $("#address").val(),
					city: $("#city").val(),
					state: $("#state").val(),
					semester:$("#semester").val(),
					dur: d,
					types: tit,
					pay: $("#pay").val(),
					dollars: doll,
					review: r,
					textbox: $("#textbox").val(),
					long: long,
					lat: lat

				},
				success: function(result){

					console.log(result);
					window.location.href="../html/Homepage.html";

				},
				error: function(error){
					console.log("Error:"  + error);
				}
			});
		});
		
	});

});