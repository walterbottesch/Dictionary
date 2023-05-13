var dictionary = [];

var messageBox  = document.getElementById("display");
var list = document.getElementById("list");

function addWord() {
	var inputBox = document.getElementById("inWord");
	var newWord = inputBox.value;
	if(!isIn(newWord)) {
		dictionary.push(newWord);
		dictionary.sort();
		list.innerHTML = dictionary.join("<br/>");
		console.log(dictionary);
		messageBox.innerHTML = "";	
	} else {
		messageBox.innerHTML = "The word is in the Dictionary";	
	}
	inputBox.value = "";
}

function searchWord() {
	var inputBox = document.getElementById("inWord");
	var newWord = inputBox.value;
	console.log(newWord);
	console.log(dictionary.includes(newWord));
	isIn(newWord);
}	

function isIn(word) {
	var inputBox = document.getElementById("inWord");
	if(dictionary.includes(word)) {
		messageBox.innerHTML = "The word is in the Dictionary";
		inputBox.value = "";
		return true;
	} else {
		messageBox.innerHTML = "The word IS NOT in the Dictionary";
		return false;
	}
}

//event handlers
function saveButton() {
	var saveButton = document.getElementById("addWordIn");
	saveButton.onclick = addWord;
	var wordIn = document.getElementById("inWord");
	wordIn.onkeydown = handleKeyPress;
}
function handleKeyPress(event) {
	var addwordIn = document.getElementById("addWordIn");
	if (event.keyCode === 13) {
		addwordIn.click();
		return false;
	}
}

window.onload = saveButton;