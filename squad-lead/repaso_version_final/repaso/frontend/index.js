let url = "http://localhost:3000/";
document.addEventListener("DOMContentLoaded", function (event) {
    let userLogged = localStorage.getItem("user");
    if (userLogged) {
        window.location.replace("home.html");
    }
});
const iniciarsesion = async () => {
    let process = document.getElementById("process");
    process.style.display = "none";
    let id = document.getElementById("identification").value;
    let password = document.getElementById("password").value;
    let data = await fetch(url + "login", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id, password })
    });
    let response = await data.json();
    process.style.display = "initial";
    if (response.code === 200) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        process.style.color = "green";
        process.innerHTML = "Autenticacion correcta";
        setTimeout(() => {
            console.log(response.data.user);
            if (response.data.user.role == "admin") {
                window.location = "dashboard.html"
            } else {
                window.location = "home.html"
            }
        }, 1000);
    } else {
        process.style.color = "red";
        process.innerHTML = "Usuario y o contraseña incorrectos";
    }
}

let login = document.getElementById("login");
login.addEventListener("click", iniciarsesion);