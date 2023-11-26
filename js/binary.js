
document.addEventListener("DOMContentLoaded", function () {

	function displayNumber(hour, minute) {//takes in the time 
		var binaryh = (hour).toString(2);//converts hour variable to binary 
		var hlength = binaryh.length;
		if (hlength <= 5) {//pads out with zeros so that the final binary is 11-digits
			for (var i = (4 - hlength); i >= 0; i--) {
				var tmp;
				tmp = "0" + binaryh;
				binaryh = tmp;
			}
		}

		var binarym = (minute).toString(2);//converts minute variable to binary
		var mlength = binarym.length;
		if (mlength <= 6) {//pads out with zeros so that the final binary is 11-digits
			for (var i = (5 - mlength); i >= 0; i--) {
				var tmp;
				tmp = "0" + binarym;
				binarym = tmp;
			}
		}

		var binary = binarym + binaryh; //adds them together to get a the 11digit binary  
		//I fucked up the order of these for some reason and forgot,
		document.getElementById("bin").innerHTML = binaryh + "    " + binarym; //this is to see the binary, didnt really work since I failed at setting them together

		for (var i = 1; i <= 11; i++) {//changes the color of the pentagram according to the bit
			if (binary[11 - i] == 1) { document.getElementById("layer" + i).style.fill = 'lime' }
			else if (binary[11 - i] == 0) { document.getElementById("layer" + i).style.fill = 'maroon' }
			else { document.getElementById("layer" + i).style.fill = 'white' }//this makes it easy to see if something is wrong
		}
	}



	function displayTime() {

		var date = new Date();
		displayNumber(date.getHours(), date.getMinutes());
		setTimeout(function () { displayTime() }, 1000);
	}

	displayTime();
});

function flipIt() {
	document.getElementById("svg8").style = "transform: rotate(180deg)"
}
function flipItBack() {
	document.getElementById("svg8").style = "transform: rotate(0deg)"
}
window.addEventListener("keydown", function (event) {
	if (event.defaultPrevented) {
		return; // Do nothing if the event was already processed
	}

	switch (event.key) {
		case "1":
			document.getElementById("layer" + 1).style.fill = 'white';
			break;
		case "2":
			document.getElementById("layer" + 2).style.fill = 'white';
			break;
		case "3":
			document.getElementById("layer" + 3).style.fill = 'white';
			break;
		case "4":
			document.getElementById("layer" + 4).style.fill = 'white';
			break;
		case "5":
			document.getElementById("layer" + 5).style.fill = 'white';
			break;
		case "6":
			document.getElementById("layer" + 6).style.fill = 'white';
			break;
		case "7":
			document.getElementById("layer" + 7).style.fill = 'white';
			break;
		case "8":
			document.getElementById("layer" + 8).style.fill = 'white';
			break;
		case "9":
			document.getElementById("layer" + 9).style.fill = 'white';
			break;
		case "0":
			document.getElementById("layer" + 10).style.fill = 'white';
			break;
		case "+":
			document.getElementById("layer" + 11).style.fill = 'white';
			break;
		case "b":
			document.getElementById("bin").style.color = 'green';
			break;
		case "x":
			document.getElementById("bin").style.color = 'black';
			break;
		case "h":
			flipIt();
			break;
		case "p":
			flipItBack();
			break;

		default:
			return; // Quit when this doesn't handle the key event.
	}

	// Cancel the default action to avoid it being handled twice
	event.preventDefault();
}, true);
// the last option dispatches the event to the listener first,
// then dispatches event to window


//This takes out a parameter and flips the pentagram if it is hex with a value index.html?hex=y
const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
if (urlParams.has('hex')) {	flipIt();}

