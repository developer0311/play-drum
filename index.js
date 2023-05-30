//detecting button press

var drumLength = document.querySelectorAll(".drum").length;
for (var i=0;i<drumLength;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){

        //console.log(this.style.color="white");   //'this' is identity of button that triggered by eventlistener.

        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    }
    );
}

// detection key press

document.addEventListener("keypress",function(event)  //we can use any other thing replacing 'event'.
{
    makeSound(event.key);
    buttonAnimation(event.key);
});



//function for detecting inner html and make sounds.

function makeSound(key)
{
    switch (key) 
        {
            case "w":
            case "W":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            
            case "a":
            case "A":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            
            case "s":
            case "S":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;

            case "d":
            case "D":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;

            case "j":
            case "J":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;

            case "k":
            case "K":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;

            case "l":
            case "L":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;

            default:
                console.log()
                break;
        }
}

function buttonAnimation(currentKey)
{
    var activeButton = document.querySelector("."+currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed")
    },100);
}


// var audio = new Audio("sounds/tom-1.mp3");
    // audio.play();

// var houseKeeper1 = {yearsOfExperience : 12, name : "Diprati", cleaningRepertoier : ["bathroom", "lobby", "bedroom"]};



/*function HouseKeeper(yearsOfExperience, name, cleaningRepertoier)  // constractor function
{
    this.yearsOfExperience = yearsOfExperience; //'this'._ _ _ object is equal to _ _ _ property.
    this.name = name;
    this.cleaningRepertoier = cleaningRepertoier;
    this.clean = function()
    {
        alert("Cleaning in progress...");
    }
}

//in console log
var houseKeeper1 = new HouseKeeper(9, "Diprati", ["lobby","bedroom"]);  //enter

console.log(houseKeeper1.name);    //enter

*/
