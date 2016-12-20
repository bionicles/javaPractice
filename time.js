var hour = 3;
var minute = 50;
var period = "PM";

function time(hour,minute,period){
	if (minute < 30 && period=="AM") {
		console.log("It's just after " + (hour-1) + " in the morning.");
	}
	else if(minute < 30 && period=="PM") {
		console.log("It's just after " + (hour-1) + " at night.");
	}
	else if (minute >= 30 && period=="AM") {
		console.log("It's almost " + (hour+1) + " in the morning.");
	}
	else if (minute>= 30 && period=="PM") {
		console.log("It's almost " + (hour+1) + " at night.")
	}
}

time(hour, minute,period);