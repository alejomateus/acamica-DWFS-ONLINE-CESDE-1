let headerMenu = document.getElementById("headerMenu");
let new_li = document.createElement("li");
new_li.innerHTML = "item 5"
headerMenu.appendChild(new_li);
let word = document.getElementById("strong");
word.style.fontWeight= "bold";
let interval = setInterval(intervalo, 1000);
let images =["./images/mountains-100367_640.jpg",
"./images/owl-50267_640.jpg",
"./images/poppies-174276_640.jpg",
"./images/sky-690293_640.jpg"]
function intervalo(){
    let image1 = document.getElementById("image1");
    image1.src = images[parseInt(Math.floor(Math.random() * 4))];
}
