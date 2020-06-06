// 1- Reverse a String
// we dont have .reverse for a string but we have this function fro array
// commented method 1 is a simple long way for beginner to understand every step
//second way to bring all the method in return 
// third method is applying for loop, since we want to reverse, so we will apply decending for loop

reverseString = (str) => {
    //     let strArr = str.split("");
    //     let reverseStrArray = strArr.reverse();
    //     let reverseStr = reverseStrArray.join('');
    // return reverseStr

    // return str.split("").reverse().join("");

    let final = "";
    for (let i = str.length - 1; i >= 0; i--) {
        final += str[i]
    }
    return final;
}
console.log(reverseString("hello"));

// 2- Factorialize a number

factorialise = (num) => {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result = result * i;
    }
    return result;
}
console.log(factorialise(5));

//3 - check for Palindromes
palindrome = (str) => {
    let reversed = str.split('').reverse().join("");
    if (reversed === str) return true;

    return false;
}
console.log(palindrome('eye'));



//4 -longest word in the string

findLongestWord = (str) => {
    //1st solution
    // let words = str.split(" ");
    // let longest = "";

    // for (let word of words) {
    //     if ( word.length > longest.length) longest = word;
    // }
    //     return longest.length;

    //2nd solution

    return str.split(" ").sort(function (a, b) { return b.length - a.length });
}
console.log(findLongestWord("Today was a lovely day"));

//5 -titleCase a string

//1st solution
// titleCase = (str) => {
//     let words = str.toLowerCase().split(" ");
//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//     }
//     return words.join(" ");
// }
// console.log(titleCase("Today is sunday"));

//2nd solution

titleCase = (str) => {
    let titled = str.toLowerCase().split(" ").map(function (elem) {
        return elem[0].toUpperCase() + elem.slice(1);
    })
    return titled.join(" ");
}
console.log(titleCase("Today is sunday"));

//6 Largest Number

largestOfFour = (arr) => {
    let maxes = []
    for (let i = 0; i < arr.length; i++) {
        let tempMax = arr[i][0];

        for (let j = 0; j < arr[i].length; j++) {
            let currentElement = arr[i][j]
            if (currentElement >= tempMax) {
                tempMax = currentElement;
            }
        }

        maxes.push(tempMax)
    }
    return maxes;
}
console.log(largestOfFour([[4, 5, 6, 8], [13, 16, 18, 29], [32, 44, 54, 67], [2000, 200, 800, 600]]));

//7 Confirm Ending

confirmEnding = (str, target) => {
    // if(str.endsWith(target)){
    //     return true;
    // }
    // return false;
    if ( str.substr(-target.length) === target){
        return true;
    }
    return false;
}
console.log(confirmEnding("Hello", "0"))