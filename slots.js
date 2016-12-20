var quarters = 100;

function slots(quarters){
	var loops = 0;
	var wins = 0;
	while (quarters>0){
		quarters --;
		loops ++;
		console.log(quarters);

		if ( Math.floor((Math.random()*100))==1){
			wins ++;
			reward = 50 + Math.floor(51*Math.random());
			quarters = quarters + reward;
			console.log("VICTORY!")
			console.log ("This function looped " + loops + " times and won " + wins + " times!");
			console.log ("FREQUENTIST P(win) = " + (wins/loops));
			return quarters;
		}
	}
	console.log ("No Quarters!");
	console.log ("This function looped " + loops + " times and won " + wins + " times!");
	console.log ("FREQUENTIST P(win) = " + (wins/loops));
	return 0;
}

slots(quarters);