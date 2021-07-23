
let url = "http://localhost:3000/";

const userLogged = localStorage.getItem("user");
const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'authorization': localStorage.getItem("token")
};
document.addEventListener("DOMContentLoaded", function (event) {
    if (!userLogged) {
        window.location.replace("index.html");
    } else {
        const parseUserLogger = JSON.parse(userLogged);
        if (parseUserLogger.role == "admin") {
            window.location.replace("dashboard.html");
        }
    }
});
const listarCuentas = async () => {
    let data = await fetch(url + "accounts/list", {
        method: 'GET',
        headers
    });
    let response = await data.json();
    if (response.code == 500 && response.message == "El usuario aun no esta logeado") {
        cerrarsesion();
    } else {
        if (response.code == 200) {
            accounts = response.data;
            let sourceAccount = document.getElementById("sourceAccount");
            sourceAccount.innerHTML = "";
            let destinationAccount = document.getElementById("destinationAccount");
            const parseUserLogger = JSON.parse(userLogged);
            destinationAccount.innerHTML = "";
            accounts.forEach(account => {
                let containerOption = document.createElement('option');
                if (account.userId == parseUserLogger.id) {
                    containerOption.innerHTML = account.userId + " - " + account.accountId + "($ " + account.amount + ")";
                    sourceAccount.appendChild(containerOption);
                } else {
                    containerOption.innerHTML = account.userId + " - " + account.accountId;
                    destinationAccount.appendChild(containerOption);
                }
            });
        }
    }
}

const transferirDinero = async () => {
    let accountDestination = document.getElementById("destinationAccount").value.split(" - ")[1];
    let amount = document.getElementById("amount").value;
    let data = await fetch(url + "accounts/transfer", {
        method: 'POST',
        headers,
        body: JSON.stringify({ amount, accountDestination: Number(accountDestination) })
    });
    let response = await data.json();
    let process = document.getElementById("process");
    if (response.code === 200) {
        process.style.color = "green";
        process.innerHTML = "Transferencia exitosa";
        amount.value = 0;
        listarCuentas();
    } else {
        process.style.color = "red";
        process.innerHTML = "Transferencia rechazada";
    }
}

const cerrarsesion = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.replace("index.html");
}
let accounts = [];

listarCuentas();

let logout = document.getElementById("logout");
logout.addEventListener("click", cerrarsesion);

let transfer = document.getElementById("transfer");
transfer.addEventListener("click", transferirDinero);