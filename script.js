var vacationType;
var groupSize;
var result;
var travel;

vacationType = prompt("What kind of trip would you like to go on, musical, tropical, or adventurous?");
groupSize = prompt("How many are in your group?");
result = "Since you are a group of " +  groupSize + " going on a "+ vacationType + " vacation, you should take a ";


if(vacationType.toLowerCase() == "musical"){
	if(groupSize <= 0){
		console.log("Error in group Size");
	}
	else if (groupSize <= 2) {
		travel = "First Class";
		console.log(result + "" + travel + " to New Orleans");
	}
	else if(groupSize <= 5){
		travel = "Helicopter";
		console.log(result + "" + travel + " to New Orleans");
	}
	else if (groupSize > 5){
		travel = "Charter Flight";
		console.log(result + "" + travel + " to New Orleans");
	}
	else{
		console.log("There is an Error, while processing your request!")
	}
	
}

else if(vacationType.toLowerCase() == "tropical"){
	if(groupSize <= 0){
		console.log("Error in group Size");
	}
	else if (groupSize <= 2) {
		travel = "First Class";
		console.log(result + "" + travel + " to Beach Vacation in Mexico");
	}
	else if(groupSize <= 5){
		travel = "Helicopter";
		console.log(result + "" + travel + " to Beach Vacation in Mexico");
	}
	else if (groupSize > 5){
		travel = "Charter Flight";
		console.log(result + "" + travel + " to Beach Vacation in Mexico");
	}
	else{
		console.log("There is an Error, while processing your request!")
	}

}
else if(vacationType.toLowerCase() == "adventurous"){
	if(groupSize <= 0){
		console.log("Error in group Size");
	}
	else if (groupSize <= 2) {
		travel = "First Class";
		console.log(result + "" + travel + " to Whitewater Rafting the Grand Canyon");
	}
	else if(groupSize <= 5){
		travel = "Helicopter";
		console.log(result + "" + travel + " to Whitewater Rafting the Grand Canyon");
	}
	else if (groupSize > 5){
		travel = "Charter Flight";
		console.log(result + "" + travel + " to Whitewater Rafting the Grand Canyon");
	}
	else{
		console.log("There is an Error, while processing your request!")
	}
}
else{
	console.log("There is an Error, while processing your request!")
}