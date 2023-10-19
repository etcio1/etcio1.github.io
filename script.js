var choicePlayer_1 = "";
var choicePlayer_2 = "";

function choicePlayer1(button) {
    choicePlayer_1 = button.getAttribute("data-tip");

    enableDisableButtons();
}

function choicePlayer2(button) {
    choicePlayer_2 = button.getAttribute("data-tip");

    enableDisableButtons();

    play();
}

function enableDisableButtons() {
    document.getElementById("rock1").disabled = (!document.getElementById("rock1").disabled);
    document.getElementById("paper1").disabled = (!document.getElementById("paper1").disabled);
    document.getElementById("scissors1").disabled = (!document.getElementById("scissors1").disabled);

    document.getElementById("rock2").disabled = (!document.getElementById("rock2").disabled);
    document.getElementById("paper2").disabled = (!document.getElementById("paper2").disabled);
    document.getElementById("scissors2").disabled = (!document.getElementById("scissors2").disabled);
}

function play() {
    result = "";
    if (choicePlayer_1 == "rock") //user1 choose rock
        if (choicePlayer_2 == "rock")
            result = "It's a draw!";
        else
            if (choicePlayer_2 == "paper")
                result = "Player 2 win!";
            else
                result = "Player 1 win!";

    else
        if (choicePlayer_1 == "paper") //user1 choose paper
            if (choicePlayer_2 == "rock")
                result = "Player 1 win!";
            else
                if (choicePlayer_2 == "paper")
                    result = "It's a draw!";
                else
                    result = "Player 2 win!";

        else  //user1 choose scissors
            if (choicePlayer_2 == "rock")
                result = "Player 2 win!";
            else
                if (choicePlayer_2 == "paper")
                    result = "Player 1 win!";
                else
                    result = "It's a draw!";

    alert(result);
}