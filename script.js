console.log("js ok")

// esercizio svolto utilizzando un elemento oggetto contenente i miei input
// sotto commentato l es con l array 
const containerlist = document.getElementById("containerlist")
let inputs = document.querySelectorAll(".text-lowercase")
console.log(inputs)
console.log(typeof inputs)
const olList = document.createElement("ol")

const buttonSubmit = document.querySelector(".btn")

buttonSubmit.addEventListener("click", function () {
    containerlist.innerHTML = "";
    containerlist.append(olList)
    let counter = 0;
    while (counter < inputs.length) {
        if (inputs[counter].value !== "") {
            let article = `<li>${inputs[counter].value} </li>`
            olList.innerHTML += article.toUpperCase();
        }
        counter++
    }
});

// esercizio con array stampato in console, in commento inline il metodo per stamparlo nell HTML
console.log("Esercizio con l uso dell array")
let ingredienti = ["pasta", "pane", "pomodori", "cioccolato"]
//const box = document.getElementById("esercizioarray")
let i = 0
while (i < ingredienti.length) {
    console.log(ingredienti[i]);
    //box.innerHTML += `<div> ${ingredienti[i]} </div>`
    i++;
};