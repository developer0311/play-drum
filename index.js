//detecting button press

var drumLength = document.querySelectorAll(".drum").length;

for (var i=0;i<drumLength;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){

        //console.log(this.style.color="white");   //'this' is identity of button that triggered by eventlistener.

        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
    }
    );
}



// detection key press

document.addEventListener("keypress",function(event)
{
    makeSound(event.key);
})



//function for detecting inner html and make sounds.

function makeSound(key)
{
    switch (key) 
        {
            case "w":
                var tom1 = new Audio("tom-1.mp3");
                tom1.play();
                break;
            
            case "a":
                var tom2 = new Audio("tom-2.mp3");
                tom2.play();
                break;
            
            case "s":
                var tom3 = new Audio("tom-3.mp3");
                tom3.play();
                break;

            case "d":
                var tom4 = new Audio("tom-4.mp3");
                tom4.play();
                break;

            case "j":
                var snare = new Audio("snare.mp3");
                snare.play();
                break;

            case "k":
                var crash = new Audio("crash.mp3");
                crash.play();
                break;

            case "l":
                var kick = new Audio("kick-bass.mp3");
                kick.play();
                break;

            default:
                console.log()
                break;
        }
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
