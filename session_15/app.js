// for i in [0, (l+1)/2): if s[i] !== s[l - 1 - i] return false; return true;
function isPalindrome(s){
    // saas ->  < 2
    // sabas -> < 3
    // sabbas -> < 3
    // sabcbas -> < 4
    let length = s.length;
    for(let i = 0; i < (length + 1)/2; i++){
        if(s[i] != s[length - 1 - i]) return false;
    }
    return true;
}
// console.log(isPalindrome(`saas`));
// console.log(isPalindrome(`sabas`));
// console.log(isPalindrome(`sabcbas`));
// console.log(isPalindrome(`sabccas`));


function areAnagrams(s1, s2){
    if(s1.length !== s2.length) return false;
    // considering uppercase case
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();
    // frequency arrays
    let s1Repetitions = Array(26).fill(0);
    let s2Repetitions = Array(26).fill(0);
    for(let i in s1){
        s1Repetitions[s1.charCodeAt(i) - 97]++;
        s2Repetitions[s2.charCodeAt(i) - 97]++;
    }
    for(let i in s1Repetitions){
        if(s1Repetitions[i] !== s2Repetitions[i]) return false;
    }
    return true;
}
// console.log(areAnagrams('sIlEnt', 'LisTeN'));
// console.log(areAnagrams('sIlEnt', 'LisTe'));


let arr = [1,8,9,10,2,3,3,2,1,4,7,5,6,5,4,9,6]; // 1:10 repeated
// foreach: if(count > 0) removeByIndex & i-- & continue; count[e]++;
// tracking each index, built-in higher methods aren't usable here
function removeDuplicates(arr){
    const arrMax = arr.reduce((prev= arr[0], curr) => {
        return Math.max(prev, curr);
    });
    let frequency = new Array(arrMax+1).fill(0);
    // marking delete indices
    let deleteIndices = [];
    for (let i in arr){
        if(frequency[arr[i]]){
            deleteIndices.push(i);
            continue;
        }
        frequency[arr[i]]++;
    };
    // deleting
    deleteIndices.reverse();
    for (const i of deleteIndices){
        // delete function to be optimized
        arr.splice(i,1);
    }    
    return arr;
}

function doubleElements(arr){
    return arr.map(e => e * 2);
}

function filterElementsMoreThanEight(arr){
    return arr.filter(e => e > 8);
}

function getLastEvenElement(arr){
    return arr.findLast(e => e % 2 == 0);
}

// zero not included
function areAllElementsPositive(arr){
    return arr.every(e => e > 0);
}

console.log(`original:`, arr);
arr = removeDuplicates(arr);
console.log(`Duplicates removed:`, arr);
arr = doubleElements(arr);
console.log(`Elements doubled:`, arr);
arr = filterElementsMoreThanEight(arr);
arr.push(11);
arr.push(17);
arr.push(-3);
console.log(`Filtered to be > 8, added odd & negative elements:`, arr);
let lastEvenElement = getLastEvenElement(arr);
console.log(`Last even element: ${lastEvenElement}`);
let allElementsArePositive = areAllElementsPositive(arr);
console.log(`Positive array? ${allElementsArePositive}`);