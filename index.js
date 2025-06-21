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
let characterCombine = [];

const numbersCheck = document.getElementById("numbersCheck");
const symbolsCheck = document.getElementById("symbolsCheck");
const generateButton = document.getElementById("generateButton");
const randomPassword1 = document.getElementById("randomPassword1");
const randomPassword2 = document.getElementById("randomPassword2");
const characterValue = document.getElementById("numberInput");

numbersCheck.addEventListener("change", checkboxChanged);
symbolsCheck.addEventListener("change", checkboxChanged);

function checkboxChanged() {
  if (numbersCheck.checked && symbolsCheck.checked) {
    document.getElementById("result").textContent = ``;
    characterCombine = [...characters, ...symbols, ...numbers];
    console.log(characterCombine);
  } else if (numbersCheck.checked) {
    document.getElementById("result").textContent = ``;
    characterCombine = [...characters, ...numbers];
    console.log(characterCombine);
  } else if (symbolsCheck.checked) {
    document.getElementById("result").textContent = ``;
    characterCombine = [...characters, ...symbols];
    console.log(characterCombine);
  } else {
    document.getElementById("result").textContent = `
      Please select at least one option.
    `;
  }
}

function getRandomCharacter() {
  const randomChar = Math.floor(Math.random() * characterCombine.length);
  return characterCombine[randomChar];
}

function randomCharacters() {
  let randomPassword = "";
  for (let i = 0; i < characterValue.value; i++) {
    randomPassword += getRandomCharacter();
  }
  return randomPassword;
}

function numCharacters() {
  const inputValue = parseInt(characterValue.value);

  if (inputValue >= 8 && inputValue <= 15) {
    randomPassword1.textContent = `${randomCharacters()}`;
    randomPassword2.textContent = `${randomCharacters()}`;
  } else {
    randomPassword1.textContent = `＞﹏＜`;
    randomPassword2.textContent = `＞﹏＜`;
    alert("Please enter a number between 8 and 15");
  }
}

generateButton.addEventListener("click", () => {
  if (numbersCheck.checked || symbolsCheck.checked) {
    checkboxChanged();
    numCharacters();
  }
});

randomPassword1.addEventListener("click", async function () {
  // 1. Get text to copy (using regular function to preserve 'this')
  const textCopy = this.textContent.trim();

  // 2. Create temporary textarea
  const tempTextArea = document.createElement("textarea");
  tempTextArea.value = textCopy;
  tempTextArea.style.position = "fixed"; // Prevent page scroll
  tempTextArea.style.opacity = "0"; // Make invisible
  document.body.appendChild(tempTextArea);

  try {
    // 3. Modern Clipboard API first
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(textCopy);
    }
    // 4. Legacy fallback
    else {
      tempTextArea.select();
      document.execCommand("copy");
    }

    // 5. Visual feedback
    const originalText = this.textContent;
    this.textContent = "✓ Copied!";
    this.style.color = "#4CAF50"; // Green success color

    // 6. Auto-reset after 1.5 seconds
    setTimeout(() => {
      this.textContent = originalText;
      this.style.color = "";
    }, 1500);
  } catch (err) {
    console.error("Copy failed:", err);
    this.textContent = "Click again!";
    this.style.color = "#f44336"; // Red error color
  } finally {
    // 7. Cleanup
    document.body.removeChild(tempTextArea);
  }
});

randomPassword2.addEventListener("click", async function () {
  // 1. Get the text to copy (using function() instead of arrow function to preserve 'this')
  const textCopy = this.textContent.trim(); // Added trim() to remove whitespace

  // 2. Create temporary textarea
  const tempTextArea = document.createElement("textarea");
  tempTextArea.value = textCopy;
  tempTextArea.style.position = "fixed"; // Prevent scrolling to bottom
  document.body.appendChild(tempTextArea);

  // 3. Select and copy
  tempTextArea.select();

  try {
    // 4. Modern clipboard API first (more reliable)
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(textCopy);
    } else {
      // Fallback for older browsers
      document.execCommand("copy");
    }

    // 5. Visual feedback (better than alert)
    const originalText = this.textContent;
    this.textContent = "Copied! ✓";
    this.style.color = "#4CAF50"; // Green color feedback

    // 6. Reset after 2 seconds
    setTimeout(() => {
      this.textContent = originalText;
      this.style.color = "";
    }, 2000);
  } catch (err) {
    console.error("Copy failed:", err);
    this.textContent = "Click again to copy";
    this.style.color = "#f44336"; // Red color for error
  } finally {
    // 7. Always clean up
    document.body.removeChild(tempTextArea);
  }
});
