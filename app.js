// Reverse a String
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


