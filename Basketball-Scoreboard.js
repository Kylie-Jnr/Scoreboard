let score1El = document.getElementById("score1-el")
let score2El = document.getElementById("score2-el")

let score = 0
let home1 = 1
let home2 = 2
let home3 = 3

function score11(){
	score += home1
	score1El.textContent = score	
}
function score22(){
	score += home2
	score1El.textContent = score	
}
function score33(){
	score += home3
	score1El.textContent = score	
}


let count = 0
let guest1 = 1
let guest2 = 2
let guest3 = 3
function score32(){
	count += guest1
	score2El.textContent = count
}
function score42(){
	count += guest2
	score2El.textContent = count
}
function score52(){
	count += guest3
	score2El.textContent = count
}

