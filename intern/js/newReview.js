$(document).ready(function(){
	$("#ifOther").hide();
	$("#rate").hide();
	$("#type").change(function(){
		if($("#type").val() === "Other"){
			$("#ifOther").show();
		}

	});
	$("#pay").change(function(){
		if($("#pay").val() === "paid"){
			$("#rate").show();
		}
	});
		

});