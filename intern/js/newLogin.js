
let t = 0;

$(document).ready(function(){
	if(t===0){
		$("#p1").hide();
		$("#p2").hide();
		$("#submit").hide()
	}
	$("#confirm").click(function(){
		if($("#email").val().includes("@mail.umw.edu")
			||  $("#email").val().includes("@umw.edu") ){
			//alert("Confirmation sent to: "+ $("#email").val());
			$("#p1").show();
			$("#p2").show();
			$("#submit").show();
			$("#confirm").hide();
			t = 1;
		}
		else{
			alert("The entered email: "+ $("#email").val() + " is not a umw email");
		}	

	});
	$("#submit").click(function(){
		console.log("clicked");
		if($("#p1").val() !== $("#p2").val() ){
			//console.log("inside");
			alert("You did not retype the same password");
		}
		else{
			//they go to review from here
			const nodemailer = require("nodemailer");

			var transporter = nodemailer.createTransport({
				service: 'gmail',
				auth: {
					user: 'InternPageDoNotReply@gmail.com',
					pass: 'Software430'
				}
			});

			var link = window.location.href + "?c=" + btoa($('#email').val() + ' ' + $("#p1").val());
			const mailOptions = {
				from: 'InternPageDoNotReply@gmail.com',
				to: $('#email').val(),
				subject: 'UMW Internship Confirmation',
				text: 'Thank you for signing up to the UMW Internship Website. To finish creating your account, please click the link below\n' + link
			}

			transporter.sendMail(mailOptions, function(error, info){
				if (error) {
					alert("fail");
				} else {
					alert("success " + info.response);
				}
			});
		}
	});
});

