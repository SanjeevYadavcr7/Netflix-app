const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e)
{
	//to remove border and show from previously selected item
	removeborder();
	removeShow();
	//Add border to current item
	this.classList.add('tab-border');

	//Grab content item from DOM

	const tabContentItem = document.querySelector(`.${this.id}-content`);
	tabContentItem.classList.add('show');

	var tabContentIte = document.querySelector(`.${this.id}-conten`);
	var tabContentIt = document.querySelector(`.${this.id}-conte`);
	var tabContentI = document.querySelector(`.${this.id}-cont`);
	var tabContent = document.querySelector(`.${this.id}-con`);
	var tabConten = document.querySelector(`.${this.id}-co`);
	var tabConte = document.querySelector(`.${this.id}-c`);
	var tabCont = document.querySelector(`.${this.id}-d`);
	var tabCon = document.querySelector(`.${this.id}-do`);
	
	tabContentIte.classList.add('show');
	tabContentIt.classList.add('show');
	tabContentI.classList.add('show');
	tabContent.classList.add('show');
	tabConten.classList.add('show');
	tabConte.classList.add('show');
	tabCont.classList.add('show');
	tabCon.classList.add('show');




	
	//Add show class to current item`#${this.id}-content`

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





