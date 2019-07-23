console.log("hi yao");
var numSquares = 6;
var colors = generateRandomColor(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");

easyBtn.addEventListener("click", function () {
    numSquares = 3;
    reset.textContent = "New colors";
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    this.classList.add("selected");
    hardBtn.classList.remove("selected");
    colors = generateRandomColor(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});
hardBtn.addEventListener("click", function () {
    numSquares = 6;
    reset.textContent = "New colors";
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    this.classList.add("selected");
    easyBtn.classList.remove("selected");
    colors = generateRandomColor(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "inline-block";
    }
});
reset.addEventListener("click", function () {
    messageDisplay.textContent = "";
    this.textContent = "New colors";
    //generate all new colors
    colors = generateRandomColor(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    for (i = 0; i < squares.length; i++) {
        // initial colors
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
});
colorDisplay.textContent = pickedColor;
for (i = 0; i < squares.length; i++) {
    // initial colors
    squares[i].style.backgroundColor = colors[i];
    // click listeners
    squares[i].addEventListener("click", function () {
        //grab color from clicked squares
        var clickedColor = this.style.backgroundColor;
        //compare color to pickedColor
        console.log(clickedColor, pickedColor);
        if (clickedColor === pickedColor) {
            this.style.backgroundColor = pickedColor;
            messageDisplay.textContent = "Correct 😊";
            reset.textContent = "Play it again? ";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try it again 💪";
        }
    });
}
function changeColors(color) {
    // loop through all squares
    for (i = 0; i < squares.length; i++) {
        // change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}
function pickColor() {
    // random 0-5
    var random = Math.floor(Math.random() * colors.length);
    // console.log(random);
    return colors[random];
}
function generateRandomColor(num) {
    //make an array
    var arr = [];
    //repeat num times
    for (i = 0; i < num; i++) {
        //get random color and push into arr
        arr.push(randomColor());
    }
    //return the array
    return arr;
}
function randomColor() {
    //get random RGB
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    //return a string rgb(r,space g, space b)
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

