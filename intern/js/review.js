

$(document).ready(function(){
	//console.log($("#pay").val());
	$("#filter").submit(function(){
		$("#holder").html('');
		//$("#reviewHolder").find("tr:gt(0)").remove();
		console.log($("#rate").val());
		$.ajax({
			url: 'http://localhost:8080/review',
			type: "GET",
			data:{
				name: $("#name").val(),
				state: $("#state").val(),
				city: $("#city").val(),
				paid: $("#pay").val(),
				rate:$("#rate").val(),

			},
			success: function(result){
				//$("#holder").empty();
				for(var i = 0; i < result.length; i++) {
	    			//console.log(result[i].company_name);
	    			var color;
	    			if(i % 2 == 0) {
	    				color = "#192b3f";
	    			} else {
	    				color = "#122030";
	    			}
	    			var reviewDiv = document.createElement("div");
	    			reviewDiv.setAttribute("id", "review");
	    			reviewDiv.setAttribute("style", "background:" + color + ";");
	    			reviewDiv.innerHTML = "<img src = '../img/review user.png' height = '38' width = '38'><h3 id = 'title'><a>" +  result[i].company_name + "</a>: " + result[i].job_title +
	    			 " | " + result[i].salary + "<br>" + result[i].city + ", " + result[i].state + "<br>" + result[i].season + " | " + result[i].duration + "</h3><p>" + result[i].other_data + "</p>";
	    			document.getElementById("holder").appendChild(reviewDiv); 
	    			//$("#reviewHolder").find('tbody').append( "<tr><td>" + result[i].company_name +"</td><td>" + result[i].job_title +"</td><td>" + result[i].rating +"</td><td>" + result[i].state +"</td><td>" + result[i].city +"</td><td>" + result[i].salary +"</td><td>" + result[i].season +"</td><td>" + result[i].duration +"</td><td>"+ result[i].other_data +"</td></tr>" );

				}
			},
			error: function(error){
				console.log("Error:"  + error);
			}
		});
	});
	var cn;
	var st;
	var cy;

	if(sessionStorage.getItem("company") != null & sessionStorage.getItem("company") != "null") {
		 cn = sessionStorage.getItem("company");
		 st = sessionStorage.getItem("state");
		 cy = sessionStorage.getItem("city")
		$("#name").val(cn);
		//$("#name").formSelect();
		sessionStorage.setItem("company", null);
        sessionStorage.setItem("state", null);
        sessionStorage.setItem("city", null);
	}
	else{
		cn=$("#name").val();
		st= $("#state").val();
		cy= $("#city").val();
	}

	$.ajax({
		url: 'http://localhost:8080/review',
		type: "GET",
		data:{
			name: cn,
			state: st,
			city: cy,
			paid: $("#pay").val(),
			rate:$("#rate").val(),

		},
		success: function(result){
			//$("#holder").empty();
			for(var i = 0; i < result.length; i++) {
    			//console.log(result[i].company_name);
    			var color;
    			if(i % 2 == 0) {
    				color = "#192b3f";
    			} else {
    				color = "#122030";
    			}
    			var reviewDiv = document.createElement("div");
    			reviewDiv.setAttribute("id", "review");
    			reviewDiv.setAttribute("style", "background:" + color + ";");
    			reviewDiv.innerHTML = "<img src = '../img/review user.png' height = '38' width = '38'><h3 id = 'title'><a>" +  result[i].company_name + "</a>: " + result[i].job_title +
    			 " | " + result[i].salary + "<br>" + result[i].city + ", " + result[i].state + "<br>" + result[i].season + " | " + result[i].duration + "</h3><p>" + result[i].other_data + "</p>";
    			document.getElementById("holder").appendChild(reviewDiv); 
    			//$("#reviewHolder").find('tbody').append( "<tr><td>" + result[i].company_name +"</td><td>" + result[i].job_title +"</td><td>" + result[i].rating +"</td><td>" + result[i].state +"</td><td>" + result[i].city +"</td><td>" + result[i].salary +"</td><td>" + result[i].season +"</td><td>" + result[i].duration +"</td><td>"+ result[i].other_data +"</td></tr>" );

			}

		},
		error: function(error){
			console.log("Error:"  + error);
		}
	});

	$.ajax({
		url: 'http://localhost:8080/comp',
		type: "GET",
		success: function(result){
			//console.log(result);
			for(var i = 0; i < result.length; i++) {
    			//console.log(result[i].company_name);
    			$('#name').append($('<option>', { 
			        value: result[i].company_name,
			        text : result[i].company_name
			    }));
    			

			}

		},
		error: function(error){
			console.log("Error:"  + error);
		}
	});
//console.log($("#name").val());
	$.ajax({
		url: 'http://localhost:8080/state',
		type: "GET",
		data:{
			name:$("#name").val(),

		},
		success: function(result){

			console.log(result);
			for(var i = 0; i < result.length; i++) {
    			console.log(result);
    			$('#state').append($('<option>', { 
			        value: result[i].state,
			        text : result[i].state
			    }));
    			

			}

		},
		error: function(error){
			console.log("Error:"  + error);
		}
	});

	$("#name").change(function(){
		$("#state").find('option').not(':first').remove();
		$.ajax({
			url: 'http://localhost:8080/state',
			type: "GET",
			data:{
				name:$("#name").val(),

			},
			success: function(result){

				console.log(result);
				for(var i = 0; i < result.length; i++) {
	    			console.log(result);
	    			$('#state').append($('<option>', { 
				        value: result[i].state,
				        text : result[i].state
				    }));
	    			

				}

			},
			error: function(error){
				console.log("Error:"  + error);
			}
		});

	});
	$.ajax({
		url: 'http://localhost:8080/city',
		type: "GET",
		data:{
			name:$("#name").val(),
			state:$("#state").val(),

		},
		success: function(result){

			console.log(result);
			for(var i = 0; i < result.length; i++) {
    			console.log(result);
    			$('#city').append($('<option>', { 
			        value: result[i].city,
			        text : result[i].city
			    }));
    			

			}

		},
		error: function(error){
			console.log("Error:"  + error);
		}
	});

	$("#state").change(function(){
		$("#city").find('option').not(':first').remove();
		$.ajax({
			url: 'http://localhost:8080/city',
			type: "GET",
			data:{
				name:$("#name").val(),
				state:$("#state").val(),

			},
			success: function(result){

				console.log(result);
				for(var i = 0; i < result.length; i++) {
	    			console.log(result);
	    			$('#city').append($('<option>', { 
				        value: result[i].city,
				        text : result[i].city
				    }));
	    			

				}

			},
			error: function(error){
				console.log("Error:"  + error);
			}
		});

	});

	if(sessionStorage.getItem("admin") === true){
		$("#approval").show();
		$.ajax({
		url: 'http://localhost:8080/approval',
		type: "GET",
		success: function(result){
			console.log(result);
			for(var i = 0; i < result.length; i++) {
    			//console.log(result[i].company_name);
    			$("#approvalFolder").find('tbody').append( "<tr><td>" + result[i].company_name +"</td><td>" + result[i].job_title +"</td><td>" + result[i].rating +"</td><td>" + result[i].state +"</td><td>" + result[i].city +"</td><td>" + result[i].salary +"</td><td>" + result[i].season +"</td><td>" + result[i].duration +"</td><td>"+ result[i].other_data +"</td></tr>" );

			}

		},
		error: function(error){
			console.log("Error:"  + error);
		}
	});

	}
	else{
		$("#approval").hide();
	}

});
//?name=#1&state=#2&city=#3&pay=#4&order=#5