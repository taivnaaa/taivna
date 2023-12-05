// let value = window.prompt("End toon utga oruulna uu!");
// let currency = window.prompt("End temdegt oruulna uu!");
// let currencyTo = window.prompt("Ymar temdegt ruu shiljuuleh ve? ");

// if (currency === "USD" && currencyTo == "MNT") {
//   console.log(usd_mnt);
// }else if ()
// alert("Wending machine🤖👾👻");
// let baraa = window.prompt(
//   "Ta avah zuilee songonuu? \n1. Cola - 1999\n2. Sprite - 1900\n3. Alpen gold - 3999\n4. Suu - 4900\n5. Talh - 2500\n6. Zairmag - 3000\n7 Bohi - 1500\n8. Arhi - 15000"
// );

// switch (baraa) {
//   case "1":
//     baraa = 1999;
//     break;
//   case "2":
//     baraa = 1900;
//   case "3":
//     break;
//     baraa = 3999;
//     break;
//   case "4":
//     baraa = 4900;
//     break;
//   case "5":
//     baraa = 2500;
//     break;
//   case "6":
//     baraa = 3000;
//     break;
//   case "7":
//     baraa = 1500;
//     break;
//   case "8":
//     baraa = 15000;
//     break;
//   default:
//     alert("Ta oruulsan songoltoo dahin shalgaad bichne uu!");
//     break;
// }
// let tulbur = window.prompt(
//   "Ta yamar dungeer tulburuu hiih ve?\n(Uuur dungeer tulbur hiih bolomjgui😭🤧\n1. 5000\n2. 10000\n3. 20000 "
// );

// switch (tulbur) {
//   case "1":
//     tulbur = 5000;
//     break;
//   case "2":
//     tulbur = 10000;
//     break;
//   case "3":
//     tulbur = 20000;
//     break;
//   default:
//     console.log("Ta oruulsan songoltoo shalgaad dahin bichne uu!");
// }

// let Hariult = tulbur - baraa;

// if (Hariult < 0) {
//   console.log("tanii mongon dun hureltsehgui bn ");
// } else {
//   console.log(Hariult);
// }
// const name = window.prompt("Ovog oruul");
// const second = window.prompt("Neree ug");

// function presentName(first, last) {
//   console.log(first, last);
// }
// presentName(name, second);

let too = window.prompt("Ehnii orong oruulna uu");
let temdegt = window.prompt("Ta temdegtee songon uu\n1. *\n2. /\n3. -\n4.+");
let Ltoo = window.prompt("Suulin orong oruulna uu");

function calculator(a, b, c) {
  if (temdegt == "1") {
    return a * c;
  }
  if (temdegt === "2") {
    return a / c;
  }
  if (temdegt === "3") {
    return a - c;
  }
  if (temdegt === "4") {
    return a + c;
  }
}
console.log(calculator(too, temdegt, Ltoo));
