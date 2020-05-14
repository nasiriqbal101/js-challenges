// Reverse a String
// we dont have .reverse for a string but we have this function fro array
// commented method 1 is a simple long way for beginner to understand every step
//second way to bring all the method in return 

reverseString = (str) => {
//     let strArr = str.split("");
//     let reverseStrArray = strArr.reverse();
//     let reverseStr = reverseStrArray.join('');
// return reverseStr

return str.split("").reverse().join("");
}
console.log(reverseString("hello"));


