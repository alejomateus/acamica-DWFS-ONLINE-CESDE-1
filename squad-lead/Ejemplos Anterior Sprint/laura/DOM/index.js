// let newItem = document.getElementById("headerMenu");
// newItem.innerHTML += "<li>Item 5<li>"

// let stronger = document.getElementById("strong");
// stronger.style.fontWeight = "bold"

// let interval = setInterval(intervalo, 5000);

// function intervalo(){
//     let image1 = document.getElementById("image1");
//     image1.src = "https://www.40defiebre.com/wp-content/uploads/2015/10/imagenes.png";
// }


// let changePosition = document.getElementById("imageRight");
// changePosition.style.order = 0


// Con el click en el título pide al usuario que ingrese un texto a través de prompt.
// Reemplaza el título existente por el que ingresó el usuario.
// Almacena el título ingresado en el local storage
// Muestra siempre el último título ingresado (reinicia el navegador para probar)  

let logo= document.getElementById("logo");
logo.addEventListener ( "mouseover", mouseover )
logo.addEventListener ( "mouseout", mouseout )

function mouseover(){
    logo.style.borderColor= "red "
    

}

function mouseout (){
    logo.style.borderColor= "black "

}


