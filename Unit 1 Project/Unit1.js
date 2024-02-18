var payment = true;

var amount = [];

//amount paid per year
var modNumber = function (number)
{
    return number * 12;
}

while (payment == true)
{
    var input= prompt("Whats your car payments every month or type 0 to stop");
    if ( input == 0)
    {
        break;
    }
    
    amount[amount.length] = input;
}
    console.log(amount);

    for (var i in amount)
    {
        amount[i] = modNumber(amount[i]);
    }
    console.log(amount);
