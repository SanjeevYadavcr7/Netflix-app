const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e)
{
	removeborder();
	removeShow();
	//Add border to current item
	this.classList.add('tab-border');

	//Grab content item from DOM
	const tabContentItem = document.querySelector(`#${this.id}-content`);
	//Add show class to current item
	tabContentItem.classList.add('show');

}

function removeborder()
{
	tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow()
{
	tabContentItems.forEach(item => item.classList.remove('show'));
}




// Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));



function validate()
{
	// var name = document.getElementById("name").value;
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var inputText = document.myform.username;
	
	var name=document.myform.username.value;  
	var pass = document.myform.password.value;
	if(name == "" || name == null)
	{
		alert("Without email or phone number no netflix !");
		return false;
	}	
	else if(pass == "" || pass == null)
	{
		alert("Without password no netflix !");
		return false;
	}
	else if (!(inputText.value.match(mailformat)))
	{
		alert("Netflix allows only email address!")
	    return false;
	}
	else
	{
		return true;
	}
}

function ValidateEmail() 
{
	
}


