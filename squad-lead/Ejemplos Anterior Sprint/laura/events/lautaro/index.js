let text = document.getElementById("space");
let challenge = document.getElementById("button");
let list = document.getElementById("lista");

//en enter
text.addEventListener("keydown", function(event){
    if(event.keyCode == 13){
        console.log(event);
        let li = document.createElement("li"); //crea el elemento li
        li.innerHTML = text.value; //agrega el texto al elemento
        list.appendChild(li)
    }
})

//boton submit
challenge.addEventListener("click", function(){
    // list.innerHTML += "<li>"+text.value+"</li>"
    let li = document.createElement("li"); //crea el elemento li
    li.innerHTML = text.value; //agrega el texto al elemento
    list.appendChild(li)
    }
)