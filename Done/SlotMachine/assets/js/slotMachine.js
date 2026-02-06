/*
Author: 		Kamran Trea 100658007

My name is Kam Trea and this is my Assignment ' slot machine's ' Javascript code. 
The purpose of this game is to simply play a slot machine. The machine must have 100% functionality. 
Through functions, arrays, switch statements and loops this game will be possible.
*/


// Declaring global variables that will be used in multiple functions found below
var statusMessage = document.getElementById('statusMessage');
var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
var cyclegrabImage;
var betOne = document.getElementById('betOne');
var betTwo = document.getElementById('betTwo');
var betThree = document.getElementById('betThree');
var bet;
var credit = document.getElementById('credit');
// Declaring audio variables 
var cashOutSound = document.getElementById('cashOutSound');
var depoSound = document.getElementById('depoSound');
var loseSound = document.getElementById('loseSound');
var playOneSound = document.getElementById('playOneSound');
var playTwoSound = document.getElementById('playTwoSound');
var winOneSound = document.getElementById('winOneSound');
var winTwoSound = document.getElementById('winTwoSound');
var winThreeSound = document.getElementById('winThreeSound');
// Declaring constant variables
const THREE_DEADPOOLS = 500;
const TWO_DEADPOOLS = 25;
const ONE_DEADPOOL = 1;
//Use a boolean true or false value 
var moodAndType = 10;
var moodOrType = 2;



// Generates an array of objects used to generate random grabImage and help determine if the player will win or lose
var gem = [{
	image: "./assets/img/captain/captain.svg",
	type: "captain",
	mood: "happy"
}, {
	image: "./assets/img/captain/sadCaptain.svg",
	type: "captain",
	mood: "sad"
}, {
	image: "./assets/img/captain/blackCaptain.svg",
	type: "captain",
	mood: "angry"
}, {
	image: "./assets/img/hulk/hulk.svg",
	type: "hulk",
	mood: "happy"
}, {
	image: "./assets/img/hulk/sadHulk.svg",
	type: "hulk",
	mood: "sad"
}, {
	image: "./assets/img/hulk/blackHulk.svg",
	type: "hulk",
	mood: "angry"
}, {
	image: "./assets/img/ironman/ironMan.svg",
	type: "ironman",
	mood: "happy"
}, {
	image: "./assets/img/ironman/sadIronMan.svg",
	type: "ironman",
	mood: "sad"
}, {
	image: "./assets/img/ironman/blackIronMan.svg",
	type: "ironman",
	mood: "angry"
}, {
	image: "./assets/img/deadpool/deadpool.svg",
	type: "deadpool",
	mood: "happy"
}, ];
// Used as a temporary array of objects to verify against if the player wins and loses each turn
var tempgem = [];
// A function that will review whether the player will win or not
function final() {
	// Determines if the types and moods match the conditional if statements
	// Updates the status message
	// Adds win value to credit value if applicable
	if (tempgem[0].type === "deadpool" && tempgem[1].type === "deadpool" && tempgem[2].type === "deadpool") {
		statusMessage.innerHTML = "JACKPOT!!! Three deadpools pays " + THREE_DEADPOOLS * bet + " on a bet of " + bet;
		credit.value = parseFloat(credit.value) + parseFloat(THREE_DEADPOOLS * bet);
		winThreeSound.play();
	} else if (tempgem[0].type === "deadpool" && tempgem[1].type === "deadpool" || tempgem[0].type === "deadpool" && tempgem[2].type === "deadpool" || tempgem[1].type === "deadpool" && tempgem[2].type === "deadpool") {
		statusMessage.innerHTML = "NICE!!! Two deadpools pays " + TWO_DEADPOOLS * bet + " on a bet of " + bet;
		credit.value = parseFloat(credit.value) + parseFloat(TWO_DEADPOOLS * bet);
		winThreeSound.play();
	} else if (tempgem[0].type === "deadpool" || tempgem[1].type === "deadpool" || tempgem[2].type === "deadpool") {
		statusMessage.innerHTML = "One deadpool pays " + bet + " on a bet of " + bet;
		credit.value = parseFloat(credit.value) + parseFloat(bet);
		winThreeSound.play();
	} else if (tempgem[0].type === tempgem[1].type && tempgem[0].type === tempgem[2].type && tempgem[0].mood === tempgem[1].mood && tempgem[0].mood === tempgem[2].mood) {
		statusMessage.innerHTML = "Same mood and hero pays " + moodAndType * bet + " on a bet of " + bet;
		credit.value = parseFloat(credit.value) + parseFloat(moodAndType * bet);
		winTwoSound.play();
	} else if (tempgem[0].type === tempgem[1].type && tempgem[0].type === tempgem[2].type) {
		statusMessage.innerHTML = "Same hero pays " + moodOrType * bet + " on a bet of " + bet;
		credit.value = parseFloat(credit.value) + parseFloat(moodOrType * bet);
		winOneSound.play();
	} else if (tempgem[0].mood === tempgem[1].mood && tempgem[0].mood === tempgem[2].mood) {
		statusMessage.innerHTML = "Same mood pays " + moodOrType * bet + " on a bet of " + bet;
		credit.value = parseFloat(credit.value) + parseFloat(moodOrType * bet);
		winOneSound.play();
	} else {
		statusMessage.innerHTML = "Ooh no! you lost " + bet + " that really sucks ";
		loseSound.play();
	}
}
/* This is a function called grabImage, this function's
  purpose is to generate the 3 grabImage randomly. Using a for loop, the grabImage will be displayed randomly. The value i is added
  on to the img id to determine the img src.   */
function grabImage() {
	// A for loop that determines which image will be displayed by generating a random number between 1 and 3
	for (var i = 1; i <= 3; i++) {
		// Adds the value of i to the img id to determine the img.src
		var img = document.getElementById("img" + i);
		// A random number is generated between 1 and 19
		var random = Math.floor((Math.random() * 19) + 1);
		/* Here i've implemented a switch statment that will use a random number in order to figure out which gem
		 image in the array to use. The gem image is then added to a temporary array */
		//This switch statement is finding each image in the gem variable and using an index to get the image randomly.
		switch (random) {
			case 1:
			case 2:
				img.src = gem[0].image;
				tempgem[i - 1] = gem[0];
				break;
			case 3:
			case 4:
				img.src = gem[1].image;
				tempgem[i - 1] = gem[1];
				break;
			case 5:
			case 6:
				img.src = gem[2].image;
				tempgem[i - 1] = gem[2];
				break;
			case 7:
			case 8:
				img.src = gem[3].image;
				tempgem[i - 1] = gem[3];
				break;
			case 9:
			case 10:
				img.src = gem[4].image;
				tempgem[i - 1] = gem[4];
				break;
			case 11:
			case 12:
				img.src = gem[5].image;
				tempgem[i - 1] = gem[5];
				break;
			case 13:
			case 14:
				img.src = gem[6].image;
				tempgem[i - 1] = gem[6];
				break;
			case 15:
			case 16:
				img.src = gem[7].image;
				tempgem[i - 1] = gem[7];
				break;
			case 17:
			case 18:
				img.src = gem[8].image;
				tempgem[i - 1] = gem[8];
				break;
			case 19:
				img.src = gem[9].image;
				tempgem[i - 1] = gem[9];
				break;
		}
	}
}
// A function to stop the images from spinning
function endTimer() {
	// Stops the image cycle call
	clearTimeout(cyclegrabImage);
	// Call Final function
	final();
	// Disables play and chashOut button
	play.disabled = false;
	cashOut.disabled = false;
	// Saves the current information to local browser
	setLocal();
}
/* Step 7: This function will allow the code to run through a loop of the 
three image then that resets the images back to the default image
after cashing out */
function resetImages() {
	//First the For loop to go through 3 images on the screen
	for (var i = 1; i <= 3; i++) {
		// Next a variable named image that Confirms the img id by using the i count
		var img = document.getElementById("img" + i);
		// Third this adds adds an image from my img folder to replace each of the 3 imgs to the boom picture
		img.src = "./assets/img/noMoney.svg";
	}
}
// A function to save the current bet selected to local storage
function setBet() {
	betOne.onclick = function() {
		setLocal();
		play.click();
	};
	betTwo.onclick = function() {
		setLocal();
		play.click();
	};
	betThree.onclick = function() {
		setLocal();
		play.click();
	};
}
// A function that will verify which radio button (bet) has been selected
function grabBet() {
	// Confirms which bet is selected
	// Applies the value of the radio button to bet
	// Decreases the credit amount according to the bet value
	if (betThree.checked) {
		bet = credit.value;
		credit.value = 0;
	} else if (betTwo.checked) {
		bet = 2;
		credit.value = credit.value - bet;
	} else {
		bet = 1;
		credit.value = credit.value - bet;
	}
}
// A function which allows the user to play the loseSoundot machine
function startPlay() {
	// Reseting the playButton variable to play button id
	var playButton = document.getElementById('play');
	play.onclick = function() {
		// Sets play variable as playButton
		var play = playButton;
		// Verifies if the credit value is greater than 0
		// If the credit value is greater than 0 the function determines if there is enough credit for the current bet
		if (credit.value > 0) {
			// If the credit value is less than the bet submitted the game will be paused until the correct amount is selected
			if (betThree.checked && credit.value < 3 || betTwo.checked && credit.value < 2) {
				// Pauses sound confirms if it's set to 0 and then plays
				playTwoSound.pause();
				playTwoSound.currentTime = 0;
				playTwoSound.play();
				// The status message will be updated
				statusMessage.innerHTML = "Not enough credits!";
				// The play button will not work
				play = null;
				// If the credit value is greater than the bet value the game will continues
			} else {
				// The bet will be placed
				grabBet();
				// Calls sound to be played
				playOneSound.play();
				// The grabImage will be randomly generated and cycle
				cyclegrabImage = setInterval(grabImage, 100);
				// Disables play and cashOut button during image cycle
				play.disabled = true;
				cashOut.disabled = true;
				// Gets end timer after 3 seconds
				setTimeout(endTimer, 3500);
			}
			// If the credit value is less than 0 the games is reset and the user is requested to deposit more credit
		} else {
			// Calls reset function
			reset();
		}
	};
	// Calls getCashOut function
	getCashOut();
	// Calls setBet function
	setBet();
	// Calls setLocal function
	setLocal();
}
// A function used to add credits to the loseSoundot machine
function depof() {
	 
		// Verifies if the credit value is greater than 0
		if (credit.value > 0) {
			// If the credit value is greater than 0 the function disables the deposit menu from being used to add credits
			deposit = null;
			// If the crdit value is less than 0 the function allows the user to add credits
		} else {
			// Sound is played when deposit is made
			depoSound.play();
			// The status message is updated
			statusMessage.innerHTML = "Good luck!!!";
			// The grabImage are displayed
			grabImage();
			// The play, cashOut, betOne , betTwo, and betThree button is activated
			play.disabled = false;
			cashOut.disabled = false;
			betOne.disabled = false;
			betOne.checked = true;
			betTwo.disabled = false;
			betThree.disabled = false;
			// The deposit dropdown is disabled
			deposit.disabled = true;
			// Credit value is updated to the deposit value selection
			credit.value = 5;
			// The deposit value is reset to the 0 value
			deposit.selectedIndex = "0";
			// The startPlay function is called
			startPlay();
				deposit.disabled = false;
		}
	};

function depot() {
	 
		// Verifies if the credit value is greater than 0
		if (credit.value > 0) {
			// If the credit value is greater than 0 the function disables the deposit menu from being used to add credits
			deposit = null;
			// If the crdit value is less than 0 the function allows the user to add credits
		} else {
			// Sound is played when deposit is made
			depoSound.play();
			// The status message is updated
			statusMessage.innerHTML = "Good luck!!!";
			// The grabImage are displayed
			grabImage();
			// The play, cashOut, betOne , betTwo, and betThree button is activated
			play.disabled = false;
			cashOut.disabled = false;
			betOne.disabled = false;
			betOne.checked = true;
			betTwo.disabled = false;
			betThree.disabled = false;
			// The deposit dropdown is disabled
			deposit.disabled = true;
			// Credit value is updated to the deposit value selection
			credit.value = 10;
			// The deposit value is reset to the 0 value
			deposit.selectedIndex = "0";
			// The startPlay function is called
			startPlay();
			deposit.disabled = false;
		}
	};
	function depotw() {
	 
		// Verifies if the credit value is greater than 0
		if (credit.value > 0) {
			// If the credit value is greater than 0 the function disables the deposit menu from being used to add credits
			deposit = null;
			// If the crdit value is less than 0 the function allows the user to add credits
		} else {
			// Sound is played when deposit is made
			depoSound.play();
			// The status message is updated
			statusMessage.innerHTML = "Good luck!!!";
			// The grabImage are displayed
			grabImage();
			// The play, cashOut, betOne , betTwo, and betThree button is activated
			play.disabled = false;
			cashOut.disabled = false;
			betOne.disabled = false;
			betOne.checked = true;
			betTwo.disabled = false;
			betThree.disabled = false;
			// The deposit dropdown is disabled
			deposit.disabled = true;
			// Credit value is updated to the deposit value selection
			credit.value = 20;
			// The deposit value is reset to the 0 value
			deposit.selectedIndex = "0";
			// The startPlay function is called
			startPlay();
			deposit.disabled = false;
		}
	};
		


// This function is used to save the localStorage of the game
function setLocal() {
	// This Clears the previous localStorage info
	localStorage.clear();
	// Sets current status message
	localStorage['statusMessage'] = statusMessage.innerHTML;
	// Sets three current grabImage
	localStorage['img1'] = img1.src;
	localStorage['img2'] = img2.src;
	localStorage['img3'] = img3.src;
	// Verifies current bet selection and Sets current bet
	if (betThree.checked) {
		localStorage['betThree'] = betThree.checked;
	} else if (betTwo.checked) {
		localStorage['betTwo'] = betTwo.checked;
	} else {
		localStorage['betOne'] = betOne.checked;
	}
	// Sets current credit value
	localStorage['credit'] = credit.value;
}
// A function used to get the localStorage
function getLocal() {
	// Verifies if there is a localStorage item with the property statusMessage
	if (localStorage['statusMessage']) {
		// Gets the status message
		statusMessage.innerHTML = localStorage['statusMessage'];
		// Gets three grabImage
		img1.src = localStorage['img1'];
		img2.src = localStorage['img2'];
		img3.src = localStorage['img3'];
		// Verifies which bet was selected and sets it to true
		if (localStorage['betThree'] === "true") {
			betThree.checked = true;
		} else if (localStorage['betTwo'] === "true") {
			betTwo.checked = true;
		} else {
			betOne.checked = true;
		}
		// Deposit button is disabled
		deposit.disabled = true;
		// Get credit value
		credit.value = localStorage['credit'];
		// Calls startPlay function
		startPlay();
	} else {
		// Sets play, cashOut, betOne, betTwo, and betThree to disabled
		play.disabled = true;
		cashOut.disabled = true;
		betOne.disabled = true;
		betTwo.disabled = true;
		betThree.disabled = true;
		// Calls depo function
		depo();
	}
}
// A function used to reset game
function reset() {
	// localStorage is cleared
	localStorage.clear();
	// Status message is reset to default
	statusMessage.innerHTML = "Deposit credits to start play!";
	// Calls resetImages function
	resetImages();
	// Sets play, cashOut, betOne, betTwo, and betThree to disabled
	play.disabled = true;
	cashOut.disabled = true;
	betOne.disabled = true;
	betTwo.disabled = true;
	betThree.disabled = true;
	// Sets all bets checked to false
	betOne.checked = false;
	betTwo.checked = false;
	betThree.checked = false;
	// Sets deposit dropdown to enabled
	deposit.disabled = false;
	// Sets credit value to 0
	credit.value = 0;
	// Call depo function
	depo();
}
// A function for the user to cash out their winnings and begin a new game
function getCashOut() {
	// Declaring chashOut variable
	var cashOut = document.getElementById('cashOut');
	// Performs functions when cashOut button is clicked
	cashOut.onclick = function() {
		// Plays sound clip on chashOut
		cashOutSound.play();
		// Calls reset function
		reset();
	};
}
// The window onload function determines which function is activated when the window is loaded
window.onload = function() {
	// Gets the getLocal function to determine if there is localStorage
	getLocal();
};