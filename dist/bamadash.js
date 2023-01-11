//calc function
function clac(operand1, operand2, operator) 
{
    if (checkInput == true)
    {
        switch (operator) 
        {
        case "*":
            return operand1 * operand2;
        case "-":
            return operand1 - operand2;  
        case "/":
            return operand1 / operand2; 
        case "+":
            return operand1 + operand2;  
        }
    }
}

function checkInput(operand1, operand2, operator) 
{
    if (operand1 != null && operand2 != null)
        return true;
    if (operand1 > 0 && operand2 > 0)
        return true;
    return false;
}

console.log(clac(4,2,"*"));
console.log(5);

//compact function
function compact(array)
{
    let noFalseyArr = [];
    array.forEach(element => {
        switch (element) {
            case false:
                break;
            case null:
                break;
            case element > 0:
                break;
            case "":
                break;
            case undefined:
                break;
            case "NaN":
                break;
            default:
                noFalseyArr.push(element);
                break;
        }
        
    });
    return noFalseyArr;
}

//intersection function
/*function intersection(array1, array2, isStrict) {
    if(isStrict == true)
    {

    }
    else if(isStrict == false)
    {
        
    }
    
}

*/