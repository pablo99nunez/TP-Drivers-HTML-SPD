const queEs = document.getElementById("queEs");
const infoQueEs = document.getElementById("infoQueEs")
const imagen = document.getElementById("printer2")

const cards = document.getElementsByClassName("card");
const infos = document.getElementsByClassName("card-info");
const closeButton = document.getElementsByClassName("close");

for(let i=0;i<cards.length;i++){
    cards[i].addEventListener("click",(e)=>{
        infos[i].classList.remove("disable");
        closeButton[i].addEventListener("click",()=>{
            infos[i].classList.add("disable");
        })
    })
}