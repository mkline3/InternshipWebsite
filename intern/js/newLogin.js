
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
		if($("p1").val() !== $("p2").val() ){
			console.log("inside");
			alert("You did not retype the same password");
		}
	});
});

