// let promise = new Promise(function (resolve, reject) {
//     console.log("Promesa pendiente");
//     setTimeout(function () {
//         if (!true) {
//             resolve('La promesa se ejecuto');
//         } else {
//             reject('La promesa no se ejecuto');
//         }
//     }, 4000)

// });
// promise.then(function (result) {
//     console.log(result);
// }).catch(function (result) {
//     console.log(result);
// });
// let resource = fetch('https://api.github.com/users/alejomateus');
// // resource.json();
// resource.then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// })
function getUrl(url) {
    return fetch(url)
        .then((response) => response.json())
        .then((res) => {
            console.log(res);
            getFollowers(res);
        }).catch(err => {
            console.log('error', err);
        })
}

function getFollowers (res){
    if (res.message && res.message === "Not Found") {
        alert("Tu usuario no existe");
    } else {
        return fetch(res.followers_url)
            .then((response2) => response2.json())
            .then((followers) => {
                console.log(followers);
            }).catch(err2 => {
                console.log('error', err2);
            })
    }
}
getUrl('https://api.github.com/users/alejomateus');
// Usuario no existente
// getUrl('https://api.github.com/users/alejomateusz');