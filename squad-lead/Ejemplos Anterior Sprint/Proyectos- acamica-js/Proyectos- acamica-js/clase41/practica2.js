const fs = require('fs');

let content = fs.readFileSync('./newFile.txt','utf8');

fs.writeFileSync('newFile.txt',toUpperCase(content),(err)=>{
    if(err){
        throw err;
    }
    console.log("File is created");
});

function toUpperCase(text) {
    return text.toUpperCase();
}