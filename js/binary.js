
document.addEventListener("DOMContentLoaded", function(){

    function displayNumber(hour, minute) 
	{//takes in the time 
		var binaryh =(hour).toString(2);//converts hour variable to binary 
		var hlength = binaryh.length;
		if (hlength <= 5){//pads out with zeros so that the final binary is 11-digits
		for (var i = (4 - hlength); i >= 0; i--)
		{
			var tmp;
			tmp = "0" + binaryh;
			binaryh = tmp;
			}
		}

		var binarym =(minute).toString(2);//converts minute variable to binary
		var mlength = binarym.length;
		if (mlength <= 6){//pads out with zeros so that the final binary is 11-digits
		for (var i = (5 - mlength); i >= 0; i--){
			var tmp;
			tmp = "0" + binarym;
			binarym = tmp;
			}
		}

		var binary = binarym + binaryh; //adds them together to get a the 11digit binary  
		//I fucked up the order of these for some reason and forgot,
		document.getElementById("bin").innerHTML = binaryh + binarym; //this is to see the binary, didnt really work since I failed at setting them together

        for (var i = 1; i <= 11; i++) 
		{//changes the color of the pentagram according to the bit
            if (binary[11-i] == 1) {document.getElementById("layer"+i).style.fill = 'lime'}
            else if (binary[11-i] == 0) {document.getElementById("layer"+i).style.fill = 'maroon'}
            else {document.getElementById("layer"+i).style.fill = 'white'}//this makes it easy to see if something is wrong
		} 
	}
    


   function displayTime() 
   {

		var date = new Date();
        displayNumber(date.getHours(), date.getMinutes());
        setTimeout(function() {displayTime()}, 1000);
	}
    
	displayTime();
});
