const listLibFiles = require('./list-lib-files.js');
var fs = require('fs');

listLibFiles(files => {
    packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    packageJson.files = ["lib"].concat(files);
    fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
});
