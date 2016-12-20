var days = 30;
var reward = 0.01;

console.log 

for (var i = 1; i < days; i++){
	reward *= 2;
	console.log("On day number " + (i+1) + " the reward is " + reward);
}