//Simple function used to access elements on the html DOM
var $ = function (id) 
{
    return document.getElementById(id);
}

// Main program function that accepts user input for the total number of the
//Fibonacci series to show and the then runs a loop to create the output

var generate = function () 
{
	var intNumber = parseInt($("total_fib").value);  //gets user input from the DOM
	
    if(isNaN(intNumber) || intNumber<2 || intNumber>100)
{
    alert("Sorry, but your choice is invalid");
    $("total_fib").value = "";
}
else
{
	//validate user input that intCount is a number and intCount is not less than 2 or intCount not greater than 100
	
	var i=0;  // sets the first number in the Fibonacci series to 0
	var j=1;  //sets the second number in the Fibonacci series to 1
	var k;    //k is calculated by adding i+j and represents the next Fibonacci number
	var stringOutput = "0 1 ";//initialize the Fibonacci series output to include the first two numbers
    intCount = 2;

    while(intCount<intNumber)
    {
        k=i+j; 
        stringOutput = stringOutput + " " + k + " ";
        i=j;
        j=k;
        intCount++;
    }

	// write whatever kind of loop you want, given the above info, to generate the appropriate
	// number of fibonacci numbers and then post it to the html DOM 

} 


// Push solution back to Output through DOM
$("output").value = stringOutput;
};

window.onload = function () 
{
    $("total_fib").value = "";
    $("output").value = "";
    $("generate").onclick = generate; //runs the generate function when clicked
}  