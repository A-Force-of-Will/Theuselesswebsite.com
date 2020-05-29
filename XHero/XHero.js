var audio = new Audio('Sounds/sweep.wav');

var cKey = function () {
    audio = new Audio('Sounds/c.wav');
    audio.play();
    document.getElementById("btnC").focus();
    return true
}
var dKey = function () {
    audio = new Audio('Sounds/d1.wav');
    audio.play();
    document.getElementById("btnD").focus();
    return true;
}
var eKey = function () {
    audio = new Audio('Sounds/e1.wav');
    audio.play();
    document.getElementById("btnE").focus();
    return true;

}
var fKey = function () {
    audio = new Audio('Sounds/f.wav');
    audio.play();
    document.getElementById("btnF").focus();
    return true;

}
var gKey = function () {
    audio = new Audio('Sounds/g.wav');
    audio.play();
    document.getElementById("btnG").focus();
    return true;

}
var aKey = function () {
    audio = new Audio('Sounds/a.wav');
    audio.play();
    document.getElementById("btnA").focus();
    return true;

}
var bKey = function () {
    audio = new Audio('Sounds/b.wav');
    audio.play();
    document.getElementById("btnB").focus();
    return true;

}
var c2Key = function () {
    audio = new Audio('Sounds/c2.wav');
    audio.play();
    document.getElementById("btnC2").focus();
    return true;

}

document.addEventListener('keypress', logKey);
document.addEventListener('keyup', blurEvent);

function blurEvent(e){
    switch (e.code) {
        case "KeyQ":
            document.getElementById("btnC").blur();
            break;
        case "KeyW":
            document.getElementById("btnD").blur();
            break;
        case "KeyE":
            document.getElementById("btnE").blur();
            break;
        case "KeyR":
            document.getElementById("btnF").blur();
            break;
        case "KeyT":
            document.getElementById("btnG").blur();
            break;
        case "KeyY":
            document.getElementById("btnA").blur();
            break;
        case "KeyU":
            document.getElementById("btnB").blur();
            break;
        case "KeyI":
            document.getElementById("btnC2").blur();;
            break;
    }
}

function logKey(e) {
    switch (e.code) {
        case "KeyQ":
            cKey();
            break;
        case "KeyW":
            dKey();
            break;
        case "KeyE":
            eKey();
            break;
        case "KeyR":
            fKey();
            break;
        case "KeyT":
            gKey();
            break;
        case "KeyY":
            aKey();
            break;
        case "KeyU":
            bKey();
            break;
        case "KeyI":
            c2Key();
            break;
    }
}
