// Variable Declaration
var gameVars = {
	goal: 0,
	guesses: 0,
	ruby: 0,
	sapphire: 0,
	agate: 0,
	emerald: 0,
	wins: 0,
	losses: 0
};

// Game Logic
$(function() {
	// Generate the first game
	generateGameVars();

	// When a button is clicked 
	$('button').click(function() {
		checkGuess($(this).attr('id'));
	})
});

// Function Declaration 
function generateGameVars() {
	// Generate the Game Variables
	gameVars.goal = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
	gameVars.guesses = 0;
	gameVars.ruby = Math.floor(Math.random() * 12) + 1;
	gameVars.sapphire = Math.floor(Math.random() * 12) + 1;
	gameVars.agate = Math.floor(Math.random() * 12) + 1;
	gameVars.emerald = Math.floor(Math.random() * 12) + 1;

	// Update the page
	$('#randomNumber').html(gameVars.goal);
	$('#guesses').html(gameVars.guesses);
}

function checkGuess(val) {

	// Update the guess values
	gameVars.guesses += gameVars[val];
	$('#guesses').html(gameVars.guesses);

	// Check to see if the game is won or lost
	if (gameVars.guesses === gameVars.goal) {
		// Win
		$('#winlose').html('You Win!');
		gameVars.wins++
		$('#wins').html(gameVars.wins);
		generateGameVars();
	} else if (gameVars.guesses > gameVars.goal) {
		// Lose
		$('#winlose').html('You Lose!');
		gameVars.losses++
		$('#losses').html(gameVars.losses);
		generateGameVars();
	}
}
