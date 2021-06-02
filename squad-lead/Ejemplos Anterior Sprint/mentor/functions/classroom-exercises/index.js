// Exercise 1

// let radius = prompt("Ingrese el radio del circulo");
// let calculateDiameter = (radiusValue) => (radiusValue * 2);
// console.log(calculateDiameter(radius));

// Exercise 2

// let enteredNumber = prompt("Ingrese el numero");
// function isMayor10(number) {
//     let new_number = prompt("Ingrese el numero");
//     if (number > 10) {
//         isMayor100(new_number);
//     }
//     else {
//         isMayor1000(new_number);
//     }
// }

// function isMayor100(number) {
//     console.log(number);
//     if (number > 100) {
//         console.log("Mostrar A");
//     }
//     else {
//         console.log("Mostrar B");
//     }
// }

// function isMayor1000(number) {
//     if (number > 1000) {
//         console.log("Mostrar C");
//     }
//     else {
//         console.log("Mostrar D");
//     }
// }
// isMayor10(enteredNumber)
// console.log("Primer numero", enteredNumber);

// Exercise 3

class User {
    name;
    lastname;
    email;
    username;
    password;
    active = true;
}
let users = [];

function createUser() {
    let user = new User();
    user.name = prompt("Ingrese un nombre");
    user.lastname = prompt("Ingrese un apellido");
    user.email = prompt("Ingrese un email");
    user.username = prompt("Ingrese un nombre de usuario");
    user.password = prompt("Ingrese una contraseña");
    users.push(user);
}
function modifyUser(username) {
    let exists = false;
    users.forEach(user => {
        if (user.username == username) {
            user.name = prompt("Ingrese un nombre");
            user.lastname = prompt("Ingrese un apellido");
            user.email = prompt("Ingrese un email");
            user.username = prompt("Ingrese un nombre de usuario");
            user.password = prompt("Ingrese una contraseña");
            exists = true;
        }
    });
    if (exists == false) {
        alert("El usuario " + username + " no existe")
    }
}
let option = prompt("Ingrese 1 si desea crear o 2 para editar o cualquier otra letra para continuar");

do {
    switch (option) {
        case "1":
            createUser();
            break
        case "2":
            let username = prompt("Ingrese un nombre de usuario");
            modifyUser(username);
            break
    }
    option = prompt("Ingrese 1 si desea crear o 2 para editar o cualquier otra letra para continuar");
    if (option != "1" && option != "2") {
        console.log(users);
    }
} while (option == "1" || option == "2") 