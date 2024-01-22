
var buttonAnimals = ["duck", "horse", "pig", "rooster"];

var gamePattern = []
var userClickedPattern = []

var started = false;
var level = 0;

$(document).keypress(function() {
    if (!started) {
        $("#levels").text("Level" + level);
        nextSequence();
        started = true;
    }
});

$(".btn").click(function() {
    
    var userChosenAnimal = $(this).attr("id");
    userClickedPattern.push(userChosenAnimal);

    playSound(userChosenAnimal);
    animatePress(userChosenAnimal);

    checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        playSound("elephantcontrol");
        $("body").addClass("game-over");
        $("#levels").text("Game Over, Press Any Key To Restart!");

        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);

        startOver();
    }
}

function nextSequence() {
    userClickedPattern = [];
    level++
    $("#levels").text("Level" + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenAnimal = buttonAnimals[randomNumber];
    gamePattern.push(randomChosenAnimal);
    
    $("#" + randomChosenAnimal).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenAnimal);
}

function animatePress(currentAnimal) {
    $("#" + currentAnimal).addClass("pressed");
    setTimeout(function() {
        $("#" + currentAnimal).removeClass("pressed");
    }, 100);
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}