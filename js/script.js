// As a users to input there value

let number1 = parseInt(prompt("Input your number"));

let number2 = parseInt(prompt("Input your number"));

let number3 = parseInt(prompt("Input your number"));

// Addtion of the three numbers

let add = ( number1 + number2 + number3);

// modulos of the three numbers

let modu = add % 2

// invoke if statement on even and odd

if (add ===0){
    alert("Your numbers are  ZEROs")
}

else if (modu ===0) {
    alert("The sum of the three numbers is EVEN");
}

else{
    alert("The sum of the three numbers is ODD")
}



// Geussing game
// constant value

const num = 100 

// guess two numbers

let firstNum = parseInt(prompt("Input your first number"));

let secondNum = parseInt(prompt("Input your second number"));

// Difference between constant and firstNum

let diff1 = num - firstNum

// Difference between constant and secondNum

let diff2 = num - secondNum

// Performing if statement 

if (num ===firstNum){
    alert("You guess first number RIGHT");
}

else if(num === secondNum){
    alert("You guess second number RIGHT")
}

else if (firstNum > num && secondNum > num){
    alert("your numbers are greater than constant number")
    alert(diff1);
    alert(diff2);
} 





// function Addtion(){
//     let cal= (number1 + number2 + number3) % 2

//     return cal
// }

// if (cal ===0) { alert ("The sum of the three numbers is EVEN")

// }

// else {
//    alert ("The sum of the three is ODD")
// }

// alert(Addtion());

// document.write(Addtion());