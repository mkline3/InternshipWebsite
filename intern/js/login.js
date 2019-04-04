function login(user, password){

    /*if(password !== "" && user !==""){
      sessionStorage.setItem("user", user);
      alert('You have successfully logged in');
      location = location;
    }
    else{
      alert("Credentials failed try again");
    }
*/
   $.ajax({
      url: 'http://localhost:8080/login',
      type: "GET",
      data:{
        email: user,
        password: password,

      },
      success: function(result){
        sessionStorage.setItem("user", user);
        alert('You have successfully logged in');
        location = location;
        console.log(result);
      },
      error: function(error){
        alert("Credentials failed try again");
        console.log("Error:"  + error);
      }
    });
  	
  }

  function logout(){
    alert('You have successfully logged out');
    sessionStorage.removeItem("user");
    document.location.replace("Homepage.html");
  }