
document.addEventListener("DOMContentLoaded", function(){

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

		var binary = binarym + binaryh; //I fucked up the order of these for some reason and forgot,
		//document.getElementById("bin").innerHTML = binary; //this is to see the binary, didnt really work since I failed at setting them together

        for (var i = 1; i <= 11; i++) {
            if (binary[11-i] == 1) {
				document.getElementById("layer"+i).style.fill = 'lime'
            }
            else if (binary[11-i] == 0) {
				document.getElementById("layer"+i).style.fill = 'maroon'
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
