let count = document.getElementById("count-num");
let previousCnt = document.getElementById("previousCount");
let countIcr = 0;

function add(){
	countIcr++;
	count.innerHTML = countIcr;
}
function del(){
	num = countIcr--;
	count.innerHTML = countIcr;
	if (num == 0) {
		countIcr = 0;
	count.innerHTML = countIcr;
	}
}
function clr(){
	string = "- "
	previousCnt.innerHTML += string + countIcr;
	countIcr = 0;
	count.innerHTML = countIcr;
}