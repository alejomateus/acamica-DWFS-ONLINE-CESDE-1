let url = "http://localhost:3000/";
document.addEventListener("DOMContentLoaded", function (event) {
    let userLogged = localStorage.getItem("user");
    if (userLogged) {
        window.location.replace("home.html");
    }
});
const registrarse = async () => {
    let id = document.getElementById("identification").value;
    let name = document.getElementById("name").value;
    let lastname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let password = document.getElementById("password").value;
    let data = await fetch(url + "signup", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id, name, lastname, email, phoneNumber, password })
    });
    let response = await data.json();
    let process = document.getElementById("process");
    if (response.code === 200) {
        process.style.color = "green";
        process.innerHTML = "El usuario se registro correctamente, te dirigiremos al formulario de inicio de sesión";
        setTimeout(() => {
            window.location = "home.html"
        }, 1000);
    } else {
        process.style.color = "red";
        process.innerHTML = "No se pudo completar tu registro";
    }
}

let signup = document.getElementById("signup");
signup.addEventListener("click", registrarse);