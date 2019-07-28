var fs = require('fs');

module.exports = () => new Promise((callback) => fs.readdir('src', (err, files) => {
    callback(files.filter(file => file.endsWith(".js")));
}));
