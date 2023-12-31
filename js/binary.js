let audioPlayed = false;
document.addEventListener("DOMContentLoaded", function () {

	function displayNumber(hour, minute) {//takes in the time 
		var explanationText = "<H2>Explanation</H2> "+
			"You start with the outer ring on top and read binary clockwise to read the hours. <br>"+
			"Then you start in the middle and go down, then clockwise for the minutes. <br><br>"+
			"<H2>Interactive functions:  </H2>Pressing `h` flips the pentagram.  <br>"+
			"Pressing `p` flips the pentagram back.  <br>"+
			"Adding `?hex=y` to the url will flip the pentagram. <br><br>"+
			"Mouse click toggles the explanation text. <br><br>"+
			"Identify field 1-11 by pressing keys:<br>"+
			"  1 - 2 - 3 - 4 - 5 - 6 - 7 - 8 - 9 - 0 - + <br><br>"+
			"Read more at the <br>"+
			"<a id=\"link\" href='https://github.com/PanzerPandaNinja/Pentaclock'>GitHub Repository</a>";
			
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
		
		

		if (binary === "00000000000" && !audioPlayed) {
			playAudio();
			audioPlayed = true;
		}
		document.getElementById("bin").innerHTML = explanationText + "<H2>Binary:  </H2>" + binaryh + "    " + binarym ; //this is to see the binary, and explanation

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

function playAudio() {
	const audio = new Audio('ConsumiteFurore_loop.mp3');
	audio.play().catch(function(error) {
		console.log('Failed to play audio:', error);
	});
}

function toggleExplanation() {
	var x = document.getElementById("bin");
	var l = document.getElementById("link"); 
	if (x.style.opacity === "0") {
		x.style.opacity = 1;
	} else {
		x.style.opacity = 0;
	}
}

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
		case "1": document.getElementById("layer" + 1).style.fill = 'white'; break;
		case "2": document.getElementById("layer" + 2).style.fill = 'white'; break;
		case "3": document.getElementById("layer" + 3).style.fill = 'white'; break;
		case "4": document.getElementById("layer" + 4).style.fill = 'white'; break;
		case "5": document.getElementById("layer" + 5).style.fill = 'white'; break;
		case "6": document.getElementById("layer" + 6).style.fill = 'white'; break;
		case "7": document.getElementById("layer" + 7).style.fill = 'white'; break;
		case "8": document.getElementById("layer" + 8).style.fill = 'white'; break;
		case "9": document.getElementById("layer" + 9).style.fill = 'white'; break;
		case "0": document.getElementById("layer" + 10).style.fill = 'white'; break;
		case "+": document.getElementById("layer" + 11).style.fill = 'white'; break;
		case "h": flipIt();	break;
		case "p": flipItBack();	break;
		default: return; // Quit when this doesn't handle the key event.
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

