import "./style.css";

window.onload = () => {
  document.querySelector(".numbers").innerHTML = generateRandomNumber();
  document.querySelector(".top-suit").innerHTML = generateRandomNumberSuit();
  document.querySelector(".bottom-suit").innerHTML = generateRandomNumberSuit();
};

let generateRandomNumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};
let generateRandomNumberSuit = () => {
  let suit = ["diamond", "spade", "heart", "club"];
  let indexSuit = Math.floor(Math.random() * suit.length);
  return suit[indexSuit];
};

//     let suit = ["diamond", "spade", "heart", "club"];

//     let indexNumbers =Math.floor(Math.random()*numbers.length);
//     let indexSuit =Math.floor(Math.random()*suit.length);
//     return numbers[indexNumbers];
// }

//     let numbers = ["A", "2", "3", "4", "5","6"; "7"; "8","9","10","J","Q","K"];

//     let indexNumbers =Math.floor(Math.random()*numbers.length);

//     return numbers[indexNumbers];
// }
