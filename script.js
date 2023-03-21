function myFunction(keyoperator) {
    var x = parseInt(document.getElementById("myText1").value);
    var y = parseInt(document.getElementById("myText2").value);
    
    var z;
    if (keyoperator === 'add') {
        z = x + y;
        document.getElementById("answer").innerHTML = "When the + button is clicked: The sum of " + x + " and " + y + " is " + z;
    }
    else if (keyoperator === 'subtract') {
        z = x - y;
        document.getElementById("answer").innerHTML = "When the - button is clicked: The difference between " + x + " and " + y + " is " + z;
    }
    else if (keyoperator === 'multiply') {
        z = x * y;
        document.getElementById("answer").innerHTML = "When the * button is clicked: The product of " + x + " and " + y + " is " + z;
    }
    else if (keyoperator === 'divide') {
        z = x / y;
        document.getElementById("answer").innerHTML = "When the ÷ button is clicked: The quotient of " + x + " and " + y + " is " + z;
    }
    else if (keyoperator === 'modulo') {
        z = x % y;
        document.getElementById("answer").innerHTML = "When the % button is clicked: The remainder of " + x + " and " + y + " is " + z;
    }
}