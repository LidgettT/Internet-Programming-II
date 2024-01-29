var food = new Array();

food[0] = new Array();
food[1] = "apple";
food[2] = 6;
food[3] = "peach";

console.log(food);

food[0][0] = 3;
food[0][1] = 6;
food[0][2] = 10;

for(var i in food)
{
    console.log(i);
}