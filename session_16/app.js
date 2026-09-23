// --- AI didn't engage in the task, even for edited answers, they were revised
// , only the functions were tested manually, best regards :) ---


// Event loop is the dispatcher that brings callback functions that are registered to asynchronous operations from callback queue to call stack
// arr[0] = x; arr.shift(x); arr[arr.length-1] = x; arr.push(x);
// 3
// 0 immediatly 1 after 1s 2 after 2s 3 after 3s 4 after 4s

// ['baz']
// 1 "Hello" true
// true ["Bmw", 1000000]

// 1
function sumObjectValues(obj){
    let sum = 0;
    for(let val in obj){
        if(typeof(obj[val]) == "number") sum += obj[val];
    }
    return sum;
}
// console.log(sumObjectValues({message: 'hello', num1: 10, bool: true,num3: 20}));


// 2
function executeAsyncOperations(){
    setTimeout(() => {console.log(`Hello after second 2`)}, 2000); // this second
    setTimeout(() => {console.log(`Hello after second 1`)}, 1000); // this logs first
    setTimeout(() => {console.log(`Hello after second 3`)}, 3000); // this third
    // output: hello after second 1, hello after second 2, hello after second three
}
// executeAsyncOperations();


// 3
function getMax(arr){
    let max = -Infinity;
    let maxIndex = -1;
    for(let i in arr){
        if(arr[i] > max){
            max = arr[i];
            maxIndex = +i;
        }
    }
    return {max, maxIndex};
}
// console.log(getMax([1,1,12,2,2,2]));


// 4, weak knowledge about dates so JS material file was reviewed,
//  and searched on web, logic is mine
function calculateDifferenceInDays(date1, date2){
    let interval1InDays = date1.getTime()/86400000;
    let interval2InDays = date2.getTime()/86400000;
    return parseInt(Math.max(interval1InDays, interval2InDays) - Math.min(interval1InDays, interval2InDays));
}
// console.log(calculateDifferenceInDays(new Date(2026, 0, 12), new Date(1993, 3, 16)));


// 8
function convertObjectToKeyValueArray(obj){
    let arr = new Array(Object.keys(obj).length).fill([]);
    let i = 0;
    for (let key in obj) {
        console.log(`setting ${key} in arr[${i}][0] and ${obj[key]} in arr[${i}][1]`);
        arr[i][0] = key;
        arr[i][1] = obj[key];
        console.log(arr);
        i++;
    }
    return arr;
}
console.log(convertObjectToKeyValueArray({name: "ahmad", age: 21, location: "Giza"}));


// bonus:
//  1
// 12 am => 00
// other am => same
// 12 pm => 12
// 12+ pm => += 12
function convertTo24Format(s){
    let hour = +s.substr(0,2);
    // console.log(hour);
    let newHour = hour % 12;
    // console.log(newHour);
    if(s[6] == 'p') newHour += 12;
    // console.log(newHour);
    return newHour + s.substr(2,3);
}
// console.log(convertTo24Format("12:23 pm"));