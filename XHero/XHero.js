var audio = new Audio('Sounds/sweep.wav');  

var cKey = function () {
    audio = new Audio('Sounds/c.wav');
    audio.play();

    if(audio)
    {
        return true
    }
}
var dKey = function () {
    audio = new Audio('Sounds/d1.wav');
    audio.play();

    return true;
}
var eKey = function () {
    audio = new Audio('Sounds/e1.wav');
    audio.play();
}
var fKey = function () {
    audio = new Audio('Sounds/f.wav');
    audio.play();
}
var gKey = function () {
    audio = new Audio('Sounds/g.wav');
    audio.play();
}
var aKey = function () {
    audio = new Audio('Sounds/a.wav');
    audio.play();
}
var bKey = function () {
    audio = new Audio('Sounds/b.wav');
    audio.play();
}
var c2Key = function () {
    audio = new Audio('Sounds/c2.wav');
    audio.play();
}

