
//let t = 0;

$(document).ready(function(){
	//alert(($"#ec").val());
	//if(t===0){
		$("#ec").hide();
		$("#p1").hide();
		$("#p2").hide();
		$("#submit").hide();
	//}
	$("#confirm").click(function(){
		if($("#email").val().includes("@mail.umw.edu")
			||  $("#email").val().includes("@umw.edu") ){
			alert("Confirmation sent to: "+ $("#email").val());
			$("#ec").show();
			$("#p1").show();
			$("#p2").show();
			$("#submit").show();
			$("#confirm").hide();
			const nodemailer = require("nodemailer");

			var transporter = nodemailer.createTransport({
				service: 'gmail',
				auth: {
					user: 'InternPageDoNotReply@gmail.com',
					pass: 'Software430'
				}
			});

			//var link = window.location.href + "?c=" + btoa($('#email').val() + ' ' + $("#p1").val());
			const mailOptions = {
				from: 'InternPageDoNotReply@gmail.com',
				to: $('#email').val(),
				subject: 'UMW Internship Confirmation',
				text: 'Thank you for signing up to the UMW Internship Website. To finish creating your account, to verify your account use code:\n AbaC3' 
			}

			transporter.sendMail(mailOptions, function(error, info){
				if (error) {
					alert("fail");
				} else {
					alert("success " + info.response);
				}
			});		
			//t = 1;
		}
		else{
			alert("The entered email: "+ $("#email").val() + " is not a umw email");
		}	

	});
	$("#submit").click(function(){




		if($("#ec").val() !== "AbaC3"){
			alert("You did not type verification code correctly.");
		}
		else if($("#p1").val() !== $("#p2").val() ){
			//console.log("inside");
			alert("You did not retype the same password.");
		}
		else{		
			var name = $("#email").val().substr(0, $("#email").val().indexOf('@'));
			$.ajax({
			url: 'http://localhost:8080/newReview',
			type: "POST",
			data:{
				username: name,
				email: $("#email").val(),
				pass: $("#p1".val(),

			},
			success: function(result){

				console.log(result);
				alert("Your account has been created");

			},
			error: function(error){
				console.log("Error:"  + error);
			}
		});



			location.replace("Homepage.html");
		}
	});
});

