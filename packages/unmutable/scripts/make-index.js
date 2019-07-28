const listLibFiles = require('./list-lib-files.js');

var fs = require('fs');

listLibFiles().then((files) => {
    let file = files
        .map(file => {
            let name = file.replace('.js', '');
            return `export {default as ${name}} from './src/${name}';`;
        })
        .join("\n");

    fs.writeFile("index.js", file, (err) => {
        if(err) {
            return console.log(err); /* eslint-disable-line */
        }
        console.log("index.js updated."); /* eslint-disable-line */
    });
});
