var player=0,computer=0;// Defining variables to count score
var pick;

function score(){
    var score_div = document.getElementById("score").innerHTML = player + " - " + computer;
}//sending score using ID
setInterval(score, 60);//The setInterval() method calls a function or evaluates an expression at specified intervals

function game(pick){
    compare(pick);
}//Value of pick is received from HTML which in turn calls the function with game logic

function compare(choice1) {
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        choice2 = "Paper";
    } else if (computerChoice <= 0.67) {
        choice2 = "Scissors";
    } else {
        choice2 = "Rock";
    }

    if (choice1 === choice2) {
        Draw();
    }

    else if (choice1 === "Rock") {

        if (choice2 === "Scissors") {
            Winner();
        }
        else {
            Loser();
        }
    }

    else if (choice1 === "Paper") {

        if (choice2 === "Rock") {
            Winner();
        }
        else {
            Loser();
        }
    }

    else if (choice1 === "Scissors") {
        if (choice2 === "Rock") {
            Winner();
        }
        else {
            Loser();
        }
    }


}//Function to compare values of player and computer to decide who wins

function Winner() {
    $("#response").html("<h1 style='background-color: lightgray'>Player Wins!</h1>");
    player++;
}//Function is called when player wins the comparision

function Loser() {
    $("#response").html("<h1 style='background-color: lightsteelblue'>Computer Wins!</h1>");
    computer++;
}//Function is called when computer wins the comparision

function Draw() {
    $("#response").html("<h1 style='background-color: white'>It's a Tie!</h1>")

}