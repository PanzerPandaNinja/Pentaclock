
jQuery(document).ready(function($) {
    var clockDiv = $(".binary-clock");


	
    function displayNumber(hour, minute) {
		var binaryh =(hour).toString(2);
		var hlength = binaryh.length;
		if (hlength <= 5){
		for (var i = (4 - hlength); i >= 0; i--){
			var tmp;
			tmp = "0" + binaryh;
			binaryh = tmp;
			}
		}
		
		var binarym =(minute).toString(2);
		var mlength = binarym.length;
		if (mlength <= 6){
		for (var i = (5 - mlength); i >= 0; i--){
			var tmp;
			tmp = "0" + binarym;
			binarym = tmp;
			}
		}

		var binary = binarym + binaryh;
		document.getElementById("bin").innerHTML = binary;
		
        for (var i = 1; i <= 11; i++) {
            if (binary[11-i] == 1) {
				document.getElementById("layer"+i).style.fill = 'blue'
            }
            else if (binary[11-i] == 0) {
				document.getElementById("layer"+i).style.fill = 'red'
            }
            else {
                document.getElementById("layer"+i).style.fill = 'white'
            }
        }
    }


   function displayTime() {

		var date = new Date();
        displayNumber(date.getHours(), date.getMinutes());
       
        setTimeout(function() {
            displayTime()
        }, 1000);
    }
    displayTime();
});




