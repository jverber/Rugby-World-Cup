var generateWinners = function(){
		
	var randomNumber = (Math.floor(Math.random()*5)+1)
	console.log(randomNumber)
	var writeNames = function(names){
		console.log(names.toUpperCase())
		document.getElementById("answer").innerHTML = names;
	}

	if (randomNumber <= 2){
		writeNames('Jack, Tom and Rob')
	} 
	else if (randomNumber == 3){
		writeNames('Jack, Kate and Ben')
	}
	else if (randomNumber == 4){
		writeNames('Rob, Kate and Ben')
	}	
	else {
		writeNames('Tom, Kate and Ben')
	} 
}
