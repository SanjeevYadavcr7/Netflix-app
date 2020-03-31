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



// movies item ends----------------







// for tv series items

const tvseries = document.querySelectorAll('.cab-item');
const tvseriescontent = document.querySelectorAll('.cab-content-item');


// Select tab content item
function tvseriesItem(e)
{
	removetvs();
	removeTvseries();
	//Add border to current item
	this.classList.add('activ');

	//Grab content item from DOM
	const tvser = document.querySelector(`#${this.id}-content`);
	const tvseri = document.querySelector(`#${this.id}`);
	//Add show class to current item
	tvser.classList.add('cshow');
	tvseri.classList.add('activ');
}

function removetvs()
{
	tvseries.forEach(item => item.classList.remove('activ'));
	// tabItems2.forEach(item => item.classList.remove('activ'));

}

function removeTvseries()
{
	tvseriescontent.forEach(item => item.classList.remove('cshow'));
	// tabContentItems2.forEach(item => item.classList.remove('show'));
}
tvseries.forEach(item => item.addEventListener('click', tvseriesItem));



//for anime series

const animeseries = document.querySelectorAll('.aab-item');
const animeseriescontent = document.querySelectorAll('.aab-content-item');


// Select tab content item
function animeseriesItem(e)
{
	removeAnime();
	removeAnimeseries()

	//Add border to current item
	this.classList.add('activ');

	//Grab content item from DOM
	const animeser = document.querySelector(`#${this.id}-content`);
	const animeseri = document.querySelector(`#${this.id}`);
	//Add show class to current item
	animeser.classList.add('ashow');
	animeseri.classList.add('activ');
}

function removeAnime()
{
	animeseries.forEach(item => item.classList.remove('activ'));
	// tabItems2.forEach(item => item.classList.remove('activ'));

}

function removeAnimeseries()
{
	animeseriescontent.forEach(item => item.classList.remove('ashow'));
}


// Listen for tab click
animeseries.forEach(item => item.addEventListener('click', animeseriesItem));


// =======================================================
// marvel cenematic universe



const marvelseries = document.querySelectorAll('.mab-item');
const marvelseriescontent = document.querySelectorAll('.mab-content-item');


// Select tab content item
function marvelseriesItem(e)
{
	removeMarvel();
	removeMarvelseries()

	//Add border to current item
	this.classList.add('activ');

	//Grab content item from DOM
	const marvelser = document.querySelector(`#${this.id}-content`);
	const marvelseri = document.querySelector(`#${this.id}`);
	//Add show class to current item
	marvelser.classList.add('mshow');
	marvelseri.classList.add('activ');
}

function removeMarvel()
{
	marvelseries.forEach(item => item.classList.remove('activ'));
	// tabItems2.forEach(item => item.classList.remove('activ'));

}

function removeMarvelseries()
{
	marvelseriescontent.forEach(item => item.classList.remove('mshow'));
}


// Listen for tab click
marvelseries.forEach(item => item.addEventListener('click', marvelseriesItem));


// ===========================================================




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