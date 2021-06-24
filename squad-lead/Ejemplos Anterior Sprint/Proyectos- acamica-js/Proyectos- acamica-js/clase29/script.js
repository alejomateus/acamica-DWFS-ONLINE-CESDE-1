/*async function getUserFromGithub(userName) {

    let url = 'http://api.github.com/user/'+userName;

    const resp = await fetch(url);

    const datos = await resp.json();



    return datos;
}

datos = getUserFromGithub('David-Viuche');

datos.then((resolve)=>{
    console.log(resolve);
})*/

/*
function getUrl(url) {
    return fetch(url)
    .then((response) => response.json())
    .then((res) => {
        console.log(res);
    }).catch(err => {
        console.log('error');
    })
}

getUrl('https://jsonplaceholder.typicode.com/users');*/


/*
async function getURL(url) {
    let users = await fetch(url);
    let userJson = await users.json();

    userJson.forEach(element => {
        console.log(element.username);
    });
}

getURL('https://jsonplaceholder.typicode.com/users');*/

var found = [];
var notFound = [];

var usernames = ['ccordoba12', 'Skillhh', 'David-Viuche', 'pedromdd', 'josepep'];

async function getUsername(username) {

    let user = await fetch('https://api.github.com/users/' + username);

    let userJson = await user.json();

    (userJson.message === 'Not Found') ? notFound.push(username): found.push(username);

}

usernames.forEach(element => getUsername(element));

console.log(found);
console.log(notFound);