const listLibFiles = require('./list-lib-files.js');

const gitignore = ``;

var fs = require('fs');

listLibFiles((files) => {
    let file = gitignore + "\n" + files.map(file => `/${file}`).join("\n");
    fs.writeFile(".gitignore", file, (err) => {
        if(err) {
            return console.log(err); /* eslint-disable-line */
        }
        console.log("Gitignore updated."); /* eslint-disable-line */
    });
});
