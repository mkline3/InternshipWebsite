

$(document).ready(function(){

/*if ($("#us").val() == null) {
  /*document.getElementById("secondary").innerHTML = '<a href="newLogin.html" target="popup" onclick="window.open(' + "'newLogin.html', 'popup','width=400,height=300,toolbar=No,location=No,scrollbars=no,status=No,resizable=no,fullscreen=No')" + '; return false;"><img src = "../img/signIn.png" height = "20" width = "20"><br/>Sign-Up</a>';
  $("#secondary").append('<a id="signinFocus"><img src = "../img/signIn.png" height = "20" width = "20"><br/>Sign-Up</a><a href="review.html"><img src = "../img/star.png" height = "20" width = "40"><br/>Reviews</a>');

  
    $("#signinFocus").click(function(){
        $('#SigninDiv').show(function(){
          document.body.addEventListener('click', closer, false);
        });
    function closer(e) {
      var id = $(e.target).closest('.signin').attr("id");
      if(id != "SigninDiv"){
        //alert(event.target.id);
        document.body.removeEventListener('click', closer, false);
        $('#SigninDiv').hide();
      }
    }
  });
} else {
  document.getElementById("secondary").innerHTML = '<a href="newReview.html"><img src = "../img/addReview.png" height = "20" width = "20"><br/>Add a Review</a><a href="review.html"><img src = "../img/star.png" height = "20" width = "40"><br/>Reviews</a>';
}


        
if ($("#us").val() == null) {
  $("#login").append('<form id="Login" onSubmit="return false"><input type="text" placeholder="Email Address" id="username"><input type="password" placeholder="Password" id="psw"><button type="submit">Login</button></form>');
} else {
  const user = $("#us").val();
  $("#login").append('<p>'+ user +' | <a id="logout">Logout</a></p>');
}*/
$("#Login").submit(function(){
  console.log($("#username").val());
  console.log($("#psw").val());
   $.ajax({
      url: 'http://localhost:8080/login',
      type: "GET",
      success: function(result){
        console.log(result);
        
        var t = false;
        for(var i = 0; i < result.length; i++) {
          //console.log(result[i].password);
          //console.log(result[i].user_email);
          if($("#username").val() === result[i].user_email && $("#psw").val() === result[i].password){
            //sessionStorage.setItem($("#username").val(), user);
            $("#us").val(result[i].user_name);
            t = true;
            break;
          }
        }
        if(t){
          alert('You have successfully logged in');
          location = location;
        }
        else{
          alert("Your cridentials have failed");
        }
        
      },
      error: function(error){
        console.log("Error:"  + error);
      }
    });
  	
  });

  $("#logout").click(function(){
    alert('You have successfully logged out');
    $("#us").val(null);
    location = location;
  });

});