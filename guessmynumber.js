let guessedNumber;
let chances = 7;
let score = 0;
let highScore = 0;
let tempScore = 0;
let randomNumber = Math.floor(Math.random() * 30) + 1;

document.querySelector(".chance").textContent = chances;
document.querySelector(".score").textContent = score;
document.querySelector(".highscore").textContent = highScore;

document.querySelector(".check").addEventListener("click", function() {
    guessedNumber = Number(document.querySelector('.guess').value);
    document.querySelector('.guess').disabled = true;
    document.querySelector('.check').disabled = true;

    if(!guessedNumber)
    {
        document.querySelector(".screen_message").textContent = "🚫 No Number!";
    }
    else if(guessedNumber === randomNumber) {
        document.querySelector('.check').disabled = true;
        document.querySelector('.again').disabled = true;
        document.querySelector(".blah").style.visibility = "hidden";
        document.querySelector(".screen_message").textContent = "🎉 Correct Number!!!";
        document.querySelector(".number").textContent = randomNumber;
        score += 20;
        tempScore = score;
        document.querySelector(".score").textContent = score;
        if(tempScore > highScore)
        {
            highScore = tempScore;
            document.querySelector(".highscore").textContent = highScore + " 🔱" ;
            document.querySelector(".screen_message").textContent = "🎉 New Champion 👑";
            // document.querySelector(".screen_message").append('<p>'+"New Champion 👑" + '</p>'); 
        }
        else {
            document.querySelector(".highscore").textContent = highScore + " 🔱";
        }
    }
    else if(chances > 0) {
        if(guessedNumber > randomNumber)
        {
            document.querySelector(".screen_message").textContent = "📈 Too High!!!";
            chances --;
            score -=2;
            document.querySelector(".chance").textContent = chances;
            if(chances == 0)
    {
        document.querySelector(".chance").textContent = chances;
        document.querySelector('.check').disabled = true;
        document.querySelector('.again').disabled = true;
        document.querySelector(".blah").style.visibility = "hidden";
        document.querySelector(".screen_message").textContent ="💩 You Lost The Game!!!";
        document.querySelector(".chance").textContent = chances;
    }
        }
        else{
            document.querySelector(".screen_message").textContent = "📉 Too Low!!!";
            chances --;
            score -=2;
            document.querySelector(".chance").textContent = chances;
            if(chances == 0)
    {
        document.querySelector(".chance").textContent = chances;
        document.querySelector('.check').disabled = true;
        document.querySelector('.again').disabled = true;
        document.querySelector(".blah").style.visibility = "hidden";
        document.querySelector(".screen_message").textContent = "💩 You Lost The Game!!!";
        document.querySelector(".chance").textContent = chances;
    }
        }
    }

    else{
        document.querySelector(".blah").style.visibility = "hidden";
        document.querySelector(".screen_message").textContent = "💩 You Lost The Game!!!";
    }

});

document.querySelector(".again").addEventListener("click", function() {

    document.querySelector(".guess").value = "";
    document.querySelector('.guess').disabled = false;
    document.querySelector('.check').disabled = false;
    document.querySelector(".blah").style.visibility = "visible";

});

document.querySelector(".play_again").addEventListener("click", function() {

    chances = 7;
    score = 0;
    document.querySelector(".screen_message").textContent = "Start guessing...";
    document.querySelector(".number").textContent =" ❓ ";
    document.querySelector(".guess").value = "";
    randomNumber = Math.floor(Math.random() * 20) + 1;
    document.querySelector(".score").textContent = score;
    document.querySelector(".blah").style.visibility = "visible";
    if(highScore > 0) {
        document.querySelector(".highscore").textContent = highScore + " 🔱";
    }
    else {
        document.querySelector(".highscore").textContent = highScore;
    }
    document.querySelector(".chance").textContent = chances;
    document.querySelector('.guess').disabled = false;
    document.querySelector('.check').disabled = false;
    document.querySelector('.again').disabled = false;

});
