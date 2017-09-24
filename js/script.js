var burger = document.getElementById("burger");
var leftMenu = document.getElementById("drawer");
var map = document.getElementById("map");
var header = document.getElementById("headline");
var erststimmen = document.getElementById("erststimmen");
var zweitstimmen = document.getElementById("zweitstimmen");
var wahlbeteiligung = document.getElementById("wahlbeteiligung");
var deutschlandkarte = document.getElementById("deutschlandkarte");
var menu = document.getElementById("drawer");
var iframe = document.getElementById("map");

burger.addEventListener("click", burgerChange);
map.addEventListener("click", checkMenu);
header.addEventListener("click", countClick);
erststimmen.addEventListener("click", changeToEs);
zweitstimmen.addEventListener("click", changeToZs);
deutschlandkarte.addEventListener("click", loadInteractive)
menu.addEventListener("click", menuChange);

function burgerChange(){
    console.log("Burger geklickt");
    burger.classList.toggle("open");
    leftMenu.classList.toggle("open");
}
function menuChange(){
    burger.classList.remove("open");
    leftMenu.classList.remove("open");
}

function checkMenu(){
    console.log ("Iframe geklickt");
    // if (burger.classList = "open"){
    //     console.log("Der Burger ist geöffnet");
    // }
}

function changeToEs(){
    var site = "https://felix-im-park.carto.com/builder/4d42e702-0b1b-48d6-80e9-7bcfdb0a570c/embed";
    iframe.src = site;
    burgerChange();
}

function changeToZs(){
    var site = "https://felix-im-park.carto.com/builder/64fabe30-6e02-4887-9735-760e837255df/embed";
    iframe.src = site;
    burgerChange();
}

function changeToWB(){
    var site = "xxxxx";
    iframe.src = site;
    burgerChange();
}

function loadInteractive(){
    window.open("http://www.wolfsburger-nachrichten.de/politik/inland/article212006167/Bundestagswahl-2017-interaktiv.html");
    burgerChange();
}

