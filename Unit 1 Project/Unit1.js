var payment = true;

var amount = [];

//4% interest on car payment
var modNumber = function (number)
{
    return number * .04;
}

while (payment == true)
{
    var input= prompt("Whats your car payment or type 0 to stop");
    if ( input == 0)
    {
        break;
    }
    amount[amount.length] = input;

    console.log(amount);

    for (var i in amount)
    {
        amount[i] = modNumber(amount[i]);
    }
}