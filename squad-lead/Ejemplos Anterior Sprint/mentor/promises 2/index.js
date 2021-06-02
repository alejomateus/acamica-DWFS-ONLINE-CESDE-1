// var numero = parseInt(prompt("Ingrese un numero"));
// if (isNaN(numero)) {
//     alert("Ingresa un numero valido");
// } else {
//     let promesa = new Promise((resolve, reject) => {
//         switch (numero) {
//             case 1:
//                 resolve('A')
//                 break;
//             case 2:
//                 resolve('B')
//                 break;
//             case 3:
//                 resolve('C')
//                 break;
//             case 4:
//                 resolve('D')
//                 break;
//             default:
//                 reject('Z');
//                 break;
//         }
//     });
//     console.log(promesa);
//     promesa.then(result => console.log(result)).catch(err => console.log(err));
// }
// const apiBaseUrl = 'https://pokeapi.co/api/v2/pokemon/';
// let container = document.getElementById('container');
// function getPokemonsInfo() {
//     const pokemonPromise = fetch(apiBaseUrl + parseInt(Math.floor(Math.random() * 500)))
//         .then((response) => {
//             return response.json();
//         }).then(data => {
//             return data;
//         })
//         .catch((error) => {
//             return error
//         })
//     return pokemonPromise
// }

// let pokemons = [];
// Promise.all([getPokemonsInfo(),
// getPokemonsInfo(),
// getPokemonsInfo()])
//     .then(results => {
//         console.log(results);
//         pokemons = results;
//         for (let i = 0; i < pokemons.length; i++) {
//             let element = document.createElement('div');
//             element.innerHTML = "<strong>" + pokemons[i].name +
//                 "</strong><br><img src='" +
//                 pokemons[i].sprites.front_default + "'>";
//             element.className = 'border';
//             container.appendChild(element);
//         }
//     })
//     .catch(error => console.log(error))
// let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// const apiBaseUrl = 'https://pokeapi.co/api/v2/pokemon/';

// function getPokemonsInfo(numberSelected) {
//     const pokemonPromise = fetch(apiBaseUrl + numberSelected)
//         .then((response) => {
//             return response.json();
//         }).then(data => {
//             return data;
//         })
//         .catch((error) => {
//             return error
//         })
//     return pokemonPromise
// }

// Promise.race([getPokemonsInfo(numeros[parseInt(Math.floor(Math.random() * numeros.length))]),
// getPokemonsInfo(numeros[parseInt(Math.floor(Math.random() * numeros.length))]),
// getPokemonsInfo(numeros[parseInt(Math.floor(Math.random() * numeros.length))])])
//     .then(results => {
//         console.log(results);
//         // pokemons = results;
//         // for (let i = 0; i < pokemons.length; i++) {
//         //     let element = document.createElement('div');
//         //     element.innerHTML = "<strong>" + pokemons[i].name +
//         //         "</strong><br><img src='" +
//         //         pokemons[i].sprites.front_default + "'>";
//         //     element.className = 'border';
//         //     container.appendChild(element);
//         // }
//     })
//     .catch(error => console.log(error))
// let numeros = [10, "sss", 30, 40, 50, 60, 70, 80, 90, 100];
// const apiBaseUrl = 'https://pokeapi.co/api/v2/pokemon/';

// function getPokemonsInfo(numberSelected) {
//     const pokemonPromise = fetch(apiBaseUrl + numberSelected)
//         .then((response) => {
//             return response.json();
//         }).then(data => {
//             return data;
//         })
//         .catch((error) => {
//             return error
//         })
//     return pokemonPromise
// }

// Promise.all([getPokemonsInfo(numeros[parseInt(Math.floor(Math.random() * numeros.length))]),
// getPokemonsInfo(numeros[parseInt(Math.floor(Math.random() * numeros.length))]),
// getPokemonsInfo(numeros[parseInt(Math.floor(Math.random() * numeros.length))])])
//     .then(results => {
//         console.log(results);
//         pokemons = results;
//         try {
//             for (let i = 0; i < pokemons.length; i++) {
//                 if (pokemons[i].name) {
//                     let element = document.createElement('div');
//                     element.innerHTML = "<strong>" + pokemons[i].name +
//                         "</strong><br><img src='" +
//                         pokemons[i].sprites.front_default + "'>";
//                     element.className = 'border';
//                     container.appendChild(element);
//                 } else {
//                 }
//             }
//         } catch (err) {
//             alert("El elemento no existe")

//         }

//     })
//     .catch(error => console.log(error))