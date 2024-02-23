//your JS code here. If required.
document.addEventListner("submit",function(event){
	event.preventDefault();

    const username=document.getElementById("username");
	const password=document.getElementById("password");
	const rememberme=document.getElementById("checkbox").checked;

	if(rememberme)
	{
		localStorage.setItem("username",username);
		localStorage.setItem("password",password);
		
	}
	else
	{
		localStorage.removeItem("username");
		localStorage.removeItem("password");	
	}
	alert("Logged in as: " + username);
	const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

  // If there are stored credentials, fill the form
  if (storedUsername && storedPassword) {
    document.getElementById("username").value = storedUsername;
    document.getElementById("password").value = storedPassword;
    document.getElementById("rememberMe").checked = true;
  }
});

















						 
	)