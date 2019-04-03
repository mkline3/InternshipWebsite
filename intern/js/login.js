  
$(document).ready(function(){
  function login(){

   /*var user = $("#username").value();
    
    if($("#psw").val() !== "" && $("#username").val() !==""){
      sessionStorage.setItem("user", user);
      alert('You have successfully logged in');
      location = location;
    }
    else{
      alert("Cridentials failed try again");
    }*/

    $.ajax({
      url: 'http://localhost:8080/login',
      type: "GET",
      data:{
        email: $("#username").val(),
        password: $("#psw").val(),

      },
      success: function(result){

        console.log(result);

      },
      error: function(error){
        console.log("Error:"  + error);
      }
    });
  	
  }

  function logout(){
    alert('You have successfully logged out');
    sessionStorage.removeItem("user");
    document.location.replace("Homepage.html");
  }

});