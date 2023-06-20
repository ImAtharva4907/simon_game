var buttonColours = ["red","blue","green","yellow"];
var userClickedPattern = [];
var gamePattern = [];

$(".btn").click(function(){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);

})
function nextSequence()
{
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
}
function playSound(name)
{
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}
function animatePress(currentColour)
{
    $("#" + currentColour).addClass("pressed");
    setTimeout(function(){
        
    })
}