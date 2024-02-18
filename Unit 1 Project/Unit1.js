var payment = true;

var amount = [];

//amount paid per year
var modNumber = function (number)
{
    return number * 12;
}

//Prompt window
while (payment == true)
{
    var input= prompt("Whats your car payments every month or type 0 to stop");
    if ( input == 0)
    {
        break;
    }
    
    //Array displayed in console
    amount[amount.length] = input;
}
    console.log(amount);

    //Variable amount is modified to equal amount per year
    for (var i in amount)
    {
        amount[i] = modNumber(amount[i]);
    }
    console.log(amount + " is the amount you pay for each vehicle every year.");

    //Event Listner Button
    var div = document.querySelectorAll("div");

    console.log(div);

    function toggleWhite() {
        fiv[1].classList.toggle("whitetext");
    }