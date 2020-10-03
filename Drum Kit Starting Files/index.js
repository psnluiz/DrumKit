var audiow = "sounds/tom-1.mp3";
var audioa = "sounds/tom-2.mp3";
var audios = "sounds/tom-3.mp3";
var audiod = "sounds/tom-4.mp3";
var audioj = "sounds/crash.mp3";
var audiok = "sounds/kick-bass.mp3";
var audiol = "sounds/snare.mp3";


//var soundFilesSource = "sounds/" + 
// Adds Event Listeners to Drum buttons
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function () 
    {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML)
    })
}

document.addEventListener("keydown", function(event)
    {
        makeSound(event.key);
        buttonAnimation(event.key);
    });


function makeSound(key)
{
    switch (key) 
        {
            case "w": 
                var audio = new Audio(audiow);
                audio.play();
                break;
            case "a": 
                var audio = new Audio(audioa);
                audio.play();
                break;
            case "s": 
                var audio = new Audio(audios);
                audio.play();
                break;
            case "d": 
                var audio = new Audio(audiod);  
                audio.play();
                break; 
            case "j": 
                var audio = new Audio(audioj);
                audio.play();
                break;
            case "k": 
                var audio = new Audio(audiok);
                audio.play();
                break;
            case "l": 
                var audio = new Audio(audiol);  
                audio.play();
                break;                  
            default:
                break;
        }

}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function()
    {
        activeButton.classList.remove("pressed");
    }, 100);
}