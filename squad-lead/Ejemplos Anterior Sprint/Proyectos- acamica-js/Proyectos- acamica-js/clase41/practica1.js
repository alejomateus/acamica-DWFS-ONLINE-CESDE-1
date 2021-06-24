const fs = require('fs');

function writeFile(fileName,content) {
    fs.writeFile(fileName, content, (err) => {
        if (err) {
            throw err;
        }
        console.log("file is created");
    });
}

module.exports = {writeFile}