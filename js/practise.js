const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');


// Select tab content item
function selectItem(e)
{
	removeborder();
	removeShow();
	//Add border to current item
	this.classList.add('activ');

	//Grab content item from DOM
	const tabContentItem = document.querySelector(`#${this.id}-content`);
	const tabContent = document.querySelector(`#${this.id}`);
	//Add show class to current item
	tabContentItem.classList.add('show');
	tabContent.classList.add('activ');
}

function removeborder()
{
	tabItems.forEach(item => item.classList.remove('activ'));
	// tabItems2.forEach(item => item.classList.remove('activ'));

}

function removeShow()
{
	tabContentItems.forEach(item => item.classList.remove('show'));
	// tabContentItems2.forEach(item => item.classList.remove('show'));
}




// Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));


// section for second-side

const iitems = document.querySelectorAll('.s1');
const iiitems = document.querySelectorAll('.s2');
// const aselect = document.getElementById('more');
// const bselect = document.getElementById('more2');


function first_view(e)
{
	hides();
	showers();
	// bselect.id = "more";
	// aselect.addEventListener("click",second_view);

}

function second_view(e)
{
	hide();
	shower();
	// aselect.id = "more2";
	// aselect.addEventListener("click",first_view);
}


function hide()
{
	// iitems.forEach(item => item.classList.remove('show'));
	iitems.forEach(item => item.classList.add('hide'));
}
function shower()
{
	iiitems.forEach(item => item.classList.remove('hide'));
	// iiitems.forEach(item => item.classList.add('show'));
}

function hides()
{
	// iiitems.forEach(item => item.classList.remove('show'));
	iiitems.forEach(item => item.classList.add('hide'));
}
function showers()
{
	iitems.forEach(item => item.classList.remove('hide'));
	// iitems.forEach(item => item.classList.add('show'));
}

	// aselect.addEventListener("click",second_view);

// section for second-side ends








