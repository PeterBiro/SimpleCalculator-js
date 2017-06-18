function add(a,b) {
    return a + b;
}

function substract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function percent(a) {
    return a / 100;
}

function addDigit(a, d) {
    if (isFloat === false) {
        return a * 10 + d;    
    } else {
        pointPlace = a.toString().indexOf(".");
        if (pointPlace === -1) {
            return a + d * Math.pow(10,-1);
        } else {
            numLength = a.toString().length();
            return a + d * Math.pow(10,pointPlace-numLength);    
        }
    }   
}

function reset() {
    firstNumber = 0;
    secoundNumber = 0;
    operator = null;
    isFloat = false;
    result = null;
}

var firstNumber = 0;
var secoundNumber = 0;
var operator = null;
var isFloat = false;
var result = null;

document.addEventListener("click", main);

function main() {

    if (event.target.className === "num") {
        if (operator === null) {
            firstNumber = addDigit(firstNumber, parseInt(event.target.id));
        } else {
            secoundNumber = addDigit(secoundNumber, parseInt(event.target.id));
        }
    } else {
        switch (event.target.id) {
            case 'decimal':
                isFloat = true;
                break;
            case 'plusminus':
                if (operator === null) {
                    firstNumber = -1 * firstNumber;
                } else {
                    secoundNumber = -1 * secoundNumber;
                }
                break;
            case 'add':
                if (secoundNumber === 0) {
                    operator = "+";
                    isFloat = false;
                }
                break;
            case 'substract':
                if (secoundNumber === 0) {
                    operator = "-";
                    isFloat = false;
                }
                break;
            case 'percent':
                if (secoundNumber === 0) {
                    result = firstNumber * 100;
                    document.getElementById("display").innerHTML = result;
                }
                break;
            case 'multiply':
                if (secoundNumber === 0) {
                    operator = "*";
                    isFloat = false;
                }
                break;
            case 'divide':
                if (secoundNumber === 0) {
                    operator = "/";
                    isFloat = false;
                }
                break;
            case 'help':
                alert("Help is not implemented yet. :(")
                break;
            case 'C':
                reset();
                break;
            case 'equal':
                switch (operator) {
                    case '+':
                        result = add(firstNumber, secoundNumber);
                        break;
                    case '-':
                        result = substract(firstNumber, secoundNumber);
                        break;
                    case '*':
                        result = multiply(firstNumber, secoundNumber);
                        break;
                    case '/':
                        result = divide(firstNumber, secoundNumber);
                        break;
                }
                document.getElementById("display").innerHTML = result;
                break;
        }
    }
    if (result === null) {
        var displayLine = firstNumber.toString();
        if (operator !== null) {
            displayLine = displayLine.concat(operator).concat(secoundNumber.toString());
        }
        document.getElementById("display").innerHTML = displayLine;        
    } else {
        reset()
    }
}
