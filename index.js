const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

const selectedOption1 = document.getElementById("numbersCheck");
const selectedOption2 = document.getElementById("symbolsCheck");
const refreshButton = document.getElementById("refreshButton");
const generateButton = document.getElementById("generateButton");
const randomPassword1 = document.getElementById("randomPassword1");
const randomPassword2 = document.getElementById("randomPassword2");
const number = document.getElementById("numberInput");

selectedOption1.addEventListener("change", checkboxChanged);
selectedOption2.addEventListener("change", checkboxChanged);

function checkboxChanged() {
  if (selectedOption1.checked && selectedOption2.checked) {
    document.getElementById("result").textContent = ``;
    for (let i = 0; i < numbers.length; i++) {
      characters.push(numbers[i]);
    }
    for (let i = 0; i < symbols.length; i++) {
      characters.push(symbols[i]);
    }
  } else if (selectedOption1.checked) {
    document.getElementById("result").textContent = ``;
    for (let i = 0; i < numbers.length; i++) {
      characters.push(numbers[i]);
    }
  } else if (selectedOption2.checked) {
    document.getElementById("result").textContent = ``;
    for (let i = 0; i < symbols.length; i++) {
      characters.push(symbols[i]);
    }
  } else {
    document.getElementById("result").textContent = `
      Please select at least one option.
    `;
  }
}

function getRandomCharacter() {
  let randomChar = Math.floor(Math.random() * characters.length);
  return characters[randomChar];
}

function randomCharacters() {
  let randomPassword = "";
  for (let i = 0; i < number.value; i++) {
    randomPassword += getRandomCharacter();
  }
  return randomPassword;
}

function numCharacters() {
  const input = number;
  const inputValue = parseInt(input.value);

  if (inputValue === 8) {
    randomPassword1.textContent = `${randomCharacters()}`;
    randomPassword2.textContent = `${randomCharacters()}`;
  } else if (inputValue === 9) {
    randomPassword1.textContent = `${randomCharacters()}`;
    randomPassword2.textContent = `${randomCharacters()}`;
  } else if (inputValue === 10) {
    randomPassword1.textContent = `${randomCharacters()}`;
    randomPassword2.textContent = `${randomCharacters()}`;
  } else if (inputValue === 11) {
    randomPassword1.textContent = `${randomCharacters()}`;
    randomPassword2.textContent = `${randomCharacters()}`;
  } else if (inputValue === 12) {
    randomPassword1.textContent = `${randomCharacters()}`;
    randomPassword2.textContent = `${randomCharacters()}`;
  } else if (inputValue === 13) {
    randomPassword1.textContent = `${randomCharacters()}`;
    randomPassword2.textContent = `${randomCharacters()}`;
  } else if (inputValue === 14) {
    randomPassword1.textContent = `${randomCharacters()}`;
    randomPassword2.textContent = `${randomCharacters()}`;
  } else if (inputValue === 15) {
    randomPassword1.textContent = `${randomCharacters()}`;
    randomPassword2.textContent = `${randomCharacters()}`;
  } else {
    randomPassword1.textContent = `＞﹏＜`;
    randomPassword2.textContent = `＞﹏＜`;
    alert("Please enter a number between 8 and 15");
  }
}

generateButton.addEventListener("click", () => {
  if (selectedOption1.checked || selectedOption2.checked) {
    checkboxChanged();
    numCharacters();
  }
});

randomPassword1.addEventListener("click", () => {
  let textCopy = this.textContent;
  let tempTextArea = document.createElement("textarea");
  tempTextArea.value = textCopy;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  document.execCommand("copy");
  document.body.removeChild(tempTextArea);
  alert("Text copied to clipboard: " + textCopy);
});

randomPassword2.addEventListener("click", () => {
  let textCopy = this.textContent;
  let tempTextArea = document.createElement("textarea");
  tempTextArea.value = textCopy;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  document.execCommand("copy");
  document.body.removeChild(tempTextArea);
  alert("Text copied to clipboard: " + textCopy);
});

refreshButton.addEventListener("click", () => {
  location.reload();
});
