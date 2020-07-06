const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");
var timer=[0,0,0,0];
var interval;
var timerrunning=false;
// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZero(time){
    if(time<=9){
        time="0"+time;
    }
    return time;
}

// Run a standard minute/second/hundredths timer:
function runTimer(){
    let currentTime= leadingZero(timer[0]) + ":" + leadingZero(timer[1])+":"+leadingZero(timer[2]);
    theTimer.innerHTML=currentTime;
    timer[3]++;

    timer[0]=Math.floor((timer[3]/100)/60);
    timer[1]=Math.floor((timer[3]/100)-(timer[0]*60));
    timer[2]=Math.floor(timer[3]-(timer[1]*100)-timer[0]*6000)
}

// Match the text entered with the provided text on the page:
function spellCheck(){
    let testEntered=testArea.value;
    let originTextMatch=originText.substring(0,testEntered.length);
    if(testEntered==originText){
        testWrapper.style.borderColor="green";
        clearInterval(interval)
    }
    else{
        if(testEntered==originTextMatch){
            testWrapper.style.borderColor="blue";

        }
        else{
            testWrapper.style.borderColor="red";
        }
    }
    console.log(testEntered)
}

// Start the timer:
function start(){
let textEnterendLength=testArea.value.length;
console.log(textEnterendLength)
if(textEnterendLength===0 && !timerrunning){
    timerrunning=true;
    interval=  setInterval(runTimer,10);
}
}

// Reset everything:
function reset(){
    console.log("reset pressed");
    clearInterval(interval);
    interval=null;
    timer=[0,0,0,0];
    timerrunning=false;
    testArea.value='';
    theTimer.innerHTML="00:00:00";
    testWrapper.style.borderColor="grey";
}

// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keypress",start,false);
testArea.addEventListener("keyup", spellCheck,false);
resetButton.addEventListener("click",reset,false);

//calculate words per minute

//calc error per minute


//high score board