function printRange(start,end,skip){
	console.log("From " + start + " to " + end + " incrementing by " + skip + ":");
	for (var i = start; i < end; i = i+skip){
		console.log ("The current number is: " + i);
	}
}

printRange(3, 300, 3);