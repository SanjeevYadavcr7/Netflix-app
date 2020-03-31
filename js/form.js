
function validate()
{
	// var name = document.getElementById("name").value;
	var name=document.myform.username.value;  

	var pass = document.myform.password.value;
	if(name == "" || name == null)
	{
		alert("Without email or phone number no netflix !");
		return false;
	}	
	else if(pass == "" || pass == null)
	{
		alert("Enter your password");
		return false;
	}
	else
	{
		return true;
	}

}


