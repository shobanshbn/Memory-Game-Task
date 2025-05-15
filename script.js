
const game = document.getElementById("game")

const symbols = ["😍","😍","🤣","🤣","😒","😒","😎","😎","😬","😬","🤬","🤬","😨","😨","🤑","🤑"];
const randomSymbols = symbols.sort(()=> (Math.random()> .5) ? 2 : -1);
for ( var i=0; i<symbols.length; i++){
    // const box = document.getElementById("item")
    const box = document.createElement("div")
    box.className = "item";
    box.innerHTML = randomSymbols[i]
    document.querySelector(".game").append(box);
}