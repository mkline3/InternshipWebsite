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
		

});