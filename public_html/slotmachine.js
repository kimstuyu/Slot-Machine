document.getElementById('insert').addEventListener('click', insertMoney);
document.getElementById('playMore').addEventListener('click', play);
document.getElementById('total').addEventListener('click', totalAmount);

function insertMoney() {
    var input = Number(prompt("Insert money to play game!"));
    if (input > 0) {
        addTotal = addTotal + input;
    } else {
        alert("Input a valid number!");
    }
}

function play() {
    if (addTotal === 0){
            alert("Your balance: $" + addTotal + "\nInsert more money!");
        } else {
            aBet = Number(prompt("How much do you put for this round?"));
            switch (true) {
                case (aBet > 0 && aBet <= addTotal):
                    addTotal = addTotal - aBet;
                    game(aBet);
                    document.getElementById('playMore').innerHTML = "Click here to play!";
                    break;
                case (aBet < 0 || aBet > addTotal):
                    alert("Input a valid number!" + "\n'Click' the button to play again");
                    document.getElementById('playMore').innerHTML = "Click here to play again!";
                    break;
                }
        }
}

function totalAmount() {
    if (addTotal > 0) {
        alert("Your balance: $" + addTotal);
    } else {
        alert("Your balance: $" + addTotal + "\nNeed to insert more money to play!");
    }
}

function game(bet) {
    var array = ['cherries', 'orange', 'plum', 'bell', 'melon', 'bar'];
    var word1 = array[Math.floor(Math.random() * array.length)];
    var word2 = array[Math.floor(Math.random() * array.length)];
    var word3 = array[Math.floor(Math.random() * array.length)];
    
    document.getElementById("demo").innerHTML = '<img src="' + word1 + '.jpg" alt="">';
    document.getElementById("demo1").innerHTML = '<img src="' + word2 + '.jpg" alt="">';
    document.getElementById("demo2").innerHTML = '<img src="' + word3 + '.jpg" alt="">';
    
    if (word1 === word2 && word1 === word3) {
        winPrice = bet * 3;
        addTotal = addTotal + winPrice;
        alert("3 words match. You won $" + winPrice);
    }
    if (word1 === word2 || word2 === word3 || word1 === word3) {
        winPrice = bet * 2;
        addTotal = addTotal + winPrice;
        alert("2 words match. You won $" + winPrice);
    } else {
        winPrice = 0;
        addTotal = addTotal + winPrice;
        alert("Good luck for the next round!");
    }
}

var winPrice;
var addTotal = 0;
var aBet;
