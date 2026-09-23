// Q1
// true if even
function checkParity(x){
    return !(x % 2);
}


// Q2
function fizzBuzzGame(x){
    if(!(x % 15)) console.log(`fizzbuzz`);
    else if(!(x % 5)) console.log(`buzz`);
    else if(!(x % 3)) console.log(`fizz`);
    else{
        console.log(x);
    }
}


// Q3
function reverString(s){
    return s.split("").reverse().join("");
}
// console.log(reverString("abcd"));


// Q4
function computeCircleArea(r){
    const PI = Math.PI;
    return PI*r**2;
}
function computeCircumference(r){
    const PI = Math.PI;
    return 2*PI*r;
}
// console.log(`Circumference of 5 radius circle = ${computeCircumference(5)}`);
// console.log(`Area of 5 radius circle = ${computeCircleArea(5)}`);


// Q5
function doubleChecker(x, y){
    return (x + y === 50 || x === 50 || y === 50);
}
// console.log(doubleChecker(30, 20));
// console.log(doubleChecker(50, 10));


// Q6
function waterAndFireChecker(x, y){
    // x > 0 && -y > 0 -->  -xy > 0, and vice versa 
    return -1 * x * y > 0;
}
// console.log(waterAndFireChecker(1, -2));
// console.log(waterAndFireChecker(1, 2));


// Q7
function fizzBuzzGame2(x){
    return (!(x % 5) || !(x % 8))
}
// console.log(fizzBuzzGame2(16));
// console.log(fizzBuzzGame2(25));
// console.log(fizzBuzzGame2(40));


// Q8
function ternaryMax(x, y, z){
    // y not max
    if(x >= y){
        // z not max
        if(x >= z){
            return x;
        }
        // x not max
        return z;
    }
    // x not max
    // z not max 
    if(y >= z){
        return y;
    }
    // y not max
    return z;
}
// console.log(ternaryMax(122,244,243));
// console.log(ternaryMax(122,244,244));


// Q9
function calculateSummation(sum_bound){
    let summ = 0;
    for(let i = 1; i <= sum_bound; i++){
        summ += i;
    }
    return summ;
}
// console.log(calculateSummation(4));


// Q10
// outer loop i = 1:5(or l in general)
// inner loop j = 0:i-1  -> s += "*";
// print s and reassing after each inner iteration
function drawAstreskTriangle(l){
    let s;
    for(let i = 0; i < l; i++){
        s = "";
        for(let j = 0; j <= i; j++){
            s += "*";
        }
        console.log(s);
    }
}
// drawAstreskTriangle(7);


// Q11
// True if positive / 0.
function checkPositivity(z){
    return z >= 0;
}
// console.log(checkPositivity(129));
// console.log(checkPositivity(-2129));


// Q12
// Naive way: recieving fixed number of arguments
function createDummyArray(a, b, c, d, e, f, g, h, i, j){
    let arr = [];
    arr[0] = a;
    arr[1] = b;    
    arr[2] = c;    
    arr[3] = d;    
    arr[4] = e;    
    arr[5] = f;    
    arr[6] = g;    
    arr[7] = h;    
    arr[8] = i;    
    arr[9] = j;
    return arr;      
}
// console.log(createDummyArray(1,2,3,4,50,6,7,8,9,10));

// Using rest operator
function packArgumentsInArray(...args){
    let arr = args;
    return arr;
}
// console.log(createDummyArray(1,2,3,4,50,6,7,8,9,10));


// Q13
function printSum(a, b){
    console.log(a+b);
}
// printSum(12,2);


// Q14
function computeFactorial(n){
    let factorial = 1;
    for(let i = 2; i <= n; i ++){
        factorial *= i;
    }
    return factorial;
}
// console.log(computeFactorial(5));


// Q15
function calculate(x, y, s){
    switch(s){
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            return x / y;
        default:
            return "error: invalid operator";
    }
}
// console.log(calculate(5, 3, '*'));

