const listLibFiles = require('./list-lib-files.js');
var fs = require('fs');

listLibFiles(files => {
    return files.forEach(name => {
        let contents = `module.exports = require('./lib/${name}').default;`;
        fs.writeFileSync(name, contents);
    });
});
