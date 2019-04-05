

$(document).ready(function(){

$("#Login").submit(function(){
  console.log($("#username").val());
  console.log($("#psw").val());
   $.ajax({
      url: 'http://localhost:8080/login',
      type: "GET",
      /*data:{
        email: $("#username").val(),
        password: $("#psw").val(),

      },*/
      success: function(result){
        console.log(result);
        sessionStorage.setItem($("#username").val(), user);
        alert('You have successfully logged in');
        location = location;
        
      },
      error: function(error){
        console.log("Error:"  + error);
      }
    });
  	
  });

  function logout(){
    alert('You have successfully logged out');
    sessionStorage.removeItem("user");
    document.location.replace("Homepage.html");
  };

});