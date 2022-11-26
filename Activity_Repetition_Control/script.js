console.log("connected");


// Activity: Loop Statement

// Prompt a user to enter a number.
let x = prompt ("Give me a number");

for (x; x >= 0; x--)
{
    // When a number is less than to 50, we need to display the message that we need to terminate the loop

    if (xr < 50){
        console.log("Currently at number $x}. Terminating the loop");
        break; //jumps out of the loop
    }

    // When a number is divisible by 10, display a message that it is divisible by 10. Therefore, they will skip the number.
    if (x % 10 === 0)
    {
        console.log("The number is divisible by 10. Skipping the number");
        continue; 
    }

    // If it is divisible by 5, display the number.

    if (x % 5 === 0)
    {
        console.log(x);
    }

}   