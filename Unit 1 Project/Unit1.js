var payment = true;

var amount = [];

//amount paid per year
var modNumber = function (number)
{
    return number * 12;
}

while (payment == true)
{
    var input= prompt("Whats your car payment or type 0 to stop");
    if ( input == 0)
    {
        break;
    }

    if (input > 0)
    {
        input = input * 12 + " is how much you pay a year in car payments.";
    }
    
    console.log(input);
}