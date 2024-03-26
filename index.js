const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
 "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
 "~","`","!","@","#","$","%","^","&","*","(",")","_","-",
 "+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
// make an object array to make a option to choose what the user wants and make a new array to push it inside
const button = document.getElementById("btn")
const box1 = document.getElementById("firstBox")
const box2 = document.getElementById("secondBox")
let number = document.getElementById("numberInput")
const submitValue = document.getElementById("myForm")



button.addEventListener("click", function(){
    numCharacters()
})

function randomCharaters(array, count) {
    let characters2 = []
    for (let i = 0;i < count;i++) {
        let newarr = Math.floor(Math.random()*characters.length)
        characters2.push(array[newarr])
    } return characters2
}

submitValue.addEventListener("click", function(event) {
    event.preventDefault()
})

function numCharacters() {
    if (number === 8) {
        box1.innerHTML = `<p>${randomCharaters(characters, number.value)}</p>`
        box2.innerHTML = `<p>${randomCharaters(characters, number.value)}</p>`
    } 
    else if (number === 9) {
        box1.innerHTML = `<p>${randomCharaters(characters, number.value)}</p>`
        box2.innerHTML = `<p>${randomCharaters(characters, number.value)}</p>`
    }
    else if (number === 10) {
        box1.innerHTML = `<p>${randomCharaters(characters, number.value)}</p>`
        box2.innerHTML = `<p>${randomCharaters(characters, number.value)}</p>`
    }
    else if (number === 11) {
        box1.innerHTML = `<p>${randomCharaters(characters, number.value)}</p>`
        box2.innerHTML = `<p>${randomCharaters(characters, number.value)}</p>`
    }
    else if (number === 12) {
        box1.innerHTML = `<p>${randomCharaters(characters, number.value)}</p>`
        box2.innerHTML = `<p>${randomCharaters(characters, number.value)}</p>`
    }
    else if (number === 13) {
        box1.innerHTML = `<p>${randomCharaters(characters, number.value)}</p>`
        box2.innerHTML = `<p>${randomCharaters(characters, number.value)}</p>`
    }
    else if (number === 14) {
        box1.innerHTML = `<p>${randomCharaters(characters, number.value)}</p>`
        box2.innerHTML = `<p>${randomCharaters(characters, number.value)}</p>`
    }
    else {
        box1.innerHTML = `<p>${randomCharaters(characters, number.value)}</p>`
        box2.innerHTML = `<p>${randomCharaters(characters, number.value)}</p>`
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

