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

// const mockObject = {
//   key1: "value1",
//   key2: 42,
//   key3: ["item1", "item2"],
//   key4: { nestedKey: "nestedValue" },
//   key5: true,
//   key6: null,
// };
// let keys = Object.keys(mockObject);

// function takeNextNumber(x) {
//   for (let i = 0; i < x.length - 1; i++) {
//     for (let j = i + 1; j < x.length - 1; j++) {
//       x[i] = x[j];
//     }
//   }
//   return x[i];
// }
// console.log(takeNextNumber(keys));

// const Mybutton = document.getElementById("button");
// const bgChanger = () => {
//   Mybutton.style.backgroundColor = "Red";
// };
// Mybutton.addEventListener("mouseenter", bgChanger);

// =-=-=-=-=-=-=-==--==--==-=-=-=-=-=-=-

// const inputOne = document.getElementsByTagName("input")[0];
// const inputTwo = document.getElementsByTagName("input")[1];
// const buttons = document.getElementsByTagName("button");

// //bodlgo hariu shalgah function
// let check = () => {
//   //hariultig input-s avj baina
//   const answer = document.getElementsByTagName("input")[2];
//   //hariult taarj bnu shalgah
//   if (
//     Number(inputOne.value) + Number(inputTwo.value) ===
//     Number(answer.value)
//   ) {
//     //zuv baival asuultig shinechled hariultin input-g tseverlene
//     alert("Zuv baina");
//     renew();
//     answer.value = "";
//   } else {
//     alert("buruu hariult");
//   }
// };
// // asuult shinechleh function
// const renew = () => {
//   const min = 100;
//   const max = 999;
//   //2 input deer buhel too ugnu
//   inputOne.value = Math.floor(Math.random() * (max - min) + min);
//   inputTwo.value = Math.floor(Math.random() * (max - min) + min);
// };
// //Web ehelhed renew function shuud ajillna
// renew();

// //2 tovch deer eventlistener ajilluuna
// buttons[0].addEventListener("click", check);
// buttons[1].addEventListener("click", renew);

// -=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=

// const array = [1, 2, 3, 4, 5, 6, 7];

// const multiArray = (arr) => {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// };
// console.log(multiArray);

// 9=09=0-=9-0=-90=9-09=0-=9-0

// const array = [1, 2, 3, 4, 5, 7, "Anarrrrrrr"];
// const result = array.filter((word) => word % 2 === 1);
// console.log(result);

// const boxArray = ["Adiya", "Dulmaa", "Bat", "Dondog", "Zulaa", "Nomin"];
// for (let i = 0; i < boxArray.length; i++) {
//   x += boxArray[i];
// }

// console.log(
//   a.map((el) => {
//     let sum = 0;
//     sum += el;
//     return sum;
//   })
// );
let a = [1, 2, 6, 4];
let sum = 0;
for (let i = 0; i < a.length; i++) {
  sum += a[i];
  console.log(sum);
}
