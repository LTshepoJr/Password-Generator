const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = [ "~","`","!","@","#","$","%","^","&","*","(",")","_","-",
"+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

let selectedOption1 = document.getElementById("numberCheck");
let selectedOption2 = document.getElementById("symbolsCheck");

selectedOption1.addEventListener("change", checkboxChanged);
selectedOption2.addEventListener("change", checkboxChanged);


function checkboxChanged() {
    if (selectedOption1.checked && selectedOption2.checked) {
        for (let i = 0;i < numbers.length;i++) {
            characters.push(numbers[i])
        }

        for (let i = 0;i < symbols.length;i++) {
            characters.push(symbols[i])
        }
    } else if (selectedOption1.checked) {
        for (let i = 0;i < numbers.length;i++) {
            characters.push(numbers[i])
        }
    } else if (selectedOption2.checked) {
        for (let i = 0;i < symbols.length;i++) {
            characters.push(symbols[i])
        }
    } else {
        document.getElementById("result").innerHTML = `<p>Please select at least one option.</p>`;
    }
}


const button = document.getElementById("btn")
const box1 = document.getElementById("firstBox")
const box2 = document.getElementById("secondBox")
let number = document.getElementById("numberInput")
const submitValue = document.getElementById("myForm")



button.addEventListener("click", function(){
    if (selectedOption1.checked || selectedOption2.checked) {
        checkboxChanged()
        numCharacters()
    }
})

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function randomCharaters() {
    let randomPassword = ""
    for (let i = 0; i < number.value; i++) {
        randomPassword += getRandomCharacter()         
    }
    return randomPassword
}

submitValue.addEventListener("click", function(event) {
    event.preventDefault()
})

function numCharacters() {
    if (number === 8) {
        box1.innerHTML = `<p>${randomCharaters()}</p>`
        box2.innerHTML = `<p>${randomCharaters()}</p>`
    } 
    else if (number === 9) {
        box1.innerHTML = `<p>${randomCharaters()}</p>`
        box2.innerHTML = `<p>${randomCharaters()}</p>`
    }
    else if (number === 10) {
        box1.innerHTML = `<p>${randomCharaters()}</p>`
        box2.innerHTML = `<p>${randomCharaters()}</p>`
    }
    else if (number === 11) {
        box1.innerHTML = `<p>${randomCharaters()}</p>`
        box2.innerHTML = `<p>${randomCharaters()}</p>`
    }
    else if (number === 12) {
        box1.innerHTML = `<p>${randomCharaters()}</p>`
        box2.innerHTML = `<p>${randomCharaters()}</p>`
    }
    else if (number === 13) {
        box1.innerHTML = `<p>${randomCharaters()}</p>`
        box2.innerHTML = `<p>${randomCharaters()}</p>`
    }
    else if (number === 14) {
        box1.innerHTML = `<p>${randomCharaters()}</p>`
        box2.innerHTML = `<p>${randomCharaters()}</p>`
    }
    else {
        box1.innerHTML = `<p>${randomCharaters()}</p>`
        box2.innerHTML = `<p>${randomCharaters()}</p>`
    }
}

box1.addEventListener("click", function() {
    let textCopy = this.textContent
    let tempTextArea = document.createElement("textarea")
    tempTextArea.value = textCopy
    document.body.appendChild(tempTextArea)
    tempTextArea.select()
    document.execCommand("copy")
    document.body.removeChild(tempTextArea)
    alert("Text copied to clipboard: " + textCopy)
})
box2.addEventListener("click", function() {
    let textCopy = this.textContent
    let tempTextArea = document.createElement("textarea")
    tempTextArea.value = textCopy
    document.body.appendChild(tempTextArea)
    tempTextArea.select()
    document.execCommand("copy")
    document.body.removeChild(tempTextArea)
    alert("Text copied to clipboard: " + textCopy)
})

var refreshButton = document.getElementById("refreshButton");

refreshButton.addEventListener("click", function() {
    location.reload();
});
