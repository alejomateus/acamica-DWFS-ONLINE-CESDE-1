let nameInput = document.getElementById('name');
let buttonInput = document.getElementById('buttonName');


nameInput.addEventListener('input', function(event) {
    if (event.target.value !== '') {
        nameInput.style.backgroundColor = 'white';
    }
}); 
// event retorna propiedades que tiene el input donde añadimos el evento

buttonInput.addEventListener('click', function() {
    if (nameInput.value == '') {
        alert('Ingreso vacío, por favor coloque su nombre')
        nameInput.style.backgroundColor = 'red';
    } else {
        // console.log(event); // contenido del evento
        console.log(nameInput.value); 
        alert('Hola ' + nameInput.value);
    }
});  
