var gameMode = 6;
var colors;
var pickedColor;
var squeres = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var buttons = document.querySelectorAll(".mode");

init();

function init() {
        
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons () {
    for (var i = 0; i < buttons.length; i ++) {
        buttons[i].addEventListener("click", function(){
        buttons[0].classList.remove("selected");
        buttons[1].classList.remove("selected");
        this.classList.add("selected");
        // ternary operator
        this.textContent === "Easy" ? gameMode = 3 : gameMode = 6;
        
        reset ();
      });
    }
}

function setupSquares () {
    for (var i = 0; i < squeres.length; i++) {
        //add click listeners to squares
        squeres[i].addEventListener("click", function() {
            //greab color of picked square and compare to picked color
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!!!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try again";
            }
        });
    }
}

function reset() {
    // reset message 
    messageDisplay.textContent = "";
    //generate all new colors
    colors = generateRandomColors(gameMode);
    //pick new random color from array
    pickedColor = pickColor();
    //change color display to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    //change colors of squares
    for (var i = 0; i < squeres.length; i++) {
        if(colors[i]) {
            squeres[i].style.display = "block";
            squeres[i].style.backgroundColor = colors[i];
        } else {
            squeres[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
reset();
});


function changeColors (color) {
    //loop through all squares change each color to match given color
    for ( var i = 0; i< squeres.length; i++) {
        squeres[i].style.backgroundColor = color;
    }
}

function pickColor() {
   var random = Math.floor(Math.random() * colors.length);
   return colors[random];
}

function generateRandomColors (num) {
    //make an array

    var arr = []
    //repeat num times
    for(var i = 0; i < num; i ++) {
        arr.push(randomColor());
    //get random color and push into arr
}
    //return that arr
    return arr;
    
}

function randomColor() {
    //pick red form 0 to 255
    var r = Math.floor(Math.random() * 256);
    //pick green form 0 to 255
    var g = Math.floor(Math.random() * 256);
    //pick blue form 0 to 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

