var random = 0;
var mine_amount = 1;
var chop_amount = 1;
var seed_amount = 1;
var farm_amount = 1;

var money = 0;
var time = 0;
var time_wait = 1000;

var stone = 0;
var coal = 0;
var iron = 0;
var gold = 0;

var wood = 0;

var wheat_seed = 0;
var wheat = 0;
var potato_seed = 0;
var potato = 0;

var pick = 0;
var axe = 0;
var sword = 0;
var hoe = 0;

var mining = 0;
var choping = 0;
var fighting = 0;
var farming = 0;

var furnace = 0;

function open_tab(evt, tab_name) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tab_name).style.display = "block";
    evt.currentTarget.className += " active";
}
function mine(number) {
	random = Math.floor((Math.random() * 1000) + 1);
	if (pick == 1) {
		stone = stone + number;
		document.getElementById("stone").innerHTML = stone;
	}
	else if (pick == 2) {
		if (random <= 850) {stone = stone + number;}
		else if (random > 850 && random <= 950) {coal = coal + number;}
		else if (random > 950) {iron = iron + number;}
		document.getElementById("stone").innerHTML = stone;
		document.getElementById("coal").innerHTML = coal;
		document.getElementById("iron").innerHTML = iron;
	}
	else if (pick == 3) {
		if (random <= 765) {stone = stone + number;}
		else if (random > 765 && random <= 915) {coal = coal + number;}
		else if (random > 915 && random <= 991) {iron = iron + number;}
		else if (random > 991) {gold = gold + number;}
		document.getElementById("stone").innerHTML = stone;
		document.getElementById("coal").innerHTML = coal;
		document.getElementById("iron").innerHTML = iron;
		document.getElementById("gold").innerHTML = gold;
	}
}

function tr_stone() {
	stone = stone + time;
	time = 0;
	document.getElementById("stone").innerHTML = stone;
	document.getElementById("time").innerHTML = time;
}
function tr_coal() {
	coal = coal + (time - time % 5) / 5;
	time = time % 5;
	document.getElementById("coal").innerHTML = coal;
	document.getElementById("time").innerHTML = time;
}

function pick_upgrade() {
	if (pick == 0 && wood >= 25) {
		wood = wood - 25;
		pick++;
		document.getElementById("wooden_pickaxe").style.display = "none";
		document.getElementById("stone_pickaxe").style.display = "table-row";
		document.getElementById("wood").innerHTML = wood;
	}
	else if (pick == 1 && wood >= 50 && stone >= 30) {
		wood = wood - 50;
		stone = stone - 30;
		pick++;
		document.getElementById("pick").innerHTML = 'Craft iron pickaxe (100 wood & 40 stone & 25 iron)';
		document.getElementById("wood").innerHTML = wood;
		document.getElementById("stone").innerHTML = stone;
	}
	else if (pick == 2 && wood >= 100 && stone >= 40 && iron >= 25){
		wood = wood - 100;
		stone = stone - 40;
		iron = iron - 25;
		pick++;
		document.getElementById("wood").innerHTML = wood;
		document.getElementById("stone").innerHTML = stone;
		document.getElementById("iron").innerHTML = iron;
	}
}

function chop(number) {
	random = Math.floor((Math.random() * 100) + 1);
	if (axe == 0) {
		wood = wood + number;
		document.getElementById("wood").innerHTML = wood;
	}
}

function seed(number) {
	random = Math.floor((Math.random() * 100) + 1);
	if (farming == 0)
		wheat_seed = wheat_seed + number;
	document.getElementById("wheat_seed").innerHTML = wheat_seed;
}

function farm(number) {
	random = Math.floor((Math.random() * 100) + 1);
	if (hoe == 0) {
		if (wheat_seed >= number) {
			wheat_seed = wheat_seed - number;
			wheat = wheat + number;
			document.getElementById("wheat_seed").innerHTML = wheat_seed;
			document.getElementById("wheat").innerHTML = wheat;
		}
	}
}

function craft_furnace() {
	if (furnace == 0 && stone >= 100) {
		furnace++;
		stone = stone - 100;
		document.getElementById("stone").innerHTML = stone;
		document.getElementById("furnace_visibility").style.display = "block";
		document.getElementById("furnace").style.display = "none";
	}
}

window.setInterval(function(){
	time++;
	document.getElementById("time").innerHTML = time;
}, time_wait);