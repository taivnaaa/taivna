// let value = window.prompt("End toon utga oruulna uu!");
// let currency = window.prompt("End temdegt oruulna uu!");
// let currencyTo = window.prompt("Ymar temdegt ruu shiljuuleh ve? ");

// if (currency === "USD" && currencyTo == "MNT") {
//   console.log(usd_mnt);
// }else if ()
let currencyFrom = window.prompt(
  "Ta temdegtee songonuu? \n1. USD\n2. MNT\n3. CNY\n4. RUB"
);

switch (currencyFrom) {
  case "1":
    currencyFrom = 3500;
    break;
  case "2":
    currencyFrom = 1;
    break;
  case "3":
    currencyFrom = 480;
    break;
  case "4":
    currencyFrom = 38;
    break;
  default:
    console.log("Ta oruulsan songoltoo dahin shalgaad bichne uu!");
}
let value = window.prompt("End too temdegtee orullna uu?");
let currencyTo = window.prompt(
  "Ta yamar temdegt roo hutvuuleh ve? \n1. USD\n2. MNT\n3. CNY\n4. RUB "
);

switch (currencyTo) {
  case "1":
    currencyTo = 3500;
    break;
  case "2":
    currencyTo = 1;
    break;
  case "3":
    currencyTo = 480;
    break;
  case "4":
    currencyTo = 38;
    break;
  default:
    console.log("Ta oruulsan songoltoo dahin shalgaad bichne uu!");
}

window.prompt((currencyFrom * value) / currencyTo);
