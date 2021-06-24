async function getUserFromGithub(username) {
    let user = await fetch('https://api.github.com/users/' + username);
    const datos = await user.json();
    return datos;
}

datos = getUserFromGithub('David-Viuche');

datos.then((resolve)=>{
    console.log(resolve);
})
