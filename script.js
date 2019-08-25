let mijnStylesheet = document.querySelectorAll("link")[1];
let knopZon = document.querySelector(".lightmode");
let knopMaan = document.querySelector(".darkmode");

let mijnMain = document.querySelector("main");
let infoPageKnop = document.querySelector(".aboutMe");
let mijnSection = document.querySelector("section");
let mainPageKnop = document.querySelector(".mainPage")


function lightmode() {
	mijnStylesheet.setAttribute("href", "Light-stijl.css");
	knopZon.setAttribute("src", "sun_negatief.svg");
	knopMaan.setAttribute("src", "moon_negatief.svg");
}

function darkmode() {
	mijnStylesheet.setAttribute("href", "Dark-stijl.css");
	knopZon.setAttribute("src", "sun.svg");
	knopMaan.setAttribute("src", "moon.svg");
}

knopMaan.addEventListener("click",darkmode);
knopZon.addEventListener("click",lightmode);



function nextPage() {
  mijnMain.style.display = "none";
	infoPageKnop.style.display = "none";
	mijnSection.style.display = "block";
	mainPageKnop.style.display = "block";
}

function previousPage() {
	mijnMain.style.display = "block";
	infoPageKnop.style.display = "block";
	mijnSection.style.display = "none";
	mainPageKnop.style.display = "none";
}

infoPageKnop.addEventListener("click",nextPage);
mainPageKnop.addEventListener("click",previousPage);
