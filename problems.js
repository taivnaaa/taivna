// let arr = ["Hello", 1, 2, 8, 3, -1, -2, -3, "Baaa", true];
// let newArr = 0;

// let newNumber = 0;

// arr.map((el) => {
//   if (typeof el === "number") {
//     newArr += el;
//   }
// });
// console.log(newArr);

let arr = ["Hello", 1, 2, 8, 3, -1, -2, -3, "Baaa", true];
let odd = [];
let even = [];

 let result = arr.filter((el) => {
  if (typeof el === "number" && el % 2 && el>=0) {
    odd +=el+ ", ";
    return odd
  } else if (typeof el === "number" && el>=0) {
    even+=el+ ", ";
    return even
  }
});
console.log("odd:"+odd, "even: "+even);
console.log(result);
