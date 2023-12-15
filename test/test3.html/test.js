// const firstname = "Baldan";
// const firstStr = firstname.slice(0, 1).toLocaleUpperCase();
// const LastCut = firstname.slice(1, length - 1);

// console.log(firstStr +LastCut); 6646

// ----------------------

// let person  = {
//   namee: "Taivnaa" ,
//   agee:25
// }

// --------------------
// const fruits = ["Banana", "Apple", "Pinecone", "Pineapple", "strawberry"];

// let fineIndex = (fruit) => {
//   for (let i = 0; i < fruits.length; i++) {
//     if (fruits[i] === fruit) {
//       console.log(i);
//     }
//   }
//   return 0;
// };
// fineIndex("Pinecone");

// ---------------------------

// const fruits = ["Banana", "Apple", "Pinecone", "Pineapple", "strawberry"];
// console.log(fruits.includes("Banana"));

// const fruits2 = ["Banana", "Apple", "Pinecone", "Pineapple", "strawberry"];
// console.log(fruits2.toString());

// const fruits3 = ["Banana", "Apple", "Pinecone", "Pineapple", "strawberry"];
// console.log(fruits3.indexOf());

// const fruits4 = ["Banana", "Apple", "Pinecone", "Pineapple", "strawberry"];
// console.log(fruits4.join(" and "));

//  ----------------------
// const fruits = ["Banana", "Apple", "Pinecone", "Pineapple", "strawberry"];

// let toString = () => {
//   let str = "";
//   for (let i = 0; i < fruits.length; i++) {
//     str += fruits[i];
//   }
//   return str;
// console.log(toString());// };

//  =-=-=-=-=-=-=-=-=-=-=-=-=

// const fruits = ["Banana", "Apple", "Pinecone", "Pineapple", "strawberry"];

// let join = () => {
//   let str = "";
//   let zai = " and ";
//   for (let i = 0; i < fruits.length - 1; i++) {
//     str += fruits[i] + zai;
//   }
//   str += fruits.slice[fruits.length - 1];
//   return str;
// };
// console.log(join());

// -----------------------=-==-=-=-=-=-==-=

// let arr = [1, 2, 3, 4];
// let num = 5;

// let t = arr + "," + num;
// console.log(t);

// =======-=-=-=-=-=-=-=-=-=-=-=

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// // for(let i = 0;) {

// // }

// // function eliminateLast(p) {
// //   t = p;
// //   return t;
// // }
// // console.log(eliminateLast(arr));

// function add() {
//   arr.length + 1;
// }
// console.log(typeof add());

// -=-=-=-=-8-8-8--88-==--=-=-=-=

const mockObject = {
  key1: "value1",
  key2: 42,
  key3: ["item1", "item2"],
  key4: { nestedKey: "nestedValue" },
  key5: true,
  key6: null,
};
let keys = Object.keys(mockObject);

function takeNextNumber(x) {
  for (let i = 0; i < x.length - 1; i++) {
    for (let j = i + 1; j < x.length - 1; j++) {
      x[i] = x[j];
    }
  }
  return x[i];
}
console.log(takeNextNumber(keys));
