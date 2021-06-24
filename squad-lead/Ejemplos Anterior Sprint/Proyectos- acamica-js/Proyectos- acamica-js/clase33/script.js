var array = [];

function login() {

    let us = document.getElementById('username');
    let ps = document.getElementById('pass');

    if (us.value != "" && ps.value != "") {

        if(localStorage.getItem('datos')){
            array= localStorage.getItem('datos');
        }
        

        let btn = document.getElementById('login');
        btn.style.display = 'none';

        localStorage.setItem("user", us.value);
        localStorage.setItem("pass", ps.value);
        let cont = document.getElementById('container');
        cont.innerHTML = `
        <form style = "display:flex;flex-direction:column;">
            <input type="button" value="salir" onclick="logout()">
            <label for="name">Nombre</label>
            <input type="text" name="name" id="name">
            <label for="lastname">Apellido</label>
            <input type="text" name="lastname" id="lastname">
            <label for="dni">DNI</label>
            <input type="text" name="dni" id="dni">
            <label for="fecha">Fecha de Nacimiento</label>
            <input type="text" name="fecha" id="fecha">
            <label for="hobbies">Hobbies Favoritos</label>
            <input type="text" name="hobbies" id="hobbies">
            <input type="button" value="guardar" onclick="guardar()">
        </form>
    `;
    }
}

function logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('pass');
    let btn = document.getElementById('login');
    btn.style.display = 'inline';
    let cont = document.getElementById('container');
    cont.innerHTML = "";
    location.reload();
}

function guardar() {
    let name = document.getElementById('name').value;
    let lastname = document.getElementById('lastname').value;
    let dni = document.getElementById('dni').value;
    let fecha = document.getElementById('fecha').value;
    let hobbies = document.getElementById('hobbies').value;

    console.log(name);
    if (name != '', lastname != '', dni != '', fecha != '', hobbies != '') {

        let datos = {
            nombre: name,
            apellido: lastname,
            Dni: dni,
            nacimiento: fecha,
            Hobbies: hobbies
        }

        datosJson = JSON.stringify(datos);
        console.log(array);
        array.push(datosJson);
        localStorage.setItem("datos",array);
    }

    let cont = document.getElementById('container');
    cont.innerHTML = "";
    location.reload();
}