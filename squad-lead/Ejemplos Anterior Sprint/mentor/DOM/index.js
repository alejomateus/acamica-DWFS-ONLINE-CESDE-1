// let arrayContainers = ["1","2","6"];
// // for (let i =0;i<arrayContainers.length;i++) {
//     let idSelector = document.getElementById("1");
//     // let classSelector = document.getElementsByClassName("background_red");
//     // let querySelector = document.querySelector(".background_red");
//     // let tagSelector = document.getElementsByTagName("div");
//     // console.log(idSelector);
//     // console.log(classSelector);
//     // console.log(querySelector);
//     // console.log(tagSelector);
//     // console.log(idSelector.innerHTML);
//     // idSelector.innerHTML= "<div><strong>Acamica</strong></div>";
//     // idSelector.classList.remove("background_yellow");
//     // idSelector.classList.add("background_blue");
//     idSelector.className = "background_blue";
//     console.log(idSelector.firstElementChild);
//     console.log(idSelector.lastElementChild);
// // }
let data ={};
data.name = prompt("Ingresa tu nombre completo");

data.background = prompt("Ingresa el background");
data.fontColor = prompt("Ingresa el color de la fuente");
data.fontSize = prompt("Ingresa el tamaño de la fuente");
console.log(data);
let squeareElement = document.getElementById("square_container");
squeareElement.className = "square_container";
squeareElement.innerHTML = "<span>"+data.name+" </span>";
squeareElement.style.backgroundColor = data.background;
squeareElement.style.color = data.fontColor;
squeareElement.style.fontSize = data.fontSize+"px";