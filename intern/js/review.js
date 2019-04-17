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
	    			if(result[i].salary == "paid") {
						var salary = result[i].dollars;
					} else {
						var salary = result[i].salary;
					}

	    			if(result[i].is_approved) {
		    			var reviewDiv = document.createElement("div");
		    			reviewDiv.setAttribute("id", "review");
		    			reviewDiv.innerHTML = "<img src = '../img/review user.png' height = '38' width = '38'><h3 id = 'title'><a>" +  result[i].company_name + "</a>: " + result[i].job_title + reviewStars(result[i].rating) +
		    			 " | " + salary + "<br>" + result[i].city + ", " + result[i].state + "<br>" + result[i].season + " | " + result[i].duration + "</h3><p>" + result[i].other_data + "</p>";
		    			document.getElementById("holder").appendChild(reviewDiv); 
		    		}
	    			//$("#reviewHolder").find('tbody').append( "<tr><td>" + result[i].company_name +"</td><td>" + result[i].job_title +"</td><td>" + result[i].rating +"</td><td>" + result[i].state +"</td><td>" + result[i].city +"</td><td>" + result[i].salary +"</td><td>" + result[i].season +"</td><td>" + result[i].duration +"</td><td>"+ result[i].other_data +"</td></tr>" );
				}
			},
			error: function(error){
				console.log("Error:"  + error);
			}
		});

		$.ajax({
			url: 'http://localhost:8080/approval',
			type: "GET",
			success: function(result){
				console.log(result);
				if(sessionStorage.getItem("admin") == "true") {
						for(var i = 0; i < result.length; i++) {
								if(result[i].salary == "paid") {
									var salary = result[i].dollars;
								} else {
									var salary = result[i].salary;
								}
								var color = "red";
				    			var reviewDiv = document.createElement("div");
				    			reviewDiv.setAttribute("id", "review");
				    			reviewDiv.setAttribute("style", "background:" + color + ";");
				    			reviewDiv.innerHTML = "<img src = '../img/review user.png' height = '38' width = '38'><h3 id = 'title'><a>" +  result[i].company_name + "</a>: " + result[i].job_title +
			    			 	" | " + result[i].salary + "<br>" + result[i].city + ", " + result[i].state + "<br>" + result[i].season + " | " + result[i].duration + "</h3><p>" + result[i].other_data + 
			    				"</p><div id = 'AdminButton'><form id = 'ad' onsumbit = 'return false'><input type='hidden' id='reviewID' value ='" + result[i].review_id + "'><input type='button' id = 'accept' value = '&#10004;' onclick = 'acceptReview(this)'><input type='button' id = 'reject' value='&#10008;' onclick = 'deleteReview(this)'></form></div>";
				    			document.getElementById("holder").appendChild(reviewDiv);
						}
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
			url: 'http://localhost:8080/approval',
			type: "GET",
			success: function(result){
				console.log(result);
				if(sessionStorage.getItem("admin") == "true") {
						for(var i = 0; i < result.length; i++) {
								if(result[i].salary == "paid") {
									var salary = result[i].dollars;
								} else {
									var salary = result[i].salary;
								}
								var color = "red";
				    			var reviewDiv = document.createElement("div");
				    			reviewDiv.setAttribute("id", "review");
				    			reviewDiv.setAttribute("style", "background:" + color + ";");
				    			reviewDiv.innerHTML = "<img src = '../img/review user.png' height = '38' width = '38'><h3 id = 'title'><a>" +  result[i].company_name + "</a>: " + result[i].job_title +
			    			 	" | " + result[i].salary + "<br>" + result[i].city + ", " + result[i].state + "<br>" + result[i].season + " | " + result[i].duration + "</h3><p>" + result[i].other_data + 
			    				"</p><div id = 'AdminButton'><form id = 'ad' onsumbit = 'return false'><input type='hidden' id='reviewID' value ='" + result[i].review_id + "'><input type='button' id = 'accept' value = '&#10004;' onclick = 'acceptReview(this)'><input type='button' id = 'reject' value='&#10008;' onclick = 'deleteReview(this)'></form></div>";
				    			document.getElementById("holder").appendChild(reviewDiv); 
						}
				}


			},
			error: function(error){
				console.log("Error:"  + error);
			}
		});

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
    			if(result[i].is_approved) {

	    			if(result[i].salary == "paid") {
						var salary = result[i].dollars;
					} else {
						var salary = result[i].salary;
					}

	    			var reviewDiv = document.createElement("div");
	    			reviewDiv.setAttribute("id", "review");
	    			reviewDiv.innerHTML = "<img src = '../img/review user.png' height = '38' width = '38'><h3 id = 'title'><a>" +  result[i].company_name + "</a>: " + result[i].job_title + reviewStars(result[i].rating) +
	    			 " | " + salary + "<br>" + result[i].city + ", " + result[i].state + "<br>" + result[i].season + " | " + result[i].duration + "</h3><p>" + result[i].other_data + "</p>";
	    			document.getElementById("holder").appendChild(reviewDiv); 
	    		}
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

	function reviewStars(stars) {
		var starDiv = "<div id = 'starDiv'>";
		for(var i = 0; i < (5 - stars); i++) {
			starDiv += "<img id = 'star' src = '../img/rating.png' width = '15' height = '15'>";
		}
		for(var i = 0; i < stars; i++) {
			starDiv += "<img id = 'star' src = '../img/ratingA.png' width = '15' height = '15'>";
		}
		starDiv += "</div>"
		return starDiv;
	}

	function edit(button){

		$.ajax({
					url: 'http://localhost:8080/edit-review',
					type: "GET",
					data:{
						review_id: $(button).siblings("#reviewID").val(),
					},
					success: function(results){
						$("#editRevID").val(results.Review_ID);
						$("#editCom").val(results.company_name);
						$("#editAddress").val(results.address);
						$("#editCity").val(results.city);
						$("#editState").val(results.state);
						$("#editSemester").val(results.season);
						$("#editDur").val(results.duration);
						$("#editType").val(results.job_title);
						$("#editPay").val(results.salary);
						$("#editRate").val(results.dollars);
						$("#editRev").val(results.rating);
						$("#editTextbox").val(results.other_data);
					},
					error: function(error){
						console.log("Error");
						//alert($(button).siblings("#reviewID").val());				
					}
				});

	}
	$("#editReview").submit(function(){
		
		var data = {
		    "format": "json",
		    "addressdetails": 1,
		    "q": $("#editAddress").val() + " " + $("#editCity").val(),
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


			var d = parseInt($("#editDur").val());
			//console.log($("#rev").val());
			var r =parseInt($("#editRev").val());
			$.ajax({
				url: 'http://localhost:8080/editReview',
				type: "POST",
				data:{
					comp: $("#editCom").val(),
					address: $("#editAddress").val(),
					city: $("#editCity").val(),
					state: $("#editState").val(),
					semester:$("#editSemester").val(),
					dur: d,
					types: $("#editType").val(),
					pay: $("#editPay").val(),
					dollars: $("#editRate").val(),
					review: r,
					textbox: $("#editTextbox").val(),
					long: long,
					lat: lat

				},
				success: function(result){

					console.log(result);
					$.ajax({
						url: 'http://localhost:8080/delete-review',
						type: "POST",
						data:{
							review_id: $("#editRevID").val(),
						},
						success: function(result){
						},
						error: function(error){
							console.log("Error");
							//alert($(button).siblings("#reviewID").val());				
						}
					});
					window.location.href="../html/Homepage.html";

				},
				error: function(error){
					console.log("Error:"  + error);
				}
			});
		});
	});

});
//?name=#1&state=#2&city=#3&pay=#4&order=#5