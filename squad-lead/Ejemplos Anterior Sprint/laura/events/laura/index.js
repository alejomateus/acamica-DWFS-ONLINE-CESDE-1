let newItem = document.getElementById("headerMenu");
newItem.innerHTML += "<li>Item 5<li>"

let stronger = document.getElementById("strong");
stronger.style.fontWeight = "bold"

let interval = setInterval(intervalo, 5000);

function intervalo(){
    let image1 = document.getElementById("image1");
    image1.src = "https://www.40defiebre.com/wp-content/uploads/2015/10/imagenes.png";
}


let logoBorder = document.getElementById("logo");
logoBorder.addEventListener("mouseover", mouseover);
logoBorder.addEventListener("mouseout", mouseout)


function mouseover(){
    logoBorder.classList.add("logoRed")
}

function mouseout(){
    logoBorder.classList.remove("logoRed")
}

let titleChange = document.getElementById("mainTitle");
titleChange.addEventListener("click", changeTitle);
let buscarTitulo = localStorage.getItem("Title")
if (buscarTitulo != ""){
    titleChange.innerHTML = buscarTitulo
}

function changeTitle(){
    newTitle = prompt("Ingrese el nuevo titulo");
    titleChange.innerHTML = newTitle;
    localStorage.setItem("Title", newTitle);
}

let imageContainer = document.getElementById("imageContainer");
let verMas = document.getElementById("viewMore");
verMas.addEventListener("click", duplicar);
function duplicar(){
    let doble = imageContainer.cloneNode(true);
    imageContainer.innerHTML += doble.innerHTML;
    console.log(doble)
}

