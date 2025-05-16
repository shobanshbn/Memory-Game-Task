
const game = document.getElementById("game")
const alert = document.getElementById("alert")

const symbols = ["😍","😍","🤣","🤣","😒","😒","😎","😎","😬","😬","🤬","🤬","😨","😨","🤑","🤑"];
const randomSymbols = symbols.sort(()=> (Math.random()> .5) ? 2 : -1);
for ( var i=0; i<symbols.length; i++){
    
    const box = document.createElement("div")
    box.className = "item";
    box.innerHTML = randomSymbols[i]

    box.onclick = function(){
       box.classList.add("boxOpen")
       setTimeout(function(){
        if(document.querySelectorAll(".boxOpen").length > 1){
            if(document.querySelectorAll(".boxOpen")[0].innerHTML == 
                document.querySelectorAll(".boxOpen")[1].innerHTML){
                    document.querySelectorAll(".boxOpen")[0].classList.add("boxMatch")
                    document.querySelectorAll(".boxOpen")[1].classList.add("boxMatch")

                    document.querySelectorAll(".boxOpen")[1].classList.remove("boxOpen")
                    document.querySelectorAll(".boxOpen")[0].classList.remove("boxOpen")

                    if(document.querySelectorAll(".boxMatch").length == symbols.length){
                        // alert("You Won the Game🎉🎊")
                        
                        alert.innerHTML = "🎊..You Won The Game..🎊"
                        
                    }
                    }else{
                        document.querySelectorAll(".boxOpen")[1].classList.remove("boxOpen")
                        document.querySelectorAll(".boxOpen")[0].classList.remove("boxOpen")
                    }
                }
           },500)
    }

    document.querySelector(".game").append(box);
        
    };
