var pickedColor;
var numSquares = 6;
var colors = [];
var displayColor = document.getElementById('displayColor');
var squares = document.querySelectorAll('.square');
var messageDisplay = document.getElementById('message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#resetButton');
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setupModeButtons();

	setupSquares();

	reset();
}

function setupModeButtons()
{
	for(var i = 0; i < modeButtons.length; i++)
	{
		modeButtons[i].addEventListener("click",function(){
	        modeButtons[0].classList.remove("selected")
	        modeButtons[1].classList.remove("selected")
			this.classList.add("selected");
	        this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
	        reset();
		});
	}
}

function setupSquares()
{
	for(var i=0; i< squares.length; i++)
	{
	    squares[i].addEventListener('click', function(){
	    	var clickedColor = this.style.background;
	 

	    	if(clickedColor === pickedColor)
	    	{
	    		changeToColor(clickedColor);
	            h1.style.backgroundColor = clickedColor;
	            resetButton.textContent = "Play Again?";
	    		messageDisplay.textContent = "You Won!";
	    	}
	    	else
	    	{
	    	    this.style.background = '#232323';
	    	    messageDisplay.textContent = 'Try Again';
	    	}
	    });
	}
}

function reset()
{
    h1.style.backgroundColor = 'steelblue';
	resetButton.textContent = "New Game";
	messageDisplay.textContent = "";

	colors = generateRandomColors(numSquares);
	pickedColor = pickRandomColor();
	displayColor.textContent = pickedColor;

	for(var i = 0; i < squares.length; i++)
	{   
		if(colors[i])
		{
			squares[i].style.display = "block";
		    squares[i].style.background = colors[i];
		}
		else
		{
			squares[i].style.display = "none";
		}
	}
}

resetButton.addEventListener("click",function(){
	reset();
});

function changeToColor(color)
{
    for(var i=0; i<squares.length; i++)
    {
    	squares[i].style.backgroundColor = color;
    }
}

function pickRandomColor()
{
	return colors[Math.floor(Math.random()*colors.length)];
}

function generateRandomColors(n)
{
	var array = [];

	for(var i = 0; i < n ; i++)
	{
		array.push(randomColor())
	}

	return array;
}

function randomColor()
{
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb("+r+", "+g+", "+b+")";
}