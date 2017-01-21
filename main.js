
// Variables
var treeRoot = {size: 0, char: 0}
var growButton = document.getElementById("growYourTree");


//Create tree function to grow tree based on inputs
function tree(treeRoot) {
	var treeHeight = parseInt(document.getElementById('treeHeight').value);
	var charToUse = document.getElementById('characterInput').value;
	treeRoot.size = treeHeight;
	treeRoot.char = charToUse;
	var numOfChars = 1;
	var numOfSpaces = treeRoot.size -1;

	if (treeRoot.size > 0 && treeRoot.char.length === 1) {
		for (var i=0; i<treeRoot.size; i++) {
			var spaces = ' '.repeat(numOfSpaces);
			var character = treeRoot.char.repeat(numOfChars);
			var treeGo = spaces + character;
			console.log(treeGo);
			numOfSpaces -= 1;
			numOfChars += 2;
		}
	} else {
		alert('Please be sure to enter a value in both fields!')
		}
	}	

//Grow tree when button pushed
growButton.addEventListener('click', tree);

document.getElementById('characterInput').addEventListener('keyup', function(e){
	if (e.which === 13) {
		tree();
	}
});

treeHeight.addEventListener('keyup', function(e){
	if (e.which === 13) {
		tree();
	}
}); 



