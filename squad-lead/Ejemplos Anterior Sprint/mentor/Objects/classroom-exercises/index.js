class Pets {
    age;
    name;
    breed;
    state = "1";
}
let pets = [];
function createPet() {
    let pet = new Pets();
    pet.name = prompt("Ingrese un nombre");
    pet.age = prompt("Ingrese la edad");
    pet.breed = prompt("Ingrese la raza");
    pet.state = prompt("Ingrese el estado de un perro 1 en adopcion, 2 en proceso de adopcion, 3 adoptado");
    pets.push(pet);
}
let confirmAdd = true;

do {
    if (confirmAdd) {
        createPet();
    }
    confirmAdd = confirm("Desea agregar otro perro ?");

} while (confirmAdd == true)

let petstoAdopt = [];
let petsforAdoption = [];
let petsAdopted = [];
pets.forEach(pet => {
    switch (pet.state) {
        case '1':
            petstoAdopt.push(pet);
            break
        case '2':
            petsforAdoption.push(pet);
            break
        case '3':
            petsAdopted.push(pet);
            break
    }
});

console.log("Todas las mascotas", pets);
console.log("Mascotas para adoptar", petstoAdopt);
console.log("Mascotas en proceso de adopcion", petsforAdoption);
console.log("Mascotas adoptadas ", petsAdopted);
