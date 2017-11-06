var random = 0;
var mine_amount = 1;
var chop_amount = 1;

var money = 0;
var time = 0;
var time_wait = 1000;

var stone = 0;
var coal = 0;
var iron = 0;
var gold = 0;

var wood = 0;

var wheat = 0;

var pick = 0;
var axe = 0;
var sword = 0;
var hoe = 0;

var furnace = 0;

//function save() {
//	var save_game = {
//		mine_amount: mine_amount,
//		chop_amount: chop_amount,
//		money: money,
//		time: time,
//		time_wait: time_wait,
//		stone: stone,
//		coal: coal,
//		iron: iron,
//		gold: gold,
//		wood: wood,
//		wheat: wheat,
//		pick: pick,
//		axe: axe,
//		sword: sword,
//		hoe: hoe
//	}
//	localStorage.setItem("save_game",JSON.stringify(save_game));
//}
//function load_game() {
//	if (typeof save_game.mine_amount !== "undefined") mine_amount = savegame.mine_amount;
//	if (typeof save_game.chop_amount !== "undefined") chop_amount = savegame.chop_amount;
//	if (typeof save_game.money !== "undefined") money = savegame.money;
//	if (typeof save_game.time !== "undefined") time = savegame.time;
//}

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
		document.getElementById("pick").innerHTML = 'Craft stone pickaxe (50 wood & 30 stone)';
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
}

function chop(number) {
	random = Math.floor((Math.random() * 100) + 1);
	if (axe == 0) {
		wood = wood + number;
		document.getElementById("wood").innerHTML = wood;
	}
}

function craft_furnace() {
	if (furnace == 0 && stone >= 100) {
		furnace++;
		stone = stone - 100;
		document.getElementById("stone").innerHTML = stone;
	}
}

window.setInterval(function(){
	time++;
	document.getElementById("time").innerHTML = time;
}, time_wait);