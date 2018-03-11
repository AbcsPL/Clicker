var random = 0;
var mine_amount = 1;
var chop_amount = 1;
var seed_amount = 1;
var farm_amount = 1;

var money = 0;
var time = 0;
var total_time = 0;
var time_wait = 1000;

var stone = 0;
var coal = 0;
var iron = 0;
var iron_bar = 0;
var gold = 0;
var gold_bar = 0;

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
		document.getElementById("coal_furnace").innerHTML = coal;
		document.getElementById("iron").innerHTML = iron;
		document.getElementById("iron_furnace").innerHTML = iron;
	}
	else if (pick == 3) {
		if (random <= 765) {stone = stone + number;}
		else if (random > 765 && random <= 915) {coal = coal + number;}
		else if (random > 915 && random <= 991) {iron = iron + number;}
		else if (random > 991) {gold = gold + number;}
		document.getElementById("stone").innerHTML = stone;
		document.getElementById("coal").innerHTML = coal;
		document.getElementById("coal_furnace").innerHTML = coal;
		document.getElementById("iron").innerHTML = iron;
		document.getElementById("iron_furnace").innerHTML = iron;
		document.getElementById("gold").innerHTML = gold;
		document.getElementById("gold_furnace").innerHTML = gold;
	}
}
function pick_upgrade() {
	if (pick == 0 && wood >= 25) {
		wood = wood - 25;
		pick++;
		document.getElementById("wooden_pickaxe").style.display = "none";
		document.getElementById("stone_pickaxe").style.display = "table-row";
	}
	else if (pick == 1 && wood >= 50 && stone >= 30) {
		wood = wood - 50;
		stone = stone - 30;
		pick++;
		document.getElementById("stone_pickaxe").style.display = "none";
		document.getElementById("iron_pickaxe").style.display = "table-row";
	}
	else if (pick == 2 && wood >= 100 && stone >= 40 && iron_bar >= 25){
		wood = wood - 100;
		stone = stone - 40;
		iron_bar = iron_bar - 25;
		pick++;
		document.getElementById("iron_pickaxe").style.display = "none";
		document.getElementById("gold_pickaxe").style.display = "table-row";
	}
	document.getElementById("wood").innerHTML = wood;
	document.getElementById("stone").innerHTML = stone;
	document.getElementById("iron").innerHTML = iron;
	document.getElementById("iron_furnace").innerHTML = iron;
	document.getElementById("iron_bar").innerHTML = iron_bar;
	document.getElementById("iron_bar_furnace").innerHTML = iron_bar;
}
function axe_upgrade() {
	if (axe == 0 & wood >= 25) {
		wood = wood - 25;
		axe++;
		document.getElementById("wooden_axe").style.display = "none";
	}
	document.getElementById("wood").innerHTML = wood;
	chop_amount = axe + 1;
}

function chop() {
	random = Math.floor((Math.random() * 100) + 1);
	if (axe == 0 || 1) {
		wood = wood + Math.pow(2, axe);
		document.getElementById("wood").innerHTML = wood;
	}
	else if (axe == 2) {
		wood = wood + Math.pow(2, axe);
		document.getElementById("wood").innerHTML = wood;
	}
}

function seed() {
	random = Math.floor((Math.random() * 100) + 1);
	if (farming == 0)
		wheat_seed = wheat_seed + seed_amount;
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

function melt_iron() {
	if (iron >= 1 && coal >= 1) {
		iron = iron - 1;
		iron_bar = iron_bar + 1;
		coal = coal - 1;
		document.getElementById("iron").innerHTML = iron;
		document.getElementById("iron_furnace").innerHTML = iron;
		document.getElementById("iron_bar").innerHTML = iron_bar;
		document.getElementById("iron_bar_furnace").innerHTML = iron_bar;
		document.getElementById("coal").innerHTML = coal;
		document.getElementById("coal_furnace").innerHTML = coal;
	}
}
function melt_gold() {
	if (gold >= 1 && coal >= 4) {
		gold = gold - 1;
		gold_bar = gold_bar + 1;
		coal = coal - 4;
		document.getElementById("gold").innerHTML = gold;
		document.getElementById("gold_furnace").innerHTML = gold;
		document.getElementById("gold_bar").innerHTML = gold_bar;
		document.getElementById("gold_bar_furnace").innerHTML = gold_bar;
		document.getElementById("coal").innerHTML = coal;
		document.getElementById("coal_furnace").innerHTML = coal;
	}
}

function tr_stone() {
	if (pick >= 1) {
	stone = stone + time;
	time = 0;
	document.getElementById("stone").innerHTML = stone;
	document.getElementById("time").innerHTML = time;
	}
}
function tr_coal() {
	if (pick == 2) {
		coal = coal + (time - time % 10) / 10;
		time = time % 10;
	}
	if (pick == 3) {
		coal = coal + (time - time % 8) / 8;
		time = time % 8;
	}
	document.getElementById("coal").innerHTML = coal;
	document.getElementById("coal_furnace").innerHTML = coal;
	document.getElementById("time").innerHTML = time;
}
function tr_iron() {
	if (pick == 2) {
		iron = iron + (time - time % 25) / 25;
		time = time % 25
	}
	document.getElementById("iron").innerHTML = iron;
	document.getElementById("time").innerHTML = time;
}
function tr_gold() {
	if (pick == 3) {
		gold = gold + (time - time % 100) / 100;
		time = time % 100;
	}
	document.getElementById("gold").innerHTML = gold;
	document.getElementById("time").innerHTML = time;
}
function tr_wood() {
	if (axe == 0) {
		wood = wood + (time - time % 5) / 5;
		time = time % 5
	}
	document.getElementById("wood").innerHTML = wood;
	document.getElementById("time").innerHTML = time;
}

window.setInterval(function(){
	time++;
	total_time++;
	document.getElementById("time").innerHTML = time;
	document.getElementById("total_time").innerHTML = total_time;
}, time_wait);